import styled from "@emotion/styled"

export const VideoStyles = styled.section`
  background-color: var(--black);
  padding: 20px 0px;

  .iframe-video {
    width: 350px;
    height: 175px;

    @media (min-width: 768px) {
      width: 550px;
      height: 320px;
    }
  }
`