import styled from 'styled-components'

export const CoffeeSelectedContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem 0.25rem;

  width: 23rem;
  height: 5rem;
  margin-bottom: 1.5rem;

  .CoffeeSelectedContent {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .CoffeeSelectedInfo {
      display: flex;
      align-items: center;
      gap: 1.25rem;

      width: 15.9375rem;
      height: 4rem;

      img {
        width: 4rem;
        height: 4rem;
      }

      .CoffeeSelectedDetails {
        display: flex;
        flex-direction: column;

        width: 10.6875rem;
        height: 3.8125rem;

        p {
          margin-bottom: 0.5rem;
          font-size: 1rem;
          line-height: 1.3125rem;
          color: #403937;
        }

        .CartOptions {
          display: flex;
          flex-direction: row;
          align-items: center;

          width: 7.375rem;
          height: 2.375rem;
          gap: 0.5rem;

          div {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            width: 5.6875rem;
            height: 2rem;
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
            }

            .CoffeeSelectedQuantity {
              width: 1.25rem;
              height: 1.3125rem;

              line-height: 1.3125rem;
              text-align: center;
              color: ${(props) => props.theme['brown-900']};
            }
          }

          .RemoveIconButtonContainer {
            display: flex;
            align-items: center;

            padding: 0px 8px;
            width: 5.6875rem;
            height: 2rem;

            background: ${(props) => props.theme['gray-300']};
            border-radius: 0.375rem;
            border: 0;

            font-size: 0.75rem;
            line-height: 1.1875rem;
            text-transform: uppercase;
            color: #574f4d;

            svg {
              margin-right: 0.25rem;
              margin-bottom: 0.0625rem;
              color: ${(props) => props.theme['purple-500']};
            }
          }
        }
      }
    }

    .CoffeeSelectedPrice {
      width: 3.4375rem;
      height: 21px;

      font-family: 'Roboto';
      font-style: normal;
      font-weight: 700;
      font-size: 1rem;
      line-height: 1.3125rem;

      color: #574f4d;
    }
  }
`

export const DividerStyled = styled.span`
  display: flex;
  margin-top: 1.5rem;
  border: 0.0625rem solid ${(props) => props.theme['gray-400']};
`
