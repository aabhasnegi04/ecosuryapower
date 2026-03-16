import FadeInSection from '../components/FadeInSection'
import Hero from '../components/Hero'
import ProblemSolution from '../components/ProblemSolution'
import SolutionsOverview from '../components/SolutionsOverview'
import HowItWorks from '../components/HowItWorks'
import BuiltForIndia from '../components/BuiltForIndia'
import WhyAcube from '../components/WhyAcube'
import ContactForm from '../components/ContactForm'
import ContactReassurance from '../components/ContactReassurance'
import StickyMobileCTA from '../components/StickyMobileCTA'
import SEO from '../components/SEO'

export default function Landing() {
  return (
    <>
      <SEO
        title="EcoSuryaPower - Solar Panels, Inverters & Energy Solutions in India"
        description="India's trusted solar energy brand. Premium solar panels, hybrid inverters, batteries & complete solar power systems for homes, businesses & industries. Get a free consultation today."
        keywords="solar panels India, solar inverters, hybrid solar system, solar energy solutions, residential solar, commercial solar, solar installation India, EcoSuryaPower"
        url="https://www.ecosuryapower.com/"
      />
      <Hero />
      <FadeInSection>
        <ProblemSolution />
      </FadeInSection>
      <FadeInSection>
        <SolutionsOverview />
      </FadeInSection>
      <FadeInSection>
        <HowItWorks />
      </FadeInSection>
      <BuiltForIndia />
      <FadeInSection>
        <WhyAcube />
      </FadeInSection>
      <FadeInSection>
        <ContactForm />
      </FadeInSection>
      <ContactReassurance />
      <StickyMobileCTA />
    </>
  )
}
