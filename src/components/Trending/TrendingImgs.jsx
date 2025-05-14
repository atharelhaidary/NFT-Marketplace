import Image from "next/image"
import Link from "next/link"

export const TrendingImgs = () => {
       const arrImg = [
            {
                mainImg:'/trending/trending1.png',
                subImgs:[
                    '/trending/sub1.png','/trending/sub12.png'
                ],
                title:'DSGN Animals',
                descImg:'/trending/trendingDesc1.png',
                descTitle:'MrFox',
            },
            {
                mainImg:'/trending/trending2.png',
                subImgs:[
                    '/trending/trending2.png','/trending/trending2.png'
                ],
                title:'Magic Mushrooms',
                descImg:'/trending/trendingDesc2.png',
                descTitle:'Shroomie',
            },
            {
                mainImg:'/trending/trending3.png',
                subImgs:[
                    '/trending/trending3.png','/trending/sub32.png'
                ],
                title:'Disco Machines',
                descImg:'/trending/trendingDesc3.png',
                descTitle:'BeKind2Robots',
    
            },
        ]
    return(
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12  h-auto">
                            {arrImg.map((item,index)=>(
                                <Link href="/NFT" className={`flex flex-col gap-4 w-full cursor-pointer`}  key={index}>
                                            {/* main img */}
                                            <Image src={item?.mainImg} width={330} height={330} className={`w-full h-full hover:scale-number duration-500 ease-in-out`} alt="trendingImg"/>
                                            {/* sub imgs */}
                                            <div className="flex w-full gap-4 ">
                                                    {item?.subImgs.map((img, nestedIndex)=>(
                                                        <Image src={img} width={100} height={70} alt="TrendingSubImg" className="hover:scale-number duration-500 ease-in-out" key={`${index}-${nestedIndex}`}/>
                                                    ))}
        
                                                    {/* more imgs */}
                                                    <div className="hover:scale-number  duration-500 ease-in-out cursor-pointer bg-btn font-space-mono py-2 px-4  rounded-3xl text-[22px] flex justify-center items-center">
                                                        1025+
                                                    </div>
                                            </div>
                                            {/* title */}
                                            <h2 className="text-[22px] flex">{item?.title}</h2>
                                            {/* description */}
                                            <div className="flex gap-4 flex-none -40">
                                                <Image src={item.descImg} height={24} width={24} alt="trendingDescImg"/>
                                                <h3 className="text-[16px] font-[400]">{item?.descTitle}</h3>
                                            </div>
                                    
                                </Link>
                            ))}
        
            </div>

    )
}