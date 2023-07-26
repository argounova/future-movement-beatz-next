import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { FeaturedProductsStyles } from "./style"
import { FeaturedProductStyles } from "./style"
import Button from "../Button/index"
import fmbServices from "./services"


const FeaturedServices = ({ title, introduction }) => {
  return (
    <FeaturedProductsStyles className="section">
      {title || introduction ? (
        <div className="container container__tight">
          <div className="intro__area">
            {title && <h2>{title}</h2>}
            {introduction && <p>{introduction}</p>}
          </div>
        </div>
      ) : null}
      <div className="container container__tight container__scroll">
        {fmbServices.map((service, index) => (
          <FeaturedProductStyles key={index}>
            <Link href={`${service.linkTo}`}>
              <Image
                className="features__item--img"
                src={`${service.imageURL}`}
                alt={service.altText}
                width={450}
                height={800}
              />
            </Link>
            <div className="features__item--content">
              <h4>{service.serviceName}</h4>
              <Button text="Learn More" href={`${service.linkTo}`} arrow={true} />
            </div>
          </FeaturedProductStyles>
        ))}
      </div>
      <div className="container container__tight learn__more">
        <Button href="/comingsoon" text="All Services" />
      </div>
    </FeaturedProductsStyles>
  )
}

export default FeaturedServices