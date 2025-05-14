"use client"
import { Tabs } from 'antd';
import { ArtsitInfo } from './AristInfo';
import { ArtistCreatedTab } from './ArtistCreatedTab';
export const ArtistProfile = () => {
   
    const tabItems = [
                    {
                        key: '1',
                        label: 'Created',
                        children: <ArtistCreatedTab/>,
                    },
                    {
                        key: '2',
                        label: 'owned',
                        children: "",
                    },
                    {
                        key: '3',
                        label: 'Collection',
                        children: "",
                    },
            
     ];
    const onChange = (key) => {
            console.log(key);
    };
    return(
        <div className="flex flex-col gap-7 w-full">
            {/* info */}
            <ArtsitInfo/>
            <div className="border-b-[3px] border-b-BoxBackground"/>
            {/* own nft tabs */}
\            <Tabs defaultActiveKey="1" items={tabItems} onChange={onChange} className="artist-tabs"/>
        </div>
    )
}