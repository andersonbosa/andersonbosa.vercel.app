'use client'

import { Box, Chip } from '@mui/material'
import React, { useState } from 'react'

interface SlidingBadgesProps {
  items: string[]
}

const getRandomPosition = () => {
  const min = 10
  const max = 90
  return `${Math.floor(Math.random() * (max - min + 1)) + min}%`
}

const initialPositions = (length: number) => {
  return Array.from({ length }, () => ({
    top: getRandomPosition(),
    left: getRandomPosition(),
  }))
}

// const predefinedPositions = [
//   { top: '10%', left: '10%' },
//   { top: '10%', left: '40%' },
//   { top: '10%', left: '70%' },
//   { top: '40%', left: '10%' },
//   { top: '40%', left: '40%' },
//   { top: '40%', left: '70%' },
//   { top: '70%', left: '10%' },
//   { top: '70%', left: '40%' },
//   { top: '70%', left: '70%' },
// ]

export const SlidingBadges: React.FC<SlidingBadgesProps> = ({ items }) => {
  const [positions, setPositions] = useState(initialPositions(items.length))

  const handleMouseEnter = (index: number) => {
    setPositions((prevPositions) =>
      prevPositions.map((pos, i) =>
        i === index
          ? { top: getRandomPosition(), left: getRandomPosition() }
          : pos
      )
    )
  }

  /* TODO TROCAR ITEMS DE POSIÇÕES POR OUTRAS CONHECIDAS */
  // const [positions, setPositions] = useState(predefinedPositions.slice(0, items.length))
  // const handleMouseEnter = (index: number) => {
  //   setPositions((prevPositions) => {
  //     const newPositions = [...prevPositions]
  //     const swapIndex = (index + 1) % items.length
  //     const temp = newPositions[index]
  //     newPositions[index] = newPositions[swapIndex]
  //     newPositions[swapIndex] = temp
  //     return newPositions
  //   })
  // }

  return (
    <Box sx={{ position: 'relative', height: '200px', width: '100%' }}>
      {items.map((item, index) => (
        <Chip
          key={item}
          label={item}
          onMouseEnter={() => handleMouseEnter(index)}
          sx={{
            position: 'absolute',
            top: positions[index].top,
            left: positions[index].left,
            transition: 'top 0.5s, left 0.5s',
          }}
        />
      ))}
    </Box>
  )
}

