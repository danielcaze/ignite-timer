import styled from 'styled-components'
import { ButtonVariant } from './Button'

interface ButtonContainerProps {
    variant: ButtonVariant
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
    background-color: ${(props) => props.theme.primary}
`