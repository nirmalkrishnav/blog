import '../styles/globals.scss'
import Header from '../components/Header'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <main className="container">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  )
}

export default MyApp
