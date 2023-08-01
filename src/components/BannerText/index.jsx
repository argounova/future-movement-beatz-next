import Button from "../Button/index"
import { BannerTextStyles } from "./style"
import {
  Container
} from "@mui/material"
import { motion } from "framer-motion"


const BannerText = () => {
  return (
    <BannerTextStyles>
      <Container maxWidth='xl' sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center', flexDirection: 'column', height: '100%' }}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <h2>It is important that the musician just lets the music be written.</h2>
          <p>- Bjork</p>
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <Button text='View Services' href="/services/all" />
        </motion.div>
      </Container>
    </BannerTextStyles>
  )
}

export default BannerText