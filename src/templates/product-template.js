import React from "react"
// import Seo from "../components/SEO"
import Image from "next/image"
import styled from "@emotion/styled"
import BannerService from "@/components/BannerService"
import Faq from "../components/Faq"

// Photo by Luis Quintero from Pexels: https://www.pexels.com/photo/man-taking-a-knee-in-front-of-wall-with-mural-2068149/
import svcImg1 from "../../public/images/artwork-service-background.jpeg"

// Photo by Vincent Gerbouin from Pexels: https://www.pexels.com/photo/gray-and-teal-animal-skeleton-wall-decor-2263686/
import svcImg2 from "../../public/images/production-service-background.jpeg"

// Photo by Hugo Heimendinger from Pexels: https://www.pexels.com/photo/street-art-1766231/
import svcImg3 from "../../public/images/mixing-service-background.jpeg"

// Photo by Aleksandar Pasaric from Pexels: https://www.pexels.com/photo/graffiti-art-on-wall-3048528/
import svcImg4 from "../../public/images/all-services-background.png"

const ServiceTemplateStyles = styled.div`
  .container {
    display: flex;
    flex-wrap: wrap;
    .column {
      flex: 0 0 100%;

      @media (min-width: 768px) {
        flex-basis: 50%;

        &:nth-child(1) {
          padding-right: 20px;
        }

        &:nth-child(2) {
          padding-left: 20px;
        }

        > * {
          &:last-child {
            margin-bottom: 0;
          }
        }
      }

      > * {
        &:first-child {
          margin-top: 0;
        }
      }
    }
  }
`

const ServiceTemplate = (serviceInfo) => {
  const {
    headerImageArtwork,
    headerImageProduction,
    headerImageMixing,
    headerImageAll,
    title,
    introduction,
    description,
    faqs,
  } = serviceInfo

  return (
    <>
      <BannerService
        title={title}
        subTitle={introduction}
        contact={true}
      >
        {headerImageArtwork && (
          <Image
            priority
            className="banner__image"
            src={svcImg1}
            alt={title}
          />
        )}
        {headerImageProduction && (
          <Image
            priority
            className="banner__image"
            src={svcImg2}
            alt={title}
          />
        )}
        {headerImageMixing && (
          <Image
            priority
            className="banner__image"
            src={svcImg3}
            alt={title}
          />
        )}
        {headerImageAll && (
          <Image
            priority
            className="banner__image"
            src={svcImg4}
            alt={title}
          />
        )}
      </BannerService>
      <ServiceTemplateStyles className="section">
        <div className="container container__tight">
          {description && (
            <div className="column">
              {description}
            </div>
          )}
          
        </div>
      </ServiceTemplateStyles>
    </>
  )
}

export default ServiceTemplate
