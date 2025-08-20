#!/bin/bash

# Cloudflare DNS Fix Script for generative-engine.org
# This script uses curl to update DNS records via Cloudflare API

echo "🚀 Cloudflare DNS Fix for generative-engine.org"
echo "================================================"

# Check for API token
if [ -z "$CF_API_TOKEN" ]; then
    echo "❌ Error: CF_API_TOKEN environment variable not set"
    echo ""
    echo "To fix this:"
    echo "1. Go to https://dash.cloudflare.com/profile/api-tokens"
    echo "2. Create a token with Zone:DNS:Edit permissions"
    echo "3. Run: export CF_API_TOKEN='your-token-here'"
    echo "4. Run this script again: bash fix-dns.sh"
    exit 1
fi

API_TOKEN="$CF_API_TOKEN"
BASE_URL="https://api.cloudflare.com/client/v4"

# Function to make API calls
api_call() {
    local method="$1"
    local endpoint="$2"
    local data="$3"
    
    if [ -z "$data" ]; then
        curl -s -X "$method" \
            "$BASE_URL$endpoint" \
            -H "Authorization: Bearer $API_TOKEN" \
            -H "Content-Type: application/json"
    else
        curl -s -X "$method" \
            "$BASE_URL$endpoint" \
            -H "Authorization: Bearer $API_TOKEN" \
            -H "Content-Type: application/json" \
            -d "$data"
    fi
}

echo "🔍 Finding zone ID for generative-engine.org..."

# Get zone ID
ZONE_RESPONSE=$(api_call GET "/zones?name=generative-engine.org")
ZONE_ID=$(echo "$ZONE_RESPONSE" | grep -o '"id":"[^"]*"' | head -1 | cut -d'"' -f4)

if [ -z "$ZONE_ID" ]; then
    echo "❌ Could not find zone ID"
    echo "Response: $ZONE_RESPONSE"
    exit 1
fi

echo "✅ Found zone ID: $ZONE_ID"

echo ""
echo "📋 Fetching existing DNS records..."

# Get DNS records
RECORDS=$(api_call GET "/zones/$ZONE_ID/dns_records")

echo ""
echo "🔧 Processing root domain (generative-engine.org)..."

# Find root domain record
ROOT_RECORD_ID=$(echo "$RECORDS" | grep -o '"name":"generative-engine.org"[^}]*"id":"[^"]*"' | grep -o '"id":"[^"]*"' | cut -d'"' -f4)

ROOT_DATA='{
  "type": "CNAME",
  "name": "generative-engine.org",
  "content": "endothelial-tickseed-ghfs1ljkfattred4hzt4my28.herokudns.com",
  "proxied": false,
  "ttl": 1
}'

if [ -n "$ROOT_RECORD_ID" ]; then
    echo "  🔄 Updating existing root record (ID: $ROOT_RECORD_ID)..."
    RESULT=$(api_call PUT "/zones/$ZONE_ID/dns_records/$ROOT_RECORD_ID" "$ROOT_DATA")
    if echo "$RESULT" | grep -q '"success":true'; then
        echo "  ✅ Root domain updated successfully"
    else
        echo "  ❌ Failed to update root domain"
        echo "  Response: $RESULT"
    fi
else
    echo "  ➕ Creating new root record..."
    RESULT=$(api_call POST "/zones/$ZONE_ID/dns_records" "$ROOT_DATA")
    if echo "$RESULT" | grep -q '"success":true'; then
        echo "  ✅ Root domain created successfully"
    else
        echo "  ❌ Failed to create root domain"
        echo "  Response: $RESULT"
    fi
fi

echo ""
echo "🔧 Processing www subdomain..."

# Find www record  
WWW_RECORD_ID=$(echo "$RECORDS" | grep -o '"name":"www.generative-engine.org"[^}]*"id":"[^"]*"' | grep -o '"id":"[^"]*"' | cut -d'"' -f4)

WWW_DATA='{
  "type": "CNAME",
  "name": "www",
  "content": "polar-reindeer-y0g7jlud4jpcv07h7675juuy.herokudns.com",
  "proxied": false,
  "ttl": 1
}'

if [ -n "$WWW_RECORD_ID" ]; then
    echo "  🔄 Updating existing www record (ID: $WWW_RECORD_ID)..."
    RESULT=$(api_call PUT "/zones/$ZONE_ID/dns_records/$WWW_RECORD_ID" "$WWW_DATA")
    if echo "$RESULT" | grep -q '"success":true'; then
        echo "  ✅ WWW subdomain updated successfully"
    else
        echo "  ❌ Failed to update www subdomain"
        echo "  Response: $RESULT"
    fi
else
    echo "  ➕ Creating new www record..."
    RESULT=$(api_call POST "/zones/$ZONE_ID/dns_records" "$WWW_DATA")
    if echo "$RESULT" | grep -q '"success":true'; then
        echo "  ✅ WWW subdomain created successfully"
    else
        echo "  ❌ Failed to create www subdomain"
        echo "  Response: $RESULT"
    fi
fi

echo ""
echo "================================================"
echo "🎉 DNS configuration complete!"
echo ""
echo "📝 Summary:"
echo "  ✅ Root domain → Heroku DNS (not proxied)"
echo "  ✅ WWW subdomain → Heroku DNS (not proxied)"
echo ""
echo "⏱️  Please wait 5-10 minutes for DNS propagation"
echo ""
echo "🔍 Test with:"
echo "  curl -I https://generative-engine.org"
echo "  curl -I https://www.generative-engine.org"