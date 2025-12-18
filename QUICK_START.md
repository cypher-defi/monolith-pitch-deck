# Quick Start Guide - 5 Minutes to Running

## Step 1: Install Dependencies (2 minutes)

Open terminal in the project folder and run:

```bash
npm install
```

This downloads all required packages. You'll see progress bars and it might take 1-2 minutes.

## Step 2: Start Development Server (30 seconds)

```bash
npm run dev
```

You'll see output like:
```
> next dev
> ready - started server on 0.0.0.0:3000
```

## Step 3: Open in Browser (10 seconds)

Visit: **http://localhost:3000**

Your browser should show the presentation with 3 example slides.

## Step 4: Navigate (try it now!)

- Press **→** (right arrow) to go to next slide
- Press **←** (left arrow) to go to previous slide
- Or click the navigation buttons (bottom right)

## Step 5: Start Editing (2 minutes)

### Open in VS Code

```bash
code .
```

### Click the Spark Icon ✨

Look for the ✨ Spark icon in the top-right of VS Code. This opens Claude Code.

### Paste Your First Prompt

Copy this into Claude Code:

```
Add slide 4 to my pitch deck:
Title: "Market Opportunity"
Subtitle: "$2.1T addressable market"

Three cards:
- TAM: Total DeFi market worth $2.1T by 2027
- Growth: 45% compound annual growth rate
- Timing: Regulatory clarity emerging now

Use ThreeColumnGrid and glass variant cards.
```

Press Enter and watch Claude add your slide!

## That's It! 🎉

You now have:
- ✅ A working Next.js app
- ✅ 3 example slides
- ✅ Full keyboard navigation
- ✅ Claude Code ready to help

## Next Steps

### Add More Slides

Open [CLAUDE_PROMPTS.md](CLAUDE_PROMPTS.md) and copy more prompts.

Examples:
- Team slide
- Traction metrics
- Financial projections
- Call to action

### Customize Styling

```
Ask Claude: "Change the primary color from blue to green"
Ask Claude: "Make slide 1 title larger with an animated glow"
Ask Claude: "Add my logo from public/images/logo.png"
```

### Preview on Mobile

1. Press **F12** in browser (open DevTools)
2. Click the device icon (looks like phone/tablet)
3. Select iPhone or Android
4. See your responsive deck!

## Common Commands

```bash
# Start development
npm run dev

# Build for production
npm run build

# Run production build
npm start

# Stop the server
Ctrl+C (in terminal)
```

## Keyboard Shortcuts

| Key | Action |
|-----|--------|
| → or ↓ | Next slide |
| ← or ↑ | Previous slide |
| Home | First slide |
| End | Last slide |

## Project Files

```
📁 monolith-pitch-deck/
├── 📄 app/page.tsx          ← Edit your slides here!
├── 📁 components/           ← Reusable UI components
├── 📁 hooks/                ← Presentation logic
├── 📄 README.md             ← Full documentation
└── 📄 CLAUDE_PROMPTS.md     ← Copy-paste prompts
```

## Troubleshooting

### "npm not found"
Install Node.js from [nodejs.org](https://nodejs.org)

### Port 3000 already in use
```bash
lsof -ti:3000 | xargs kill -9
```

### Changes not showing
Hard refresh: **Cmd+Shift+R** (Mac) or **Ctrl+Shift+R** (Windows)

### Claude Code not working
1. Check the ✨ Spark icon is visible in VS Code
2. Make sure you're in the project folder
3. Try restarting VS Code

## Get Help

Ask Claude Code anything:
- "How do I add images?"
- "Make slide 2 background purple"
- "Add a team slide with 4 people"
- "How do I deploy this?"

## You're Ready! 🚀

Start building your pitch deck now:
1. Keep `npm run dev` running
2. Edit files or use Claude Code
3. Browser updates automatically
4. Add 10-20 slides in 30 minutes

**Happy presenting!**
