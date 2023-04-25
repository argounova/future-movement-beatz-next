import { AboutStyles } from "./style"
import Button from "../Button"

const About = () => {
  return (
    <AboutStyles className="section">
      <div>
        <h2>Stevan Jaramillo</h2>
        <h5>Owner & Founder</h5>
        <p>Welcome to Future Movement Beatz, your go-to music production company for all your audio needs! Established in 2012, we are a team of experienced music producers, engineers and artists dedicated to delivering top-quality music production services.</p>
        <p>At Future Movement Beatz, we are passionate about music and committed to helping artists and musicians bring their creative visions to life. We are more than a music production company, we are a community built around helping artists make connections. Artists from all around the world have joined the community and join regularly. Not only do we offer music production services, we also offer a place to network for free.</p>
        <p>Future Movement Beatz is proud to be committed to excellence. Whether it be custom album art, music production or mixing & mastering, we will deliver outstanding results. We are community driven and set ourselves to higher standards.</p>
        <p>Thank you for choosing Future Movement Beatz as your music production partner. We are excited to embark on this musical journey with you and bring your vision to life. Contact us today to discuss your project and let's create something extraordinary together!</p>
      </div>
      <Button 
        href="/contact"
        text="Get In Touch"
        arrow={true}
      />
    </AboutStyles>
  )
}

export default About