import * as React from "react"
import Head from 'next/head'
import TopNavigation from "@/components/TopNavigation"
import Footer from "@/components/Footer"
import BannerText from "@/components/BannerText"
import FeaturedServices from "@/components/FeaturedServices"
import BannerVideo from "@/components/BannerVideo"
import FeaturedSingles from "@/components/FeaturedSingles"
import HomeHeaderBanner from "@/components/HomeHeaderBanner"


export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Future Movement Beatz</title>
        <meta name="description" content="Future Movement Beatz" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logov2.png" />
      </Head>
      <TopNavigation />
      <HomeHeaderBanner />
      <BannerText />
      <FeaturedServices />
      <BannerVideo 
        videoSrcURL1="https://www.youtube.com/embed/tLRp9vaY6VM"
        videoTitle1="Abstrakt Noize 3 Official Visualizer"
        videoSrcURL2="https://www.youtube.com/embed/0q5MEoA2Wyc"
        videoTitle2="Peace of Mind prod by Jiro"
      />
      <FeaturedSingles
        title="Latest Singles"
        introduction="Available to stream now"
      />
      <Footer />
    </>
  )
}
