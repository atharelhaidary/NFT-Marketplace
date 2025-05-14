import Link from "next/link";
import { IoEyeOutline } from "react-icons/io5";

export const DiscoverBtn = ({style}) => {
    return(
            <Link href="/MarketPlace" className={`hover:scale-number duration-500 ease-in-out flex ${style} items-center gap-2 rounded-3xl border border-2 border-btn px-12 py-4 justify-center items-center`}>
                        <IoEyeOutline size={20}  className="text-btn"/>
                        <p>See All</p>
            </Link> 
    )
}