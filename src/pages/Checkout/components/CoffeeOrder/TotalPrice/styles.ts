import styled from 'styled-components'

export const TotalPriceContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 1.5rem;
  gap: 0.75rem;

  width: 23rem;
  height: 5.75rem;

  div {
    display: flex;
    justify-content: space-between;

    span {
      font-size: 0.875rem;
      line-height: 1.125rem;
    }

    #total-text {
      font-weight: 700;
      font-size: 1.25rem;
      line-height: 1.625rem;
    }

    #total-price {
      font-weight: 700;
      font-size: 1.25rem;
      line-height: 1.625rem;
    }
  }
`
