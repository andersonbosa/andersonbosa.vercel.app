'use client'


import React, { useEffect, useState } from 'react'

interface CursorHighlightProps {
  size?: number
  color?: string
}

export const CursorHighlight: React.FC<CursorHighlightProps> = ({ size = 64, color = '#fff', }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [scale, setScale] = useState(1)


  const handleMouseMove = (e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY })
  }

  const handleMouseClick = () => {
    setScale(1.6)
    setTimeout(() => { setScale(1) }, 500)
  }

  type Bind = { eventType: string; handler: (e: any) => void }
  const binds: Bind[] = [
    { eventType: 'mousemove', handler: handleMouseMove },
    { eventType: 'click', handler: handleMouseClick },
  ]

  useEffect(() => {
    binds.forEach(
      ({ eventType, handler }) => { window.addEventListener(eventType, handler) }
    )

    return () => {
      binds.forEach(
        ({ eventType, handler }) => { window.removeEventListener(eventType, handler) }
      )
    }
  }, [])

  return (
    <div
      style={{
        position: 'fixed',
        top: position.y - size / 2,
        left: position.x - size / 2,
        scale: scale,
        width: size,
        height: size,
        transition: 'scale 500ms ease',
        borderRadius: '50%',
        backgroundColor: color,
        mixBlendMode: 'difference',
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    />
  )
}

