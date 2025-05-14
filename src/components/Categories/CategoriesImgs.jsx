import Image from "next/image"
export const CategoriesImgs = () => {
    const arrCategories = [
        {
            img:'/category/cat1.png',
            title:'Art'
        },
        {
            img:'/category/cat2.png',
            title:'Collectibles'
        },
        {
            img:'/category/cat3.png',
            title:'Music'
        },
         {
            img:'/category/cat4.png',
            title:'Photography'
        },
        {
            img:'/category/cat5.png',
            title:'Video'
        },
        {
            img:'/category/cat6.png',
            title:'Utility'
        },
        {
            img:'/category/cat7.png',
            title:'Sport'
        },
         {
            img:'/category/cat8.png',
            title:'Virtual Worlds'
        },
    ]
   
    return(
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-7  h-[700px]">
            {arrCategories.map((item,index)=>(
                <div className="hover:scale-number duration-500 ease-in-out w-full h-full bg-BoxBackground rounded-3xl justify-between relative" key={index}>
                        {/* img */}
                        <div className="w-full h-[70%] lg:h-[80%]  relative rounded-t-3xl" key={index}>
                            <Image src={item?.img} fill className="w-full h-full object-cover  rounded-t-3xl" alt="cateroryImg"/>
                        </div>
                        {/* title */}
                        <div className="w-full  text-[16px] lg:text-[20px] font-[600] flex  flex-col flex-1 p-3">
                            {item?.title}
                        </div>
                </div>
            ))}
        </div>
    )
}