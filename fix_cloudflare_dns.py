#!/usr/bin/env python3
"""
Fix Cloudflare DNS for generative-engine.org
This script updates the DNS records to point to the correct Heroku targets.
"""

import os
import sys
import json
import requests
from typing import Dict, Optional

# DNS Configuration
DNS_CONFIG = {
    'root': {
        'type': 'CNAME',
        'name': 'generative-engine.org',
        'content': 'endothelial-tickseed-ghfs1ljkfattred4hzt4my28.herokudns.com',
        'proxied': False,
        'ttl': 1  # Auto
    },
    'www': {
        'type': 'CNAME',
        'name': 'www',
        'content': 'polar-reindeer-y0g7jlud4jpcv07h7675juuy.herokudns.com',
        'proxied': False,
        'ttl': 1  # Auto
    }
}

class CloudflareAPI:
    def __init__(self, api_token: str = None):
        self.api_token = api_token or os.environ.get('CF_API_TOKEN')
        if not self.api_token:
            print("❌ No Cloudflare API token found!")
            print("\nTo fix the DNS, you need to provide a Cloudflare API token.")
            print("\nOption 1: Set environment variable")
            print("  export CF_API_TOKEN='your-token-here'")
            print("  python3 fix_cloudflare_dns.py")
            print("\nOption 2: Create an API token at:")
            print("  https://dash.cloudflare.com/profile/api-tokens")
            print("  Permissions needed: Zone:DNS:Edit")
            sys.exit(1)
        
        self.headers = {
            'Authorization': f'Bearer {self.api_token}',
            'Content-Type': 'application/json'
        }
        self.base_url = 'https://api.cloudflare.com/client/v4'
    
    def get_zone_id(self, domain: str) -> Optional[str]:
        """Get the zone ID for a domain"""
        url = f"{self.base_url}/zones?name={domain}"
        response = requests.get(url, headers=self.headers)
        
        if response.status_code == 200:
            data = response.json()
            if data['success'] and data['result']:
                return data['result'][0]['id']
        return None
    
    def list_dns_records(self, zone_id: str) -> list:
        """List all DNS records for a zone"""
        url = f"{self.base_url}/zones/{zone_id}/dns_records"
        response = requests.get(url, headers=self.headers)
        
        if response.status_code == 200:
            data = response.json()
            if data['success']:
                return data['result']
        return []
    
    def update_dns_record(self, zone_id: str, record_id: str, record_data: Dict) -> bool:
        """Update an existing DNS record"""
        url = f"{self.base_url}/zones/{zone_id}/dns_records/{record_id}"
        response = requests.put(url, headers=self.headers, json=record_data)
        return response.status_code == 200 and response.json().get('success', False)
    
    def create_dns_record(self, zone_id: str, record_data: Dict) -> bool:
        """Create a new DNS record"""
        url = f"{self.base_url}/zones/{zone_id}/dns_records"
        response = requests.post(url, headers=self.headers, json=record_data)
        return response.status_code == 200 and response.json().get('success', False)
    
    def delete_dns_record(self, zone_id: str, record_id: str) -> bool:
        """Delete a DNS record"""
        url = f"{self.base_url}/zones/{zone_id}/dns_records/{record_id}"
        response = requests.delete(url, headers=self.headers)
        return response.status_code == 200 and response.json().get('success', False)

def main():
    print("🚀 Cloudflare DNS Fix for generative-engine.org")
    print("=" * 50)
    
    # Initialize API
    api = CloudflareAPI()
    
    # Get zone ID
    print("\n🔍 Finding zone ID...")
    zone_id = api.get_zone_id('generative-engine.org')
    
    if not zone_id:
        print("❌ Could not find zone for generative-engine.org")
        print("   Make sure the domain is in your Cloudflare account")
        sys.exit(1)
    
    print(f"✅ Found zone ID: {zone_id}")
    
    # Get existing records
    print("\n📋 Fetching existing DNS records...")
    records = api.list_dns_records(zone_id)
    
    # Process root domain
    print("\n🔧 Processing root domain (generative-engine.org)...")
    root_records = [r for r in records if r['name'] == 'generative-engine.org' and r['type'] in ['A', 'CNAME']]
    
    if root_records:
        # Delete A records if they exist (we need CNAME)
        for record in root_records:
            if record['type'] == 'A':
                print(f"  🗑️  Deleting A record: {record['content']}")
                api.delete_dns_record(zone_id, record['id'])
            elif record['type'] == 'CNAME':
                if record['content'] != DNS_CONFIG['root']['content'] or record['proxied'] != False:
                    print(f"  🔄 Updating CNAME record...")
                    api.update_dns_record(zone_id, record['id'], DNS_CONFIG['root'])
                    print(f"  ✅ Updated: {DNS_CONFIG['root']['content']} (DNS Only)")
                else:
                    print(f"  ✅ Already correct: {record['content']} (DNS Only)")
    else:
        print(f"  ➕ Creating CNAME record...")
        api.create_dns_record(zone_id, DNS_CONFIG['root'])
        print(f"  ✅ Created: {DNS_CONFIG['root']['content']} (DNS Only)")
    
    # Process www subdomain
    print("\n🔧 Processing www subdomain...")
    www_records = [r for r in records if r['name'] == 'www.generative-engine.org' and r['type'] in ['A', 'CNAME']]
    
    if www_records:
        for record in www_records:
            if record['type'] == 'A':
                print(f"  🗑️  Deleting A record: {record['content']}")
                api.delete_dns_record(zone_id, record['id'])
            elif record['type'] == 'CNAME':
                if record['content'] != DNS_CONFIG['www']['content'] or record['proxied'] != False:
                    print(f"  🔄 Updating CNAME record...")
                    api.update_dns_record(zone_id, record['id'], DNS_CONFIG['www'])
                    print(f"  ✅ Updated: {DNS_CONFIG['www']['content']} (DNS Only)")
                else:
                    print(f"  ✅ Already correct: {record['content']} (DNS Only)")
    else:
        print(f"  ➕ Creating CNAME record...")
        api.create_dns_record(zone_id, DNS_CONFIG['www'])
        print(f"  ✅ Created: {DNS_CONFIG['www']['content']} (DNS Only)")
    
    print("\n" + "=" * 50)
    print("🎉 DNS configuration complete!")
    print("\n📝 Summary:")
    print("  ✅ Root domain → Heroku DNS (not proxied)")
    print("  ✅ WWW subdomain → Heroku DNS (not proxied)")
    print("\n⏱️  Please wait 5-10 minutes for DNS propagation")
    print("\n🔍 Test with:")
    print("  curl -I https://generative-engine.org")
    print("  curl -I https://www.generative-engine.org")

if __name__ == "__main__":
    main()