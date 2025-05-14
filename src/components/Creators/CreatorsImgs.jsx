import Image from "next/image";
import Link from "next/link";
export const CreatorsImgs = () => {
    const arrImgs = [
        {
           img:'/creator/creator1.png' ,
           name:'Keepitreal',
           totalSale:'34.53',
           sign:'ETH'
        },
         {
           img:'/creator/creator2.png' ,
           name:'DigiLab',
           totalSale:'34.53',
           sign:'ETH'
        },
          {
           img:'/creator/creator3.png' ,
           name:'GravityOne',
           totalSale:'34.53',
           sign:'ETH'
        },
           {
           img:'/creator/creator4.png' ,
           name:'Juanie',
           totalSale:'34.53',
           sign:'ETH'
        },
          {
           img:'/creator/creator5.png' ,
           name:'BlueWhale',
           totalSale:'34.53',
           sign:'ETH'
        },
           {
           img:'/creator/creator6.png' ,
           name:'mr fox',
           totalSale:'34.53',
           sign:'ETH'
        },
          {
           img:'/creator/creator7.png' ,
           name:'Shroomie',
           totalSale:'34.53',
           sign:'ETH'
        },
        {
           img:'/creator/creator8.png' ,
           name:'robotica',
           totalSale:'34.53',
           sign:'ETH'
        },
        {
           img:'/creator/creator9.png' ,
           name:'RustyRobot',
           totalSale:'34.53',
           sign:'ETH'
        },
         {
           img:'/creator/creator10.png' ,
           name:'animakid',
           totalSale:'34.53',
           sign:'ETH'
        },
        {
           img:'/creator/creator11.png' ,
           name:'Dotgu',
           totalSale:'34.53',
           sign:'ETH'
        },
        {
           img:'/creator/creator12.png' ,
           name:'Ghiblier',
           totalSale:'34.53',
           sign:'ETH'
        },
    ]
    return(
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {
                arrImgs.map((item, index)=>(
                    <Link href="Artist"className="cursor-pointer hover:scale-number duration-500 ease-in-out bg-BoxBackground rounded-3xl flex flex-wrap gap-3 justify-center items-center p-5 relative" key={index}>
                         <div className="w-7 h-7 font-space-mono rounded-full bg-[#2B2B2B] text-[#858584]  z-30 flex justify-center items-center absolute top-4 left-2 lg:top-6 lg:left-4 font-[400] text-[16px]">
                              {index+1}
                         </div>
                         <div className="w-[20%] lg:w-full flex justify-center items-center">
                                <Image src={item?.img} width={110} height={110} alt="creatorImg"/>
                         </div>
                         <div className="flex flex-col flex-1 gap-2">
                                   <h3 className="text-[22px] font-[600] flex-1 lg:text-center">{item?.name}</h3>
                                    <div className="flex gap-2 flex-1 lg:text-center  lg:justify-center lg:items-center">
                                        <span className="text-[#858584] text-[16px] font-[400] flex flex-none">Total Sales:</span>
                                        <span className="font-[400] font-space-mono">{item?.totalSale}</span>
                                        <span className="font-[400] font-space-mono" >{item?.sign}</span>
                                    </div>
                         </div>
                        
                    </Link>
                ))
            }
        </div>
    )
}