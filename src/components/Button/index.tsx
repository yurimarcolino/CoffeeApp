import { ButtonHTMLAttributes, HtmlHTMLAttributes } from 'react'
import { ButtonStyled } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  content: string
}

export function Button({ content, ...rest }: ButtonProps) {
  return <ButtonStyled {...rest}>{content}</ButtonStyled>
}
