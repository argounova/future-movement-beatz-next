import * as React from "react"
import Image from "next/image"
import { Styles } from "./style"
import Button from "../Button"

// Photo by Tim Mossholder: https://www.pexels.com/photo/make-war-graffiti-2180805/
import bannerImage from "../../../public/images/banner-image.png"

const Banner = ({ children, title, subTitle, contact }) => {
  return (
    <>
      <Styles>
      {children ? (
          children
        ) : (
          <Image
            priority
            src={bannerImage}
            alt="Banner Image"
            className="banner__image"
            
          />
        )}
        <div className="container">
          <div className="banner__content">
            {title && <h1>{title}</h1>}
            {subTitle && <h2>{subTitle}</h2>}
            <div className="banner__btns">
              {contact
                ? <Button
                    className="btn"
                    text="Get In Touch"
                    href="/contact"
                  />
                : <Button
                    className="btn"
                    text="Learn More"
                    href="/about"
                  />
              }
            </div>
          </div>
        </div>
        <div className="gradient"></div>
      </Styles>
      <span id="topContent"></span>
    </>
  )
}

export default Banner