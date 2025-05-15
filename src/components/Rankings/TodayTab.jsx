import Image from "next/image"
export const TodayTab = () => {
    const arrRankings = [
        {
            img:'/rankings/rank1.png',
            name:'Jaydon Ekstrom Bothman',
            change:'+1.41%',
            sold:'602',
            vol:'12.4 ETH'
        },
        {
            img:'/rankings/rank2.png',
            name:'Ruben Carder',
            change:'+1.41%',
            sold:'602',
            vol:'12.4 ETH'
        },
        {
            img:'/rankings/rank3.png',
            name:'Alfredo Septimus',
            change:'+1.41%',
            sold:'602',
            vol:'12.4 ETH'
        },
        {
            img:'/rankings/rank4.png',
            name:'Davis Franci',
            change:'+1.41%',
            sold:'602',
            vol:'12.4 ETH'
        },
        {
            img:'/rankings/rank5.png',
            name:'Livia Rosser',
            change:'+1.41%',
            sold:'602',
            vol:'12.4 ETH'
        },
        {
            img:'/rankings/rank6.png',
            name:'Kianna Donin',
            change:'+1.41%',
            sold:'602',
            vol:'12.4 ETH'
        },
        {
            img:'/rankings/rank7.png',
            name:'Phillip Lipshutz',
            change:'+1.41%',
            sold:'602',
            vol:'12.4 ETH'
        },
        {
            img:'/rankings/rank8.png',
            name:'Maria Rosser',
            change:'+1.41%',
            sold:'602',
            vol:'12.4 ETH'
        },
        {
            img:'/rankings/rank9.png',
            name:'Kianna Stanton',
            change:'+1.41%',
            sold:'602',
            vol:'12.4 ETH'
        },
        {
            img:'/rankings/rank10.png',
            name:'Angel Lubin',
            change:'+1.41%',
            sold:'602',
            vol:'12.4 ETH'
        },
        {
            img:'/rankings/rank11.png',
            name:'Allison Torff',
            change:'+1.41%',
            sold:'602',
            vol:'12.4 ETH'
        },
        {
            img:'/rankings/rank12.png',
            name:'Davis Workman',
            change:'+1.41%',
            sold:'602',
            vol:'12.4 ETH'
        },
        {
            img:'/rankings/rank13.png',
            name:'Lindsey Lipshutz',
            change:'+1.41%',
            sold:'602',
            vol:'12.4 ETH'
        },
        {
            img:'/rankings/rank14.png',
            name:'Randy Carder',
            change:'+1.41%',
            sold:'602',
            vol:'12.4 ETH'
        },
        {
            img:'/rankings/rank15.png',
            name:'Lydia Culhane',
            change:'+1.41%',
            sold:'602',
            vol:'12.4 ETH'
        },
        {
            img:'/rankings/rank16.png',
            name:'Rayna Bator',
            change:'+1.41%',
            sold:'602',
            vol:'12.4 ETH'
        },
        {
            img:'/rankings/rank17.png',
            name:'Jocelyn Westervelt',
            change:'+1.41%',
            sold:'602',
            vol:'12.4 ETH'
        },
        {
            img:'/rankings/rank18.png',
            name:'Marilyn Torff',
            change:'+1.41%',
            sold:'602',
            vol:'12.4 ETH'
        },
        {
            img:'/rankings/rank19.png',
            name:'Skylar Levin',
            change:'+1.41%',
            sold:'602',
            vol:'12.4 ETH'
        },
        {
            img:'/rankings/rank20.png',
            name:'Terry Dorwart',
            change:'+1.41%',
            sold:'602',
            vol:'12.4 ETH'
        },

    ]
    return(
        <table className=" w-full mt-4 flex flex-col gap-3">
            <thead className="">
                    <tr className="grid grid-cols-[80%_1fr] md:grid-cols-[47%_1fr_1fr] lg:grid-cols-[47%_1fr_1fr_1fr] font-space-mono  text-[16px]  text-icons border border-BoxBackground p-3 rounded-3xl pl-8 pr-2">
                        <th className="flex gap-4 w-full font-[400] ">
                             <span >#</span>
                             <span >Artist</span>
                        </th>
                        <th className="font-[400] text-start hidden md:flex" >Change</th>
                        <th className="font-[400] text-start hidden lg:flex">NFTs Sold</th>
                        <th className="font-[400] text-start">Volume</th>
                    </tr>

            </thead>
            <tbody className="flex flex-col gap-4">
                {
                    arrRankings.map((item,index)=>(
                        <tr className="text-text  font-space-mono grid grid-cols-[80%_1fr] md:grid-cols-[47%_1fr_1fr] lg:grid-cols-[47%_1fr_1fr_1fr] p-3 rounded-3xl pl-8 pr-2 bg-BoxBackground items-center" key={index}>
                                <td className="flex gap-4 w-full font-[400] items-center ">
                                        <span className="w-7 h-7 font-space-mono rounded-full bg-[#2B2B2B] text-[#858584]  flex justify-center items-center font-[400] text-[16px]">
                                                {index+1}
                                        </span>
                                        <div className="w-[24px] h-[24px] lg:w-[60px] lg:h-[60px] relative rounded-full">
                                            <Image src={item?.img} fill className="w-full h-full object-cover" alt="rankingImg"/>
                                        </div>
                                        <span className=" font-[700] text-[16px] lg:text-[18px] xl:text-[22px] pl-2"> {item?.name}</span>
                                </td>
                                
                                <td className="text-[#00AC4F] text-[16px] font-[400] hidden md:flex">{item?.change}</td>
                                <td className="font-[400] hidden lg:flex">{item?.sold}</td>
                                <td className="font-[400]">{item?.vol}</td>

                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}