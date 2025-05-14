import Image from "next/image"

export const ImageSection = () => {
    return(
          <div className=" flex md:flex-1 w-full h-[232px] md:w-[397px] md:h-[615px] lg:w-[610px] lg:h-[691px] relative">
                            <Image src="/signup/signup.png" fill className="w-full h-full object-cover" alt="signupImg"/>
          </div>
    )
}