import React from 'react'
import Head from 'next/head'
import nc from 'next-connect'
import {ContainerLayout, WrapperLayout} from "@moonlay/src/components/shared-layout";
import { PrismaClient } from '@prisma/client'
import {Card} from "@moonlay/src/components/shared-component/card";
import Grid from "@moonlay/src/components/shared-component/grid/default.grid";
import { Button, Form, Input, InputNumber } from 'antd';
import MetaHead from "@moonlay/src/components/shared-layout/meta.head";

export default function Index(){
  return (
      <WrapperLayout>
          <MetaHead
              head={{
                  title:'Core@2022 | moonlay'
              }}
          />

        <ContainerLayout>
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

  const handler = nc()
      .post(async (req, res, next) => {
        console.log(req?.body,'BODY')
        next();
      });
  try {
    await handler.run(req, res);
  } catch (e) {
    // handle the error
  }
  return {
    props: { user: req?.user ?? null },
  };
}