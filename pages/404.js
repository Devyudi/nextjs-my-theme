import React from 'react'
import {ContainerLayout, WrapperLayout} from "@moonlay/src/components/shared-layout";
import MetaHead from "@moonlay/src/components/shared-layout/meta.head";
import { Button } from 'antd'
export default function NotFound(){
    return(
        <WrapperLayout>
            <MetaHead
                head={{
                    title:'404 Not Found | Moonlay'
                }}
            />
            <ContainerLayout>
                <div className="min-h-[calc(100vh-140px)] w-full flex items-center justify-center">
                    <div className={'flex flex-col justify-center items-center space-y-4'}>
                        <h1 className={'font-bold text-5xl poppins'}>404</h1>
                        <p>Lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet</p>
                        <Button type={'primary'} ghost>Back</Button>
                    </div>
                </div>
            </ContainerLayout>
        </WrapperLayout>
    )
}