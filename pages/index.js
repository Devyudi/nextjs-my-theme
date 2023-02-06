import React from 'react'
import Head from 'next/head'
import nc from 'next-connect'
import {ContainerLayout, WrapperLayout} from "@moonlay/src/components/shared-layout";
import { PrismaClient } from '@prisma/client'
import {Card} from "@moonlay/src/components/shared-component/card";
import Grid from "@moonlay/src/components/shared-component/grid/default.grid";
import { Button, Form, Input, InputNumber } from 'antd';
import MetaHead from "@moonlay/src/components/shared-layout/meta.head";
import {Carousel} from "@moonlay/src/components/shared-component";
import axios from "axios";
import * as CardMoonlay from "@moonlay/src/components/shared-component";

export default function Index(props){
  return (
      <WrapperLayout>
          <MetaHead
              head={{
                  title:'Core@2022 | moonlay'
              }}
          />

        <ContainerLayout>
            <Carousel
                onChange={null}
                currentSlide={0}
                settings={{
                    slidesToShow:4,
                    slidesToScroll:1
                }}
                dataSource={props?.data ?? []}
                render={(item,index)=> {
                    return(
                        <CardMoonlay.Card.Product
                            title={item?.name ??''}
                            images={{
                                src: item?.thumbnail,
                                alt: 'image-dummy',
                                fallback: 'logo-next.png'
                            }}
                            url={['/product',item?.id,item?.slug].join('/')}
                            price={{
                                prefix:'Rp',
                                total:item?.price
                            }}
                            ExtraAction={null}
                        />
                    )
                }}
            />
          <div className="py-4 relative">
            <h1 className={'font-sans text-3xl font-semibold  poppins'}>Produk Pilihan</h1>
            <Grid col={12} gap={4}>
              {[0,1,2,3,4,5,6,7,8].map((item)=> {
                return (
                    <Grid.Col xs={6} lg={3} xl={3} key={item}>
                      <Card.Primary title={'Card Primary'}/>
                    </Grid.Col>
                )
              })}
            </Grid>

          </div>
        </ContainerLayout>
      </WrapperLayout>
  )
}

export async function getServerSideProps(ctx){
  let { req,res} = ctx
    const data = await axios.get(['http://localhost:3001','product.json'].join('/'), {})
        .then((response)=> {
            return response?.data ?? []
        })
        .catch((err)=> {
            return []
        })

    return {
        props: {
            data: data ?? [],
            pagination:{
                page:1,
                limit:10,
                max_page:15,
                total:150
            }
        }
    }
}