interface JobExperience {
  jobTitle: string
  seniority: string
  description: string
  skills: string[]
  dates: {
    start: Date
    end: Date | null
  }
  company: {
    title: string
    logo: string
  }
}


function sortExperiencesByEndDate (experiences: JobExperience[]): JobExperience[] {
  return experiences.sort((a, b) => {
    const endDateA = a.dates.end ? a.dates.end.getTime() : Infinity
    const endDateB = b.dates.end ? b.dates.end.getTime() : Infinity
    return endDateA - endDateB
  })
}

export const experiencesTimeline: JobExperience[] = [
  {
    jobTitle: 'Fullstack Developer',
    seniority: 'junior',
    description: '',
    skills: [],
    dates: {
      start: new Date('2019-08-05'),
      end: new Date('2021-07-01'),
    },
    company: {
      title: 'Linx Impulse',
      logo: '/images/logo-linx-impulse.png',
    },
  },

  {
    jobTitle: 'Penetration Tester',
    seniority: 'junior',
    description: '',
    skills: [],
    dates: {
      start: new Date('2021-08-05'),
      end: new Date('2022-07-01'),
    },
    company: {
      title: 'Conviso Application Security',
      logo: '/images/logo-conviso.svg',
    },
  },

  {
    jobTitle: 'Backend Software Engineer',
    seniority: 'middle',
    description: '',
    skills: [],
    dates: {
      start: new Date('2022-07-01'),
      end: new Date('2023-10-01'),
    },
    company: {
      title: 'Conviso Application Security',
      logo: '/images/logo-conviso.svg',
    },
  },

  {
    jobTitle: 'Software Engineer',
    seniority: 'middle',
    description: '',
    skills: [],
    dates: {
      start: new Date('2024-04-01'),
      end: null,
    },
    company: {
      title: 'ABRH LTDA',
      logo: '/images/logo-abrh.png',
    },
  },
]
