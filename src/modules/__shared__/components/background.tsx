'use client'

import { Box, useTheme } from '@mui/material'
import { useEffect, useMemo, useState } from 'react'

import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from '@tsparticles/engine'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadFull } from 'tsparticles'

export const Background = () => {
  const currentTheme = useTheme()

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
        color: currentTheme.palette.mode === 'dark' ? darkBackgroundColor : lightBackgroundColor,
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
            distance: 130,
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
    [],
  )

  if (init) {
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
        <Particles
          id='tsparticles'
          particlesLoaded={particlesLoaded}
          options={options}
        />
      </Box>
    )
  }

  return <></>
}
