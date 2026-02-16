import FadeInSection from '../components/FadeInSection'
import Hero from '../components/Hero'
import ProblemSolution from '../components/ProblemSolution'
import SolutionsOverview from '../components/SolutionsOverview'
import HowItWorks from '../components/HowItWorks'
import WhyAcube from '../components/WhyAcube'
import ContactForm from '../components/ContactForm'
import ContactReassurance from '../components/ContactReassurance'
import StickyMobileCTA from '../components/StickyMobileCTA'

export default function Landing() {
  return (
    <>
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
