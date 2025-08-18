#!/bin/bash

# Cloudflare DNS Configuration Script for generative-engine.org
# You need to provide your Cloudflare credentials

# REQUIRED: Fill in these values
CLOUDFLARE_EMAIL="your-email@example.com"
CLOUDFLARE_API_KEY="your-api-key-here"
ZONE_ID="your-zone-id-here"

# DNS Records to create
ROOT_DOMAIN_TARGET="endothelial-tickseed-ghfs1ljkfattred4hzt4my28.herokudns.com"
WWW_DOMAIN_TARGET="clean-dingo-msxx0hxz0p0e9ocb5cl6q0k5.herokudns.com"

echo "🔧 Configuring Cloudflare DNS for generative-engine.org..."

# Function to make Cloudflare API calls
cf_api() {
    curl -s -X "$1" "https://api.cloudflare.com/client/v4/zones/$ZONE_ID/$2" \
        -H "X-Auth-Email: $CLOUDFLARE_EMAIL" \
        -H "X-Auth-Key: $CLOUDFLARE_API_KEY" \
        -H "Content-Type: application/json" \
        ${3:+-d "$3"}
}

# Step 1: List existing DNS records
echo "📋 Fetching existing DNS records..."
EXISTING_RECORDS=$(cf_api GET "dns_records?type=A,AAAA,CNAME&name=generative-engine.org,www.generative-engine.org")

# Step 2: Delete conflicting records
echo "🗑️  Removing conflicting DNS records..."
echo "$EXISTING_RECORDS" | jq -r '.result[] | select(.name == "generative-engine.org" or .name == "www.generative-engine.org") | .id' | while read -r record_id; do
    if [ ! -z "$record_id" ]; then
        echo "   Deleting record: $record_id"
        cf_api DELETE "dns_records/$record_id"
    fi
done

# Step 3: Create root domain CNAME
echo "➕ Adding root domain CNAME record..."
cf_api POST "dns_records" '{
    "type": "CNAME",
    "name": "@",
    "content": "'$ROOT_DOMAIN_TARGET'",
    "ttl": 1,
    "proxied": true
}'

# Step 4: Create www subdomain CNAME
echo "➕ Adding www subdomain CNAME record..."
cf_api POST "dns_records" '{
    "type": "CNAME",
    "name": "www",
    "content": "'$WWW_DOMAIN_TARGET'",
    "ttl": 1,
    "proxied": true
}'

# Step 5: Configure SSL/TLS settings
echo "🔒 Configuring SSL/TLS settings..."
curl -s -X PATCH "https://api.cloudflare.com/client/v4/zones/$ZONE_ID/settings/ssl" \
    -H "X-Auth-Email: $CLOUDFLARE_EMAIL" \
    -H "X-Auth-Key: $CLOUDFLARE_API_KEY" \
    -H "Content-Type: application/json" \
    -d '{"value":"full"}'

# Step 6: Enable Always Use HTTPS
echo "🔐 Enabling Always Use HTTPS..."
curl -s -X PATCH "https://api.cloudflare.com/client/v4/zones/$ZONE_ID/settings/always_use_https" \
    -H "X-Auth-Email: $CLOUDFLARE_EMAIL" \
    -H "X-Auth-Key: $CLOUDFLARE_API_KEY" \
    -H "Content-Type: application/json" \
    -d '{"value":"on"}'

echo "✅ Cloudflare DNS configuration complete!"
echo ""
echo "🌐 Your site should be accessible at:"
echo "   https://generative-engine.org"
echo "   https://www.generative-engine.org"
echo ""
echo "⏱️  DNS propagation may take 5-15 minutes."