'use client'

import styles from './contact.module.css'

import React from 'react'

import { Box, Link, Typography, Button } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import MailIcon from '@mui/icons-material/Mail'

export const Contact: React.FC<{}> = () => {
  const contacts = [
    {
      icon: GitHubIcon,
      link: 'https://github.com/andersonbosa'
    },
    {
      icon: LinkedInIcon,
      link: 'https://www.linkedin.com/in/andersonbosa/'
    },
    {
      icon: MailIcon,
      link: 'mailto:andersonbosa0@gmail.com'
    }
  ]

  return (
    <Box id="contacts" className={styles.contact}>
      <Box className={styles.wrapper}>
        <Typography variant='h1' className={styles.title}>Contact</Typography>

        <Box className={styles.content}>
          <Typography variant='body1' >
            Feel free to contact me for consulting or an interesting discussion,
            I would love to be able to help!
          </Typography>

          <Box className={styles.contactOptions}>
            {
              contacts.map(
                (contact, index) => (
                  <Link key={index} href={contact.link} target='_blank' rel='noreferrer'
                    color='primary'
                  >
                    <contact.icon fontSize='large' />
                  </Link>
                )
              )
            }
          </Box>
        </Box>

        <Box>
          <Link href='mailto:andersonbosa0@gmail.com' target='_blank' rel='noreferrer'>
            <Button className={styles.helloButton} variant='outlined' color='primary'>
              send hi
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  )
}