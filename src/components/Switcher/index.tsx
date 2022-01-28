import { useContext } from 'react';
import { BsMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';

import { useTheme } from '../../hooks/useTheme';
import { SwitchWrapper } from './styles';

export function Switcher() {
  const { colors, title } = useContext(ThemeContext);
  const { state } = useTheme();

  function toggleTheme() {
    state.setSave(true);
    state.setTheme(state.theme === 'dark' ? 'light' : 'dark');
  }

  return (
    <SwitchWrapper>
      <Switch
        onChange={() => toggleTheme()}
        checked={title === 'dark'}
        offColor={colors.switcher_background}
        onColor={colors.switcher_background}
        uncheckedIcon={
          <div className="moonIcon">
            <BsMoonStarsFill color={colors.switcher_icon} size={17} />
          </div>
        }
        checkedIcon={
          <div className="sunIcon">
            <BsFillSunFill color={colors.switcher_icon} size={19} />
          </div>
        }
        height={25}
        handleDiameter={19}
      />
    </SwitchWrapper>
  );
}
