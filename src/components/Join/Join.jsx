import Image from "next/image"
import { ContactUs } from "./ContactUs"
export const Join = () => {
   return(
    <div className="w-full px-8 md:px-12 xl:px-50 flex flex-col gap-7  py-16 h-auto ">
        <div className="w-full bg-BoxBackground h-full rounded-3xl flex flex-col md:flex-row p-12 gap-8 lg:gap-20">
                {/* right div */}
                <div className="w-[300px] h-[330px] lg:w-[425px] lg:h-[310px] relative">
                    <Image src="/join/join.png" fill className="w-full h-full" alt="joinImg"/>
                </div>
                {/* left div */}
                <div className="flex flex-col gap-3">
                        <h4 className="text-[28px] lg:text-[38px]">
                            Join Our Weekly <br/>
                            Digest
                        </h4>
                        <p className="text-left text-[16px] lg:text-[22px] font-[400]">Get exclusive promotions & updates <br/>straight to your inbox.</p>
                        <ContactUs showMessage={true}/>
                </div>

        </div>
    </div>
   )
}