import Navigation from './componentes/Navigation'
import '../styles/globals.css'

export default function RootLayout ({ children }) {
  return (
    <html>
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
