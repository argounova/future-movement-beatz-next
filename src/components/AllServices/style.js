import styled from "@emotion/styled"

const AllServicesStyles = styled.div`
 .compDiv {
    display: flex;
    background-image: url(https://future-movement-beatz.s3.amazonaws.com/all-services-background.jpg);
    width: 100vw;
    height: fit-content;
 }

 .serviceCard {
    width: 345px;
    height: 350px;
    border: 2px solid var(--primary);
    box-shadow: var(--boxShadow);
    background-color: var(--black);
    margin: 10px;

    &:hover {
        transform: scale(1.1)
    }
 }
`
export default AllServicesStyles