import Button from "../Button/index"
import { BannerTextStyles } from "./style"
import {
  Container
} from "@mui/material"


const BannerText = () => {
  return (
    <BannerTextStyles>
      <Container maxWidth='xl' sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center', flexDirection: 'column', height: '100%' }}>
        <div>
          <h2>It is important that the musician just lets the music be written.</h2>
          <p>- Bjork</p>
        </div>
        <Button text='View Services' href="/services/all" />
      </Container>
    </BannerTextStyles>
  )
}

export default BannerText