import Image from "next/image"
export const NftGlobalImgs = ({arr, style}) => {
    return(
         <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-7   h-auto ">
                    {arr.map((item,index)=>(
                        <div className={`hover:scale-number duration-500 ease-in-out w-full pb-8 lg:pb-0 h-auto    ${style} rounded-3xl justify-between relative`} key={index}>
                                {/* img */}
                                <div className={` w-full h-[296px] relative rounded-t-3xl`} key={index}>
                                    <Image src={item?.img} fill className="w-full h-full object-cover  rounded-t-3xl" alt="cateroryImg"/>
                                </div>
                                {/* title */}
                                <div className="w-full  text-[16px] lg:text-[20px] font-[600] flex  flex-col flex-1 p-6 gap-3 ">
                                        <p>{item?.title}</p>
                                        <div className="flex gap-4">
                                             <Image src={item?.subImg} width={20} height={20} className="object-cover  rounded-t-3xl" alt="cateroryImg"/>
                                             <p  className="font-space-mono text-[16px] font-[400]">{item?.desc}</p>
                                        </div>
                                        <div className="flex  w-full">
                                               {/* right div */}
                                                <div className="flex flex-1 flex-col font-space-mono"  >
                                                    <span className="text-[12px] text-icons">Price</span>
                                                    <div className="flex gap-3">
                                                        <span  className="text-[16px] font-[400]">{item?.price}</span>
                                                        <span  className="text-[16px] font-[400]">{item?.sign}</span>
                                                    </div>
                                                </div>
                                                {/* left div */}
                                                <div className="flex  flex-col font-space-mono" >
                                                    <span className="text-[12px] text-icons text-left"  >Highest Bid</span>
                                                    <div className="flex gap-3">
                                                        <span  className="text-[16px] font-[400]">{item?.price}</span>
                                                        <span  className="text-[16px] font-[400]">{item?.sign}</span>
                                                    </div>
                                                </div>
                                        </div>
                                </div>
                        </div>
                    ))}
         </div>
    )
}