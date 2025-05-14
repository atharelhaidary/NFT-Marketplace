import {  Slider, Trending, Creators, Categories, Discover, CountDown, HowWorks, Join } from "@/components";

export default function Home() {
  return (
  
    <div className="flex flex-col gap-6 md:gap-20">
          <Slider/>
          <Trending/>
          <Creators/>
          <Categories/>
          <Discover/>
          {/* <CountDown/> */}
          <HowWorks/>
          <Join/>
    </div>
  );
}
