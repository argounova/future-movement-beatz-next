import * as React from "react"
import Image from "next/image"
import { VideoStyles } from "./style"
import vidBannerImg from "../../../public/images/smoke-background.jpg"

const Video = ({ videoSrcURL1, videoTitle1, videoSrcURL2, videoTitle2 }) => {
    return(
        <VideoStyles>
            <Image
                className="perks__image--bg"
                src={vidBannerImg}
                alt="video banner background image"
                placeholder="dominantColor"
            />
            <div className="perks__image--overlay"></div>
            <div className="container">
                <div className="video" style={{ padding: '50px' }}>
                    <iframe
                    src={videoSrcURL1}
                    title={videoTitle1}
                    width="560"
                    height="315"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"
                    frameborder="0"
                    webkitallowfullscreen="true"
                    mozallowfullscreen="true"
                    allowFullScreen
                    />
                </div>
                <div className="video" style={{ padding: '50px' }}>
                    <iframe
                    src={videoSrcURL2}
                    title={videoTitle2}
                    width="560"
                    height="315"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"
                    frameborder="0"
                    webkitallowfullscreen="true"
                    mozallowfullscreen="true"
                    allowFullScreen
                    />
                </div>
            </div>
        </VideoStyles>
    )
}
export default Video