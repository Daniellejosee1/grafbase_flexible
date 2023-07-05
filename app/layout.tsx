import './globals.css';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';


export const metadata = {
  title: 'Flexible',
  description: 'Showcaseand discover remarkable developer projects',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
