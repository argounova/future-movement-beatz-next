import styled from "@emotion/styled"

export const BannerStyles = styled.section`
  height: 65vh;
  position: relative;

  .gradient,
  .banner__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    max-width: 500px;


    @media (min-width: 768px) {
      width: 66vw;
    }

    h1,
    h5 {
      color: var(--contrastLight3);
      text-shadow: var(--textShadow);
    }

    h1 {
      border-bottom: 2px solid rgba(255, 255, 255, 0.15);
    }

    h5 {
      font-weight: 400;
    }
  }
`
