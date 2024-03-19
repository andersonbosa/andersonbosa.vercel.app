import Footer from '@/components/atoms/Footer'
import ScrollerController from '@/components/atoms/ScrollController'
import Navbar from '@/components/molecules/Navbar'
import AboutMe from '@/components/organisms/AboutMe'
import ContactMe from '@/components/organisms/ContactMe'
import Hero from '@/components/organisms/Hero'

// import dynamic from 'next/dynamic'
// const Hero = dynamic(() => import('@/components/organisms/Hero'), { ssr: false })
// const AboutMe = dynamic(() => import('@/components/organisms/AboutMe'), { ssr: false })
// const ContactMe = dynamic(() => import('@/components/organisms/ContactMe'), { ssr: false })
// const UnderConstruction = dynamic(() => import('@/components/atoms/UnderConstruction'), { ssr: false })

export default function IndexPage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-between">
        <Hero />
        <AboutMe />
        <ContactMe />
      </main>
      <ScrollerController />
      <Footer />
    </>
  )
}
