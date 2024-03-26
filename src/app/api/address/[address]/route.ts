// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import TronWeb from 'tronweb'
import type { NextApiRequest } from 'next'
// eslint-disable-next-line @next/next/no-server-import-in-page
import { NextResponse } from 'next/server'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const tronWeb = new TronWeb({
    fullHost: 'https://api.shasta.trongrid.io',
    headers: {
        'tron-pro-api-key': process.env.REACT_APP_API_KEY,
    },
    privateKey: process.env.REACT_APP_PRIVATE_KEY,
})

async function send_token(to_add: string, amount: string): Promise<string> {
    const status = await tronWeb.isConnected()
    console.log(status)
    const contract = await tronWeb.contract().at(process.env.REACT_APP_TOKEN_ADDRESS)
    return await contract.transfer(to_add, parseInt(amount)).send()
}

export async function GET(request: any, { params }: { params: { address: string } }) {
    try {
        console.log('handler')
        console.log(request)
        const { address } = params || {}
        const searchParams = request.nextUrl.searchParams;
        const amount = searchParams.get('amount');
        if (!address) {
            throw new Error('Address is required')
        }
        const tx = await send_token(address, amount)
        return NextResponse.json(
            {
                amount,
                address,
                tx,
            }, { status: 200 });
    } catch (error) {
        return NextResponse.json(
            {
                error,
            }, { status: 500 })
    }
}
