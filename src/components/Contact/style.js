import styled from "@emotion/styled"

export const ContactStyles = styled.section`
max-width: 750px;
box-sizing: content-box;
margin-left: auto;
margin-right: auto;

  .contact-form {
    display: flex; 
    flex-direction: column; 
    align-items: center;
    background-color: var(--contrastLight3);
    width: 100%;
    height: fit-content;
    border-radius: 5px;
    stroke: var(--mb1-1);
    padding: 20px;
    color: var(--contrastDark1);
  }

  .selections {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }
`
