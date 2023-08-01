import styled from "@emotion/styled"

const MixingStyles = styled.div`
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
    }
 }
`

export default MixingStyles