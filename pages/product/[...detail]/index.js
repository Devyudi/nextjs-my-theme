/*******************************************************************************
 * @author Mochamad Yudi Sobari
 * @github https://github.com/mochamadyudi
 * @email yuyuid.id12@gmail.com
 * @contact +6285718851007
 ******************************************************************************/

import React from 'react'
import {useRouter} from "next/router";
import axios from "axios";
import Image from 'next/image'
import {ContainerLayout, WrapperLayout} from "@moonlay/src/components/shared-layout";
import MetaHead from "@moonlay/src/components/shared-layout/meta.head";
import {Typography} from "antd";
import {useTheme} from "next-themes";

export default function Index(props){
    let { data ,isEmpty, seo} = props
    const { theme, setTheme } = useTheme()

    const router = useRouter()


    return (
        <WrapperLayout
            background={{
                light:'bg-[#fff]'
            }}
        >
            <MetaHead
                head={{
                    ...seo,
                    withApp:true
                }}
            />
            <ContainerLayout className={'pt-4'}>
                <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-4">
                        <div className={'flex items-center gap-10 '}>
                            <div className="w-96 h-96 bg-gray-500 rounded-3xl relative overflow-hidden">
                                <Image
                                    height={1920}
                                    width={1920}
                                    src={data?.thumbnail}
                                    className={'absolute w-full h-full object-cover top-0 left-0 min-w-full min-h-full'}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-span-5">
                        <Typography.Title className={'!font-bold !text-2xl line-clamp-3 !leading-7'}>{data?.name}</Typography.Title>
                    </div>
                    <div className="col-span-3">

                    </div>


                </div>
            </ContainerLayout>
        </WrapperLayout>
    )
}


export async function getServerSideProps(ctx){
    let { detail } = ctx.query

    let propsData = {
        isEmpty:false,
        data: [],
        seo: {
            title: 'Product Detail',
            description: "lorem ipsum dolor sit amet"
        }
    }

    let data = await axios.get('http://localhost:3001/product.json',{})
        .then((response)=> {
            return response?.data ?? []
        })
        .catch((err)=> {
            return []
        })

    if(!Array.isArray(data) && data.length === 0){
        Reflect.set(propsData,'data',[])
        propsData.isEmpty = true
    }else{
        data = data.filter((item)=> item?.id?.toString() === detail[0])
        if(Array.isArray(data) && data.length === 0) {
            propsData.isEmpty = true
            propsData.data = null
        }else{
            propsData.isEmpty = true
            propsData.data = data[0]
        }
    }




    return {
        props:{
            ...propsData
        }
    }
}