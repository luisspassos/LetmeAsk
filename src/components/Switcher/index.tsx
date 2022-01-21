import Switch from 'react-switch'

import { BsMoonStarsFill, BsFillSunFill } from 'react-icons/bs'

import { SwitchWrapper } from './styles'

export function Switcher() {
  return(
    <SwitchWrapper>
      <Switch 
        onChange={()=> {}}
        checked={false}
        offColor='#555'
        onColor='#555'
        uncheckedIcon={
          <div className='moonIcon'>
            <BsMoonStarsFill color="#F2B705" size={17} />
          </div>
        }
        checkedIcon={
          <div className='sunIcon'>
            <BsFillSunFill color="#F2B705" size={19} />
          </div>
        }
        height={25}
        handleDiameter={19}
      />
    </SwitchWrapper>
  )
}