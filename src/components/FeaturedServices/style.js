import styled from "@emotion/styled"

export const ContainerStyles = styled.section`
  > div {
    &.container__scroll {
      gap: calc(var(--gap) / 2);
      padding-bottom: var(--gap);
      padding-left: var(--borderSpacing);
      padding-right: var(--borderSpacing);
      margin-left: calc(var(--borderSpacing) * -1);
      width: 100%;

      @media (min-width: 1200px) {
        padding-bottom: 0;
        width: 100%;
        margin-left: auto;
        padding-left: 0;
        padding-right: 0;
        gap: var(--gap);
      }
    }
  }
`

export const ProductStyles = styled.div`
  min-height: 800px;
  width: 450px;
  background-color: transparent;
  flex: 0 0 100%;
  overflow: hidden;
  scroll-snap-align: center;
  position: relative;
  border-radius: 6px;
  transition: border-color 0.6s ease, box-shadow 0.6s ease;

  .features__item--img {
    width: 450px;
    
    transition: transform 0.3s ease, opacity 0.3s ease;
  }

  .features__item--content {
    width: 450px;
    position: absolute;
    z-index: 2;
    padding: 20px 10px;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 0) 100%
    );

    @media (min-width: 768px) {
      padding: 20px;
    }

    @media (min-width: 1024px) {
      padding: 40px 20px;
    }

    @media (min-width: 1200px) {
      padding: 50px 30px;
    }

    h4 {
      color: #fff;
      text-shadow: var(--textShadow);
    }
  }

  &:hover {
    cursor: pointer;
    border-color: var(--primary);
    box-shadow: var(--boxShadow);

    .features__item--img {
      transform: scale(1.1);
      opacity: 0.5;
    }
  }
`
