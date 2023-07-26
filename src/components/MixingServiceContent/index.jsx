import { motion } from "framer-motion"
import MixingStyles from "./style"
import {
  Box,
  Container,
  Typography,
} from "@mui/material"
import Image from "next/image"
import Button from "../Button"
import content from "./content"


const MixingComponent = () => {
  return (
    <MixingStyles>
      <Image 
        src={`${'https://future-movement-beatz.s3.amazonaws.com/smoke-background-dark.jpg'}`}
        alt='smoke header image'
        width={2500}
        height={500}
        priority
        unoptimized={true}
      />
      <Box className='textDiv'>
        <Typography
          variant="h2"
          sx={{ color: 'var(--fmbPurple4)' }}
        >
          Experience Sonic Brilliance
        </Typography>
        <Typography
          variant="h4"
          sx={{ color: 'var(--contrastLight2)' }}
        >
          Music Mixing and Mastering by Abstraktius Artimus
        </Typography>
      </Box>
      <Container maxWidth="xl" sx={{ mt: 5 }}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2.5 }}
        >
          <Typography variant="h5" align="center" style={{ color: 'var(--contrastLight3)' }}>Ready to take your music to new heights? Abstraktius Artimus offers professional music mixing and mastering services that elevate your raw recordings into polished, captivating tracks.
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
          href="/contact"
          text="Get In Touch"
          arrow={true}
        />
      </Container>  
    </MixingStyles>
  )
}

export default MixingComponent