import React, { useContext, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import MenuContext from "../../context/menu"
import { motion } from "framer-motion"
import { menuItems } from "./constants"
import { metadata } from "../../config/config"
import { FiChevronDown as Chevron } from "react-icons/fi"
import {
    Styles,
    NavTopLevel,
    SubNavStyles,
    HamburgerStyles,
    LogoStyles,
} from "./styles"
import {
    barOneVariants,
    barTwoVariants,
    barThreeVariants,
    menuList,
    subMenuNavVariants,
} from "./anim"
import logo from '../../../public/logov2.png'

const Navigation = () => {
    const [isOpen, setNav] = useContext(MenuContext)
    const [subNavIsOpen, setSubNav] = useState(false)
  
    const toggleNav = () => {
      setNav((isOpen) => !isOpen)
    }
  
    const toggleSubNav = () => {
      setSubNav((subNavIsOpen) => !subNavIsOpen)
    }

    return (
        <Styles>
          <div className="nav">
            <div className="container">
              <HamburgerStyles
                initial="closed"
                animate={isOpen ? "open" : "closed"}
                onClick={toggleNav}
                onKeyDown={toggleNav}
                aria-label={isOpen ? "Close Menu" : "Open Menu"}
                className={isOpen ? " open" : ""}
              >
                <motion.span
                  className="bar"
                  variants={barOneVariants}
                ></motion.span>
                <motion.span
                  className="bar"
                  variants={barTwoVariants}
                ></motion.span>
                <motion.span
                  className="bar"
                  variants={barThreeVariants}
                ></motion.span>
              </HamburgerStyles>
              <Link href="/">
                <Image 
                  src={logo}
                  alt="logo"
                  height={80}
                  width={90}
                />
              </Link>
            </div>
          </div>
          <motion.div
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            variants={menuList}
            transition={{ type: "ease", stiffness: 50, velocity: 50 }}
            className="menu"
          >
            <NavTopLevel>
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link
                    onClick={toggleNav}
                    onKeyDown={toggleNav}
                    href="/"
                    activeClassName="menu__item--active"
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
                <li className={subNavIsOpen ? "open" : "closed"}>
                  <button
                    type="button"
                    onClick={toggleSubNav}
                    onKeyDown={toggleSubNav}
                  >
                    <Chevron />
                  </button>
    
                  <SubNavStyles
                    initial="closed"
                    animate={subNavIsOpen ? "open" : "closed"}
                    variants={subMenuNavVariants}
                  >
                    <li>
                      <Link
                        onClick={toggleNav}
                        onKeyDown={toggleNav}
                        href="/services/all"
                      >
                        All Services
                      </Link>
                    </li>
                    <hr />
                    {/* {featuredProduct.map((item, index) => {
                      const { gatsbyPath, title } = item
                      return (
                        <li key={index}>
                          <Link
                            onClick={toggleNav}
                            onKeyDown={toggleNav}
                            to={gatsbyPath}
                          >
                            {title}
                          </Link>
                        </li>
                      )
                    })} */}
                  </SubNavStyles>
                </li>
            </NavTopLevel>
          </motion.div>
        </Styles>
    )
}

export default Navigation