import { NavbarLogo } from "./NavbarLogo"
import { NavbarLinks } from "./NavbarLinks"
export const Nabvar = () => {
    return(
        <div className="py-5  px-8 lg:px-4  flex">
            <NavbarLogo style="lg:w-[50%] xl:w-[56%] lg:px-4"/>
            <NavbarLinks/>
        </div>
    )
}