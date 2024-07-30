'use client'

import { Button, useColorMode } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { useTheme } from '../contexts/ThemeContext'

const ThemeToggle: React.FC = () => {
  const { toggleTheme, isDark } = useTheme()
  const { toggleColorMode } = useColorMode()

  const handleToggle = () => {
    toggleTheme()
    toggleColorMode()
  }

  return (
    <Button onClick={handleToggle}>
      {isDark ? <SunIcon /> : <MoonIcon />}
    </Button>
  )
}

export default ThemeToggle