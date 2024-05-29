import dynamic from 'next/dynamic'


import Footer from '@/components/atoms/Footer'
import Navbar from '@/components/molecules/Navbar'
import AboutMe from '@/components/organisms/AboutMe'
import ContactMe from '@/components/organisms/ContactMe'
import Hero from '@/components/organisms/Hero'
import { Projects } from '@/components/organisms/Projects'
import ScrollController from '@/components/atoms/ScrollController'
// import MyExperiences from '@/components/organisms/MyExperiences'

// import dynamic from 'next/dynamic'
// const Hero = dynamic(() => import('@/components/organisms/Hero'), { ssr: false })
// const AboutMe = dynamic(() => import('@/components/organisms/AboutMe'), { ssr: false })
// const ContactMe = dynamic(() => import('@/components/organisms/ContactMe'), { ssr: false })
// const UnderConstruction = dynamic(() => import('@/components/atoms/UnderConstruction'), { ssr: false })

export default function IndexPage () {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutMe />
      <ContactMe />
      {/* <Projects /> */}
      {/* <MyExperiences /> */}
      <ScrollController />
      <Footer />
    </>
  )
}
