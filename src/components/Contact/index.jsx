import { useState } from 'react'
import { motion } from 'framer-motion'
import { ContactStyles } from "./style"
import {
  Button,
  Box,
  Checkbox,
  FormGroup,
  FormControlLabel,
  TextField,
  Typography
} from '@mui/material'
import emailjs from '@emailjs/browser'


const Contact = () => {
  const [userName, setUserName] = useState('')
  const [userEmail, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [playlistSub, setPlaylistSub] = useState(false)
  const [musicProd, setMusicProd] = useState(false)
  const [mixMast, setMixMast] = useState(false)
  const [coverArt, setCoverArt] = useState(false)
  const [selections, setSelections] = useState([])
  const [showContactForm, setShowContactForm] = useState(true)
  const [showLoading, setShowLoading] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [showFail, setShowFail] = useState(false)
  const contactReasons = []
  const templateParams = {
    user_name: userName,
    user_email: userEmail,
    message: message,
    contact_reasons: contactReasons
  }

  const handleSendMessage = () => {
    setShowContactForm(false)
    setShowLoading(true)
    if (playlistSub) {
      setSelections([
        selections.push(
          { interest: ' Playlist Submissions' }
        )
      ])
    }  
    if (musicProd) {
      setSelections([
        selections.push(
          { interest: ' Music Production' }
        )
      ])
    }  
    if (mixMast) {
      setSelections([
        selections.push(
          { interest: ' Mixing & Mastering' }
        )
      ])
    }  
    if (coverArt) {
      setSelections([
        selections.push(
          { interest: ' Custom Cover Art' }
        )
      ])
    }
    selections.map((selection) => (
      contactReasons.push(selection.interest)
    ))
    emailjs.send('service_kb5ueuo', 'fmb_contact', templateParams, '-rwhcmI-NaGlHpG5q')
    .then(function(response) {
        console.log(response)
        setShowLoading(false)
        setShowSuccess(true)
      }, function(error) {
        console.log(error)
        setShowFail(true)
      })
  }

  
  return (
    <ContactStyles>
      <div className='intro__area'>
        <h2 id='contact'>Get in Touch</h2>
      </div>
      { showContactForm && (
          <div className='contact-form'>
              <TextField
                  fullWidth
                  required
                  id="name"
                  label="Name"
                  variant="filled"
                  color="secondary"
                  onChange={(e) => setUserName(e.target.value)}
                  sx={{ m: 1 }}
              />
              <TextField
                  fullWidth
                  required
                  id="email"
                  label="Email"
                  type="email"
                  variant="filled"
                  color="secondary"
                  onChange={(e) => setEmail(e.target.value)}
                  sx={{ m: 1 }}
              />
              <TextField
                  fullWidth
                  required
                  id="message"
                  label="Message"
                  variant="filled"
                  color="secondary"
                  onChange={(e) => setMessage(e.target.value)}
                  multiline
                  minRows={5}
                  sx={{ m: 1 }}
              />
              <Box className='selections'>
                <Typography variant='h6' align='left' sx={{ color: 'var(--contrastDark1)' }}>
                  Please select your reason&#40;s&#41; for contacting us today:
                </Typography>
                <FormGroup sx={{ color: 'var(--contrastDark1)' }}>
                  <FormControlLabel 
                    control={<Checkbox
                      checked={playlistSub}
                      onChange={(e) => setPlaylistSub(e.target.checked)}
                    />}
                    label="Playlist Submission"
                  />
                  <FormControlLabel 
                    control={<Checkbox 
                      checked={musicProd}
                      onChange={(e) => setMusicProd(e.target.checked)}
                    />} 
                    label="Music Production" 
                  />
                  <FormControlLabel
                    control={<Checkbox
                      checked={mixMast}
                      onChange={(e) => setMixMast(e.target.checked)}
                    />} 
                    label="Mixing & Mastering" 
                  />
                  <FormControlLabel 
                    control={<Checkbox 
                      checked={coverArt}
                      onChange={(e) => setCoverArt(e.target.checked)}
                    />} 
                    label="Custom Cover Art" 
                  />
                </FormGroup>
              </Box>
              
              <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ m: 1 }}
                  style={{ backgroundColor: 'var(--contrastDark3)' }}
                  onClick={handleSendMessage}
              >Send</Button>   
          </div>
      )}
      { showLoading && (
        <div className='contact-form' style={{ justifyContent: 'center', stroke: 'var(--fmbPurple3)' }}>
          <h2>SENDING...</h2>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
            <motion.g>
              <motion.circle
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
                }}
                cx="150"
                cy="100"
                r="75"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
              </motion.circle>
            </motion.g>
          </svg>
        </div>
      )}
      { showSuccess && (
          <div className='contact-form' style={{ justifyContent: 'center' }}>
              <h2>Thank you for contacting us!</h2>
              <h4>We will get back to you within 3 business days!</h4>
          </div>
      )}
      { showFail && (
          <div className='contact-form' style={{ justifyContent: 'center' }}>
              <h2>Something went wrong...</h2>
              <h4>Please email us at futuremovementbeatz@gmail.com</h4>
          </div>
      )} 
    </ContactStyles>
  )
}

export default Contact
