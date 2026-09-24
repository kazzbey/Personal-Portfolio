# PRD — Muhammad Khuzaima Portfolio Website

## 1. Product Overview

### Product Name

**Muhammad Khuzaima — Developer Portfolio**

### Product Type

Personal professional portfolio website.

### Primary Goal

Present Muhammad Khuzaima as a **Frontend Developer** through a premium, responsive, interactive website that showcases:

- frontend skills
- projects
- data analytics capabilities
- education
- certifications
- contact information
- availability for opportunities

### Secondary Goal

Provide a professional conversion path for:

- internship opportunities
- freelance work
- remote opportunities
- professional networking

The resume explicitly states that Muhammad Khuzaima is seeking internship, freelance, or remote opportunities.

---

# 2. Source of Truth

Use `Resume.pdf` as the factual source of truth.

### Personal Information

- Name: Muhammad Khuzaima
- Role: Frontend Developer
- Location: Lahore, Pakistan
- Phone: +92 332 4700225
- Email: khuzaimam335@gmail.com
- LinkedIn: linkedin.com/in/muhammadkhuzaimadev
- GitHub: github.com/MUHAMMAD-KHUZAIMA18
- Website: muhammadkhuzaima.dev

### Summary

Aspiring Frontend Developer and BSCS student (CGPA 3.36) with hands-on experience building responsive, user-friendly websites using HTML, CSS, JavaScript, and Bootstrap. Proficient in data analytics with Power BI, Excel, and SQL. Seeking internship, freelance, or remote opportunities to build practical web-based and data-driven solutions.

---

# 3. Target Audience

The portfolio should serve:

### Primary

- recruiters
- hiring managers
- startup founders
- freelance clients
- internship coordinators
- developers/professionals reviewing work

### Secondary

- university/professional network
- potential collaborators
- technical community

The information hierarchy should allow a visitor to understand the developer's identity and capabilities within a few seconds.

---

# 4. Product Positioning

### Primary Identity

**Frontend Developer**

### Supporting Strength

**Data Analytics & Business Intelligence**

The product must not position Muhammad Khuzaima as:

- senior developer
- experienced agency owner
- full-time employee at an invented company
- expert in technologies absent from the resume

---

# 5. Core User Journey

```text
Landing
  ↓
Understand who Muhammad is
  ↓
View capabilities
  ↓
Review projects
  ↓
Review certifications / education
  ↓
Build confidence
  ↓
Contact / opportunity inquiry
```

---

# 6. Information Architecture

The main page should contain:

```text
Navbar
Hero
Technology Strip
About
Skills
Featured Projects
Certifications
Education
Contact CTA
Contact Form
Footer
```

---

# 7. Functional Requirements

## FR-01 — Navbar

The navbar must:

- remain accessible while scrolling
- support anchor navigation
- highlight the active section
- become visually stronger after scroll
- provide a responsive mobile menu

Navigation:

```text
Home
About
Skills
Projects
Certifications
Education
Contact
```

---

## FR-02 — Hero

The hero must contain:

- eyebrow
- name
- primary role
- supporting statement
- CTA buttons
- profile PNG
- decorative visual
- optional code card

### Hero CTA

Primary:

```text
View My Work
```

Secondary:

```text
Download CV
```

Optional:

```text
Let's Connect
```

---

## FR-03 — Profile Image

Use:

```text
/public/profile.png
```

Requirements:

- responsive
- optimized
- no distortion
- accessible alt text
- loaded with appropriate priority because it is a hero asset

---

## FR-04 — Technology Strip

Display a curated group of technologies.

Primary candidates:

```text
HTML
CSS
JavaScript
Bootstrap
Power BI
Excel
SQL
Git
GitHub
Vercel
```

---

## FR-05 — About

Show:

- professional summary
- frontend focus
- data analytics strength
- BSCS student status
- opportunity availability

Use factual metric cards:

```text
3.36 — Current CGPA
4th — Semester
2028 — Expected Graduation
3 — Featured Projects
```

The project metric refers specifically to the three projects listed in the portfolio, not a total career-project count.

---

## FR-06 — Skills

The Skills section must support grouped categories.

### Frontend

- HTML
- CSS
- JavaScript
- Bootstrap
- Responsive Web Design

### Data Analytics

- Power BI
- Microsoft Excel
- Power Query
- Google Analytics

### Databases

- SQL
- MySQL
- MongoDB

### Programming

- C++
- Python
- Java

### Tools

- Git
- GitHub
- VS Code
- Vercel
- ChatGPT
- Claude Code
- GitHub Copilot

Do not display unsupported proficiency percentages.

---

## FR-07 — Projects

The portfolio must contain these three featured projects.

### Project 1

**CRM/ERP SaaS Website**

Stack:

```text
HTML
CSS
JavaScript
Bootstrap
Vercel
```

Features shown in project description:

- landing page
- services
- industry solutions
- contact page
- login UI
- responsive desktop/mobile design

### Project 2

**Power BI Business Dashboards**

Stack:

```text
Power BI
DAX
Data Analytics
```

Covers:

- Pizza Sales
- Chocolate Sales
- SaaS business analytics
- revenue
- expenses
- profit
- customer trends
- product categories
- monthly/quarterly performance
- KPI cards
- charts
- slicers
- filters

### Project 3

**Nike Sales Dashboard**

Stack:

```text
Power BI
Excel
```

Covers:

- operating profit
- units sold
- regional performance
- monthly sales trends

---

# 8. Project Interaction Requirements

Each project card should support:

- title
- number
- summary
- technology badges
- thumbnail
- live URL
- GitHub URL

Where URLs are unavailable, use placeholders rather than invented URLs.

Possible placeholder:

```text
TODO: Add live URL
TODO: Add GitHub URL
```

Project hover interaction:

- lift
- subtle image zoom
- animated arrow
- subtle border effect

---

# 9. Certifications

Show these certifications:

| Certification | Provider | Date |
|---|---|---|
| Data Science and Analytics | HP LIFE | Sep 2025 |
| Data Analytics and Business Intelligence | DigiSkills | Nov 2025 |
| WordPress Development | Hadi E-Learning | Jan 2026 |
| Microsoft Power BI | Hadi E-Learning | Sep 2025 |

No fake certificate IDs.

---

# 10. Education

## Punjab University

- Bachelor of Science in Computer Science
- Lahore, Pakistan
- 4th Semester
- CGPA: 3.36
- Expected: 2028

Coursework:

- OOP
- Data Structures
- DBMS
- Web Development
- Statistics
- Data Analytics

## Govt Islamia Graduate College Civil Lines

- ICS — Intermediate of Computer Science
- 2024
- 944/1200
- 78.6%

---

# 11. Contact

Create a contact section and form.

### Contact Information

- Email: khuzaimam335@gmail.com
- Phone: +92 332 4700225
- LinkedIn: linkedin.com/in/muhammadkhuzaimadev
- GitHub: github.com/MUHAMMAD-KHUZAIMA18

### Form Fields

```text
Name
Email
Subject
Message
```

### Submission

Send form submissions to:

```text
khuzaimam335@gmail.com
```

Use the Next.js API route:

```text
POST /api/contact
```

Use Nodemailer on the server.

---

# 12. Contact Form Acceptance Criteria

The form is complete only when:

- all required fields validate
- invalid email is rejected
- empty message is rejected
- loading feedback is shown
- successful submission provides feedback
- failure provides feedback
- SMTP credentials are server-side only
- no credentials are exposed to the browser
- spam protection is present
- API errors are handled gracefully

---

# 13. Footer Requirements

Footer must include:

- name
- role
- navigation
- GitHub
- LinkedIn
- email
- current year

Copyright:

```text
© [CURRENT YEAR] Muhammad Khuzaima. All rights reserved.
```

---

# 14. Responsive Requirements

Minimum supported widths:

```text
320px
375px
425px
768px
1024px
1280px
1440px
1920px
```

Acceptance criteria:

- no horizontal scrolling
- no overlapping sections
- no clipped buttons
- readable text at all widths
- project cards adapt correctly
- forms remain usable
- mobile menu is accessible
- profile image remains proportional

---

# 15. Animation Requirements

Use animation for:

- hero entrance
- section reveal
- navbar transitions
- project cards
- skills
- mobile navigation
- button micro-interactions

All animation must respect:

```text
prefers-reduced-motion
```

Animations must not block content or significantly hurt performance.

---

# 16. Accessibility Requirements

Must include:

- semantic HTML
- correct heading hierarchy
- keyboard navigation
- visible focus states
- accessible labels
- accessible mobile navigation
- meaningful image alt text
- sufficient color contrast
- reduced-motion support

---

# 17. SEO Requirements

### Page Title

```text
Muhammad Khuzaima | Frontend Developer
```

### Meta Description

```text
Frontend Developer and BSCS student building responsive web experiences
and practical data-driven solutions.
```

Also implement:

- canonical URL
- Open Graph metadata
- Twitter metadata
- robots metadata
- favicon

Canonical:

```text
https://muhammadkhuzaima.dev
```

---

# 18. Performance Requirements

Use:

- `next/image`
- optimized images
- lazy loading where appropriate
- server components by default
- client components only where necessary
- optimized animation
- no unnecessary libraries
- no blocking decorative scripts

Target:

- fast first load
- minimal layout shift
- smooth scrolling
- efficient mobile performance

---

# 19. Data Architecture

Create:

```text
data/portfolio.ts
```

Centralize:

- personal details
- navigation
- skills
- projects
- certifications
- education
- social links
- CTA configuration
- CV path
- project URLs

Example structure:

```ts
export const portfolio = {
  person: {...},
  skills: {...},
  projects: [...],
  certifications: [...],
  education: [...],
  social: [...],
};
```

---

# 20. Placeholder Policy

Allowed placeholders:

```text
TODO: Add GitHub URL
TODO: Add Live Demo URL
TODO: Add project screenshot
TODO: Add CV
```

Do not invent:

- testimonials
- client names
- years of experience
- project counts
- employers
- performance percentages
- social accounts

---

# 21. Non-Functional Requirements

The site must be:

- maintainable
- componentized
- responsive
- accessible
- SEO-friendly
- deployment-ready
- secure
- visually consistent
- easy to update

---

# 22. Definition of Done

The product is complete when:

- all sections are implemented
- all factual resume information is correctly represented
- no fictional reference content remains
- profile image works
- project cards work
- contact form works end-to-end
- Nodemailer integration is secure
- mobile menu works
- responsive layouts work
- animations work
- SEO metadata exists
- accessibility requirements are addressed
- TypeScript/build checks pass
- application is ready for Vercel deployment
