# Global Styles & Typography Standard (ISARVA ERP)

## Font Families (Matching isarvait.com)
- **Headings (`h1`–`h6`, `.section-eyebrow`)**: **`Space Grotesk`** (via `next/font/google`).
- **Body & Paragraphs (`body`, `p`, text)**: **`Inter`** (via `next/font/google`).
- **Mono / Technical**: **`Space Grotesk`**.

## Absolute Mandate: Pure Global Styles First — Zero Inline Heading Classes

1. **Pure Semantic HTML Tags**:
   - Never write font-size, font-weight, tracking, leading, or color classes directly on `<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, `<h6>`, or `<p>`.
   - All typography is globally defined in `@layer base` in `src/app/globals.css`.
   - Examples:
     - ❌ `className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight leading-snug truncate"`
     - ✅ `className="truncate"`
     - ❌ `className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.12] text-[#0b1a30]"`
     - ✅ `<h1>`

2. **Zero Arbitrary Font Sizing**:
   - Never write `text-[13px]`, `text-[14.5px]`, `text-[11px]`, `text-[28px]`, etc.
   - Always use standard Tailwind font tokens: `text-xs`, `text-sm`, `text-base`, `text-lg`, `text-xl`, `text-2xl`, `text-3xl`, `text-4xl`, `text-5xl`, `text-6xl`.

3. **Global Site Container (`.site-container`)**:
   - Wrap all page sections, headers, footers, and modals with `.site-container` (`max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10`).

4. **Global Section Spacing**:
   - Use `.section-padding` (`py-16 sm:py-20`) for standard sections.
   - Use `.section-padding-sm` (`pt-10 pb-14 lg:pt-14 lg:pb-20`) for compact sections (Hero, GST band).

5. **Windows Flag Rendering Standard**:
   - Never use raw emoji flag characters (🇮🇳, 🇸🇦). Always use `<FlagIcon country="IN" />` / `<FlagIcon country="SA" />`.

6. **Development Workflow (No Scratchpad & No Inspect)**:
   - **No Scratchpads**: Do not create or use scratchpad scripts, temporary test files, or scratch notes. Make all changes directly in-place.
   - **No Inspect**: Do not use browser inspect / browser inspection subagents during development. Rely on direct code analysis and design tokens.

