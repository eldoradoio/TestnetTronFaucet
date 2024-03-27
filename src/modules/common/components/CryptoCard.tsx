'use client'
import Image from 'next/image'
import { useCustomToast } from '../../../hooks/useCustomToast'
import { useCallback, useState } from 'react'

export const CryptoCard = () => {
    const { notifyInfo, notifySuccess, notifyError } = useCustomToast()
    const [walletAddress, setWalletAddress] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [currentAmount, setCurrentAmount] = useState(0)

    const handleSubmit = useCallback(async (event: any) => {
        try {
            event.preventDefault()
            setIsSubmitting(true)
            setTimeout(() => setIsSubmitting(false), 400)
            const amount = (Math.ceil(100 * Math.random()) * 10000 / 1000000).toString()
            setCurrentAmount(currentAmount + +amount)
            const res = await fetch(`/api/address/${walletAddress}?amount=${amount}`)
            if(!res.ok) {
                throw new Error('Failed to request transaction')
            }
            const { tx } = await res.json()
            notifySuccess('Transaction requested successfully!')
            notifyInfo(<span>Amount to be received: <a href={`https://shasta.tronscan.org/#/transaction/${tx as string}`}
                                                       rel={'noreferrer'}
                                                       target={'_blank'}><b><u>{amount} USDT</u></b></a></span>)
        } catch (error: any) {
            if (error.message) {
                notifyError(error.message)
            }
            setIsSubmitting(false)
        }
    }, [currentAmount, notifyInfo, notifySuccess, walletAddress])

    return (
        <form id={'wallet-form'} className={'flex items-center gap-[20px] mt-[20px] mb-[25px]'} onSubmit={handleSubmit}
              spellCheck={false}>
            <div className="w-[350px] md:w-[500px] shadow-md overflow-hidden rounded-2xl bg-[#1F9977] relative">
                <div className="p-4 relative z-20">
                    <div className="flex justify-between items-center">
                        <span className="text-sm font-extrabold text-white">TRON-USDT</span>
                    </div>
                    <div className="mt-4 space-y-2">
                        <input type="text" autoFocus required placeholder={'Enter wallet address'}
                               className={'w-full py-[0.9rem] px-[2.5rem] text-xs md:text-[1.2rem] text-[#616161] rounded-2xl text-center focus:outline-none bg-[#F5F5F5] focus:bg-white'}
                               onChange={e => setWalletAddress(e.target.value)}
                        />
                        <div className="text-sm text-white text-center h-8">{!!currentAmount &&
                            <span>Expected amount to be received: <b
                                className={'text-lg'}>{currentAmount.toFixed(2)} USDT</b></span>}</div>
                    </div>
                    <div className="mt-2 text-center">
                        <button
                            className={`button text-[0.8rem] md:text-[1.1rem] ${isSubmitting ? '!cursor-not-allowed bg-gray-600 !border-gray-600 text-white opacity-50 md:!text-[1rem]' : 'filled'}`}
                            type={'submit'}
                            disabled={isSubmitting}
                        >
                            Submit
                        </button>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                        <span className="text-sm font-bold text-white opacity-60">Shasta Test Network</span>
                    </div>
                </div>
                <Image className={'absolute right-0 top-0 z-10'} src="/tron-card.svg" alt="Tron Logo" width={350}
                       height={350} />
            </div>
        </form>
    )
}

export default CryptoCard
