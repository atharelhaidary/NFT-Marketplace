import { BiMessageAltMinus } from "react-icons/bi";

export const ContactUs = ({showMessage}) => {
    return(
          <div className="flex flex-col lg:flex-row mt-6 lg:bg-white rounded-3xl">
                <input tye="text" placeholder="Enter your email here" className="px-4 py-4 bg-white text-[#2B2B2B]   rounded-3xl lg:rounded-l-3xl lg:rounded-r-[0px] font-[400] text-[16px]"/>
                <div className="cursor-pointer hover:scale-number duration-500 ease-in-out bg-btn z-30 lg:-ml-7 rounded-3xl w-full flex justify-center items-center gap-2 py-3 mt-4 lg:mt-0">
                    {showMessage && <BiMessageAltMinus size={20}/> }
                    <span className="font-[400] text-[16px]">Subscribe</span>
                </div>
          </div>

    )
}