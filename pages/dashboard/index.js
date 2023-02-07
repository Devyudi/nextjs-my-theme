/*******************************************************************************
 * @author Mochamad Yudi Sobari
 * @github https://github.com/mochamadyudi
 * @email yuyuid.id12@gmail.com
 * @contact +6285718851007
 ******************************************************************************/

import React from 'react'
import Dashboard from "@moonlay/src/components/shared-layout/private-layout/dashboard";
import {MenuDashboardMember} from "@moonlay/src/config";

export default function Index(props){
    let  { menus } = props
    return (
        <Dashboard.Member className="w-full" menus={MenuDashboardMember}>
            <p>Lorem ipsum dolor sit amet</p>
        </Dashboard.Member>
    )
}

export async function getServerSideProps(ctx){
    let role = 'member'

    return {
        props: {
            roles: role,
            data: []
        }
    }
}