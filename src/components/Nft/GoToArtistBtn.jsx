import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";
export const GoToArtistBtn = ({style}) => {
    return(
        <Link href="/Artist" className={`flex gap-2 ${style} justify-center items-center w-[267px] h-[60px] border border-btn rounded-3xl`}>
                            <FaArrowRightLong size={25} className="text-btn"/>
                            <span>Go To Artist Page</span>
        </Link>
    )
}