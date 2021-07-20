import '../styles/globals.scss'
import Header from '../components/Header'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <main className="container">
      <Header />
        <Component {...pageProps} />
      <Footer />
      </main>
    </>
  )
}

export default MyApp
