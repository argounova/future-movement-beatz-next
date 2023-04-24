import * as React from "react"
import Link from "next/link"
import { menuItems } from "../../constants/links"
import { FooterStyles, FooterMenuStyles, CopyrightStyles } from "./style"
// import useAllProduct from "../../hooks/use-all-product"
import { UseSiteMetadata } from "../../hooks/useSiteMetadata"
import {
  FaTiktok as Tiktok,
  FaInstagram as Instagram,
  FaYoutube as Youtube,
} from "react-icons/fa"

const Footer = () => {
  // const allProduct = useAllProduct()
  const siteMeta = UseSiteMetadata()
  return (
    <FooterStyles style={{ marginBottom: 0 }} className="section">
      <div className="container container__tight">
        <FooterMenuStyles className="footer__menu">
          <h5>Links</h5>
          <ul>
            {menuItems.map((item, index) => {
              return (
                <li key={index}>
                  <Link href={item.path} activeClassName="menu__item--active">
                    {item.text}
                  </Link>
                </li>
              )
            })}
          </ul>
        </FooterMenuStyles>
        {/* {allProduct.length > 0 && ( */}
          <FooterMenuStyles className="footer__menu products__menu">
            <h5>
              <Link href="/services/all">
                All Services
              </Link>
            </h5>
            <ul>
              <li><Link href="/services/artwork">Album Artwork</Link></li>
              <li><Link href="/services/production">Music Production</Link></li>
              <li><Link href="/services/mixing">Mixing & Mastering</Link></li>
              {/* {allProduct.map((item, index) => {
                const { gatsbyPath, title } = item

                return ( */}
                  {/* <li key={index}>
                    <Link to={gatsbyPath}>
                      {title}
                      <span>.</span>
                    </Link>
                  </li> */}
                {/* )
              })} */}
            </ul>
          </FooterMenuStyles>
        {/* )} */}

        {siteMeta.tiktokUsername ||
        siteMeta.instagramUsername ||
        siteMeta.youtubeUsername ? (
          <FooterMenuStyles className="footer__menu social__menu">
            <h5>
              Follow Future Movement Beatz
            </h5>
            <ul>
              {siteMeta.tiktokUsername && (
                <li>
                  <a
                    href={`https://www.tiktok.com/@${siteMeta.tiktokUsername}`}
                    target="_blank"
                    rel="nofollow noreferrer noopener"
                  >
                    <Tiktok />
                  </a>
                </li>
              )}
              {siteMeta.instagramUsername && (
                <li>
                  <a
                    href={`https://www.instagram.com/${siteMeta.instagramUsername}`}
                    target="_blank"
                    rel="nofollow noreferrer noopener"
                  >
                    <Instagram />
                  </a>
                </li>
              )}
              {siteMeta.youtubeUsername && (
                <li>
                  <a
                    href={`https://www.youtube.com/@${siteMeta.youtubeUsername}`}
                    target="_blank"
                    rel="nofollow noreferrer noopener"
                  >
                    <Youtube />
                  </a>
                </li>
              )}
            </ul>
          </FooterMenuStyles>
        ) : (
          ""
        )}
      </div>
      <CopyrightStyles>
        <div className="container container__tight">
          <p>
            Designed & developed by{" "}
            <a
              href={siteMeta.developerUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {siteMeta.developerName}
            </a>
            <span>.</span>
          </p>
        </div>
      </CopyrightStyles>
    </FooterStyles>
  )
}

export default Footer
