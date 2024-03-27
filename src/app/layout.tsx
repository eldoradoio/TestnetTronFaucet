import type { Metadata, Viewport } from 'next'
import '../../styles/globals.css'
import { Nunito } from 'next/font/google'
import { Navbar } from '../modules/layouts/components/Navbar'
import Footer from '../modules/layouts/components/Footer'
import { Toaster } from 'react-hot-toast'

const nunito = Nunito({ subsets: ['latin'], display: 'swap' })

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
}

export const metadata: Metadata = {
    title: 'El Dorado Testnet Faucet',
    description: 'A testnet faucet for developing purposes by El Dorado',
    icons: {
        icon: '/favicon.png',
    },
    openGraph: {
        title: 'El Dorado Testnet Faucet',
        description: 'A testnet faucet for developing purposes by El Dorado',
        images: 'https://testnet-tron-faucet-phi.vercel.app/og.png',
        url: 'https://testnet-tron-faucet-phi.vercel.app/',
    },
    twitter: {
        title: 'El Dorado Testnet Faucet',
        description: 'A testnet faucet for developing purposes by El Dorado',
        site: '@eldoradoio',
        card: 'summary_large_image',
        images: ['https://testnet-tron-faucet-phi.vercel.app/og.png']
    }
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
