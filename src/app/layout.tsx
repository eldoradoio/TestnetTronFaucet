import type { Metadata } from 'next'
import '../../styles/globals.css'
import { Nunito } from 'next/font/google'
import { Navbar } from '../modules/layouts/components/Navbar'
import Footer from '../modules/layouts/components/Footer'
import { Toaster } from 'react-hot-toast'

const nunito = Nunito({ subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
    title: 'El Dorado Testnet Faucet',
    description: 'El Dorado Testnet Faucet',
    icons: {
        icon: '/favicon.png',
    },
}

interface RootLayoutProps {
    children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en">
            <body className={nunito.className}>
                <Toaster position={'bottom-center'} />
                <div className={"mx-auto flex-grow flex flex-col overflow-auto min-h-[100vh]"}>
                    <Navbar />
                    <main className="flex flex-grow overflow-auto">
                        {children}
                    </main>
                    <Footer />
                </div>
            </body>
        </html>
    )
}
