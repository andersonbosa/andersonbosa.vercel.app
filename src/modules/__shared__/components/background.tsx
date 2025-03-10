'use client'

import { Box } from '@mui/material'
import { useEffect, useMemo, useState } from 'react'

import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from '@tsparticles/engine'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadFull } from 'tsparticles'
import { useCustomTheme } from '../contexts/theme.context'

interface BackgroundProps {
  useBackgroundParticles?: boolean
}

export const Background: React.FC<BackgroundProps> = ({
  useBackgroundParticles = true
}) => {
  const { theme } = useCustomTheme()
  const [init, setInit] = useState(false)

  useEffect(
    () => {
      initParticlesEngine(async (engine) => {
        await loadFull(engine)
      })
        .then(() => { setInit(true) })
    },
    []
  )

  const particlesLoaded = async (container?: Container): Promise<void> => { }

  const linksColor = '#ff8952'
  const lightBackgroundColor = '#ebebeb'
  const darkBackgroundColor = '#363636'

  /**
   * @see {link} Find all configuration options here. - https://particles.js.org/docs/interfaces/tsParticles_Engine.Options_Interfaces_IOptions.IOptions.html
   * @see {link} You can find sample configurations here - https://github.com/tsparticles/tsparticles/tree/main/utils/configs/src
   */
  const options: ISourceOptions = useMemo(
    () => ({
      fpsLimit: 120,
      detectRetina: true,
      background: {
        color: theme.palette.mode === 'dark' ? darkBackgroundColor : lightBackgroundColor,
      },
      fullScreen: {
        enable: true,
      },
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: 'grab',
            parallax: {
              enable: true,
              smooth: 10,
              force: 50,
            },
          },
        },
        modes: {
          grab: {
            distance: 150,
            line_linked: {
              opacity: 0.075,
            },
          },
        },
      },
      particles: {
        color: {
          value: linksColor,
        },
        links: {
          color: linksColor,
          distance: 150,
          enable: true,
          opacity: 0.15,
          width: 1,
        },
        collisions: {
          enable: true,
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: {
            default: OutMode.out,
          },
          random: false,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            width: 1024,
            height: 1024,
          },
          value: 150,
        },
        opacity: {
          value: 0.075,
        },
        shape: {
          type: 'triangle',
        },
        size: {
          value: { min: 2, max: 2 },
        },
      },
    }),
    [theme],
  )

  if (!init) {
    return <></>
  }
  return (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
      }}
    >
      {
        useBackgroundParticles
        && <Particles
          id='tsparticles'
          particlesLoaded={particlesLoaded}
          options={options}
        />
      }
    </Box>
  )
}
