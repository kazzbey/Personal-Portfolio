# DESIGN PROMPT — Muhammad Khuzaima Portfolio

## Role

Act as a **Senior UI/UX Designer, Visual Designer, Interaction Designer, and Creative Frontend Designer**.

Design a premium personal portfolio for:

- **Name:** Muhammad Khuzaima
- **Primary Role:** Frontend Developer
- **Location:** Lahore, Pakistan
- **Secondary Strength:** Data Analytics & Business Intelligence

Use the attached portfolio screenshot as the **primary visual reference**. Recreate its visual language, hierarchy, spacing, composition, dark aesthetic, purple accent system, cards, hero treatment, and section rhythm, while making the result an original implementation tailored to Muhammad Khuzaima.

Do not copy the reference's fictional identity or claims.

---

## 1. Design Goal

The website should feel:

- Premium
- Modern
- Minimal
- Technical
- Professional
- Futuristic
- Trustworthy
- Human
- Fast and uncluttered

Visual inspiration:

- modern SaaS websites
- Vercel-style minimalism
- developer portfolios
- premium agency websites
- modern analytics dashboards

Avoid:

- generic Bootstrap-template appearance
- excessive neon/gaming styling
- cluttered dashboards
- excessive glassmorphism
- unnecessary animations
- fake statistics
- generic AI-generated copy

---

## 2. Content Direction

The resume is the factual source of truth.

Primary positioning:

> Frontend Developer

Secondary positioning:

> Data Analytics & Business Intelligence

The design should communicate:

1. Who Muhammad Khuzaima is
2. What he builds
3. His frontend capabilities
4. His analytics capabilities
5. His projects
6. His education
7. His certifications
8. His availability for internship, freelance, or remote opportunities

Do not visually position him as a senior developer or claim experience not supported by the resume.

---

## 3. Visual System

### Background

Use a near-black/navy foundation:

```css
--background: #030712;
--background-secondary: #050816;
--surface: #0b1220;
--surface-secondary: #0f172a;
```

Create subtle atmosphere using:

- radial purple glows
- low-opacity blue/purple gradients
- faint grid patterns
- small dot/star details
- soft blurred light
- optional subtle noise

The background must remain understated.

### Accent

Use violet/indigo as the primary accent:

```css
--primary: #7c3aed;
--primary-light: #8b5cf6;
--secondary: #6366f1;
```

Use gradients sparingly:

```text
purple → indigo
```

### Text

```css
--foreground: #f8fafc;
--muted: #94a3b8;
--muted-dark: #64748b;
--border: rgba(255, 255, 255, 0.08);
```

---

## 4. Typography

Use a modern sans-serif such as:

- Inter
- Manrope

Hierarchy:

### Hero heading

Very large, bold, high contrast.

### Section headings

Strong and compact.

### Body

Muted, readable, comfortable line height.

Use gradient/accent text only for key words such as the name or primary role.

---

## 5. Navbar Design

Create a sticky navbar inspired by the reference.

### Desktop

```text
[Logo]    Home   About   Skills   Projects   Certifications   Education   Contact    [Let's Talk]
```

### Logo

Use an identity such as:

```text
< /> Khuzaima
```

or:

```text
Khuzaima.
```

### Interaction

- transparent at the top
- backdrop blur
- stronger surface after scroll
- subtle bottom border on scroll
- active section indicator
- smooth anchor transitions
- mobile navigation drawer

Keep the navbar compact and elegant.

---

## 6. Hero Design

Use a two-column desktop composition.

### Left

Eyebrow:

```text
FRONTEND DEVELOPER
```

Headline:

```text
Hi, I'm
Muhammad Khuzaima
```

Supporting line:

```text
I build responsive experiences for the web.
```

Supporting text should reflect the resume:

```text
I'm a BSCS student and aspiring Frontend Developer focused on building
responsive, user-friendly web experiences with modern web technologies.
```

CTAs:

```text
View My Work →
Download CV ↓
```

Optional:

```text
Let's Connect →
```

### Right

Use:

```text
/public/profile.png
```

Create:

- circular/organic purple halo
- gradient backplate
- subtle shadow
- decorative dots/grid
- floating code card
- subtle motion/parallax

Do not distort or alter the profile image.

---

## 7. Hero Code Card

Use a small floating code-editor style card.

Example:

```ts
const developer = {
  name: "Muhammad Khuzaima",
  role: "Frontend Developer",
  skills: ["HTML", "CSS", "JavaScript"],
  focus: "Responsive Web Experiences",
};
```

Styling:

- dark editor surface
- tiny window controls
- syntax-like color treatment
- thin border
- soft shadow
- subtle hover/floating animation

---

## 8. Technology Strip

Below the hero, show:

```text
TECHNOLOGIES I WORK WITH
```

Show a curated subset rather than every skill.

Recommended hero technologies:

- HTML
- CSS
- JavaScript
- Bootstrap
- Power BI
- Excel
- SQL
- Git
- GitHub
- Vercel

Use recognizable icons and simple labels.

---

## 9. About Design

Use a two-column layout inspired by the screenshot.

### Left

Eyebrow:

```text
ABOUT ME
```

Heading:

```text
I'm passionate about creating
digital solutions.
```

Body:

Explain the combination of:

- frontend development
- responsive UI
- user-friendly experiences
- data analytics
- practical web solutions
- BSCS studies

CTA:

```text
More About Me →
```

### Right

Instead of fictional reference statistics, use factual cards:

```text
3.36
Current CGPA

4th
Semester

2028
Expected Graduation

3
Featured Projects
```

The cards should feel like compact dashboard metrics.

Do not use:

- years of experience
- client counts
- satisfaction percentages
- revenue
- invented achievements

---

## 10. Skills Design

Create a visually rich Skills section.

Heading:

```text
MY SKILLS

Technologies I Work With
```

Use grouped cards.

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

Do **not** show fake skill percentages.

Use:

- badges
- icons
- category cards
- animated chips
- visual grouping
- non-numeric proficiency treatment

---

## 11. Projects Design

Use a three-card featured project grid inspired by the reference.

Heading:

```text
FEATURED PROJECTS

Some of My Recent Work
```

### Project 01

**CRM/ERP SaaS Website**

Technologies:

```text
HTML
CSS
JavaScript
Bootstrap
Vercel
```

Visual:

- polished SaaS landing-page thumbnail
- project number
- title
- description
- technology badges
- View Project
- Live Demo placeholder
- GitHub placeholder

### Project 02

**Power BI Business Dashboards**

Technologies:

```text
Power BI
DAX
Data Analytics
```

Visual:

- dashboard-style thumbnail
- KPI cards
- charts
- filters/slicers aesthetic

### Project 03

**Nike Sales Dashboard**

Technologies:

```text
Power BI
Excel
```

Visual:

- sales analytics dashboard
- charts
- regional performance
- units/profit visual language

### Card interactions

On hover:

- slight lift
- image zoom
- subtle border glow
- arrow translation
- gradient overlay

Do not over-animate.

---

## 12. Certifications Design

Create a polished Certifications section.

Heading:

```text
CERTIFICATIONS

Learning & Credentials
```

Cards:

1. **Data Science and Analytics** — HP LIFE — Sep 2025
2. **Data Analytics and Business Intelligence** — DigiSkills — Nov 2025
3. **WordPress Development** — Hadi E-Learning — Jan 2026
4. **Microsoft Power BI** — Hadi E-Learning — Sep 2025

Use:

- provider
- title
- date
- certificate-style icon
- subtle hover interaction

Do not invent certificate IDs.

---

## 13. Education Design

Use a timeline or stacked-card composition.

### Punjab University

```text
Bachelor of Science in Computer Science
Lahore, Pakistan
4th Semester
CGPA: 3.36
Expected: 2028
```

Coursework:

```text
OOP
Data Structures
DBMS
Web Development
Statistics
Data Analytics
```

### Govt Islamia Graduate College Civil Lines

```text
ICS — Intermediate of Computer Science
2024
944/1200
78.6%
```

Use timeline markers or premium cards.

---

## 14. Contact CTA Design

Create a strong bottom CTA.

Eyebrow:

```text
LET'S WORK TOGETHER
```

Heading:

```text
Have a project in mind?
```

Body:

```text
I'm open to internship, freelance, and remote opportunities.
Let's build something useful together.
```

CTA:

```text
Let's Talk →
```

---

## 15. Contact Form Design

Fields:

```text
Name
Email
Subject
Message
Send Message
```

Use a polished dark form surface.

States:

```text
Sending...
Message sent successfully.
Something went wrong. Please try again.
```

Add:

- inline validation
- clear focus states
- input icons only where useful
- accessible labels
- restrained success/error feedback

---

## 16. Footer Design

Use a compact dark footer.

Include:

```text
Muhammad Khuzaima
Frontend Developer
```

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

Socials:

- GitHub
- LinkedIn
- Email

Footer text:

```text
© [Current Year] Muhammad Khuzaima. All rights reserved.
```

---

## 17. Responsive Art Direction

### 320–425px

- single-column hero
- compact profile image
- stacked buttons where necessary
- one-column project cards
- wrapped skill badges
- compact navbar drawer

### 768px

- balanced tablet layouts
- two-column sections where space permits

### 1024px+

- full desktop composition
- generous whitespace
- three-column project grid

Never allow horizontal overflow.

---

## 18. Motion Direction

Use Framer Motion for subtle premium motion.

Recommended:

- hero fade/slide entrance
- text stagger
- profile float
- project reveal
- skills reveal
- navbar transition
- mobile menu animation
- hover micro-interactions

Respect:

```text
prefers-reduced-motion
```

Animations should enhance hierarchy rather than become the feature.

---

## 19. Design Quality Rules

The final design must:

- use consistent spacing
- maintain a clear visual grid
- use a consistent border radius
- have strong contrast
- avoid excessive gradients
- avoid excessive glow
- keep text concise
- prioritize readability
- feel handcrafted
- feel production-ready

The reference screenshot is inspiration, not content.

---

## 20. Reference Details That Must NOT Be Copied

Do not use these fictional details:

```text
Alex
4+ Years Experience
50+ Projects Completed
30+ Happy Clients
100% Client Satisfaction
Sarah Johnson
CEO, TechStart
alex@alexdev.com
+1 (555) 123-4567
React.js
Next.js
Node.js
Tailwind CSS
```

Use Muhammad Khuzaima's actual resume content instead.

---

## 21. Profile Asset

Use:

```text
/public/profile.png
```

Requirements:

- preserve proportions
- keep face clear
- no facial modification
- responsive
- optimized with next/image
- high visual prominence in hero

---

## 22. Final Design Outcome

The final site should visually communicate:

> **Muhammad Khuzaima — Frontend Developer building responsive, practical, user-friendly digital experiences with an additional strength in data analytics.**
