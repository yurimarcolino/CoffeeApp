import styled from 'styled-components'

export const CoffeeCardContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 1.25rem 1.5rem;
  width: 16rem;
  height: 19.375rem;

  background-color: ${(props) => props.theme['gray-200']};
  border-radius: 0.375rem 2.25rem;

  .Header {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    margin-top: -2.2rem;

    img {
      margin-bottom: 0.75rem;
    }

    .TagListContainer {
      display: flex;
      flex-direction: row;
      max-width: 12.1875rem;
      height: 1.3125rem;
      gap: 0.25rem;

      .TagList {
        padding: 0.25rem 0.5rem;
        border-radius: 6.25rem;
        background-color: ${(props) => props.theme['yellow-100']};

        p {
          font-weight: 700;
          font-size: 0.625rem;
          text-transform: uppercase;
          line-height: 0.8125rem;
          color: ${(props) => props.theme['yellow-500']};
        }
      }
    }
  }

  .CoffeeName {
    margin-top: 1rem;
    margin-bottom: 0.375rem;

    font-family: 'Baloo 2';
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 1.625rem;
  }

  .CoffeeDescription {
    margin-top: 0.375rem;
    margin-bottom: 2.0625rem;
    font-weight: 400;
    font-size: 0.875rem;
    color: ${(props) => props.theme['brown-100']};
    text-align: center;
  }

  .Footer {
    display: flex;
    justify-content: space-between;

    align-items: center;
    flex-direction: row;

    width: 100%;
    height: 2.375rem;

    .CoffeePrice {
      display: inline;
      line-height: 1.125rem;
      font-size: 0.875rem;
      color: ${(props) => props.theme['brown-400']};

      strong {
        font-family: 'Baloo 2';
        font-size: 1.4375rem;
        font-weight: bold;
      }
    }

    .CartOptions {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      width: 7.375rem;
      height: 2.375rem;

      div {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 4.5rem;
        padding: 0.5rem;
        gap: 0.25rem;

        background: ${(props) => props.theme['gray-300']};
        border-radius: 0.375rem;

        button {
          width: 0.875rem;
          height: 0.875rem;
          border: 0;

          background: none;
          color: ${(props) => props.theme['purple-500']};
          transition: 0.2s;
        }

        button:hover {
          opacity: 0.85;
        }

        button:disabled {
          cursor: not-allowed;
        }

        .CoffeeQuantity {
          width: 1.25rem;
          height: 1.3125rem;

          line-height: 1.3125rem;
          text-align: center;
          color: ${(props) => props.theme['brown-900']};
        }
      }

      .CartIconButtonContainer {
        display: flex;
        align-items: center;

        padding: 0.5rem;
        width: 2.375rem;
        height: 2.375rem;

        border: 0;
        background: #4b2995;
        border-radius: 0.375rem;
        transition: 0.2s;
      }

      .CartIconButtonContainer:hover {
        opacity: 0.85;
      }
    }
  }
`
