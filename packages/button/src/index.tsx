import React from 'react'
import styled from 'styled-components'

export interface ButtonProps {
  children?: React.ReactNode
}

const ButtonComponent = styled.button`
  background-color: #115088;
  border: 0;
  border-radius: 0.25rem;
  color: #FFFFFF;
  cursor: pointer;
  padding: 0.5rem 1rem;
`

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ children }, ref) => {
  return (
    <ButtonComponent ref={ ref }>
      { children }
    </ButtonComponent>
  )
});

export default Button;
