'use client'

import styles from './contact.module.css'

import React from 'react'

import { Box, Button, Link, Typography } from '@mui/material'
import { contacts } from '../../constants'
import Title from '../title'

export const Contacts: React.FC<{}> = () => {
  return (
    <Box id="contacts" className={styles.contact}>
      <Box className={styles.wrapper}>
        <Title>Contact</Title>
        <br />
        <Box className={styles.content}>
          <Typography variant='body1' >
            Feel free to contact me for consulting or an interesting discussion,
            I would love to be able to help!
          </Typography>
          <Box className={styles.contactOptions}>
            {
              contacts.map(
                (contact, index) => (
                  <Link key={index} href={contact.link} sx={{ scale: '1.3' }} className={styles.option} target='_blank' rel='noreferrer'>
                    <contact.icon fontSize='large' />
                  </Link>
                )
              )
            }
          </Box>
          <Box>
            <Link href='mailto:andersonbosa0@gmail.com' target='_blank' rel='noreferrer'>
              <Button className={styles.helloButton} variant='outlined' color='primary'>
                say hi
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}