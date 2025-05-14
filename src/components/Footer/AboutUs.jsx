import { NavbarLogo } from "../NavBar/NavbarLogo"
import { GlobalLinks } from "../GlobalLinks/GlobalLinks"
export const AboutUs = () => {
    return(
          <div className="flex flex-col gap-3 flex-1">
                             <NavbarLogo/>
                             <p className="font-[400] text-TextFooter text-[16px]">NFT marketplace UI created<br/> with Anima for Figma.</p>
                             <p className="font-[400] text-TextFooter text-[16px]">Join our community.</p>
                             <GlobalLinks/>
        </div>
    )
}