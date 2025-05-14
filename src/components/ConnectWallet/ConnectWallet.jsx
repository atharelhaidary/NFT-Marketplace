import { ImageSection } from "../ImageSection/ImageSections";
import { ChoosenWallet } from "./ChoosenWallet";
export const ConnectWallet = () => {
    return(
        <div className="flex flex-col  md:flex-row w-full h-full pb-20 md:pb-[0px] gap-10">
                        <ImageSection/>
                        <ChoosenWallet/>
        </div>
    )
}