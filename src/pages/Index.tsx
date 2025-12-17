import { ThemeProvider } from "@/hooks/useTheme";
import Navigation from "@/components/Navigation";
import Hero3D from "@/components/Hero3D";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ProfessionalSummary from "@/components/ProfessionalSummary";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ArchitectureGallery from "@/components/ArchitectureGallery";
import AwardSection from "@/components/AwardSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  return (
    <ThemeProvider>
      {/* Skip Navigation Link for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-6 focus:py-3 focus:bg-gradient-cyber focus:text-primary-foreground focus:rounded-full focus:shadow-neon"
      >
        Skip to main content
      </a>

      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <main id="main-content">
          <Hero3D />
          <Hero />
          <Services />
          <ProfessionalSummary />
          <ExperienceTimeline />
          <SkillsSection />
          <ProjectsSection />
          <ArchitectureGallery />
          <AwardSection />
          <EducationSection />
          <ContactSection />
        </main>
        <Footer />
        <Toaster />
      </div>
    </ThemeProvider>
  );
};

export default Index;
