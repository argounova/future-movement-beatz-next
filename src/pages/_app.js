import '@/styles/globals.css'
import { MenuProvider } from '@/context/menu'

export default function App({ Component, pageProps }) {
  return(
    <MenuProvider>
      <Component {...pageProps} />
    </MenuProvider>
  )
}
