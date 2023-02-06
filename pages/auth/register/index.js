import React from 'react'

import nc from 'next-connect'
import { PrismaClient } from '@prisma/client'
import { csrf,setup } from '@moonlay/lib'
import Middleware from "@moonlay/src/lib/middleware";

export default function Index(props){
    console.log(props,'PROPSS')
    return (
        <div className="w-full">
            <h1>Register</h1>

            <form action="http://127.0.0.1:3001/auth/register" method={'post'}>
                <input name={'username'}/>
                <input name={'password'}/>
                <button type={'submit'}>Submit</button>
            </form>
        </div>
    )
}
export const config = {
    bodyParser: true,
}
export const getServerSideProps = setup(async(req,res)=> {
// /    const [ err, data ] = await new Middleware.auth({req,res,...req}).register();

    return {
        props: {
            data: []
        }
    }

})