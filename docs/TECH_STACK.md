# TECH STACK — Muhammad Khuzaima Portfolio

## 1. Stack Overview

Use a modern production-ready web stack centered around **Next.js + TypeScript**.

```text
Next.js
React
TypeScript
Tailwind CSS
shadcn/ui
Radix UI
Framer Motion / Motion
React Bits
Lucide React
Nodemailer
Vercel
```

---

# 2. Framework

## Next.js

Use the latest stable Next.js version available in the project environment.

Use:

- App Router
- Server Components by default
- Route Handlers for APIs
- `next/image`
- `next/font`
- Metadata API

Avoid unnecessary client components.

Use `"use client"` only for:

- animations requiring client state
- interactive forms
- mobile menu
- scroll-aware components
- interactive UI elements

---

# 3. Language

## TypeScript

Use strict TypeScript.

Requirements:

- typed props
- typed data objects
- typed API payloads
- no unnecessary `any`
- reusable interfaces/types

Recommended:

```text
tsconfig strict mode
```

---

# 4. Styling

## Tailwind CSS

Use Tailwind as the primary styling system.

Use:

- responsive utilities
- spacing scale
- typography utilities
- transitions
- gradients
- shadows
- backdrop blur
- arbitrary values only when justified

Keep repeated design values centralized.

---

# 5. Design Tokens

Define a reusable color and spacing system.

Example:

```css
:root {
  --background: #030712;
  --background-secondary: #050816;
  --surface: #0b1220;
  --surface-secondary: #0f172a;

  --primary: #7c3aed;
  --primary-light: #8b5cf6;
  --secondary: #6366f1;

  --foreground: #f8fafc;
  --muted: #94a3b8;
  --muted-dark: #64748b;

  --border: rgba(255, 255, 255, 0.08);
}
```

---

# 6. UI Library

## shadcn/ui

Use shadcn/ui components where appropriate.

Recommended:

- Button
- Badge
- Sheet
- Dialog
- Input
- Textarea
- Tooltip
- Separator

Customize them to match the visual system.

Do not leave default shadcn styles unchanged if they conflict with the portfolio design.

---

# 7. Accessibility Primitives

## Radix UI

Use Radix primitives through shadcn/ui or directly when useful.

Potential usage:

- Dialog
- Sheet
- Tooltip
- Navigation Menu
- Dropdown/Popover primitives

Prioritize accessible keyboard and screen-reader behavior.

---

# 8. Animation

## Framer Motion / Motion for React

Use for:

- hero entrance
- section reveal
- staggered project cards
- skill cards
- profile floating effect
- mobile navigation
- hover micro-interactions
- CTA animations

Avoid heavy animation libraries beyond what is required.

Support:

```text
prefers-reduced-motion
```

---

# 9. React Bits

Use React Bits selectively for visual enhancements.

Possible use cases:

- subtle spotlight
- animated background
- grid effect
- particles
- text effects
- hover interactions

Do not use React Bits for every section.

The portfolio should remain usable and attractive without decorative motion.

---

# 10. Icons

## Lucide React

Use Lucide React for:

- arrow icons
- GitHub
- LinkedIn
- mail
- phone
- download
- code
- education
- certifications
- skills

Do not manually paste large SVG blobs when an icon library is appropriate.

---

# 11. Forms

Use a standard React/Next.js form architecture.

Recommended:

```text
React form state
+
server-side validation
+
Next.js Route Handler
+
Nodemailer
```

The form should contain:

```text
Name
Email
Subject
Message
```

---

# 12. Validation

Implement server-side validation.

Validate:

- required fields
- email format
- message length
- reasonable request size

Client-side validation may be added for UX, but server validation is mandatory.

---

# 13. Email Backend

## Nodemailer

Use Nodemailer to send contact-form messages.

Endpoint:

```text
POST /api/contact
```

Recommended architecture:

```text
components/contact.tsx
        ↓
fetch("/api/contact")
        ↓
app/api/contact/route.ts
        ↓
Nodemailer
        ↓
CONTACT_EMAIL
```

---

# 14. Environment Variables

Use:

```env
SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASSWORD=
CONTACT_EMAIL=
```

Never expose SMTP credentials through:

```text
NEXT_PUBLIC_*
```

Never hardcode credentials in source code.

---

# 15. Mail Utility

Create:

```text
lib/mail.ts
```

Centralize Nodemailer configuration.

Example responsibility:

```text
create transporter
send contact email
format contact message
handle SMTP errors
```

Keep secrets on the server.

---

# 16. API Route

Create:

```text
app/api/contact/route.ts
```

Responsibilities:

1. Accept POST request
2. Parse JSON
3. Validate fields
4. Check honeypot/spam field
5. Send email with Nodemailer
6. Return JSON response
7. Handle errors safely

Example response shapes:

```json
{
  "success": true,
  "message": "Message sent successfully."
}
```

```json
{
  "success": false,
  "message": "Unable to send message."
}
```

Do not return sensitive SMTP details to the browser.

---

# 17. Spam Protection

Implement a simple honeypot field.

Example:

```text
website
```

The field should:

- be hidden visually
- remain in the DOM for bots
- cause the request to be ignored/rejected when populated

Avoid exposing the honeypot in the visible UI.

---

# 18. Image Handling

Use Next.js Image:

```tsx
<Image
  src="/profile.png"
  alt="Muhammad Khuzaima"
  fill
  priority
  className="object-contain"
/>
```

Store profile image at:

```text
public/profile.png
```

Project images:

```text
public/projects/
```

Optimize all images before deployment.

---

# 19. CV Handling

Expected CV location:

```text
public/Muhammad-Khuzaima-CV.pdf
```

Hero button:

```text
Download CV
```

Keep the path configurable in portfolio data.

Do not generate a fake CV.

---

# 20. Project Data

Store project information in:

```text
data/portfolio.ts
```

Recommended type:

```ts
export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  category: string;
  liveUrl?: string;
  githubUrl?: string;
}
```

---

# 21. Portfolio Data

Recommended structure:

```ts
export const portfolio = {
  person: {
    name: "Muhammad Khuzaima",
    role: "Frontend Developer",
    location: "Lahore, Pakistan",
    email: "khuzaimam335@gmail.com",
    phone: "+92 332 4700225",
  },

  links: {
    linkedin: "https://linkedin.com/in/muhammadkhuzaimadev",
    github: "https://github.com/MUHAMMAD-KHUZAIMA18",
    website: "https://muhammadkhuzaim.dev",
  },

  skills: {
    frontend: [],
    analytics: [],
    databases: [],
    programming: [],
    tools: [],
  },

  projects: [],

  certifications: [],

  education: [],
};
```

---

# 22. Component Architecture

Recommended components:

```text
components/
├── navbar.tsx
├── hero.tsx
├── about.tsx
├── skills.tsx
├── projects.tsx
├── project-card.tsx
├── certifications.tsx
├── certification-card.tsx
├── education.tsx
├── contact.tsx
├── social-links.tsx
├── section-heading.tsx
├── footer.tsx
└── ui/
```

Keep each component responsible for one clear part of the UI.

---

# 23. Suggested File Architecture

```text
app/
├── api/
│   └── contact/
│       └── route.ts
├── globals.css
├── layout.tsx
└── page.tsx

components/
├── navbar.tsx
├── hero.tsx
├── about.tsx
├── skills.tsx
├── projects.tsx
├── project-card.tsx
├── certifications.tsx
├── certification-card.tsx
├── education.tsx
├── contact.tsx
├── social-links.tsx
├── section-heading.tsx
├── footer.tsx
└── ui/

data/
└── portfolio.ts

lib/
├── utils.ts
└── mail.ts

public/
├── profile.png
├── Muhammad-Khuzaima-CV.pdf
├── projects/
└── icons/
```

---

# 24. State Management

Do not add a global state library unless it becomes necessary.

For this portfolio, local React state is sufficient for:

- contact form
- mobile navigation
- scroll states
- interactive UI

Avoid unnecessary complexity.

---

# 25. Rendering Strategy

Use server rendering wherever possible.

### Server Components

Use for:

- static content sections
- project data
- certifications
- education
- footer
- static navigation data

### Client Components

Use only where needed:

- Framer Motion interactions
- mobile nav state
- contact form
- scroll interactions
- interactive cards

---

# 26. SEO / Metadata

Use Next.js Metadata API.

Configure:

```text
title
description
keywords where appropriate
openGraph
twitter
robots
canonical
```

Primary title:

```text
Muhammad Khuzaima | Frontend Developer
```

Description:

```text
Frontend Developer and BSCS student building responsive web experiences
and practical data-driven solutions.
```

Canonical:

```text
https://muhammadkhuzaima.dev
```

---

# 27. Fonts

Use:

```text
Inter
```

or:

```text
Manrope
```

Prefer `next/font` for optimized font loading.

---

# 28. Deployment

Target:

## Vercel

Requirements:

- production build succeeds
- environment variables configurable
- server route works in deployment
- static assets resolve correctly
- CV download works
- profile image loads correctly

---

# 29. Development Scripts

Recommended:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

Use the project's actual Next.js-compatible lint setup rather than forcing deprecated commands.

---

# 30. Dependency Guidance

Core dependencies should remain focused.

Expected categories:

```text
next
react
react-dom
typescript
tailwindcss
framer-motion
lucide-react
@radix-ui/*
nodemailer
```

Add React Bits packages/components only where needed.

Do not install packages merely for novelty.

---

# 31. Security

Requirements:

- SMTP secrets server-side only
- validate input server-side
- sanitize content before email formatting
- basic spam protection
- do not log credentials
- do not expose internal errors
- limit excessive request payloads

---

# 32. Performance

Use:

- next/image
- next/font
- server components
- lazy loading where appropriate
- optimized animations
- minimal client-side JavaScript
- compressed assets

Avoid:

- huge background videos
- unoptimized full-resolution images
- unnecessary client rendering
- excessive particle effects
- redundant libraries

---

# 33. Quality Gates

Before deployment verify:

```text
✓ TypeScript passes
✓ Build passes
✓ Lint passes
✓ No unused imports
✓ No broken links
✓ No console errors
✓ No horizontal overflow
✓ Contact API works
✓ Nodemailer credentials are server-only
✓ Profile image loads
✓ CV path works
✓ Mobile navigation works
✓ Reduced motion works
✓ SEO metadata exists
✓ Accessibility basics are satisfied
```

---

# 34. Technology Principles

Follow these principles:

### Keep it simple

Do not introduce unnecessary architecture.

### Keep it reusable

Use shared components and centralized data.

### Keep it accessible

Prefer established accessible primitives.

### Keep it fast

Animation and visual effects must not compromise performance.

### Keep it maintainable

A future developer should be able to update:

- skills
- projects
- certifications
- education
- social links
- CV
- email configuration

without rewriting the entire page.

---

# 35. Final Stack

```text
Frontend
├── Next.js
├── React
├── TypeScript
└── Tailwind CSS

UI
├── shadcn/ui
├── Radix UI
└── Lucide React

Motion
├── Framer Motion / Motion
└── React Bits (selectively)

Backend
├── Next.js Route Handlers
└── Nodemailer

Assets
├── next/image
├── next/font
└── public/

Deployment
└── Vercel
```
