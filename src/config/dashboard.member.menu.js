import React from 'react'
import { LaptopOutlined } from '@ant-design/icons'

const defaultMenu = [
    {
        key:'dashboard',
        breadcrumbs: true,
        path:'/dashboard',
        icon: LaptopOutlined,
        label:'Dashboard',
        submenu: []
    },
    {
        key:'product',
        breadcrumbs: true,
        path:'/dashboard/product',
        icon: LaptopOutlined,
        label:'Product',
        submenu: [
            {
                key:'product.list',
                breadcrumbs: true,
                path:'/dashboard/product',
                icon: LaptopOutlined,
                label:'List',
                submenu: []
            },
            {
                key:'product.create',
                breadcrumbs: true,
                path:'/dashboard/product/create',
                icon: LaptopOutlined,
                label:'Create',
                submenu: []
            }
        ]
    },
    {
        key:'category',
        breadcrumbs: true,
        path:'/dashboard/category',
        icon: LaptopOutlined,
        label:'Category',
        submenu: [
            {
                key:'category.list',
                breadcrumbs: true,
                path:'/dashboard/category',
                icon: LaptopOutlined,
                label:'List',
                submenu: []
            },
            {
                key:'category.create',
                breadcrumbs: true,
                path:'/dashboard/category/create',
                icon: LaptopOutlined,
                label:'Create',
                submenu: []
            }
        ]
    },

    {
        key:'user',
        breadcrumbs: true,
        path:'/dashboard/user',
        icon: LaptopOutlined,
        label:'User',
        submenu: [
            {
                key:'user.add',
                breadcrumbs: true,
                path:'/dashboard/user/add',
                icon: LaptopOutlined,
                label:'Add',
                submenu: []
            }
        ]
    }
]


export const MenuDashboardMember = [
    ...defaultMenu
]