'use client'

import React, { useEffect, useState } from 'react'
import { isMobile } from '../@helpers/is-mobile.helper'

type CursorHighlightBind = {
  eventType: string
  handler: (e: any) => void
}

interface CursorHighlightProps {
  size?: number
  color?: string
}

const MAX_CURSOR_SCALE = 2

export const CursorHighlight: React.FC<CursorHighlightProps> = ({ size = 64, color = '#fff', }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [scale, setScale] = useState(1)

  const handleMouseMove = (e: MouseEvent): void => {
    setPosition({ x: e?.clientX, y: e?.clientY })
  }

  const binds: CursorHighlightBind[] = [
    { eventType: 'mousemove', handler: handleMouseMove },
    { eventType: 'mousedown', handler: () => setScale(MAX_CURSOR_SCALE) },
    { eventType: 'mouseup', handler: () => setScale(1) }
  ]

  useEffect(
    () => {
      binds.forEach(
        ({ eventType, handler }) => { window.addEventListener(eventType, handler) }
      )

      return () => {
        binds.forEach(
          ({ eventType, handler }) => { window.removeEventListener(eventType, handler) }
        )
      }
    },
    []
  )

  if (isMobile()) {
    return (<></>)
  }

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
        zIndex: 999,
      }}
    />
  )
}

