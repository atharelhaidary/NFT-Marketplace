import Link from "next/link";
import { NftGlobalImgs } from "../NftGlobalImgs/NftGlobalImgs";
import { GoToArtistBtn } from "./GoToArtistBtn";
export const MoreNfts = () => {
    const arrNft = [
        {
            img:'/nft/nft1.png',
            title:'Foxy Life',
            desc:'Shroomie',
            subImg:'/discover/descoverDes.png',
            price:'1.63',
            sign:'wETH'
        },
        {
            img:'/nft/nft2.png',
            title:'Cat from future',
            desc:'BeKind2Robots',
            subImg:'/discover/descoverDes.png',
            price:'3.63',
            sign:'wETH'
        },
        {
            img:'/nft/nft3.png',
            title:'Psycho Dog',
            desc:'BeKind2Robots',
            subImg:'/discover/descoverDes.png',
            price:'2.11',
            sign:'wETH'
        },
        {
            img:'/nft/nft4.png',
            title:'Designer Bear',
            desc:'Mr Fox',
            subImg:'/discover/descoverDes.png',
            price:'1.11',
            sign:'wETH'
        },
        {
            img:'/nft/nft5.png',
            title:'Dancing Robot 0375',
            desc:'Keepitreal',
            subImg:'/discover/descoverDes.png',
            price:'5,78',
            sign:'wETH'
        },
        {
            img:'/nft/nft6.png',
            title:'Dancing Robot 0356',
            desc:'Robotica',
            subImg:'/discover/descoverDes.png',
            price:'4.44',
            sign:'wETH'
        },
        {
            img:'/nft/nft7.png',
            title:'Dancing Robot 0321',
            desc:'MoonDancer',
            subImg:'/discover/descoverDes.png',
            price:'7.66',
            sign:'wETH'
        },
        {
            img:'/nft/nft8.png',
            title:'Dancing Robot 0512',
            desc:'NebulaKid',
            subImg:'/discover/descoverDes.png',
            price:'0.33',
            sign:'wETH'
        },
        {
            img:'/nft/nft9.png',
            title:'Dancing Robot 0024',
            desc:'Animakid',
            subImg:'/discover/descoverDes.png',
            price:'4.33',
            sign:'wETH'
        },
     
    ]
    return(
        <div className="flex flex-col   px-8 md:px-10 lg:px-10 xl:px-50 gap-7 w-full py-12 h-auto">
            <div className="flex justify-between">
                  <p className="text-[28px] lg:text-[38px]">More from this artist</p>
                  <GoToArtistBtn style="hidden md:flex"/>
            </div>
            <NftGlobalImgs arr={arrNft} style="bg-BoxBackground text-text" />
            <GoToArtistBtn style="flex md:hidden w-full"/>

        </div>
    )
}