import Image from "next/image"
import Link from "next/link"
export const NavbarLogo = ({style}) => {
    return (
        <Link href="/" className={`flex gap-2 items-center  flex  ${style} cursor-pointer`} >
            <Image src="/navbar/logo.png" width={25} height={25} alt="logoImg"/> 
            <span className="text-[20px] font-space-mono" >NFT Marketplace</span>
        </Link>
    )
}