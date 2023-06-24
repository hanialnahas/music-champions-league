import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from './navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='flex flex-col h-screen'>
          <NavBar />
          <main className='flex justify-center flex-grow content-center m-auto  w-5/6 border-4 border-slate-500'>{children}</main>
        </div>
        </body>
    </html>
  )
}

