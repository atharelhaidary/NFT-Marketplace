import Image from "next/image"
export const SliderImg = () => {
    return(
        <div className="flex flex-1 w-full relative pb-10">
                <div className=" flex flex-1 flex-col h-full  bg-[#3B3B3B]  rounded-3xl relative " >
                        <div className="relative h-96 md:h-full">
                                        <Image 
                                            src="/slider/slider.png" 
                                            alt="sliderImg"
                                            fill
                                            className="object-cover rounded-t-3xl"
                                        />
                        </div>
                        {/* info */}
                        <div className="flex flex-col p-4 gap-2">
                                <p className="text-[20px]">Space Walking</p>
                                <div className="flex gap-2">
                                    <Image src="/slider/avatar.png" width={20} height={20}  alt="avatarImg"/>
                                    <p className="text-[15px]">Animakid</p>
                                </div>
                        </div>
                </div>
        </div>
    )
}