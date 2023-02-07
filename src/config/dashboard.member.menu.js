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