import { TbBrandDiscord } from "react-icons/tb";
import { PiYoutubeLogo } from "react-icons/pi";
import { PiTwitterLogoBold } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa";
import { FaEarthAmericas } from "react-icons/fa6";

export const GlobalLinks = () => {
    return(
            <div className="flex gap-2">
                        <FaEarthAmericas size={27} className="text-icons"/>
                        <TbBrandDiscord size={30} className="text-icons"/>
                        <PiYoutubeLogo size={30} className="text-icons"/>
                        <PiTwitterLogoBold size={30} className="text-icons"/>
                        <FaInstagram size={30} className="text-icons"/>
            </div>
    )
}