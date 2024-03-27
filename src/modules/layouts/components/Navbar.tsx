import Image from 'next/image'

export const Navbar = (): React.JSX.Element => {
    return (
        <header className="sticky top-0 z-[49]">
            <div className="shadow-sm">
                <div className="h-[64px] flex justify-center items-center gap-2">
                    <Image src={"/logo.svg"} alt={"El Dorado Logo"} width={24} height={24} />
                    <ruby className={"mt-2"}><span className="text-[#0006] text-sm">- Testnet Faucet -</span><rt><span className="font-normal uppercase text-[20px] text-[#FFB300]">El Dorado</span></rt>
                    </ruby>
                </div>
            </div>
        </header>
    )
}
