
import { DiscoverBtn } from "./DiscoverBtn";
import { NftGlobalImgs } from "../NftGlobalImgs/NftGlobalImgs";
export const Discover = () => {
     const arrCategories = [
        {
            img:'/discover/discover1.png',
            title:'Distant Galaxy',
            desc:'MoonDancer',
            subImg:'/discover/descoverDes.png',
            price:'1.63',
            sign:'ETH'
        },
        {
            img:'/discover/discover2.png',
            title:'Life On Edena',
            desc:'NebulaKid',
            subImg:'/discover/discoverDes2.png',
            price:'5.34',
            sign:'ETH'



        },
        {
            img:'/discover/discover3.png',
            title:'AstroFiction',
            desc:'Spaceone',
            subImg:'/discover/discoverDes3.png',
            price:'6.11',
            sign:'ETH'
        },
   
    ]
    return(
        <div className="w-full px-8 md:px-12 xl:px-50 flex flex-col gap-7">
                   {/* title */}
                    <div className="flex items-end">
                            <div className="flex flex-col  flex-1">
                                <p className="font-[600] text-[28px] md:text-[28px] lg:text-[38px]">Discover More NFTs</p>
                                <p className="text-[16px] md:text-[16px] lg:text-[22px] font-[400] font-space-mono" >Explore new trending NFTs.</p>
                            </div>
                            <DiscoverBtn style="hidden md:flex"/>
                          
                    </div>
                    {/* imgs */}
                    <NftGlobalImgs arr={arrCategories} style="bg-BoxBackground" imgsSize="w-[315px] h-[238px] md:w-[330px] md:h-[295px] lg:w-[420px] lg:h-[296px] relative"/>
                    <DiscoverBtn style="flex md:hidden"/> 

        </div>

    )
}