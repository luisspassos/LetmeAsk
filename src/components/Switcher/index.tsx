import { useContext } from 'react'

import Switch from 'react-switch'

import { BsMoonStarsFill, BsFillSunFill } from 'react-icons/bs'

import { ThemeContext } from 'styled-components'
import { SwitchWrapper } from './styles'
import { ToggleThemeContext } from '../../contexts/ToggleThemeContext'

export function Switcher() {

  const { colors, title } = useContext(ThemeContext)
  const toggleAndSaveTheme = useContext(ToggleThemeContext)

  return(
    <SwitchWrapper>
      <Switch 
        onChange={toggleAndSaveTheme}
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