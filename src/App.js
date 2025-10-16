import React from 'react';
import {
  Header,
  Hero,
  ProblemSection,
  SystemsSection,
  FeatureSection,
  WorkflowsSection,
  TestimonialSection,
  EnterpriseSection,
  DeploymentSection,
  CTASection,
  TeamSection,
  ContactSection,
  Footer
} from './components/sections';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <ProblemSection />
      <SystemsSection />
      <FeatureSection />
      <WorkflowsSection />
      <TestimonialSection />
      <EnterpriseSection />
      <DeploymentSection />
      <CTASection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;