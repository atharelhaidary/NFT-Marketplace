import Image from "next/image";
import { ArtistProfile } from "./ArtistProfile";
export const Artist = () => {
    return(
        <div className="flex flex-col h-full w-full">
              <div className="w-full h-[270px] md:h-[300px] lg:h-[350px]  relative ">
                 <Image src="/artist/artistSlider.png" fill className="w-full h-full object-cover" alt="artistImg"/>
              </div>
              <ArtistProfile/>
        </div>
    )
}