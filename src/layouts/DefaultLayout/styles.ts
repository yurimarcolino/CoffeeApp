import styled from 'styled-components'

export const LayoutContainer = styled.div`
  margin: 0 auto;
  padding: 0 10rem;

  width: 100vh;
  height: 100vh;

  background: ${(props) => props.theme['gray-100']};

  display: flex;
  flex-direction: column;
  align-items: center;
`
