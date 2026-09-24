import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { TechStrip } from "@/components/tech-strip";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { Certifications } from "@/components/certifications";
import { Education } from "@/components/education";
import { ContactCta } from "@/components/contact-cta";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#030712] text-[#f8fafc] selection:bg-purple-600/30 selection:text-purple-200">
      {/* Fixed Sticky Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main id="main-content">
        <Hero />
        <TechStrip />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Education />
        <ContactCta />
        <Contact />
      </main>

      {/* Site Footer */}
      <Footer />
    </div>
  );
}
