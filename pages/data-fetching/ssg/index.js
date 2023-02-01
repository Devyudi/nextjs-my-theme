import React from 'react'
import {ContainerLayout, WrapperLayout} from "@moonlay/src/components/shared-layout";
import {Card} from "@moonlay/src/components/shared-component/card";
import Grid from "@moonlay/src/components/shared-component/grid/default.grid";
import MetaHead from "@moonlay/src/components/shared-layout/meta.head";

export default function Index(){
    return (
        <WrapperLayout>
            <MetaHead
                head={{
                    title:'Static Site Generation | moonlay'
                }}
            />

            <ContainerLayout>
                <h1>Static Site Generation</h1>
            </ContainerLayout>
        </WrapperLayout>
    )
}