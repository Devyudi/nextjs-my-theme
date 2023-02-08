import React from 'react'
import Dashboard from "@moonlay/src/components/shared-layout/private-layout/dashboard";
import MetaHead from "@moonlay/src/components/shared-layout/meta.head";
import { Card, Table, Row,Col} from 'antd'
export default function Index(props){
    const columns = [
        {
            dataIndex:'id',
            title: "",
            width: 70,
            render:(_,val,index)=> index + 1
        }
    ]
    return (
        <Dashboard.Member>
            <MetaHead
                head={{
                    title:'Product List | core@2023'
                }}
            />
            <Card title={'Product List'}>
                <Table
                    columns={columns}
                    dataSource={[]}
                    pagination={false}
                />
            </Card>
        </Dashboard.Member>
    )
}

export async function getServerSideProps(ctx){
    return {
        props : {}
    }
}