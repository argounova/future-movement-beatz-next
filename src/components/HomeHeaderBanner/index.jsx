import Image from "next/image"
import { BannerStyles } from "./style"
import Button from "../Button"
import { motion } from "framer-motion"
import {
  Container
} from "@mui/material"


const HomeHeaderBanner = () => {
  return (
    <BannerStyles>
      <Image
        priority
        src={`/images/banner-image.png`}
        width={2400}
        height={600}
        alt="Photo by Tim Mossholder: https://www.pexels.com/photo/make-war-graffiti-2180805/"
        className="banner__image"
        unoptimized={true}
      />
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: '5', height: '600px' }}>
        <motion.div 
          className="banner__content"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <h1>Future Movement Beatz</h1>
          <h5>Music production, custom album art cover art, mixing & mastering, and playlist curating.</h5>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            <Button
              className="btn"
              text="Learn More"
              href="/about"
            />
          </motion.div>
        </motion.div>
      </Container>
      <div className="gradient"></div>
    </BannerStyles>
  )
}

export default HomeHeaderBanner