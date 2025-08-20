# Cloudflare DNS Configuration Fix for generative-engine.org

## Issue Summary
Website showing **Error 530 - Origin DNS error** due to incorrect DNS targets.

## Required DNS Records

### 1. Root Domain (generative-engine.org)
- **Type**: CNAME
- **Name**: `@` (or `generative-engine.org`)
- **Target**: `endothelial-tickseed-ghfs1ljkfattred4hzt4my28.herokudns.com`
- **Proxy Status**: 🔴 DNS Only (not proxied)
- **TTL**: Auto

### 2. WWW Subdomain (www.generative-engine.org)
- **Type**: CNAME
- **Name**: `www`
- **Target**: `polar-reindeer-y0g7jlud4jpcv07h7675juuy.herokudns.com`
- **Proxy Status**: 🔴 DNS Only (not proxied)
- **TTL**: Auto

## Critical Requirements
1. **Disable Cloudflare Proxy** (set to DNS Only) - This is essential for Heroku routing
2. **Use CNAME records** - Not A records
3. **Exact target names** - Must match Heroku DNS targets precisely

## Manual Steps (Since MCP tools are having display issues)

### Option 1: Cloudflare Dashboard
1. Login to Cloudflare dashboard
2. Select the `generative-engine.org` zone
3. Go to DNS > Records
4. Find/edit the root domain record:
   - Change target to `endothelial-tickseed-ghfs1ljkfattred4hzt4my28.herokudns.com`
   - Set to DNS Only (disable proxy)
5. Find/edit the www record:
   - Change target to `polar-reindeer-y0g7jlud4jpcv07h7675juuy.herokudns.com`
   - Set to DNS Only (disable proxy)

### Option 2: Cloudflare API (if available)
```bash
# Get zone ID first
curl -X GET "https://api.cloudflare.com/client/v4/zones?name=generative-engine.org" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json"

# Update root domain
curl -X PUT "https://api.cloudflare.com/client/v4/zones/ZONE_ID/dns_records/RECORD_ID" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  --data '{
    "type": "CNAME",
    "name": "generative-engine.org",
    "content": "endothelial-tickseed-ghfs1ljkfattred4hzt4my28.herokudns.com",
    "proxied": false
  }'

# Update www subdomain
curl -X PUT "https://api.cloudflare.com/client/v4/zones/ZONE_ID/dns_records/WWW_RECORD_ID" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  --data '{
    "type": "CNAME",
    "name": "www",
    "content": "polar-reindeer-y0g7jlud4jpcv07h7675juuy.herokudns.com",
    "proxied": false
  }'
```

## Verification Steps
1. **DNS Propagation**: Wait 5-10 minutes for changes to propagate
2. **Test Resolution**: 
   ```bash
   nslookup generative-engine.org
   nslookup www.generative-engine.org
   ```
3. **HTTP Test**: 
   ```bash
   curl -I https://generative-engine.org
   curl -I https://www.generative-engine.org
   ```
4. **Browser Test**: Open both URLs and verify they load without Error 530

## Common Issues to Avoid
- ❌ Using A records instead of CNAME
- ❌ Enabling Cloudflare proxy (orange cloud) - must be DNS Only
- ❌ Incorrect Heroku DNS targets
- ❌ Missing www subdomain configuration

## Success Indicators
- ✅ Website loads without Error 530
- ✅ Both root and www domains work
- ✅ SSL certificate is active
- ✅ Heroku app serves content correctly

## Emergency Rollback
If issues occur, temporarily point both records back to:
- Root: `geo-engine-optimization-3b7f09edc005.herokuapp.com`
- WWW: `geo-engine-optimization-3b7f09edc005.herokuapp.com`

## Notes
- The MCP Cloudflare tools appear to have serialization issues preventing proper output display
- Manual configuration via Cloudflare dashboard is recommended
- Ensure both DNS records are set to "DNS Only" (not proxied) for proper Heroku routing