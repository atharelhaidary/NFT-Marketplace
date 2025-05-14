import { ContactUs } from "../Join/ContactUs"
export const JoinUs = () => {
    return(
            <div className="flex flex-col gap-3 flex-1">
                   <h5 className="text-[22px] font-space-mono">Join Our Weekly Digest</h5>
                   <p className="font-[400] text-TextFooter text-[16px]">Get exclusive promotions & updates <br/>straight to your inbox.</p>
                   <ContactUs showMessage={false}/>

            </div>
    )
}