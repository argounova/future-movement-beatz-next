import React from "react"
import Image from "next/image"
import BannerService from "@/components/BannerService"

// Photo by Luis Quintero from Pexels: https://www.pexels.com/photo/man-taking-a-knee-in-front-of-wall-with-mural-2068149/
import svcImg1 from "../../public/images/artwork-service-background.jpeg"

// Photo by Vincent Gerbouin from Pexels: https://www.pexels.com/photo/gray-and-teal-animal-skeleton-wall-decor-2263686/
import svcImg2 from "../../public/images/production-service-background.jpeg"

// Photo by Hugo Heimendinger from Pexels: https://www.pexels.com/photo/street-art-1766231/
import svcImg3 from "../../public/images/mixing-service-background.jpeg"

// Photo by Aleksandar Pasaric from Pexels: https://www.pexels.com/photo/graffiti-art-on-wall-3048528/
import svcImg4 from "../../public/images/all-services-background.png"


const ServiceTemplate = (serviceInfo) => {
  const {
    headerImageArtwork,
    headerImageProduction,
    headerImageMixing,
    headerImageAll,
    title,
    introduction,
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
      
    </>
  )
}

export default ServiceTemplate
