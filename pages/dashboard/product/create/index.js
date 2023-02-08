import React, {useState, useEffect} from 'react'
import Dashboard from "@moonlay/src/components/shared-layout/private-layout/dashboard";
import MetaHead from "@moonlay/src/components/shared-layout/meta.head";
import {ContainerLayout} from "@moonlay/src/components/shared-layout";
import {Card, Form,Input,Row,Col,Button, Tooltip} from "antd";
import { SkinOutlined } from '@ant-design/icons'
import PageHeadAlt from "@moonlay/src/components/shared-component/hero/page-head-alt";
import {NumericInput} from "@moonlay/src/components/shared-component";
import {useRouter} from "next/router";


export default function Index(props){
    const [ form ] = Form.useForm()
    const route = useRouter()
    const onGoBack = ()=> route.back()
    const onFinish = ()=> {
        form.validateFields()
            .then((value)=> {
                console.log(value)
            })
            .catch((err)=> {
                console.log(err)
            })
    }
    const [value, setValue] = useState('');

    return (
        <Dashboard.Member className="w-full">
            <MetaHead
                head={{
                    title:"Create Product | @2023"
                }}
                />
            <PageHeadAlt
                icon={{
                    src:'/ant-logo.png',
                    element:<SkinOutlined style={{fontSize:30}} />
                }}
                extra={
                    <div className="flex item-center text-right gap-4">
                        <Button onClick={onGoBack} size={'large'}>Discard</Button>
                        <Button type={'primary'} onClick={onFinish} size={'large'}>Add</Button>
                    </div>
                }
                title={'Create Product'}
            />
            <ContainerLayout className={'my-4'}>
                <Form
                    form={form}
                    layout={'vertical'}
                >


                       <Row gutter={24}>
                           <Col span={16}>
                               <Card loading={false}>
                               <Form.Item name={'name'} label={'Product Name'} rules={[{required:true,message: "Can't be empty!"}]}>
                                   <Input placeholder={'input product name'}/>
                               </Form.Item>
                               <Form.Item name={'description'} label={'Product Description'} rules={[{required:true,message: "Can't be empty!"}]}>
                                   <Input placeholder={'input product Description'}/>
                               </Form.Item>
                               <Form.Item name={'price'} label={'Price'} rules={[{required:true,message: "Can't be empty!"}]}>
                                   <NumericInput style={{ width: 120 }} value={value} onChange={setValue} />
                               </Form.Item>
                               </Card>
                           </Col>
                           <Col span={8}>
                               <div className="space-y-4">
                                   <Card>
                                       <p>tseting</p>
                                   </Card>
                                   <Card title={'Category'}>
                                       <p>tseting</p>
                                   </Card>
                               </div>
                           </Col>
                       </Row>

                </Form>
            </ContainerLayout>
        </Dashboard.Member>
    )
}

export async function getServerSideProps(ctx){
    return {
        props : {}
    }
}