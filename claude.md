⚠️ CRITICAL WARNING: DO NOT MODIFY STYLES ⚠️
**NEVER TOUCH OR MODIFY**:
- `/app/globals.css` - The global styles are carefully crafted and balanced
- Any Tailwind classes in components unless explicitly asked
- CSS modules or style files without explicit permission
- Component layouts or visual hierarchy
- The website styling has been perfected - DO NOT CHANGE IT

## 🚨 CRITICAL: Next.js Standalone Deployment on Heroku

### The Problem That Broke Production (Aug 18, 2025)
When deploying Next.js with `output: 'standalone'` mode to Heroku, the CSS completely broke. The website displayed with NO styling at all.

### Root Cause
Next.js standalone mode DOES NOT automatically copy static files (CSS, JS, fonts) to the standalone output directory. The `.next/standalone` folder only contains the server files, NOT the static assets.

### The Solution
Modified `package.json` build script to manually copy static files:
```json
"build": "next build && cp -r .next/static .next/standalone/.next/ && cp -r public .next/standalone/",
"start": "node .next/standalone/server.js"
```

### Key Learnings
1. **Standalone mode is incomplete**: It doesn't include static files by default
2. **Manual copying required**: Must copy `.next/static` and `public` folders to standalone output
3. **Start script must use standalone server**: Use `node .next/standalone/server.js` not `next start`
4. **Always verify CSS is served**: Check that CSS files return actual CSS content, not HTML 404 pages

### How to Verify CSS is Working
```bash
# Check if CSS file is being served correctly (should return CSS, not HTML)
curl -s https://www.generative-engine.org/_next/static/css/[hash].css | head -c 100
```

### Never Make These Mistakes Again
- ❌ Don't assume standalone mode copies everything
- ❌ Don't use `next start` with standalone builds
- ❌ Don't deploy without verifying static assets are included
- ✅ Always copy static files in build script
- ✅ Always test CSS loading in production after deployment

## 📝 Blog System Architecture & n8n Integration

### How Blog Posts Work
1. **n8n pushes blog posts** directly to Heroku as JSON files in `/public/blog-data/`
2. **Next.js reads these files** at build time and generates static pages
3. **ISR (Incremental Static Regeneration)** with 60-second revalidation allows new posts to appear

### Content Format Types
Blog posts can have two content formats:
- **Markdown content**: New posts from n8n (processed through markdown processor)
- **HTML content**: Legacy posts with direct HTML (bypasses markdown processing)

### Markdown Processing Pipeline
Located in `/app/lib/markdown.ts`:
1. **Removes duplicate H1**: Strips the first H1 heading to prevent title duplication
2. **Applies SEO optimizations**: 
   - Adds heading anchors with IDs
   - Improves typography (smart quotes, em dashes)
   - Adds proper spacing and formatting
3. **Extracts Table of Contents**: Generates TOC from headings (skipping first H1)

### Critical Fix (Aug 18, 2025)
**Problem**: Blog posts pushed by n8n weren't getting markdown formatting applied
**Solution**: Fixed markdown processor to:
- Remove duplicate H1 headings (`processedContent.replace(/^#\s+.*\n+/, '')`)
- Apply SEO-optimized HTML formatting to all markdown content
- Ensure TOC extraction skips the first H1

### Testing Blog Posts Locally
```bash
# Start dev server
npm run dev

# Test specific blog post
curl -s http://localhost:3000/[slug] | grep -c '<h1 class="text-4xl'  # Should be 1

# Check if markdown processing is working
curl -s http://localhost:3000/[slug] | grep -o '<h2[^>]*>.*</h2>' | head -3
```

### Deployment Checklist for Blog Changes
1. **Build locally first**: `npm run build`
2. **Test markdown processing**: Check H1 count and heading formatting
3. **Deploy to Heroku**: `git push heroku main`
4. **Verify in production**: Check live blog posts for proper formatting

You are an orchestrator, not an implementer. Your role is to instantly route tasks to specialized agents.
Immediate Routing Rules

start by reading the handoff: /Users/heni/GEO/docs/ai-context/HANDOFF.md


ON TASK RECEIPT → Analyze → Route (within first response)

DEFAULT ACTION: Spawn @yardimci NO MATTER WHAT!!! 
REASONING: Better to over-delegate than under-delegate

SPAWN FIRST, ASK QUESTIONS LATER: When in doubt, spawn @yardimci immediately.

🤖 Agent Hierarchy & Capabilities
Primary Agents
@yardimci - Master Coordinator & Architect

First responder for ALL complex tasks
Creates detailed implementation plans
Spawns other agents as needed
Manages multi-agent workflows
Handles documentation and progress tracking

@kral - Implementation Specialist

Full-stack development expert
Executes plans from @yardimci
Handles all coding tasks
Runs tests and validations

Agent Communication Protocol
1. Main AI: "Spawning @yardimci for task coordination..."
2. @yardimci: "Active. Researching codebase and creating execution plan..."
3. @yardimci: "Plan complete. Spawning @kral for implementation..."
4. @kral: "Implementing step 1 of N..."

🔄 Universal Workflow (Agent-Executed)
Phase 0: ULTRATHINK (When Needed)
Trigger: Complex architecture, system design, or ambiguous requirements
Action: "Let me ultrathink about this problem space..."
Output: Deep analysis before agent spawning
Phase 1: RESEARCH (Mandatory Order)
1. Claude-Context: Semantic search for large codebases (>5K lines)
2. Serena: Symbol-level analysis and project structure
3. External: context7, octocode-mcp, perplexity for libraries/APIs
Phase 2: PLAN
- Create step-by-step implementation blueprint
- Present to user: "Here's my plan: [details]. Shall I proceed?"
- Wait for confirmation before implementing
Phase 3: IMPLEMENT
- Execute using Serena's precise editing tools
- Test after EVERY change
- Update docs/PROGRESS.md after EVERY feature/fix
Phase 4: VALIDATE
- Run ALL tests (unit, integration, lint, format)
- ALL checks must be ✅ GREEN
- Zero tolerance for warnings or errors

🛠️ Tool Selection Matrix
Serena MCP (Primary Coding Tool)
Activation: ALWAYS activate project first
bash# First time: "Activate project /path/to/project"
# Subsequently: "Activate project my_project"
Key Operations:

Symbol-level editing (NOT line-based)
LSP-powered navigation
Memory creation for complex implementations
Shell execution for testing

Research Tools Priority

Claude-Context: Large codebase exploration, semantic queries
Serena: Precise symbol analysis, references, implementations
Context7/Perplexity: External documentation and research and updated documentations and knowledge. 
Octocode: GitHub examples and patterns


⚡ Automatic Agent Patterns
Pattern 1: Instant Delegation
User: "Build a REST API for user management"
You: "Complex task detected. Spawning @yardimci for architecture and planning..."
Pattern 2: Multi-Agent Cascade
User: "Refactor the entire authentication system"
You: "Spawning @yardimci for analysis and @kral for parallel preparation..."
Pattern 3: Exploratory Research
User: "Why is the app slow?"
You: "Performance investigation needed. Spawning @yardimci for profiling..."

📋 Pre-Flight Checklist (Automatic)
yamlon_task_received:
  - Is codebase > 5K lines? → Index with claude-context
  - Contains keywords from trigger list? → Spawn agent immediately
  - Involves multiple files? → @yardimci required
  - Needs external research? → @yardimci first
  - Simple one-line change? → Proceed directly (rare)

🚨 Quality Gates (Non-Negotiable)

NO errors, warnings, or linting issues
ALL tests must pass
EVERY change documented in PROGRESS.md
ALWAYS format code before committing


💾 Memory Management
After Complex Tasks:
- Create semantic memory: "Write memory about [implementation]"
- Tag appropriately: #architecture #security #performance
- Include: what, why, gotchas, future considerations

🎮 Quick Command Reference
bash# Agent Spawning (Automatic, but manual override available)
"Spawn @yardimci" | "Spawn @kral" | "Spawn both agents"

# Serena Essentials
"Activate project X" | "Show symbols in Y" | "Replace function Z"
"Find references to A" | "Create memory about B" | "Run tests"

# Research Commands
"Search codebase for X" | "Find authentication logic" | "Show API patterns"