import FooterComponent from '../components/FooterComponent'
import HeaderComponent from '../components/HeaderComponent'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  
  return <>
  <HeaderComponent />
  <Component {...pageProps} />
  <FooterComponent />
  </>
}

export default MyApp
