import { SliderInfo } from "./SliderInfo"
import { SliderImg } from "./SliderImg"
import { SlidersNumbers } from "./SliderNumbers"
export const Slider = () => {
    return(
        <div className="w-full px-8 md:px-12 xl:px-50 flex flex-col md:flex-row h-auto gap-6 ">
            <SliderInfo/>
            <SliderImg/>
            <SlidersNumbers style="flex md:hidden"/>
        </div>
    )
}