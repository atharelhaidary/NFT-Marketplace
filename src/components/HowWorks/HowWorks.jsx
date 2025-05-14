import { HowWoksImgs } from "./HowWorksImgs"
export const HowWorks = () => {
    return(
            <div className="w-full px-8 md:px-12 xl:px-50 flex flex-col gap-7  py-16 h-auto">
                    {/* title */}
                    <div className="flex flex-col">
                        <p className="font-[600] text-[38px]">How it works</p>
                        <p className="text-[16px] md:text-[22px] font-[400] font-space-mono">Find out how to get started.</p>
                    </div>
                    {/* images */}
                    <HowWoksImgs/>
            </div>
    )
}