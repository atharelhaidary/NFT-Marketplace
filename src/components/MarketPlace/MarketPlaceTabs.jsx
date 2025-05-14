"use client"
import { Tabs } from 'antd';
import { MarketPlaceNftTab } from './MarketPlaceNftTab';

export const MarketPlaceTabs = () => {

  
        const items = [
                {
                    key: '1',
                    label: 'NFTs',
                    children: <MarketPlaceNftTab/>,
                },
                {
                    key: '2',
                    label: 'Collections',
                    children: '',
                },
        
        ];
        const onChange = (key) => {
              console.log(key);
        };
  
    return(
        
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} className="custom-tabs"/>
       

    )
}
