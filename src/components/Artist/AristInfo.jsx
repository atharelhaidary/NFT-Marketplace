import Image from "next/image"
import { BsFiles } from "react-icons/bs";
import { GoPlus } from "react-icons/go";
import { GlobalNumbers } from "../GLobalNumbers/GlobalNumbers";
import { GlobalLinks } from "../GlobalLinks/GlobalLinks";
export  const ArtsitInfo = () => {
     const arrNumbers =[
        {
            value:250,
            title:'Volume'
        },
        {
            value:50,
            title:'NFTs Sold'
        },
           {
            value:300,
            title:'Followers'
        },
    ]
    return(
         <div className="flex flex-col px-8 md:px-10 lg:px-20 xl:px-50 gap-7 w-full ">
                    {/* image */}
                    <div className="w-[120px] h-[120px] relative border-3 border-black rounded-3xl -mt-16">
                          <Image src="/artist/artistAvatar.png" fill className="w-full h-full object-cover" alt="artistAvatarImg"/>
                    </div>
                    {/* name */}
                    <div className="w-full  flex flex-wrap justify-between gap-3">
                            <h2 className="text-[28px] md:text-[38px] lg:text-[51px] flex flex-1">Animakid</h2>
                            <div className="flex flex-col md:flex-row gap-4 w-full lg:w-auto ">
                                {   [
                                            {
                                                icon : <BsFiles size={20} />,
                                                title :'0xc0E3...B79C',
                                                style: 'bg-btn rounded-3xl  w-full md:w-[186px] h-[60px]'
                                            },
                                            {
                                                icon : <GoPlus size={25}  className="text-btn"/>,
                                                title :'Follow',
                                                style:'border border-btn rounded-3xl w-full md:w-[145px] h-[60px]'
                                            },
                                     ].map((item,index)=>(
                                        <button className={`flex justify-center gap-2 items-center ${item?.style} text-[16px]`}key={index}>
                                            <span>{item?.icon}</span>
                                            <span >{item?.title}</span>
                                        </button>
                                     ))
                                }
                                
                            </div>
                    </div>
                    {/* numbers */}
                    <GlobalNumbers arrInfo={arrNumbers} style="w-full md:w-[45%]"/>
                    {/* bio */}
                    <div className="text-[16px] md:text-[22px]">
                        <h3 className="text-icons font-space-mono">Bio</h3>
                        <p className="font-[400]">The internet's friendliest designer kid.</p>
                    </div>
                    {/* links */}
                    <div className="flex flex-col gap-2 text-[16px] md:text-[22px]">
                        <h3 className="text-icons font-space-mono">Links</h3>
                        <GlobalLinks/>
                    </div>
        </div>
    )
}