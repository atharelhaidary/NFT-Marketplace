import { CategoriesImgs } from "./CategoriesImgs"
export const Categories = () => {
    return(
        <div className="w-full px-8 md:px-12 xl:px-50 flex flex-col gap-10 py-10">
                <p className="font-[600] text-[28px] lg:text-[38px]">Browse Categories</p>
                <CategoriesImgs/>
        </div>
    )
}