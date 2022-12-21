import styled from 'styled-components'

export const LayoutContainer = styled.div`
  margin: 0 auto;
  padding: 0 10rem;
  max-width: 90rem;
  max-height: 63.3125rem;

  background: ${(props) => props.theme['gray-100']};

  display: flex;
  flex-direction: column;
`
