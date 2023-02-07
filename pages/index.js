import React, {useRef, useEffect, useState} from 'react'
import {ContainerLayout, WrapperLayout} from "@moonlay/src/components/shared-layout";
import {Card} from "@moonlay/src/components/shared-component/card";
import MetaHead from "@moonlay/src/components/shared-layout/meta.head";
import {Carousel} from "@moonlay/src/components/shared-component";
import axios from "axios";
import * as CardMoonlay from "@moonlay/src/components/shared-component";
import useWindowDimensions from "@moonlay/src/hooks/windows-dimension.hooks";
import useInViewport from "@moonlay/src/hooks/in-viewport.hooks";
import { useInView,InView } from 'react-intersection-observer'
import ProductHistorySearchComponent
    from "@moonlay/src/components/shared-component-pages/home/product-history-search.component";
export default function Index(props){
  return (
      <WrapperLayout>
          <MetaHead
              head={{
                  title:'Core@2022 | moonlay'
              }}
          />
        <ContainerLayout className={'space-y-6'}>

            <section className={'mt-6'}>
                <Carousel
                    onChange={null}
                    currentSlide={0}
                    settings={{
                        dots:false,
                        slidesToShow:1,
                        slidesToScroll:1,
                        autoPlay:true,
                        speed:1000,
                        infinite:true,
                        className: 'mx-0 rounded-xl',
                        responsive:[]
                    }}
                    classes={{
                        item:'px-0'
                    }}
                    dataSource={[0,1,2]}
                    render={(item,index)=> {
                        return(
                            <div className="w-full h-60 bg-blue-400 rounded-xl flex items-center justify-center text-white" key={`carousel-${index}`}>
                                Sliders Index {index}
                            </div>
                        )
                    }}
                />
            </section>

            <section className="w-full space-y-4">
                <h2 className={'poppins font-semibold tracking-tighter text-xl'}>Untuk Kamu</h2>
                <p>Lorem ipsum dolor sit amet lorem ipsum dolor sit amet</p>
                <div className="w-full">
                    <Carousel
                        onChange={null}
                        currentSlide={0}
                        settings={{
                            slidesToShow:5,
                            slidesToScroll:3,
                            autoPlay:true,
                            infinite:true,
                            className: 'mx-0'
                        }}
                        classes={{
                            item:'pr-2'
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
                </div>
            </section>

            <section className="w-full space-y-4">
                <h2 className={'poppins font-semibold tracking-tighter text-xl'}>Wishlist</h2>
                <p>Lorem ipsum dolor sit amet lorem ipsum dolor sit amet</p>
                <div className="w-full">
                    <Carousel
                        onChange={null}
                        currentSlide={0}
                        settings={{
                            dots:false,
                            slidesToShow:5,
                            slidesToScroll:3,
                            autoPlay:true,
                            infinite:true,
                            className: 'mx-0',
                            responsive:[]
                        }}
                        classes={{
                            item:'pr-2'
                        }}
                        dataSource={props?.data.sort((a,b)=> {return b-a}) ?? []}
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
                </div>
            </section>



            <InView>
                {({inView,ref,entry})=> (
                    <section ref={ref}>
                        <ProductHistorySearchComponent inScreen={inView}/>
                    </section>
                )}
            </InView>
        </ContainerLayout>
      </WrapperLayout>
  )
}

function ComponentInScreenActive(props){
    const { height, width } = useWindowDimensions();
    const divRef = useRef(null)

    return (
        <InView>
            {({inView,ref,entry})=> (

                <div className="w-full h-80 bg-red-500" ref={ref}>
                    <p>{`Header inside viewport ${inView}`}</p>
                </div>
            )}
        </InView>
    )
}


export async function getServerSideProps(ctx){
    const data = await axios.get([process.env.NEXT_PUBLIC_APP_DOMAIN,'product.json'].join('/'), {})
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