import { NftDetailsCountDown } from "./NftDetailsCountDown";
import { NftDetailsInfo } from "./NftDetailsInfo";
export const NftDetails = () => {
    return(
        <div className="flex  px-8 md:px-10 lg:px-10 xl:px-50 gap-7 w-full py-12 h-auto items-start gap-40">
            <NftDetailsInfo/>
            <NftDetailsCountDown style="hidden md:flex"/>
        </div>
    )
}