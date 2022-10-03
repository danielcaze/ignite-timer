import styled from 'styled-components'
import { ButtonVariant } from './Button'

interface ButtonContainerProps {
  variant: ButtonVariant
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;
  border-radius: 4px;
  border: 0;
  margin: 8px;

  background-color: ${({ theme, variant }) => theme['green-500']};
  color: ${({ theme }) => theme.white};
`
