import Image from "next/image";
import { NftDetails } from "./NftDetails";
import { MoreNfts } from "./MoreNfts";
import { GoToArtistBtn } from "./GoToArtistBtn";
export const Nft = () => {
    return(
        <div className="flex flex-col h-full w-full">
                      <div className="w-full h-[320px] md:h-[420px] lg:h-[560px]  relative ">
                         <Image src="/nft/nftSlider.png" fill className="w-full h-full object-cover" alt="nftImg"/>
                      </div>
                      <NftDetails/>
                      <MoreNfts/>
                      
                      
        </div>
    )
}