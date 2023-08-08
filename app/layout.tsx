import { Header, Footer } from './components'
import './globals.css'

export const metadata = {
  title: 'Flexibbble',
  description: 'The place where you could share your coding projects with people all over the world.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
