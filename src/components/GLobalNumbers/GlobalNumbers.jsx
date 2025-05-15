export const GlobalNumbers = ({arrInfo, style}) => {
    return(
           <div className={`flex justify-between ${style}`}>
                        {
                            arrInfo.map((item,index)=>(
                                <div className="flex flex-col gap-1  " key={index} >
                                        <p className="font-[700] font-space-mono md:text-[22px] xl:text-[28px] " >{item?.value}K<span className="px-1">+</span></p>
                                        <p className="font-[400] md:text-[16px] xl:text-[23.99px]">{item?.title}</p>
                                </div>
                            ))

                        }
            </div>
    )
}