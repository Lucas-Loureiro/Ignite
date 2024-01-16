import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 2rem 10rem;
`

export const Aside = styled.aside`
  display: flex;
  gap: 0.75rem;
  div {
    display: flex;
    align-items: center;
    gap: 0.25rem;

    padding: 0.625rem 0.5rem;

    background-color: ${(theme) => theme.theme['purple-300']};

    border-radius: 6px;

    svg {
      color: ${(theme) => theme.theme['purple-500']};
    }

    span {
      color: ${(theme) => theme.theme['purple-700']};
    }
  }

  a {
    display: flex;
    align-items: center;

    background-color: ${(theme) => theme.theme['yellow-300']};
    color: ${(theme) => theme.theme['yellow-700']};

    padding: 8px;
    border-radius: 6px;

    position: relative;

    &[aria-disabled='true'] {
      pointer-events: none;
    }
    span {
      font-family: 'Baloo 2', sans-serif;
      font-size: 0.75rem;
      line-height: 130%;
      font-weight: 700;
      color: ${(theme) => theme.theme.white};
      background-color: ${(theme) => theme.theme['yellow-700']};
      border-radius: 50%;
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;

      position: absolute;
      top: 0px;
      right: 0px;
      transform: translate(50%, -50%);
    }
  }
`
