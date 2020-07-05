import React, { useState, useEffect, useMemo } from 'react'
import { Lightbulb as OnLight } from 'styled-icons/fa-regular'
import { Lightbulb as OffLight } from 'styled-icons/fa-solid'

import { Wrapper, Button } from './styles'

export default function Toggle() {
  const [theme, setTheme] = useState(null)

  const isDarkTheme = useMemo(() => theme === 'dark')

  useEffect(() => {
    setTheme(window.__theme)

    window.__onThemeChange = () => setTheme(window.__theme)
  }, [])

  function handleClick() {
    window.__setPreferredTheme(isDarkTheme ? 'light' : 'dark')
  }

  return (
    <Wrapper>
      <Button
        type="button"
        onClick={handleClick}
        title={`Mudar para tema ${isDarkTheme ? 'light' : 'dark'}`}
      >
        {isDarkTheme ? (
          <OffLight color="#ffff00" />
        ) : (
          <OnLight color="var(--text-primary-color)" />
        )}
      </Button>
    </Wrapper>
  )
}
