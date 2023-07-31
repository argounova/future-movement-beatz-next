import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { ContainerStyles } from "./style"
import { ProductStyles } from "./style"
import {
  Box,
  Container
} from "@mui/material"
import Button from "../Button/index"
import fmbServices from "./services"


const FeaturedServices = () => {
  return (
    <Container maxWidth='xl' sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', minHeight: '100vh', mt: 10, mb: 10 }}>
      <Box className="intro__area">
        <h2>What We Do</h2>
        <p>Let us help with your next album</p>
      </Box>
      <ContainerStyles>
        <Box className="container container__tight container__scroll">
          {fmbServices.map((service, index) => (
            <ProductStyles key={index}>
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
            </ProductStyles>
          ))}
        </Box>
      </ContainerStyles>
      <Box sx={{ mt: 10 }}>
        <Button href="/services/all" text="View All Services" />
      </Box>
    </Container>
  )
}

export default FeaturedServices