import TopNavigation from "../TopNavigatiion"
import Footer from "../Footer"


const Layout = ({ children }) => {
  return (
    <>
      <TopNavigation />
        {children}
      <Footer />
    </>
  )
}

export default Layout