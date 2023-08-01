import { motion } from "framer-motion"
import AllServicesStyles from "./style"
import {
  Box,
  Container,
  Typography,
} from "@mui/material"
import Image from "next/image"
import Button from "../Button"
import content from "./content"
import GroupedServiceCards from "./GroupedServiceCards"


const AllServicesComponent = () => {
  return (
    <AllServicesStyles>
      <Box className='compDiv'>
        <GroupedServiceCards />
      </Box>
      <Container maxWidth="xl" sx={{ mt: 5 }}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2.5 }}
        >
          <Typography
            align="center"
            variant="h2"
            sx={{ color: 'var(--fmbPurple4)' }}
          >
            Welcome to FMB &#40;Future Movement Beatz&#41;
          </Typography>
          <Typography variant="h3" align="center" style={{ color: 'var(--contrastLight2)', marginBottom: '30px' }}>
            Where Vision Meets Sonic Excellence
          </Typography>
          <Typography variant="h5" align="center" style={{ color: 'var(--contrastLight3)' }}>At FMB (Future Movement Beatz), we offer a comprehensive range of artistic services that elevate your music to new heights. As a multifaceted artist, I, Abstraktius Artimus, am dedicated to transforming your creative vision into reality, with a keen ear for production and mastering, as well as a passion for crafting visually stunning album art.
          </Typography>
        </motion.div>
        <hr />
        {content.map((section) => (
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
            style={{ marginBottom: "20px" }}
            key={section.index}
          >
            <Typography
              variant="h4"
              style={{ color: "var(--contrastLight3)" }}
            >
              {section.heading}
            </Typography>
            <Typography
              variant="h6"
              style={{ color: "var(--contrastLight2)" }}
            >
              {section.content}
            </Typography>
          </motion.div>
        ))}
        <br />
        <Button 
          href="/#contact"
          text="Get In Touch"
          arrow={true}
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2.5 }}
          style={{ marginTop: '50px' }}
        >
          <Typography variant="h5" align="center" style={{ color: 'var(--contrastLight3)' }}>Let&apos;s embark on this creative journey together. From concept to completion, FMB &#40;Future Movement Beatz&#41; is your one-stop destination for music artistry at its finest. Contact us today, and let&apos;s create a harmonious symphony of artistic brilliance.
          </Typography>
        </motion.div>
        
      </Container>  
    </AllServicesStyles>
  )
}

export default AllServicesComponent