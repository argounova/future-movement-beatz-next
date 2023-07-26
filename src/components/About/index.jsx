import { AboutStyles } from "./style"
import { motion } from "framer-motion"
import {
  Container,
  Typography,
} from "@mui/material"
import Button from "../Button"
import aboutContent from "./content"


const About = () => {
  return (
    <AboutStyles>
      <Container maxWidth="xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2.5 }}
        >
          <Typography variant="h4" align="center" style={{ color: 'var(--contrastLight3)' }}>Welcome to Future Movement Beatz, where creativity knows no bounds. Founded and owned by Stevan Jaramillo, also known as Abstraktius Artimus, our journey began in 2012 with a singular vision: <span style={{ color: 'var(--fmbPurple5)' }}>to help artists achieve unparalleled success in their musical endeavors</span>.</Typography>
        </motion.div>
        <hr />
        {aboutContent.map((section) => (
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
            style={{ marginBottom: "20px" }}
          >
            <Typography
              variant="h4"
              style={{ color: "var(--contrastLight3)" }}
              key={section.index}
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

export default About