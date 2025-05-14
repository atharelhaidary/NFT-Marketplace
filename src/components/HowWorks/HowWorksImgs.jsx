import Image from "next/image"
export const HowWoksImgs = () => {
    const arrWorks = [
        {
            img:'/work/work1.png',
            title:'Setup Your wallet',
            desc:'Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.',
        },
         {
            img:'/work/work2.png',
            title:'Create Collection',
            desc:'Upload your work and setup your collection. Add a description, social links and floor price.',
        },
           {
            img:'/work/work3.png',
            title:'Start Earning',
            desc:'Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.',
        }
    ]
    return(
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
            {
                arrWorks.map((item,index)=>(
                    <div className="hover:scale-number duration-500 ease-in-out py-4 px-4 flex flex-wrap md:flex-col gap-4 flex justify-center items-center bg-BoxBackground rounded-3xl relative " key={index}>
                            <div className=" w-[100px] h-[100px] md:w-[134px]  md:h-[134px] lg:w-[250px] lg:h-[250] relative">
                                <Image src={item?.img} fill alt="workImg" className="w-full h-full"/>
                            </div>
                            <div className="flex-1 md:w-full flex flex-col gap-2 ">
                                <h4 className="w-full md:text-[16px] lg:text-[22px] flex md:justify-center md:items-center ">{item?.title}</h4>
                                <p className="w-full md:text-center flex md:justify-center md:items-center  text-[12px] lg:text-[16px] font-[400]">{item?.desc}</p>
                            </div>
                    </div>
                ))

            }
        </div>
    )
}