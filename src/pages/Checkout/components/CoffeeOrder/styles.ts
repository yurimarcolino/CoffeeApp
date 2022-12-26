import styled from 'styled-components'

export const CoffeeOrderContainerStyled = styled.div`
  flex-grow: 1;
  flex-direction: column;
  padding: 2.5rem;

  width: 28rem;

  background: ${(props) => props.theme['gray-200']};
  border-radius: 0.375rem 2.75rem;
`
