import { SignUPForm } from "./SignUpForm";
import { ImageSection } from "../ImageSection/ImageSections";
export const SignUp = () => {
    return(
        <div className="flex flex-col  md:flex-row w-full h-full pb-20 md:pb-[0px]">
                <ImageSection/>
                <SignUPForm/>
        </div>
    )
}