import { Provider } from 'react-redux'
import { store } from '../app/store'
import '../styles/globals.css'
import { SessionProvider } from "next-auth/react"
import {Provider as AuthProvider } from "next-auth/react"


const MyApp = ({Component,
  pageProps: { session, ...pageProps }, }) => {
  return (

    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>

  )
}

export default MyApp
