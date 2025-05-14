import { Fragment } from "react"
export const NftDetailsCountDown = ({style}) => {
    return(
        <div className={`flex flex-col ${style} bg-BoxBackground py-7 px-8 gap-6 rounded-xl w-[295px] h-auto justify-between `}>
            <h5 className="text-[15px] font-space-mono">Auction ends in:</h5>
            <div className="flex justify-between w-full  items-start">
                {
                    [
                       { num:59,
                        title:'Hours'
                       },
                       { num:16,
                        title:'Minutes'
                       },
                       { num:22,
                        title:'Seconds'
                       },
                    ].map((item,index)=>(
                        <Fragment key={index}>
                            <div className="flex flex-col" >
                                <span className="text-[38px] font-space-mono">{item?.num}</span>
                                <span className="text-[12px] font-space-mono">{item?.title}</span>
                            </div>
                            {index !==2 && <span className="text-[28px]">:</span> }
                        </Fragment>
                    ))
                }
            </div>
            {/* btn */}
            <button className="rounded-3xl bg-btn w-full flex justify-center items-center h-[60px] text-[16px]">
                Place Bid
            </button>
        </div>
    )
}