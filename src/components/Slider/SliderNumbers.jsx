import { PiRocketLaunchLight } from "react-icons/pi";
import Link from "next/link";
import { GlobalNumbers } from "../GLobalNumbers/GlobalNumbers";
export const SlidersNumbers = ({style}) => {
    const arrInfo =[
        {
            value:240,
            title:'Total Sale'
        },
        {
            value:100,
            title:'Auctions'
        },
           {
            value:240,
            title:'Artists'
        },
    ]
    return(
        <div className={`flex flex-col gap-3 ${style}`}>
                   <Link href="/SignUp" className="cursor-pointer bg-btn flex items-center md:w-[60%] lg:w-[30%] py-3 gap-2 rounded-2xl justify-center">
                        <PiRocketLaunchLight size={20}/>
                        <p className="text-[12px]">Get Statrted</p>
                    </Link>
                    <GlobalNumbers arrInfo={arrInfo} style="md:w-[90%] lg:w-[70%]"/>
        </div>
    )
}