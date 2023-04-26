import * as React from "react"
import Image from "next/image"
import { Styles } from "./style"
import Button from "../Button"

const BannerService = ({ children, title, subTitle, contact }) => {
  return (
    <>
      <Styles>
      {children}
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

export default BannerService