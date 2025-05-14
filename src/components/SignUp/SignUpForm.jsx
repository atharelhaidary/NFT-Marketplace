import { LuUserRound } from "react-icons/lu";
import { BiMessageAltMinus } from "react-icons/bi";
import { RiLockPasswordFill } from "react-icons/ri";

export const SignUPForm = () => {
    const arrInputs =[
        { 
            icon:<LuUserRound className="text-icons" size={20}/>,
            placeholder: 'Username',
        },
         {
            icon:<BiMessageAltMinus className="text-icons" size={20}/>,
            placeholder: 'Email Address',
        },
        {
            icon:<RiLockPasswordFill className="text-icons" size={20}/>,
            placeholder: 'Password',
        },
         {
            icon:<RiLockPasswordFill className="text-icons" size={20}/>,
            placeholder: 'Confirm Password',
        }
    ]
    return(
            <form className="flex flex-col flex-1  px-10 gap-10 justify-center mt-6">
                    <div className="flex flex-col">
                        <p className="font-[600] text-[38px] lg:text-[51px]">Create Account</p>
                        <p className="text-[16px] md:text-[15.5px] lg:text-[22px] font-[400] font-space-mono">Welcome! enter your details and start <br/>creating, collecting and selling NFTs.</p>
                    </div>

                    {/* inputs */}
                    <div className="flex flex-col gap-4">
                        {
                            arrInputs.map((item,index)=>(
                                <div className="bg-white md:w-80 lg:w-96 rounded-3xl p-3 flex gap-2 " key={index}>
                                     <span>{item?.icon}</span>
                                     <input type="text" placeholder={item.placeholder} className="text-[#2B2B2B] focus:outline-none"/>
                                </div>
                            ))
                        }

                    </div>
                    {/* signup btn */}
                    <button type="submit" className="md:w-80 lg:w-96 bg-btn p-3 rounded-3xl cursor-pointer">
                        Create account

                    </button>
            </form>

    )
}