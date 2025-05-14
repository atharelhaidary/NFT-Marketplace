import { MarketPlaceSearch } from "./MarketPlaceSearch";
import { MarketPlaceTabs } from "./MarketPlaceTabs";
export const MarketPlace = () => {
    

    return(
        <div className="w-full  flex flex-col gap-1">
               <MarketPlaceSearch/>
               <MarketPlaceTabs/>
        </div>
    )
}