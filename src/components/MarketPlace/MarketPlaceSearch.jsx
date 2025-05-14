import { FiSearch } from "react-icons/fi";

export const MarketPlaceSearch = () => {
    return(
         <div className="flex flex-col  flex-1 gap-3 px-8 md:px-10 lg:px-20 xl:px-50 py-20">
                                <p className="font-[600] text-[28px] md:text-[38px] lg:text-[51px]">Browse Marketplace</p>
                                <p className="text-[16px] lg:text-[22px] font-[400] font-space-mono" >Browse through more than 50k NFTs on the NFT Marketplace.</p>
                                <div className="w-full border border-BoxBackground h-auto rounded-3xl p-4 flex items-center justify-between">
                                    <input type="text" placeholder="Search your favourite NFTs" className="flex flex-1 text-[16px] font-[400] text-icons focus:outline-none"/>
                                    <FiSearch size={25}/>
                                </div>
        </div>
    )
}