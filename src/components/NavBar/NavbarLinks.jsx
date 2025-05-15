import { LuUserRound } from "react-icons/lu";
import { CgMenuLeft } from "react-icons/cg";
import Link from "next/link";

export const NavbarLinks = () => {
    const arrLink = [
        {
           title: 'Marketplace',
           path:'/MarketPlace'
        },
        {
           title: 'Rankings',
           path:'/Rankings'
        },
         {
           title: 'Connect a wallet',
           path:'/ConnectWallet'
        },
          {
           title: 'Sign Up',
           path:'/SignUp'
        },
    ];
    return(
        <div className="flex flex-1  justify-end  lg:justify-between lg:items-center cursor-pointer px-4 ">
            {
                arrLink.map((item,index)=> (
                    <Link  href={item?.path} key={index} className={`hidden lg:flex gap-2 items-center text-white lg:text-[12px] xl:text-[16px] font-[600] ${index == arrLink.length - 1 && "px-8 py-3 rounded-2xl  bg-btn"}`}>
                        {index == arrLink.length - 1 && <LuUserRound size={15} />}
                        {item?.title}
                    </Link>
                ))
            }
            <CgMenuLeft size={25} className="flex lg:hidden cursor-pointer" />
        </div>
    )
}