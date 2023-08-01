import { motion } from "framer-motion"
import ProductionStyles from "./style"
import {
  Box,
  Container,
  Typography,
} from "@mui/material"
import Image from "next/image"
import Button from "../Button"
import content from "./content"


const ProductionComponent = () => {
  return (
    <ProductionStyles>
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
          Abstraktius Artimus
        </Typography>
        <Typography
          variant="h4"
          sx={{ color: 'var(--contrastLight2)' }}
        >
          Your Vision, Our Music Production
        </Typography>
      </Box>
      <Container maxWidth="xl" sx={{ mt: 5 }}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2.5 }}
        >
          <Typography variant="h2" align="center" style={{ color: 'var(--contrastLight2)' }}>
            Production Services
          </Typography>
          <Typography variant="h5" align="center" style={{ color: 'var(--contrastLight3)' }}>Ready to transform your musical ideas into captivating reality? Abstraktius Artimus offers custom music production services, tailored to your unique vision.
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
    </ProductionStyles>
  )
}

export default ProductionComponent