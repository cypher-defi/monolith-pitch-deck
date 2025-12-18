# Claude Code Prompts - Copy & Paste Ready

Use these prompts with Claude Code (Spark icon ✨ in VS Code) to quickly build your pitch deck.

## 📊 Adding New Slides

### Basic Text Slide
```
Add slide 4 to my pitch deck:
Title: "Market Opportunity"
Subtitle: "A $2.1T addressable market"

Add two paragraphs explaining the market size and growth trajectory.
Use SlideContent and center the text.
```

### Three Card Layout
```
Add slide 5 with title "Our Technology", subtitle "Built for scale"

Three cards using ThreeColumnGrid:
- Card 1: "Multi-Chain" - Support for Ethereum, Polygon, Arbitrum
- Card 2: "High Performance" - 10k+ TPS with sub-second finality
- Card 3: "Secure" - Audited by top security firms

Use glass variant cards.
```

### Two Column Layout
```
Add slide 6 with title "Go-to-Market Strategy"

Use TwoColumnGrid with 4 cards:
- Phase 1: Partner with 5 major banks (Q1 2024)
- Phase 2: Launch B2B2C platform (Q2 2024)
- Phase 3: Expand to Asia markets (Q3 2024)
- Phase 4: Open API to public (Q4 2024)

Use primary variant for Phase 1-2, secondary for Phase 3-4.
```

### Metrics Slide
```
Add slide 7 showing our traction:
Title: "Traction"
Subtitle: "Growing exponentially"

Three large metric cards:
- $12M ARR (Annual Recurring Revenue)
- 150K Active Users
- 25 Enterprise Clients

Make the numbers large (text-6xl) and add a small description under each.
Use glass cards.
```

### Team Slide
```
Add slide 8 for our team:
Title: "The Team"
Subtitle: "World-class talent"

TwoColumnGrid with 4 team member cards:
- CEO: John Smith - Ex-Goldman Sachs, 15 years TradFi
- CTO: Jane Doe - Former Coinbase, Built 3 DeFi protocols
- CFO: Bob Johnson - Ex-JP Morgan, Crypto since 2015
- CPO: Alice Wang - Product leader at Stripe, UX expert

Use default card variant.
```

## 🎨 Styling Modifications

### Change Slide Background
```
Update slide 2 background to use a gradient from black through dark purple to black.
```

### Add Gradient Text
```
Make the title on slide 3 use a gradient from cyan to purple,
with bg-clip-text and text-transparent classes.
```

### Larger Title
```
Make the title on slide 1 even larger, use size="xl" prop on Title component.
```

### Card Styling
```
Change all cards on slide 5 from glass variant to primary variant.
Add a hover effect that scales them up slightly.
```

## 🖼️ Adding Images & Media

### Add Logo
```
Add a logo to slide 1. The image is at public/images/logo.png.
Place it centered above the title, 150px wide, with some margin below.
```

### Background Image
```
Add a background image to slide 3 from public/images/background.jpg.
Make it cover the full slide with overlay so text remains readable.
Use opacity 20% on the image.
```

### Image in Card
```
Add an image to the first card on slide 2.
Image path: public/images/chart.png
Place it above the card title, full width of the card.
```

## 📝 Content Updates

### Update Existing Text
```
Update slide 2, change the first card title from "Fragmentation" to "Integration Challenges"
and update the description to focus on API complexity.
```

### Add Bullet Points
```
Add a bulleted list to slide 4 under the subtitle:
- 300% YoY growth in enterprise DeFi
- $50B total value locked across platforms
- 80% of Fortune 500 exploring blockchain
- Regulatory clarity emerging in key markets
```

### Add Call-to-Action
```
Add a CTA section at the bottom of slide 8:
Large button text: "Join the Revolution"
Smaller text below: "hello@monolith.io"
Center it and make the button prominent with primary gradient.
```

## 🔢 Financial Slides

### Revenue Model
```
Add slide 9 explaining revenue model:
Title: "Business Model"
Subtitle: "Multiple revenue streams"

Three columns:
- Transaction Fees: 0.1% on all DeFi transactions
- Platform Fees: $10K-$100K monthly enterprise subscriptions
- Premium Services: Custom integrations and white-label solutions

Include estimated revenue for each in the card content.
```

### Financials Slide
```
Add slide 10 with financial projections:
Title: "Financial Projections"
Subtitle: "Path to profitability"

Two column grid:
- 2024: $12M ARR, 150% growth
- 2025: $50M ARR, 310% growth
- 2026: $180M ARR, 260% growth
- 2027: $500M ARR, breakeven

Use secondary gradient cards.
```

## 🎯 Closing Slides

### Ask Slide
```
Add slide 11 for our funding ask:
Title: "The Ask"
Subtitle: "Series A Round"

Large centered card:
- Raising: $15M
- Valuation: $75M post-money
- Use of funds: 40% Engineering, 30% Sales, 20% Marketing, 10% Operations

Make the card prominent with primary variant.
```

### Contact Slide
```
Add final slide 12:
Title: "Let's Build the Future"
Subtitle: "Together"

Center-aligned contact info:
- Email: founders@monolith.io
- Website: monolith.io
- Twitter: @MonolithDeFi

Add a simple elegant layout with larger text.
```

## 🔧 Technical Modifications

### Add Slide Numbers
```
Add slide numbers to the bottom left of each slide.
Small, subtle text showing "1 of 12" format.
```

### Custom Transition
```
Add a fade-in animation to all cards when the slide becomes visible.
Use Tailwind's animation classes and intersection observer.
```

### Keyboard Shortcuts Info
```
Add a small help button in top-right that shows keyboard shortcuts:
- Arrow keys to navigate
- Home/End for first/last
- Esc to exit fullscreen (if added)

Make it toggle on click, dismissable.
```

### Dark Mode Toggle
```
Add a dark/light mode toggle button.
Currently everything is dark theme, add a light theme option
and allow users to switch with a button in the nav controls.
```

## 💡 Advanced Requests

### Animated Numbers
```
On slide 7 (metrics), make the numbers count up from 0 when the slide appears.
Animate over 2 seconds with easing.
```

### Progress Bar
```
Add a progress bar at the top of the screen showing how far through
the presentation the user is (1 of 12 slides = 8.3% complete).
```

### Presentation Mode
```
Add a fullscreen presentation mode that hides the browser UI.
Add a button in nav controls to toggle it.
Press F key to enter fullscreen.
```

### Speaker Notes
```
Add speaker notes that only show in a separate window or console.
Each slide should have a notes section with talking points.
```

## 📋 Complete Deck Examples

### Standard 10-Slide Pitch Deck
```
Create a complete 10-slide pitch deck with:
1. Title slide with company name and tagline
2. Problem (3 pain points)
3. Solution (our product)
4. How it works (3 steps)
5. Market opportunity (TAM, SAM, SOM)
6. Business model (revenue streams)
7. Traction (metrics)
8. Competition (competitive matrix)
9. Team (4 founders)
10. Ask (funding amount and use)

Use appropriate components and layouts for each.
Update totalSlides to 10.
```

### Product Demo Deck
```
Create a 7-slide product demo deck:
1. Title: Product name and one-liner
2. The problem we solve
3. Key features (4 features in grid)
4. How it works (step-by-step)
5. Customer testimonials (3 quotes)
6. Pricing tiers (3 plans)
7. Get started (CTA and contact)

Focus on visuals and clear value props.
```

## 🚀 Quick Fixes

### Fix Slide Count
```
I added a new slide but navigation shows wrong total.
Update the usePresentationController hook to reflect the current number of slides.
```

### Responsive Issues
```
Cards on slide 5 look cramped on mobile.
Adjust the grid to stack vertically on small screens and increase gap.
```

### Text Too Small
```
All subtitle text is too small on large screens.
Increase the base size for Subtitle component.
```

---

## How to Use These Prompts

1. **Open Claude Code**: Click the ✨ Spark icon in VS Code (top right)
2. **Copy a prompt**: Select and copy any prompt above
3. **Paste & Send**: Paste into Claude Code and press Enter
4. **Review Changes**: Claude will make the changes and explain them
5. **Test**: Check your browser (it auto-refreshes with hot reload)

## Tips

- **Be specific**: The more details you provide, the better the result
- **Iterate**: Start simple, then refine with follow-up prompts
- **Reference components**: Mention component names (Card, Title, etc.) for consistency
- **Ask questions**: If unsure, ask Claude "What's the best way to add X?"

Happy building! 🎯
