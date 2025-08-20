#!/usr/bin/env node

// This script will attempt to fix the Cloudflare DNS using the MCP tools
// Since the MCP tools are returning [object Object], we'll try different approaches

const https = require('https');

// Cloudflare API credentials (you'll need to provide these)
const CF_EMAIL = process.env.CF_EMAIL || '';
const CF_API_KEY = process.env.CF_API_KEY || '';
const CF_API_TOKEN = process.env.CF_API_TOKEN || '';

// DNS records we need to set
const DNS_RECORDS = {
  root: {
    type: 'CNAME',
    name: 'generative-engine.org',
    content: 'endothelial-tickseed-ghfs1ljkfattred4hzt4my28.herokudns.com',
    proxied: false
  },
  www: {
    type: 'CNAME', 
    name: 'www',
    content: 'polar-reindeer-y0g7jlud4jpcv07h7675juuy.herokudns.com',
    proxied: false
  }
};

async function makeAPICall(path, method = 'GET', data = null) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.cloudflare.com',
      port: 443,
      path: `/client/v4${path}`,
      method: method,
      headers: {
        'Content-Type': 'application/json'
      }
    };

    // Use token if available, otherwise use email/key
    if (CF_API_TOKEN) {
      options.headers['Authorization'] = `Bearer ${CF_API_TOKEN}`;
    } else if (CF_EMAIL && CF_API_KEY) {
      options.headers['X-Auth-Email'] = CF_EMAIL;
      options.headers['X-Auth-Key'] = CF_API_KEY;
    } else {
      reject(new Error('No Cloudflare API credentials found'));
      return;
    }

    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', (chunk) => body += chunk);
      res.on('end', () => {
        try {
          const response = JSON.parse(body);
          if (response.success) {
            resolve(response.result);
          } else {
            reject(new Error(JSON.stringify(response.errors)));
          }
        } catch (e) {
          reject(e);
        }
      });
    });

    req.on('error', reject);
    
    if (data) {
      req.write(JSON.stringify(data));
    }
    
    req.end();
  });
}

async function fixDNS() {
  try {
    console.log('🔍 Finding zone ID for generative-engine.org...');
    
    // Get zone ID
    const zones = await makeAPICall('/zones?name=generative-engine.org');
    if (!zones || zones.length === 0) {
      throw new Error('Zone not found');
    }
    
    const zoneId = zones[0].id;
    console.log(`✅ Found zone ID: ${zoneId}`);
    
    // Get existing DNS records
    console.log('\n📋 Getting existing DNS records...');
    const records = await makeAPICall(`/zones/${zoneId}/dns_records`);
    
    // Find and update root domain record
    const rootRecord = records.find(r => 
      r.name === 'generative-engine.org' && 
      (r.type === 'CNAME' || r.type === 'A')
    );
    
    if (rootRecord) {
      console.log(`\n🔄 Updating root domain record (ID: ${rootRecord.id})...`);
      await makeAPICall(
        `/zones/${zoneId}/dns_records/${rootRecord.id}`,
        'PUT',
        DNS_RECORDS.root
      );
      console.log('✅ Root domain updated');
    } else {
      console.log('\n➕ Creating root domain record...');
      await makeAPICall(
        `/zones/${zoneId}/dns_records`,
        'POST',
        DNS_RECORDS.root
      );
      console.log('✅ Root domain created');
    }
    
    // Find and update www record
    const wwwRecord = records.find(r => 
      r.name === 'www.generative-engine.org' && 
      (r.type === 'CNAME' || r.type === 'A')
    );
    
    if (wwwRecord) {
      console.log(`\n🔄 Updating www subdomain record (ID: ${wwwRecord.id})...`);
      await makeAPICall(
        `/zones/${zoneId}/dns_records/${wwwRecord.id}`,
        'PUT',
        DNS_RECORDS.www
      );
      console.log('✅ WWW subdomain updated');
    } else {
      console.log('\n➕ Creating www subdomain record...');
      await makeAPICall(
        `/zones/${zoneId}/dns_records`,
        'POST',
        DNS_RECORDS.www
      );
      console.log('✅ WWW subdomain created');
    }
    
    console.log('\n🎉 DNS configuration complete!');
    console.log('⏱️  Please wait 5-10 minutes for DNS propagation.');
    console.log('\n📝 Summary:');
    console.log('  - Root domain → Heroku DNS (not proxied)');
    console.log('  - WWW subdomain → Heroku DNS (not proxied)');
    
  } catch (error) {
    console.error('\n❌ Error:', error.message);
    console.log('\n💡 To fix this manually:');
    console.log('1. Set CF_API_TOKEN environment variable with your Cloudflare API token');
    console.log('2. Run this script again: node fix-cloudflare-dns.js');
    console.log('\nOr use the Cloudflare dashboard to update DNS records manually.');
  }
}

// Check if we have credentials
if (!CF_API_TOKEN && (!CF_EMAIL || !CF_API_KEY)) {
  console.log('⚠️  No Cloudflare API credentials found in environment variables.');
  console.log('\nPlease set one of the following:');
  console.log('  - CF_API_TOKEN (recommended)');
  console.log('  - CF_EMAIL and CF_API_KEY');
  console.log('\nExample:');
  console.log('  export CF_API_TOKEN="your-api-token"');
  console.log('  node fix-cloudflare-dns.js');
  process.exit(1);
}

fixDNS();