import * as React from "react"
import { VideoStyles } from "./style"
import { motion } from "framer-motion"
import {
  Box,
  Container,
  Typography
} from "@mui/material"


const Video = () => {
  return(
    <VideoStyles>
      <Container maxWidth="xl" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Box className="intro__area" sx={{ textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <h2>Latest on YouTube</h2>
            <p>Check our <a href="https://www.youtube.com/@abstraktius_artimus" target="_blank" rel="nofollow noreferrer noopener"><span>channel</span></a> for music videos, playlists, and more.</p>
          </motion.div>
        </Box>
      </Container>
      <Container maxWidth="xl" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly' }}>
        <Box sx={{ width: '80%', display: 'flex', justifyContent: 'space-evenly', mb: {sm: 0, lg: 1}, flexDirection: 'row', flexWrap: 'wrap' }}>
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <iframe
              src="https://www.youtube.com/embed/tLRp9vaY6VM"
              title="Abstrakt Noize 3 Official Visualizer"
              className="iframe-video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"
              frameborder={0}
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
              allowFullScreen
            />
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <iframe
              src="https://www.youtube.com/embed/tLRp9vaY6VM"
              title="Abstrakt Noize 3 Official Visualizer"
              className="iframe-video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"
              frameborder={0}
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
              allowFullScreen
            />
          </motion.div>
        </Box>
        <Box sx={{ width: '80%', display: 'flex', justifyContent: 'space-evenly', mt: {sm: 0, lg: 1},  flexDirection: 'row', flexWrap: 'wrap' }}>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.4 }}
          >
            <iframe
              src="https://www.youtube.com/embed/0q5MEoA2Wyc"
              title="Peace of Mind prod by Jiro"
              className="iframe-video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"
              frameborder={0}
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
              allowFullScreen
            />
          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.6 }}
          >
            <iframe
              src="https://www.youtube.com/embed/0q5MEoA2Wyc"
              title="Peace of Mind prod by Jiro"
              className="iframe-video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"
              frameborder={0}
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
              allowFullScreen
            />
          </motion.div>
        </Box>
      </Container>
    </VideoStyles>
  )
}
export default Video