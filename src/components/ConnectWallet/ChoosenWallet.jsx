import Image from "next/image"
export const ChoosenWallet = () => {
    const arrWallet = [
        {
            img:'/wallet/wallet1.png',
            title:'Metamask'
        },
        {
            img:'/wallet/wallet2.png',
            title:'Wallet Connect'
        },
        {
            img:'/wallet/wallet3.png',
            title:'Coinbase'
        },
    ]
    return(
        <div className="flex flex-col flex-1  px-10 gap-10 justify-center mt-6">
                    {/* title */}
                    <div className="flex flex-col">
                        <p className="font-[600] text-[38px] lg:text-[51px]">Connect wallet</p>
                        <p className="text-[16px] md:text-[15.5px] lg:text-[21px] font-[400] font-space-mono">Choose a wallet you want to connect.<br/> There are several wallet providers.</p>
                    </div>
                    {/* infos */}
                    <div className="flex flex-col gap-5">
                        {
                            arrWallet.map((item,index)=>(
                                <div className="border border-btn hover:scale-number duration-500 ease-in-out cursor-pointer flex gap-3 bg-BoxBackground w-full lg:w-[70%] xl:w-[45%] px-7 py-4 rounded-3xl items-center" key={index}>
                                    <Image src={item?.img} width={40} height={40} alt="walletImg"/>
                                    <span className="text-[22px]">{item?.title}</span>
                                </div>
                            ))
                        }
                        
                    </div>
        </div>
    )
}