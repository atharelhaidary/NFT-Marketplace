"use client"
import { Tabs } from 'antd';
import { TodayTab } from './TodayTab';
import { ConfigProvider } from 'antd';

export const Rankings = () => {
    const items = [
                    {
                        key: '1',
                        label: 'Today',
                        children: <TodayTab/>,
                    },
                    {
                        key: '2',
                        label: 'This Week',
                        children: '',
                    },
                     {
                        key: '3',
                        label: 'This Month',
                        children: '',
                    },
                     {
                        key: '4',
                        label: 'All Time',
                        children: '',
                    },
            
            ];
    const onChange = (key) => {
            console.log(key);
    };
    return(
           <div className="flex flex-col  flex-1 gap-10 px-8 md:px-10 lg:px-20 xl:px-50 py-20">
                    <div className="flex flex-col gap-3">
                            <p className="font-[600] text-[28px] md:text-[38px] lg:text-[51px]">Top Creators</p>
                            <p className="text-[16px] lg:text-[22px] font-[400] font-space-mono" >Check out top ranking NFT artists on the NFT Marketplace.</p>
                    </div>
                     <ConfigProvider
                                theme={{
                                components: {
                                    Tabs: {
                                    itemActiveColor: 'green',
                                    },
                                },
                                }}
                     >
                            <Tabs defaultActiveKey="1" items={items} onChange={onChange} className="rankings-tabs"/>

                    </ConfigProvider>
            </div>
    )
}
