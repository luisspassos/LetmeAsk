import { ImgHTMLAttributes } from 'react'
import LogoImg from '../../assets/images/logo.svg'
import LogoDarkImg from '../../assets/images/logo_dark.svg'

import { useTheme } from '../../hooks/useTheme';

import { StylizedLogo } from './styles';

type LogoProps = {
  maxHeight?: number;
  alignSelf?: string;
} & ImgHTMLAttributes<HTMLImageElement>

export function Logo({alignSelf, maxHeight, ...props}: LogoProps) {

  const { state } = useTheme()

  return (
    <StylizedLogo 
      alignSelf={alignSelf}
      maxHeight={maxHeight}
      src={state.theme === 'dark' ? LogoDarkImg : LogoImg} 
      alt="Letmeask"
      {...props}
    />
  )
}
