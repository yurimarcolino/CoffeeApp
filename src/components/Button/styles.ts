import styled from 'styled-components'

export const ButtonStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.75rem 0.5rem;

  margin-top: 2.25rem;
  width: 23rem;
  height: 2.875rem;

  background: ${(props) => props.theme['yellow-500']};
  border-radius: 0.375rem;
  border: 0;

  text-transform: uppercase;
  font-weight: bold;
  font-size: 0.875rem;
  line-height: 1.375rem;
  color: ${(props) => props.theme.white};
  transition: 0.2s;

  :hover {
    opacity: 0.85;
  }

  :disabled {
    background: ${(props) => props.theme['gray-400']};
    cursor: not-allowed;
  }
`
