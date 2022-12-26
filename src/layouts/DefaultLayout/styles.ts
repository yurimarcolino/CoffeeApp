import styled from 'styled-components'

export const LayoutContainer = styled.div`
  margin: 0 35rem;
  padding: 0 10rem;

  width: 1440px;
  height: 100%;

  background: ${(props) => props.theme['gray-100']};

  display: flex;
  flex-direction: column;
`
