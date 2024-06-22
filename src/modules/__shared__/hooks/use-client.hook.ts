import { useState, useEffect } from 'react'

export const useClient = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false)
  useEffect(
    () => { setIsMounted(true) },
    []
  )
  return isMounted
}