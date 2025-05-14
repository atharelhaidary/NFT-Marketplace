import Link from "next/link"
export const ExploreUs = () => {
    return(
          <div className="flex flex-col gap-3 flex-1">
               <h5 className="text-[22px] font-space-mono">Explore</h5>
               {['Marketplace', 'Rankings', 'Connect a wallet'].map((item,index)=>(
                     <Link href="#" key={index} className="font-[400] text-TextFooter ">{item}</Link>
               ))}

          </div>
    )
}