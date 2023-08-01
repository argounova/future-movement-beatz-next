import AllServicesStyles from "./style"
import { motion } from "framer-motion"
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography
} from "@mui/material"
import Link from "next/link"


const ServiceCard = ({ href, serviceImage, serviceTitle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2 }}
    >
      <Link href={href}>
        <Card className="serviceCard">
          <CardActionArea>
            <CardMedia
              component='img'
              height='200'
              image={serviceImage}
              alt='future movement beatz service card'
            />
            <CardContent>
              <Typography align="center" variant='h4' sx={{ color: 'var(--contrastLight3)' }}>
                {serviceTitle}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </motion.div>
  )
}

export default ServiceCard