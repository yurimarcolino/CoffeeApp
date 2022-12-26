import styled from 'styled-components'

export const SuccessContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5rem;

  header {
    h1 {
      font-family: 'Baloo 2';
      font-weight: bold;
      font-size: 2rem;
      line-height: 2.625rem;
      color: ${(props) => props.theme['yellow-900']};
    }

    p {
      font-size: 1.25rem;
      line-height: 1.625rem;
    }
  }

  .DeliveryContainer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 2.5rem;

    .DeliveryContent {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      width: 32.875rem;
      height: 16.875rem;
      padding: 2.5rem;

      background: linear-gradient(white, white) padding-box,
        linear-gradient(#dbac2c, #8047f8) border-box;
      border: 0.0625rem solid transparent;
      border-radius: 0.375rem 2.25rem;

      .AddressContainer {
        display: flex;
        flex-direction: row;
        align-items: center;
      }

      .EstimatedDeliveryContainer {
        display: flex;
        flex-direction: row;
        align-items: center;
      }

      .PaymentStatusContainer {
        display: flex;
        flex-direction: row;
        align-items: center;
      }

      .SVGContainer {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 2rem;
        height: 2rem;
        margin-right: 0.75rem;

        flex-direction: row;
        border-radius: 100%;

        svg {
          color: white;
        }
      }
    }
  }
`
