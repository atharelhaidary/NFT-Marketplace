import { SlidersNumbers } from "./SliderNumbers";

export const SliderInfo = () => {
    
    return(
        <div className=" flex w-full md:w-[50%] lg:w-[48%] xl:w-[56%] flex-col gap-10   ">
                <p className="text-[28px] md:text-[38px] xl:text-[67px]  w-full md:w-[90%] lg:w-[70%] ">
                    Discover
                    Digital Art &  
                    Collect NFTs
                </p>
                <p className="text-[16px] xl:text-[22px] font-[400] font-space-mono">
                    NFT Marketplace UI Created With Anima For <br/>
                    Figma. Collect, buy and sell art from more <br/>
                    Than 20k NFT Artists
                </p>
                <SlidersNumbers style="hidden md:flex"/>
        </div>
    )
}