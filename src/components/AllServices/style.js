import styled from "@emotion/styled"

const AllServicesStyles = styled.div`
 .textDiv {
    position: absolute;
    top: 110px;
    left: 25px;
    

    @media (min-width: 600px) {
        top: 150px;
    }
    @media (min-width: 1000px) {
        top: 250px;
    }
    @media (min-width: 1200px) {
        left: 75px;
    }
    @media (min-width: 1200px) {
        left: 10%;
        background-color: #0d0d0d;
        border-radius: 8px;
        box-shadow: 2px 1px 8px var(--fmbPurple4);
    }
 }
`

export default AllServicesStyles