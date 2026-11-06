# ISARVA ERP — Global Guidelines & System Rules

## Mandatory Styling & Typography Rules
1. **Font Families (Matching isarvait.com)**:
   - **Headings (`h1`–`h6`, `.section-eyebrow`)**: **`Space Grotesk`** (via `next/font/google`).
   - **Body & Paragraphs (`body`, `p`, text)**: **`Inter`** (via `next/font/google`).
   - **Technical/Numbers**: **`Space Grotesk`**.

2. **Always Use Global Styles First**:
   - **NEVER** write font-size, font-weight, tracking, leading, or text-color classes on native HTML tags (`<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, `<h6>`, `<p>`).
     - ❌ **FORBIDDEN**: `<h3 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight leading-snug truncate">`
     - ✅ **MANDATORY**: `<h3 className="truncate">`
     - ❌ **FORBIDDEN**: `<h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-black tracking-tight leading-[1.12] text-[#0b1a30]">`
     - ✅ **MANDATORY**: `<h1>`
     - ❌ **FORBIDDEN**: `<h2 className="text-2xl font-bold text-slate-900">`
     - ✅ **MANDATORY**: `<h2>`
     - ❌ **FORBIDDEN**: `<h4 className="text-sm font-extrabold text-[#0f172a]">`
     - ✅ **MANDATORY**: `<h4>`
     - ❌ **FORBIDDEN**: `<p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">`
     - ✅ **MANDATORY**: `<p>`
   - Never use arbitrary Tailwind classes (e.g., `text-[13px]`, `text-[15px]`, `py-[50px]`).
   - Use standard Tailwind font sizes only when styling non-heading utility elements: `text-xs`, `text-sm`, `text-base`, `text-lg`, `text-xl`, `text-2xl`, `text-3xl`, `text-4xl`, `text-5xl`, `text-6xl`.

3. **Typography Hierarchy (`@layer base` in `globals.css`)**:
   - `<h1>`: Hero title (`Space Grotesk`, `36px mobile` → `56px desktop`, `font-black (800)`, `tracking-tight`).
   - `<h2>`: Section title (`Space Grotesk`, `28px mobile` → `40px desktop`, `font-black (800)`, `tracking-tight`).
   - `<h3>`: Cards, features, testimonial names (`Space Grotesk`, `18px mobile` → `22px desktop`, `font-bold (700)`).
   - `<h4>`: Footer & sidebar headings (`Space Grotesk`, `15px mobile` → `16px desktop`, `font-bold (700)`).
   - `<p>`: Standard paragraph text (`Inter`, `15px mobile` → `16px desktop`, `#475569`).
   - `.section-eyebrow`: Category tag above `<h2>` (`Space Grotesk`, `12px`, `font-extrabold (800)`, `text-[#007a55]`, `uppercase`).
   - Zero redundant custom classes like `.section-title` or `.section-subtitle`.

4. **Layout & Containers**:
   - Container: `.site-container` (`max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10`).
   - Section Spacing: `.section-padding` (`py-16 sm:py-20`) or `.section-padding-sm` (`pt-10 pb-14 lg:pt-14 lg:pb-20`).

5. **Flag Icons**:
   - Always use `<FlagIcon country="IN" />` / `<FlagIcon country="SA" />` SVG components, never Unicode flag emojis (which fail on Windows Chromium).

6. **Mandatory Colorful Box Shadows for Cards**:
   - **NEVER** use generic flat gray shadows (e.g., `shadow-md`, `shadow-xl`, `rgba(0,0,0,0.1)`) on product cards, bento benefits, or feature grids.
   - Always use theme-colored box shadows (`.card-shadow-emerald`, `.card-shadow-blue`, `.card-shadow-purple`, `.card-shadow-orange`, `.card-shadow-teal`, `.card-shadow-indigo`, `.card-shadow-rose`, `.card-shadow-dark-emerald`) that provide a radiant ambient glow and smooth -4px hover elevation lift.
   - FAQ accordions must have colored ambient glow in both idle and active states.

7. **Global Responsive Text Alignment Standard**:
   - **Hero Sections (Two-Column Split)**: Must ALWAYS use `text-center items-center` on mobile, transitioning to `lg:text-left lg:items-start` on desktop (`< 1024px` centered symmetry, `≥ 1024px` left-aligned reading flow). CTA buttons and trust badges must have `justify-center lg:justify-start`.
   - **Section Introductions**: `.section-header` (centered on all viewports).
   - **Feature Cards, Accordions, Checklists & Detail Lists**: Strict left-alignment (`text-left`) across all breakpoints for maximum scannability.

## Development Workflow & Tooling Rules
1. **No Scratchpad / Scratch Files**:
   - **NEVER** use scratchpads, temporary test scratch scripts, or scratch files when developing or modifying code.
   - Apply edits directly to target project files in-place.

2. **No Inspect During Development**:
   - **NEVER** invoke browser inspect or browser inspection subagent sessions during development/coding tasks.
   - Rely strictly on direct static code analysis, design system tokens, and direct code authoring.

