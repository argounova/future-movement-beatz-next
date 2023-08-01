import styled from "@emotion/styled"

export const ContainerStyles = styled.div`
margin-left: 16px;
margin-bottom: 50px;

> div {
  &
  .container__scroll {
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
  min-height: 600px;
  background-color: #000;
  flex: 0 0 350px;
  margin-bottom: 20px;
  margin-right: 20px;
  scroll-snap-align: center;
  scroll-margin-left: 25px;
  position: relative;
  border-radius: 6px;
  overflow: hidden;
  transition: border-color 0.6s ease, box-shadow 0.6s ease;

  @media (min-width: 768px) {
    margin-right: 40px;
  }

  @media (min-width: 1200px) {
    margin-right: 80px;
  }

  .features__item--img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    transition: transform 0.3s ease, opacity 0.3s ease;
  }

  .features__item--content {
    width: 100%;
    min-height: 300px;
    position: absolute;
    z-index: 2;
    padding: 20px 20px;
    top: 0;
    left: 0;
    right: 0;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 0) 100%
    );

    h4 {
      color: #fff;
      text-shadow: var(--textShadow);
    }
  }

  &:hover {
    @media (min-width: 1200px) {
      cursor: pointer;
      border: 2px solid var(--primary);
      box-shadow: var(--boxShadow);
  
      .features__item--img {
        transform: scale(1.1);
        opacity: 0.5;
      }
    }
  }
`
