import { TrendingImgs } from "./TrendingImgs"
export const Trending = () => {
 
    return(
        <div className="w-full px-8 md:px-12 xl:px-50 flex flex-col gap-7  py-16 h-auto">
            {/* title */}
            <div className="flex flex-col">
                <p className="font-[600] text-[38px]">Trending Collection</p>
                <p className="text-[16px] md:text-[22px] font-[400] font-space-mono">Checkout our weekly updated trending collection.</p>
            </div>
            {/* images */}
            <TrendingImgs/>
        </div>
    )
}