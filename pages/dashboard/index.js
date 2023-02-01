/*******************************************************************************
 * @author Mochamad Yudi Sobari
 * @github https://github.com/mochamadyudi
 * @email yuyuid.id12@gmail.com
 * @contact +6285718851007
 ******************************************************************************/

import React from 'react'

export default function Index(props){
    return (
        <div className="w-full">
            <h1>Page Dashboard</h1>
        </div>
    )
}

export async function getServerSideProps(ctx){
    return {
        props: {
            data: []
        }
    }
}