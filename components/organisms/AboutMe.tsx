'use client'

import { PageSectionsID } from '@/constants'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Header from '../theme/Header'
import Section from '../theme/Section'

interface AboutMeProps { }

function AboutMe(props: AboutMeProps): React.JSX.Element {
  const t = useTranslations('AboutMe')

  const createExperienceList = (identifier: string, arr: any[]) => {
    return (
      <>
        {arr?.map(
          (tech: any, index: number) => (
            <span key={`${identifier}-${index}`} className="badge badge-outline text-sm -- cursor-pointer -- hover:badge-outline hover:badge-accent hover:animate-pulse">
              <p>{tech}</p>
            </span>
          )
        )}
      </>
    )
  }

  const recentTechnologies = [
    'JavaScript', 'Python', 'Ruby',
    'Node.js', 'TypeScript', 'React', 'Vue',
    'Docker', 'Terraform', 'BASH', 'Linux',
    'BurpSuite'
  ]

  return (
    <Section
      id={PageSectionsID.aboutMe}
      className=" w-full -- p-8 -- flex items-center justify-center content-start gap-10 -- flex-wrap lg:flex-nowrap"
    >

      <div className="w-full lg:w-[30%] -- flex justify-center items-center shrink-1 ">
        <Image
          className="mask mask-squircle object-cover -- w-[40%] lg:w-[40%] max-w-[256px] min-w-[200px] -- dark:border dark:border-"
          src={'https://github.com/andersonbosa.png'}
          height={256}
          width={256}
          style={{ color: 'transparent' }}
          alt="Perfil image"
        />
      </div>

      <div className="w-full lg:w-1/2 lg:max-w-[600px] -- basis-9/12 grow -- text-center  ">
        <Header>{t('title')}</Header>
        <p className="text-justify">{t('aboutMeContent')}</p>

        <section className="text-justify">
          <br />
          <p>{t('recentTechnologies')}</p>
          <br />
          {<div className='flex flex-wrap gap-2 -- justify-center md:justify-start'>
            {createExperienceList('', recentTechnologies)}
          </div>}
        </section>
      </div>
    </Section>
  )
}

export default AboutMe
