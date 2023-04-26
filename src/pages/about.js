import * as React from "react"
import Layout from "../components/Layout"
import Head from "next/head"
import Image from "next/image"
import About from "../components/About/index"
// import Seo from "../components/SEO"
import SimpleBanner from "../components/BannerSimple"
import aboutImg from "../../public/images/smoke-background.jpg"

const contact = () => {
  return (
    <>
      <Head>
        <title>About | Future Movement Beatz</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logov2.png" />
      </Head>      
      <Layout>
        <SimpleBanner title="About Future Movement Beatz">
          <Image
            className="banner__image"
            src={aboutImg}
            alt="smoke background"
          />
        </SimpleBanner>
        <About />
      </Layout>
    </>
  )
}

export default contact