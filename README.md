### Fillout Form Pages Builder — Frontend Assessment ✨

Build and organize multi-page forms with an intuitive, polished UI. Drag to reorder pages, insert new pages inline, and manage each page via a context menu — all in-memory, fast, and fluid.

```
🎯 Overview
```
- Live Demo: https://fillout-assessment-nine.vercel.app/
- Repository: https://github.com/hariskamran/fillout-fe-assessment
- Company: Fillout — https://fillout.com

---

### ⚡ Quick Start

```
🚧 Prerequisites
```
- Node.js 18+ recommended

```
📦 Install dependencies
```
- npm: `npm install`
- yarn: `yarn install`
- pnpm: `pnpm install`
- bun: `bun install`

```
▶️ Run the development server
```
- npm: `npm run dev`
- yarn: `yarn dev`
- pnpm: `pnpm dev`
- bun: `bun dev`

Then open http://localhost:3000

Note: This UI is optimized for desktop. Phone-sized viewports are intentionally restricted to encourage opening on a PC.

---

### 🧩 Core Features (per assessment requirements)

```
📚 Multi-page form navigation
```
- Preconfigured pages (e.g., “Info”, “Details”, “Other”, “Ending”).
- Active page is visibly highlighted; select others via mouse or keyboard.

```
🖱️ Drag to reorder pages
```
- Smooth, responsive drag with clear visual feedback.

```
➕ Inline page insertion
```
- A subtle “+” button appears on hover between any two pages to insert a new page inline.
- Also supports adding a page at the end of the list.

```
🧰 Per-page context menu
```
- Options: Rename, Duplicate, Delete (non-functional by requirement) — plus an extra: “Set as first page.”

```
💾 In-memory state only
```
- No backend; instant interactions with zero network overhead.

---

### ✨ Extras and UX Polish

```
📌 Set as first page (extra)
```
- Pin any page to the front; the first page omits the vertical dot indicator for visual clarity.

```
🧭 Scrollable layout with controls
```
- When pages overflow, the bar remains elegant and usable with discrete left/right scroll buttons.

```
⌨️ Keyboard-first interactions
```
- Full focus states, Enter to activate, and predictable tab order.

```
🖥️ Desktop-first
```
- Purposefully restricted on phone-sized screens to ensure the intended desktop experience.

---

### 🎨 Design & Interaction Details

```
🎞️ Micro-interactions (CSS-only for performance)
```
- Button smoothly expands when active.
- Hover “+” button fades and scales in.
- Dragging provides live, animated feedback.
- Newly inserted pages animate into position.

```
🔎 Visual fidelity
```
- Inter font applied to match Figma design.
- Icons exported from Figma for pixel-perfect alignment.
- Clean spacing, sizing, and hover states tailored to the mockup.

---

### 🏗️ Architecture at a Glance

```
🧱 Stack
```
- Next.js (App Router) + TypeScript.
- State: In-memory React state with focused hooks.

```
🧩 Components
```
- Container: Wraps the scrollable page bar + controls.
- TabButton: Core interactive tab with active/hover/focus/keyboard states.
- SortableTab: Adds drag-and-drop behavior and visuals.
- TabContextMenu: Menu for rename/duplicate/delete and “Set as first page.”

```
🪝 Hooks
```
- useDraggableTabs: Encapsulates drag interactions and ordering logic.
- useTabContextActions: Provides actions like add/insert/activate/reposition.

```
🌱 Data bootstrap
```
- `src/components/data/index.ts` initializes the starter pages.

---

### 🕹️ How to Use the Interface

```
✔️ Select a page
```
- Click a tab, or press Tab until focused and hit Enter to activate.

```
🔀 Reorder pages
```
- Click and drag a tab to a new position; release to drop.

```
➕ Add a new page
```
- Hover between two tabs to reveal the “+” button; click to insert at that position.
- You can also add a page at the end of the list.

```
⋯ Open context menu
```
- Click the options button on a tab to view Rename / Duplicate / Delete (non-functional) and “Set as first page.”

```
↔️ Scroll the tab bar
```
- Use the left/right controls if the list overflows.

---

### 🧹 Linting, Formatting, and Code Style

```
🧭 Standards
```
- ESLint + Prettier configured with Airbnb style guide.

```
🚦 Import hygiene
```
- Enforced import order.
- Absolute imports only for clarity and maintainability.

---

### ⚠️ Notes and Limitations

```
ℹ️ Intentional constraints
```
- Context menu primary actions (Rename, Duplicate, Delete) are intentionally non-functional per assessment requirements.
- Mobile restricted by design to highlight the desktop-first UX.
- All data is ephemeral (in-memory); refresh clears pages.

---

### 👤 Created By

```
Haris Kamran
hariskamran1999.hk@gmail.com
https://github.com/hariskamran/fillout-fe-assessment
```

---

### 💡 Appendix: Why These Choices?

```
🚀 Performance
```
- CSS-only animations keep motion snappy and reduce jank during drag.

```
🧠 Simplicity
```
- In-memory state fits the assessment, keeping interactions instant and code straightforward.

```
🧭 Discoverability
```
- Explicit scroll controls and hover “+” are easy to find without visual clutter.

```
♿ Accessibility
```
- Keyboard affordances make the component usable beyond point-and-click.

If you’d like, I can deliver this as a ready-to-paste README.md update or tailor the emoji set/style to your personal branding.