import styled from "@emotion/styled"

export const ContactStyles = styled.section`
  max-width: 750px;
  box-sizing: content-box;
  margin-left: auto;
  margin-right: auto;

  input {
    height: calc(var(--gap) * 2);
    margin-bottom: var(--gap);
  }

  input,
  textarea {
    background-color: #000;
    color: #fff;
    border: none;
    outline: 2px solid rgba(255, 255, 255, 0.15);
    border-radius: 6px;
    width: 100%;
    font-size: var(--p);
    font-weight: 700;
    font-family: "Heebo", sans-serif;
    padding: 15px;
    transition: outline 0.3s ease;

    &:focus {
      outline: 2px solid var(--primary);
    }

    &::-webkit-input-placeholder {
      color: var(--inActive);
    }

    &::-moz-placeholder {
      color: var(--inActive);
    }

    &:-ms-input-placeholder {
      color: var(--inActive);
    }

    &:-moz-placeholder {
      color: var(--inActive);
    }
  }
  textarea {
    margin-bottom: var(--gap);
  }

  button {
    color: #fff;
    background-color: transparent;
    font-family: "Heebo", sans-serif;
    border: 0;
    text-decoration: none;
    padding: 0;
    transition: color 0.3s ease;
    text-transform: capitalize;
    font-size: var(--p);
    font-weight: 700;
    position: relative;
    padding-bottom: 15px;
    display: inline-flex;
    align-items: center;

    &::after {
      content: "";
      display: block;
      position: absolute;
      height: 3px;
      left: 0;
      right: 0;
      bottom: 8px;
      background-color: var(--primary);
      transition: left 0.3s ease;
    }

    &:focus {
      color: var(--primary);
    }

    @media (hover: hover) {
      &:hover {
        cursor: pointer;
        color: var(--primary);
  
        &::after {
          left: 100%;
        }
      }
    }
  }
`
