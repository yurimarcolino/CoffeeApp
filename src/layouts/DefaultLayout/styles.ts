import styled from 'styled-components'

export const LayoutContainer = styled.div`
  margin: 0rem auto;
  padding: 0 10rem;

  background: ${(props) => props.theme['gray-100']};

  display: flex;
  flex-direction: column;
`
