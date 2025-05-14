import Image from "next/image"
import { FaEarthAmericas } from "react-icons/fa6";
import { NftDetailsCountDown } from "./NftDetailsCountDown";

export const NftDetailsInfo = () => {
    return(
        <div className="flex flex-col gap-10  flex-1 ">
                    {/* col one */}
                    <div className="flex flex-col gap-3">
                            <p className="text-[28px] md:text-[38px] lg:text-[51px]">The Orbitians</p>
                            <span className="text-[16px] lg:text-[22px] text-icons">Minted on Sep 30, 2022</span>
                    </div>
                    <NftDetailsCountDown style="flex md:hidden w-full"/>
                    {/* col two */}
                    <div className="flex flex-col gap-3">
                            <p className="font-space-mono text-[16px] lg:text-[22px] text-icons">Created By</p>
                            <div className="flex gap-2 items-center">
                                <Image src="/marketplace/marketplace2.png" className="rounded-full" width={24} height={24}  alt="nftAvatarImg"/>
                                <span className="text-[22px]">Orbitian</span>
                            </div>
                    </div>
                    {/* col three */}
                    <div className="flex flex-col gap-3">
                            <p className="font-space-mono text-[16px] lg:text-[22px] text-icons">Description</p>
                            <div className="flex flex-col gap-10 text-[16px] lg:text-[22px] font-[400] font-space-mono">
                                    <p >
                                        The Orbitians <br/>
                                        is a collection of 10,000 unique NFTs on the Ethereum <br/>
                                        blockchain
                                    </p>
                                    <p>
                                        There are all sorts of beings in the NFT Universe. The<br/> most advanced and friendly of the bunch are Orbitians
                                    </p>
                                    <p>
                                        They live in a metal space machines, high up in the sky <br/>
                                        and only have one foot on Earth.<br/>
                                        These Orbitians are a peaceful race, but they have been<br/>
                                        at war with a group of invaders for many generations.<br/>
                                        The invaders are called Upside-Downs, because of their <br/>
                                        inverted bodies that live on the ground, yet do not<br/>
                                        know any other way to be. Upside-Downs believe that <br/>
                                        they will be able to win this war if they could only get<br/>
                                            an eye into Orbitian territory, so they've taken to make <br/>
                                            human beings their target
                                    </p>
                            </div>
                    </div>
                    {/* col four */}
                    <div className="flex flex-col gap-3">
                        <p className="font-space-mono text-[16px] lg:text-[22px] text-icons">Details</p>
                          {
                            [
                                { 
                                  title:'View on Etherscan',
                                   icons: <FaEarthAmericas size={27} className="text-icons"/>
                                },
                                { 
                                  title:'View Original',
                                   icons: <FaEarthAmericas size={27} className="text-icons"/>
                                },

                            ].map((item,index)=>(
                                    <div className="flex gap-3" key={index}>
                                        {item?.icons}
                                        <span className="text-[16px] md:text-[22px] font-[400]">{item?.title}</span>
                                    </div>
                            ))
                          }
                   </div>
                   {/* col five */}
                   <div className="flex flex-col gap-3">
                        <p className="font-space-mono text-[16px] lg:text-[22px] text-icons">Tags</p>
                        <div className="flex flex-col lg:flex-row gap-5">
                            {
                                ['ANIMATION', 'ILLUSTRAION','MOON','MOON'].map((item,index)=>(
                                    <div className="cursor-pointer bg-BoxBackground py-2.5 px-8 rounded-2xl w-auto" key={index}>
                                        {item}
                                    </div>
                                ))
                            }
                        </div>

                   </div>
                
        </div>
    )
}