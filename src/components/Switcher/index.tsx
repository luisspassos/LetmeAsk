import { useContext } from 'react'

import Switch from 'react-switch'

import { BsMoonStarsFill, BsFillSunFill } from 'react-icons/bs'

import { ThemeContext } from 'styled-components'
import { SwitchWrapper } from './styles'
import { useTheme } from '../../hooks/useTheme'

export function Switcher() {

  const { colors, title } = useContext(ThemeContext)
  const { state } = useTheme()

  function toggleTheme() {
    state.setTheme(state.theme === 'dark' ? 'light' : 'dark')
    state.setSave(true)
  }

  return(
    <SwitchWrapper>
      <Switch 
        onChange={toggleTheme}
        checked={title === 'dark'}
        offColor={colors.switcher_background}
        onColor={colors.switcher_background}
        uncheckedIcon={
          <div className='moonIcon'>
            <BsMoonStarsFill color={colors.switcher_icon} size={17} />
          </div>
        }
        checkedIcon={
          <div className='sunIcon'>
            <BsFillSunFill color={colors.switcher_icon} size={19} />
          </div>
        }
        height={25}
        handleDiameter={19}
      />
    </SwitchWrapper>
  )
}