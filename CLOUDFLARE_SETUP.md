# Cloudflare DNS Configuration for generative-engine.org

## Quick Setup Instructions

### Option 1: Using the Script (Recommended)

1. **Get your Cloudflare credentials:**
   - Log in to [Cloudflare Dashboard](https://dash.cloudflare.com)
   - Go to your profile → API Tokens
   - Create a new API token with "Edit zone DNS" permissions for generative-engine.org
   - Or use your Global API Key (found in API Keys section)

2. **Edit the script with your credentials:**
   ```bash
   # Open the script
   nano cloudflare-setup.sh
   
   # Replace these values at the top of the file:
   CLOUDFLARE_EMAIL="your-email@example.com"
   CLOUDFLARE_API_KEY="your-api-key-here"
   ZONE_ID="your-zone-id-here"
   ```
   
   To find your Zone ID:
   - Go to Cloudflare Dashboard
   - Select generative-engine.org
   - Zone ID is in the right sidebar under "API"

3. **Run the script:**
   ```bash
   ./cloudflare-setup.sh
   ```

### Option 2: Manual Configuration in Cloudflare Dashboard

1. **Log in to Cloudflare Dashboard**
   - Go to https://dash.cloudflare.com
   - Select the generative-engine.org domain

2. **Delete existing DNS records (if any):**
   - Go to DNS → Records
   - Delete any A, AAAA, or CNAME records for:
     - `generative-engine.org` (root)
     - `www.generative-engine.org`

3. **Add new CNAME records:**

   **Root Domain:**
   - Type: CNAME
   - Name: @ (or generative-engine.org)
   - Target: `endothelial-tickseed-ghfs1ljkfattred4hzt4my28.herokudns.com`
   - Proxy status: Proxied (orange cloud ON)
   - TTL: Auto

   **WWW Subdomain:**
   - Type: CNAME
   - Name: www
   - Target: `clean-dingo-msxx0hxz0p0e9ocb5cl6q0k5.herokudns.com`
   - Proxy status: Proxied (orange cloud ON)
   - TTL: Auto

4. **Configure SSL/TLS settings:**
   - Go to SSL/TLS → Overview
   - Set encryption mode to "Full"

5. **Enable Always Use HTTPS:**
   - Go to SSL/TLS → Edge Certificates
   - Turn ON "Always Use HTTPS"

### Verification

After configuration, your site should be accessible at:
- https://generative-engine.org
- https://www.generative-engine.org

**Note:** DNS propagation typically takes 5-15 minutes but can take up to 48 hours in rare cases.

### Troubleshooting

If the site doesn't load after 15 minutes:

1. **Check DNS propagation:**
   ```bash
   # Check if DNS is resolving
   nslookup generative-engine.org
   dig generative-engine.org
   ```

2. **Verify Heroku is ready:**
   ```bash
   heroku domains -a geo-site-3e08df96a4f2
   ```
   Should show both domains configured.

3. **Check Cloudflare proxy status:**
   - Orange cloud = Proxied (recommended)
   - Gray cloud = DNS only (try this if proxied doesn't work)

4. **SSL/TLS issues:**
   - Try changing SSL mode to "Flexible" temporarily
   - Wait for Cloudflare to issue certificates (can take up to 24 hours)

### Current Heroku DNS Targets

These are your specific Heroku DNS targets (already configured on Heroku side):
- Root: `endothelial-tickseed-ghfs1ljkfattred4hzt4my28.herokudns.com`
- WWW: `clean-dingo-msxx0hxz0p0e9ocb5cl6q0k5.herokudns.com`

### Support

If you encounter issues:
1. Check Heroku logs: `heroku logs --tail -a geo-site-3e08df96a4f2`
2. Verify domain configuration: `heroku domains -a geo-site-3e08df96a4f2`
3. Check Cloudflare Analytics for any blocking rules