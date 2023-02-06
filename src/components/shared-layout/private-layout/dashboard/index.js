import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {ChildrenLayout} from "@moonlay/src/components/shared-layout";
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import DashboardAdmin from "@moonlay/src/components/shared-layout/private-layout/dashboard/dashboard.admin";
import DashboardMember from "@moonlay/src/components/shared-layout/private-layout/dashboard/dashboard.member";
const { Header, Content, Footer, Sider } = Layout;

export default class Dashboard extends Component{
    static Admin = DashboardAdmin

    static Member = DashboardMember
    render(){
        return (
            <Layout className="w-full">
                <Header>
                    <div className="logo"/>
                </Header>
                <Content>
                    <Breadcrumb
                        style={{
                            margin: '16px 0',
                        }}
                    >
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Layout>
                        <Sider
                            width={200}
                        >
                            <Menu
                                mode="inline"
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                style={{
                                    height: '100%',
                                }}
                                items={[]}
                            />
                        </Sider>
                        <Content
                            style={{
                                padding: '0 24px',
                                minHeight: 280,
                            }}
                        >
                            <ChildrenLayout children={this.props?.children}/>
                        </Content>

                    </Layout>

                </Content>
            </Layout>
        )
    }
}

Dashboard.propTypes = {
    menu: PropTypes.arrayOf(
        PropTypes.shape({
            key: PropTypes.any.isRequired,
            url: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            icon: PropTypes.oneOfType([
                PropTypes.node,
                PropTypes.element,
                PropTypes.func
            ]),
            submenu: PropTypes.arrayOf(
                PropTypes.shape({
                    key: PropTypes.any.isRequired,
                    url: PropTypes.string.isRequired,
                    label: PropTypes.string.isRequired,
                    icon: PropTypes.oneOfType([
                        PropTypes.node,
                        PropTypes.element,
                        PropTypes.func
                    ]),
                    submenu: PropTypes.array
                }).isRequired
            )
        }).isRequired
    ).isRequired
}
Dashboard.defaultProps = {
    menu: []
}
