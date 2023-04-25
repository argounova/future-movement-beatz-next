import React from "react"
// import Seo from "../components/SEO"
import Image from "next/image"
import styled from "@emotion/styled"
import Banner from "../components/Banner/index"
import Faq from "../components/Faq"
import svcImg1 from "../../public/images/artwork-service-background.jpeg"
import svcImg2 from "../../public/images/production-service-background.jpeg"
import svcImg3 from "../../public/images/mixing-service-background.jpeg"
import svcImg4 from "../../public/images/all-services-background.jpeg"

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
  // const serviceHeaderImage = getImage(headerImage)
  return (
    <>
      <Banner
        title={title}
        subTitle={introduction}
        contact={true}
      >
        {headerImageArtwork && (
          <Image
            className="banner__image"
            src={svcImg1}
            alt={title}
            height={800}
            width={1980}
          />
        )}
        {headerImageProduction && (
          <Image
            className="banner__image"
            src={svcImg2}
            alt={title}
            height={800}
            width={1980}
          />
        )}
        {headerImageMixing && (
          <Image
            className="banner__image"
            src={svcImg3}
            alt={title}
            height={800}
            width={1980}
          />
        )}
        {headerImageAll && (
          <Image
            className="banner__image"
            src={svcImg4}
            alt={title}
            height={800}
            width={1980}
          />
        )}
   
      </Banner>
      <ServiceTemplateStyles className="section">
        <div className="container container__tight">
          {description && (
            <div className="column">
              {description}
            </div>
          )}
          {faqs && (
            <div className="column">
              {faqs.map((item, index) => {
                return(
                  <Faq
                    key={index}
                    title={item.question}
                    description={item.answer}
                  />
                )
              })}
            </div>
          )}
        </div>
      </ServiceTemplateStyles>
    </>
  )
}

export default ServiceTemplate
