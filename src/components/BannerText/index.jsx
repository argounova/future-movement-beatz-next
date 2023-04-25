import * as React from "react"
import Button from "../Button/index"
import { Styles } from "./style"

const BannerText = ({ title, content, linkText }) => {
  return (
    <Styles>
      <div className="gradient">
      <div className="container container__tight">
        <div>
          {title && <h2>{title}</h2>}
          {content && <p>{content}</p>}
          <Button text={linkText} href="/services/all" arrow={false}/>
        </div>
      </div>
      </div>
    </Styles>
  )
}

export default BannerText
