import { AboutUs } from "./AboutUs";
import { ExploreUs } from "./ExploreUs";
import { JoinUs } from "./JoinUs";
import { PiCopyright } from "react-icons/pi";

export const Footer = () => {
    return(
        <div className="bg-BoxBackground h-auto  px-8 md:px-10 lg:px-20 xl:px-50 py-10  grid grid-cols-1 gap-10">
            <div className="grid grid-cols-1 lg:grid-cols-3  gap-10">
                <AboutUs/>
                <ExploreUs/>
                <JoinUs/>
            </div>
            <div className="w-full h-[2px] bg-icons"/>
            <div className="flex gap-2 items-center -mt-4">
                <PiCopyright size={20} className="text-TextFooter"/>
                <p className="text-TextFooter text-[12px]">NFT Market. Use this template freely.</p>

            </div>
        </div>
    )
}