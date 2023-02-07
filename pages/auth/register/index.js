import React from 'react'

import nc from 'next-connect'
import { PrismaClient } from '@prisma/client'
import { csrf,setup } from '@moonlay/lib'
import Link from 'next/link'
import Middleware from "@moonlay/src/lib/middleware";
import {ContainerLayout} from "@moonlay/src/components/shared-layout";
import MetaHead from "@moonlay/src/components/shared-layout/meta.head";

export default function Index(props){

    return (
        <React.Fragment>
            <MetaHead
                head={{
                    title:'Register | Core@2023'
                }}
            />
            <div className="bg-gray-100">
                <ContainerLayout className={'flex items-center justify-center min-h-screen'} >
                    <div className={'w-full flex justify-center'}>
                        <div className="px-6 lg:px-10 bg-white dark:bg-scheme-dark-primary  shadow-lg rounded-xl w-full max-w-lg py-10 space-y-4 lg:space-y-8">
                            <div className="w-full">
                                <h1 className={'text-gray-600 font-sf-bold dark:text-gray-200 text-2xl font-semibold text-center'}>Daftar</h1>
                            </div>
                            <div className="w-full text-gray-600 dark:text-gray-200 text-center">
                                <p className={'text-sm lg:text-base'}>Selamat datang di <a className={'text-red-500 font-semibold'}>Core@2023</a>.</p>
                                <p className={'text-sm lg:text-base'}>Yuk masuk dengan media sosial untuk akses seluruh fitur!</p>
                            </div>
                            <form className="space-y-4 flex flex-col w-full ">
                                <div className={'space-y-6 w-full'}>
                                    <div className={'w-full flex flex-col'}>
                                        <label htmlFor="email" className={'w-full h-12 w-full rounded-full border-2 bg-gray-100 overflow-hidden'}>
                                            <input
                                                name={'email'}
                                                type={'email'}
                                                placeholder={'email'}
                                                className={'px-4 py-2 w-full h-12 dark:text-white bg-transparent rounded-full placeholder-gray-300 ring-0 focus:ring-0 border-0 border-transparent outline-0 focus:outline-0 text-gray-500'}
                                                spellCheck={'false'}
                                                autoComplete={'off'}
                                            />
                                        </label>
                                    </div>
                                    <div className={'w-full lg:px-14 text-center'}>
                                        <p className={'text-sm text-gray-400'}>Password minimal 8 karakter berupa kombinasi angka, huruf besar dan huruf kecil</p>
                                    </div>
                                    <div className={'w-full flex flex-col space-y-4'}>
                                        <label htmlFor="password" className={'w-full h-12 w-full rounded-full border-2 bg-gray-100 overflow-hidden'}>
                                            <input
                                                name={'password'}
                                                type={'password'}
                                                placeholder={'password'}
                                                className={'px-4 py-2 w-full h-12 dark:text-white bg-transparent rounded-full placeholder-gray-300 ring-0 focus:ring-0 border-0 border-transparent outline-0 focus:outline-0 text-gray-500'}
                                                spellCheck={'false'}
                                                autoComplete={'off'}
                                            />
                                        </label>
                                        <label htmlFor="password" className={'w-full h-12 w-full rounded-full border-2 bg-gray-100 overflow-hidden'}>
                                            <input
                                                name={'retype_password'}
                                                type={'password'}
                                                placeholder={'Konfirmasi Password'}
                                                className={'px-4 py-2 w-full h-12 dark:text-white bg-transparent rounded-full placeholder-gray-300 ring-0 focus:ring-0 border-0 border-transparent outline-0 focus:outline-0 text-gray-500'}
                                                spellCheck={false}
                                                autoComplete={'off'}
                                            />
                                        </label>
                                    </div>
                                </div>

                                <Link href={'/auth/forgot/password'}>
                                    <div className={'flex items-center justify-end cursor-pointer'}>
                                        <p className={'underline text-red-500 text-sm lg:text-base '}>Lupa password ? </p>
                                    </div>
                                </Link>

                                <button
                                    type={'submit'}
                                    className={'border-0 focus:outline-0 outline-0  bg-gradient-to-r from-red-500 to-orange-400 transition duration-200 hover:bg-red-600 text-md font-semibold py-3 px-4 text-center rounded-full text-white'}>
                                    Daftar Sekarang
                                </button>

                                <div>
                                    <div className={'flex items-center justify-center my-4'}>
                                        <p className={'font-semibold text-gray-500 text-sm lg:text-base leading-snug tracking-tight'}>Sudah punya akun? <Link href={'/auth/login'}><span className={'text-sm lg:text-base underline font-normal text-red-500'}>Masuk</span></Link></p>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </ContainerLayout>
            </div>
        </React.Fragment>
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