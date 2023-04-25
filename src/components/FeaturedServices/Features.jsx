import * as React from "react"
import { FeaturedProductsStyles } from "./style"
// import FeaturedProduct from "./FeaturedProduct"
// import useFeaturedProduct from "../../hooks/use-featured-product"
import Button from "../Button/index"

const Features = ({ title, introduction }) => {
  // const featuredProduct = useFeaturedProduct()

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
        {/* {featuredProduct.map((node, index) => {
          return <FeaturedProduct feature={node} key={index} />
        })} */}
      </div>
      <div className="container container__tight learn__more">
        <Button href="/products" text="All Services" />
      </div>
    </FeaturedProductsStyles>
  )
}

export default Features
