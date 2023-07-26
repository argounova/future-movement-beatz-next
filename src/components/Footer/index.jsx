import * as React from "react"
import Link from "next/link"
import { menuItems } from "../../constants/links"
import { FooterStyles, FooterMenuStyles, CopyrightStyles } from "./style"
// import useAllProduct from "../../hooks/use-all-product"
import { metadata } from "../../config/config"
import {
  FaTiktok as Tiktok,
  FaInstagram as Instagram,
  FaYoutube as Youtube,
  FaTwitter as Twitter,
} from "react-icons/fa"
import { TbBrandLinktree as LinkTree } from "react-icons/tb";

const Footer = () => {
  // const allProduct = useAllProduct()
  return (
    <FooterStyles style={{ marginBottom: 0 }} className="section">
      <div className="gradient">
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
              <li><Link href="/comingsoon">Playlist Submissions</Link></li>
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

        {metadata.tiktokUsername ||
        metadata.instagramUsername ||
        metadata.youtubeUsername ||
        metadata.twitterUsername ||
        metadata.linktreeUsername ? (
          <FooterMenuStyles className="footer__menu social__menu">
            <h5>
              Follow Future Movement Beatz
            </h5>
            <ul>
              {metadata.tiktokUsername && (
                <li>
                  <a
                    href={`https://www.tiktok.com/@${metadata.tiktokUsername}`}
                    target="_blank"
                    rel="nofollow noreferrer noopener"
                  >
                    <Tiktok />
                  </a>
                </li>
              )}
              {metadata.instagramUsername && (
                <li>
                  <a
                    href={`https://www.instagram.com/${metadata.instagramUsername}`}
                    target="_blank"
                    rel="nofollow noreferrer noopener"
                  >
                    <Instagram />
                  </a>
                </li>
              )}
              {metadata.youtubeUsername && (
                <li>
                  <a
                    href={`https://www.youtube.com/@${metadata.youtubeUsername}`}
                    target="_blank"
                    rel="nofollow noreferrer noopener"
                  >
                    <Youtube />
                  </a>
                </li>
              )}
              {metadata.twitterUsername && (
                <li>
                  <a
                    href={`https://www.twitter.com/${metadata.twitterUsername}`}
                    target="_blank"
                    rel="nofollow noreferrer noopener"
                  >
                    <Twitter />
                  </a>
                </li>
              )}
              {metadata.linktreeUsername && (
                <li>
                  <a
                    href={`https://www.linktr.ee/${metadata.linktreeUsername}`}
                    target="_blank"
                    rel="nofollow noreferrer noopener"
                  >
                    <LinkTree />
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
              href={metadata.developerUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {metadata.developerName}
            </a>
          </p>
        </div>
      </CopyrightStyles>
      </div>
    </FooterStyles>
  )
}

export default Footer
