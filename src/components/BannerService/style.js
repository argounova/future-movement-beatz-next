import styled from "@emotion/styled"

export const Styles = styled.section`
  height: 100vh;
  position: relative;
  padding: 30px var(--borderSpacing);

  .container {
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
  }

  .gradient,
  .banner__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 50%;
    object-fit: cover;
    background-repeat: no-repeat;
    z-index: 1;
  }

  .gradient {
    background: radial-gradient(
      at bottom left,
      rgba(0, 0, 0, 0.9),
      rgba(0, 0, 0, 0.1)
    );
  }

  .banner__content {
    position: relative;
    z-index: 2;
    min-height: 40vh;
    width: 100%;
    max-width: 700px;
    

    @media (min-width: 768px) {
      width: 66vw;
    }

    h1,
    h2 {
      text-shadow: var(--textShadow);
    }

    h1 {
      border-bottom: 2px solid rgba(255, 255, 255, 0.15);
      display: inline-block;
    }

    h2 {
      font-size: var(--h5);
      font-weight: 400;
    }

    h1,
    .price {
      margin-top: 0;
      font-size: var(--bannerTitle);
    }
  }

  .banner__btns {
    display: flex;
    gap: var(--gap);
  }
`
