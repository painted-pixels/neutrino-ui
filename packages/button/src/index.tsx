import { ColorProps } from "styled-system";
import React from 'react'
import type {ThemedComponent} from '@neutrino-ui/styles'
import styled from 'styled-components'
// import {theme} from '@neutrino-ui/styles'
import {themeGet} from '@styled-system/theme-get'

export interface ButtonProps extends ColorProps {
  children?: React.ReactNode
  whatevs?: keyof ThemedComponent
}

// const buttonVariant = variant({
//   prop: 'variant',
//   scale: "buttons",
//   variants: {
//     primary: {
//       color: 'black',
//       bg: 'primary',
//     },
//     secondary: {
//       color: 'white',
//       bg: 'secondary',
//     },
//   },
// })

// const get = (key: string) => {
//   const color = themeGet(key, getKey(theme, key))
//   console.log('COLOR', color)
//   return  color;
// }

const ButtonComponent = styled.button<ButtonProps>`
  border: 0;
  border-radius: 0.25rem;
  color: ${themeGet('colors.primary')};
  cursor: pointer;
  padding: 0.5rem 1rem;

`;

// ButtonComponent.defaultProps = {
//   whatevs: 'primary',
// }

ButtonComponent.displayName = 'Button'

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ children }, ref) => {
  return (
    <ButtonComponent ref={ ref } whatevs="primary" bg="primary">
      { children }
    </ButtonComponent>
  )
});

export default Button;
