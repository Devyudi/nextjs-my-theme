import React from 'react'

export default function Index(props){
    return (
        <div className="w-full">
            Dynamic Route Card
        </div>
    )
}

export async function getServerSideProps(ctx){
    return {
        props : {}
    }
}