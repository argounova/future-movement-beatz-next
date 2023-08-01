import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { FeaturedSinglesStyles } from "./style"
import { FeaturedSingleStyles } from "./style"
import {
  Container
} from "@mui/material"
import Button from "../Button/index"
import sngImg1 from "../../../public/images/peaceofmind-cover.jpeg"
import sngImg2 from "../../../public/images/dontwannaseemewin-cover.jpeg"
import sngImg3 from "../../../public/images/abstraktnoize3-cover.jpeg"

const FeaturedSingles = () => {

  return (
    <>
      <Container>
        <div className="intro__area">
          <h2>Newest Releases</h2>
          <p>Available to <a href="https://open.spotify.com/artist/36ZQelM5VwJYQ9MqY19aHT" target="_blank" rel="nofollow noreferrer noopener"><span>stream now</span></a></p>
        </div>
      </Container>
      <FeaturedSinglesStyles>
        <div className="container container__tight container__scroll">
          <FeaturedSingleStyles>
            <Link href="https://distrokid.com/hyperfollow/abstraktiusartimus/peace-of-mind" target="_blank" rel="no referrer">
              <Image
                className="features__item--img"
                src={sngImg1}
                alt="peace of mind single"
              />
            </Link>
            <div className="features__item--content">
              <h4>Peace of Mind</h4>
              <p>2:29</p>
              <div>
                <Button 
                  as="span" 
                  text="Listen Now" 
                  arrow={true} 
                  href="https://distrokid.com/hyperfollow/abstraktiusartimus/peace-of-mind"
                />
                <p>by Abstraktius Artimus</p>
              </div>
            </div>
          </FeaturedSingleStyles>

          <FeaturedSingleStyles>
            <Link href="https://distrokid.com/hyperfollow/abstraktiusartimus/dont-wanna-see-me-win" target="_blank" rel="no referrer">
              <Image
                className="features__item--img"
                src={sngImg2}
                alt="don't wanna see me win single"
              />
            </Link>
              <div className="features__item--content">
                <h4>Don&apos;t Wanna See Me Win</h4>
                <p>2:39</p>
                <div>
                  <Button 
                    as="span" 
                    text="Listen Now" 
                    arrow={true} 
                    href="https://distrokid.com/hyperfollow/abstraktiusartimus/dont-wanna-see-me-win"
                  />
                  <p>by Abstraktius Artimus</p>
                </div>
              </div>
          </FeaturedSingleStyles>

          <FeaturedSingleStyles>
            <Link href="https://distrokid.com/hyperfollow/abstraktiusartimus/abstrakt-noize-3-2" target="_blank" rel="no referrer">
              <Image
                className="features__item--img"
                src={sngImg3}
                alt="abstrakt noize 3 single"
              />
            </Link>
              <div className="features__item--content">
                <h4>Abstrakt Noize 3</h4>
                <p>3:17</p>
                <div>
                  <Button 
                    as="span" 
                    text="Listen Now" 
                    arrow={true} 
                    href="https://distrokid.com/hyperfollow/abstraktiusartimus/abstrakt-noize-3-2"
                  />
                  <p>by Abstraktius Artimus</p>
                </div>
              </div>
          </FeaturedSingleStyles>
        </div>
    </FeaturedSinglesStyles>
    </>
  )
}

export default FeaturedSingles