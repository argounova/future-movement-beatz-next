import { motion } from "framer-motion"
import {
  Container,
  Typography,
} from "@mui/material"
import Button from "../Button"
import content from "./content"


const MixingService = () => {
  return (
    <AboutStyles>
      <Container maxWidth="xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2.5 }}
        >
          <Typography variant="h4" align="center" style={{ color: 'var(--contrastLight3)' }}>Ready to take your music to new heights? Abstraktius Artimus offers professional music mixing and mastering services that elevate your raw recordings into polished, captivating tracks.
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
    </AboutStyles>
  )
}

export default MixingService