import Navigation from './componentes/Navigation'
import '../styles/globals.css'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap'
})
export default function RootLayout ({ children }) {
  return (
    <html className={roboto.className}>
      <head>
        <title>Profe APP</title>
      </head>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
