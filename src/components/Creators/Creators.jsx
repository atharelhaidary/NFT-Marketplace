import { CreatorsImgs } from "./CreatorsImgs";
import { RankingBtn } from "./RankingBtn";

export const Creators = () => {
    return(
        <div className="w-full px-8 md:px-12 xl:px-50 flex flex-col gap-7">
                   {/* title */}
                    <div className="flex items-end">
                            <div className="flex flex-col  flex-1">
                                <p className="font-[600] text-[38px]">Top creators</p>
                                <p className="text-[16px] md:text-[22px] font-[400]" style={{fontFamily:'var(--font-space-mono)'}}>Checkout Top Rated Creators on the NFT Marketplace.</p>
                            </div>
                            <RankingBtn style="hidden md:flex"/>
                          
                    </div>
                    {/* imgs */}
                    <CreatorsImgs/>
                    <RankingBtn style="flex md:hidden"/>

        </div>

    )
}