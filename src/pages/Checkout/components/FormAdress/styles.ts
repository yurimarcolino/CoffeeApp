import styled from 'styled-components'

export const FormAdressContainerStyled = styled.div`
  width: 40rem;
  height: 23.25rem;
  padding: 2.5rem;

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
  display: flex;
  flex-direction: column;
  margin-top: 2rem;

  #postalCode {
    width: 12.5rem;
  }
  #streetAdress {
    width: 100%;
  }

  .ComplementContainer {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    position: relative;

    #number {
      width: 12.5rem;
    }

    #complement {
      width: 21.75rem;
    }
  }

  .ComplementContainer:after {
    position: absolute;
    content: 'Opcional';

    right: 0.75rem;
    top: 0.75rem;
    bottom: 0.75rem;

    font-style: italic;
    font-size: 0.75rem;
    line-height: 1rem;

    color: ${(props) => props.theme['brown-100']};
  }

  .ComplementContainer:focus-within::after {
    display: none;
  }

  .CityContainer {
    display: flex;
    justify-content: space-between;
    flex-direction: row;

    #distric {
      width: 12.5rem;
    }

    #city {
      width: 17.25rem;
    }

    #uf {
      width: 3.75rem;
    }
  }
`
