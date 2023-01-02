import styled from 'styled-components'

export const FormPaymentContainerStyled = styled.div`
  display: flex;
  flex-direction: column;

  width: 40rem;
  height: 12.9375rem;
  padding: 2.5rem;
  margin-top: 12px;

  background-color: ${(props) => props.theme['gray-200']};
  border-radius: 0.375rem;
`

export const FormHeaderStyled = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.125rem;

  svg {
    margin-right: 0.5rem;
  }

  .Title {
    line-height: 1.3125rem;
    color: ${(props) => props.theme['brown-600']};
  }

  .Subtitle {
    font-size: 0.875rem;
    line-height: 1.125rem;
    color: ${(props) => props.theme['brown-400']};
  }
`
export const FormFieldsStyled = styled.div`
  display: inline-flexbox;
  margin-top: 2rem;

  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    padding: 1rem;
    width: 11.125rem;
    height: 3.1875rem;
    margin-right: 0.75rem;

    background: ${(props) => props.theme['gray-300']};
    border-radius: 0.375rem;
    border: 0;

    svg {
      margin-right: 0.75rem;
    }

    font-size: 0.75rem;
    text-transform: uppercase;
    color: ${(props) => props.theme['brown-400']};
  }

  button:focus {
    background: #ebe5f9;
    border: 1px solid #8047f8;
  }
`
