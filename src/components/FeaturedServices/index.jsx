import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { FeaturedProductsStyles } from "./style"
import { FeaturedProductStyles } from "./style"
import Button from "../Button/index"
import svcImg1 from "../../../public/images/album-art.jpeg"
import svcImg2 from "../../../public/images/music-production.jpeg"
import svcImg3 from "../../../public/images/mixing-services.jpeg"

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
        <FeaturedProductStyles>
          <Link href="/services/artwork">
            <Image
              className="features__item--img"
              src={svcImg1}
              alt="album artwork"
            />
          </Link>
          <div className="features__item--content">
            <h4>Album Artwork</h4>
            <Button text="Learn More" href="/services/artwork" arrow={true} />
          </div>
        </FeaturedProductStyles>
        <FeaturedProductStyles>
          <Link href="/services/production">
            <Image
              className="features__item--img"
              src={svcImg2}
              alt="music-production"
            />
          </Link>
            <div className="features__item--content">
              <h4>Track Production</h4>
              {/* <p>Professionally produced tracks and full length albums</p> */}
              <Button text="Learn More" href="/services/production" arrow={true} />
            </div>
        </FeaturedProductStyles>
        <FeaturedProductStyles>
          <Link href="/services/mixing">
            <Image
              className="features__item--img"
              src={svcImg3}
              alt="song writing"
            />
          </Link>
            <div className="features__item--content">
              <h4>Mixing and Mastering</h4>
              {/* <p>Achieving that perfect sound</p> */}
              <Button text="Learn More" href="/services/mixing" arrow={true} />
            </div>
        </FeaturedProductStyles>

      </div>
      <div className="container container__tight learn__more">
        <Button href="/comingsoon" text="All Services" />
      </div>
    </FeaturedProductsStyles>
  )
}

export default FeaturedServices