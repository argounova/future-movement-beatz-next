import styled from "@emotion/styled"

export const Styles = styled.section`
  .container {
    @media (min-width: 768px) {
      > div {
        width: 100%;
      }
    }
  }

  .gradient {
    height: 100%;
    width: 100%;
    z-index: 1;
    background: radial-gradient(
      at top left,
      rgba(0, 0, 0, 0.9),
      rgba(0, 0, 0, 0.1)
    );
    padding-left: 75px;
    padding-bottom: 75px;
  }
`
