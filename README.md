# Monolith Pitch Deck

A professional, interactive pitch deck built with Next.js 15, TypeScript, and Tailwind CSS.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Navigation

- **Arrow Keys**: Navigate between slides (←/→ or ↑/↓)
- **Home/End**: Jump to first/last slide
- **Mouse**: Click navigation buttons (bottom right)
- **Scroll**: Scroll to navigate (with snap-to-slide)

## Project Structure

```
monolith-pitch-deck/
├── app/
│   ├── page.tsx          # Main presentation (edit your slides here!)
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── components/
│   ├── Slide.tsx         # Slide wrapper
│   ├── SlideContent.tsx  # Content container
│   ├── Title.tsx         # Main titles
│   ├── Subtitle.tsx      # Subtitles
│   ├── Card.tsx          # Content cards
│   ├── CardTitle.tsx     # Card titles
│   ├── CardContent.tsx   # Card content
│   ├── ThreeColumnGrid.tsx
│   ├── TwoColumnGrid.tsx
│   └── NavControls.tsx   # Navigation UI
├── hooks/
│   └── usePresentationController.ts  # Presentation logic
└── public/
    └── images/           # Put your images here
```

## Adding Slides

### Method 1: Using Claude Code (Recommended)

1. Open VS Code with this project
2. Click the **Spark icon ✨** (top right) to open Claude Code
3. Use prompts like:

```
Add slide 4 to my pitch deck:
Title: "Market Opportunity"
Subtitle: "$2.1T addressable market"

Three cards:
- TAM: Total addressable market breakdown
- Growth: 45% YoY growth in DeFi
- Timing: Why now is the perfect moment

Use ThreeColumnGrid and Card components.
```

### Method 2: Manual Editing

Edit [app/page.tsx](app/page.tsx):

```tsx
<Slide id={4} background="bg-black">
  <SlideContent>
    <Title size="lg" className="mb-8 text-center">
      YOUR TITLE
    </Title>
    <Subtitle size="md" className="mb-12 text-center">
      Your subtitle
    </Subtitle>

    <ThreeColumnGrid>
      <Card variant="glass">
        <CardTitle>Card 1</CardTitle>
        <CardContent>
          Your content here
        </CardContent>
      </Card>
      {/* Add more cards */}
    </ThreeColumnGrid>
  </SlideContent>
</Slide>
```

**Important:** Update the `totalSlides` prop in the `usePresentationController(3)` hook when adding slides!

## Component Reference

### Slide Layouts

```tsx
<Slide id={1} background="bg-black">
  {/* Your content */}
</Slide>
```

Backgrounds: `bg-black`, `bg-gradient-to-br from-black via-blue-950/20 to-black`

### Typography

```tsx
<Title size="xl">Main Title</Title>
<Title size="lg">Section Title</Title>
<Subtitle size="lg">Large subtitle</Subtitle>
<Subtitle size="md">Medium subtitle</Subtitle>
```

### Cards

```tsx
<Card variant="default">   {/* Dark card */}
<Card variant="glass">     {/* Glassmorphism */}
<Card variant="primary">   {/* Blue gradient */}
<Card variant="secondary"> {/* Purple gradient */}
```

### Grids

```tsx
<ThreeColumnGrid>
  {/* 3 items */}
</ThreeColumnGrid>

<TwoColumnGrid>
  {/* 2 or 4 items */}
</TwoColumnGrid>
```

## Customization

### Colors

Edit [tailwind.config.ts](tailwind.config.ts):

```ts
colors: {
  primary: "oklch(0.646 0.222 41.116)",  // Blue
  secondary: "oklch(0.522 0.192 283.389)", // Purple
}
```

### Fonts

Edit [app/layout.tsx](app/layout.tsx) to add custom fonts.

### Animations

Add Tailwind animation classes or create custom animations in [app/globals.css](app/globals.css).

## Claude Code Prompts

Copy these into Claude Code (Spark icon ✨):

### Add a new slide
```
Add slide 5 with title "Traction", subtitle "Growing fast",
and 3 metric cards showing user growth, revenue, and partnerships.
Use ThreeColumnGrid and glass cards.
```

### Modify existing slide
```
Update slide 2 to have 4 cards instead of 3,
add a fourth card about "Complexity"
describing integration challenges.
```

### Change styling
```
Make slide 1 background a gradient from black to dark blue,
and make the title larger with an animated glow effect.
```

### Add images
```
Add a logo to slide 1. The image is at public/images/logo.png.
Center it above the title, make it 200px wide.
```

## Building for Production

```bash
npm run build
npm start
```

## Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Self-Hosted

```bash
npm run build
npm start
# Runs on port 3000
```

## Tips

- **Hot Reload**: Changes appear instantly during development
- **Mobile Responsive**: All components adapt to mobile screens
- **TypeScript**: Full type safety prevents bugs
- **Performance**: Next.js optimizes everything automatically

## Troubleshooting

### Port 3000 in use
```bash
# Kill the process
lsof -ti:3000 | xargs kill -9
# Or use a different port
PORT=3001 npm run dev
```

### Build errors
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run dev
```

### Slides not updating
- Check you updated `totalSlides` in [app/page.tsx](app/page.tsx)
- Hard refresh: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows)

## License

MIT

## Need Help?

Use Claude Code (✨ Spark icon) and ask questions like:
- "How do I add a video background to slide 3?"
- "Create a slide with bullet points and icons"
- "Add smooth transitions between slides"

Happy presenting! 🚀
