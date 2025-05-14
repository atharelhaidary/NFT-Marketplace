import { NftGlobalImgs } from "../NftGlobalImgs/NftGlobalImgs"
export const MarketPlaceNftTab = () => {
    const arrMarketplaceNft = [
        {
            img:'/marketplace/marketplace1.png',
            title:'Magic Mushroom 0325',
            desc:'Shroomie',
            subImg:'/discover/descoverDes.png',
            price:'1.63',
            sign:'wETH'
        },
        {
            img:'/marketplace/marketplace2.png',
            title:'Happy Robot 032',
            desc:'BeKind2Robots',
            subImg:'/discover/descoverDes.png',
            price:'3.63',
            sign:'wETH'
        },
        {
            img:'/marketplace/marketplace3.png',
            title:'Happy Robot 024',
            desc:'BeKind2Robots',
            subImg:'/discover/descoverDes.png',
            price:'2.11',
            sign:'wETH'
        },
        {
            img:'/marketplace/marketplace4.png',
            title:'Designer Bear',
            desc:'Mr Fox',
            subImg:'/discover/descoverDes.png',
            price:'1.11',
            sign:'wETH'
        },
        {
            img:'/marketplace/marketplace5.png',
            title:'Colorful Dog 0356',
            desc:'Keepitreal',
            subImg:'/discover/descoverDes.png',
            price:'5,78',
            sign:'wETH'
        },
        {
            img:'/marketplace/marketplace6.png',
            title:'Dancing Robot 0312',
            desc:'Robotica',
            subImg:'/discover/descoverDes.png',
            price:'4.44',
            sign:'wETH'
        },
        {
            img:'/marketplace/marketplace7.png',
            title:'Cherry Blossom Girl 035',
            desc:'MoonDancer',
            subImg:'/discover/descoverDes.png',
            price:'7.66',
            sign:'wETH'
        },
        {
            img:'/marketplace/marketplace8.png',
            title:'Space Travel',
            desc:'NebulaKid',
            subImg:'/discover/descoverDes.png',
            price:'0.33',
            sign:'wETH'
        },
        {
            img:'/marketplace/marketplace9.png',
            title:'Sunset Dimension',
            desc:'Animakid',
            subImg:'/discover/descoverDes.png',
            price:'4.33',
            sign:'wETH'
        },
          {
            img:'/marketplace/marketplace10.png',
            title:'Desert Walk',
            desc:'Catch 22',
            subImg:'/discover/descoverDes.png',
            price:'6.66',
            sign:'wETH'
        },
           {
            img:'/marketplace/marketplace11.png',
            title:'IceCream Ape 0324',
            desc:'Ice Ape Club',
            subImg:'/discover/descoverDes.png',
            price:'8.34',
            sign:'wETH'
        },
               {
            img:'/marketplace/marketplace5.png',
            title:'Colorful Dog 0344',
            desc:'PuppyPower',
            subImg:'/discover/descoverDes.png',
            price:'8.34',
            sign:'wETH'
        },
    ]
    return(
        <div className="bg-BoxBackground px-8 md:px-10 lg:px-20 xl:px-50 py-12 justify-between border-b-[3px] border-b-background">
               <NftGlobalImgs arr={arrMarketplaceNft} style="bg-background text-text" />
        </div>
    )
}