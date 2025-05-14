import Link from "next/link";
import { PiRocketLaunchLight } from "react-icons/pi";

export const RankingBtn = ({style}) => {
    return(
            <Link href="/" className={`hover:scale-number duration-500 ease-in-out flex ${style} items-center gap-2 rounded-3xl border border-2 border-btn px-12 py-4 justify-center items-center`}>
                        <PiRocketLaunchLight size={20} fill={`var(--color-btn)`}/>
                        <p>View Rankings</p>
            </Link> 
    )
}