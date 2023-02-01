/*******************************************************************************
 * @author Mochamad Yudi Sobari
 * @github https://github.com/mochamadyudi
 * @email yuyuid.id12@gmail.com
 * @contact +6285718851007
 ******************************************************************************/
import React from "react";


export default function Home(props){
    return (
        <div className="w-full">
            <h1>ANTD SSG</h1>
        </div>
    )
}

export async function getStaticPaths() {
    return {
        paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
        fallback: false
    };
}

export async function getStaticProps(context) {
    return {
        props: {
            data: []
        },
    };
}

