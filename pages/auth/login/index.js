/*******************************************************************************
 * @author Mochamad Yudi Sobari
 * @github https://github.com/mochamadyudi
 * @email yuyuid.id12@gmail.com
 * @contact +6285718851007
 ******************************************************************************/

import React, {useState,useEffect} from 'react'
import {  signIn } from 'next-auth/react'
import { Card, Form, Button, Typography,Input,message, Divider} from 'antd'
import { useFormik, Field, ErrorMessage } from 'formik';
import { EyeOutlined } from '@ant-design/icons'
import * as Yup from 'yup';
import { useRouter } from 'next/router'
import Link from 'next/link'
// import {Input} from "@moonlay/src/components/shared-component";
import MetaHead from "@moonlay/src/components/shared-layout/meta.head";

export default function Index(props){
    const [ form ] = Form.useForm()
    function onFinish(){
        signIn('credentials')
    }

    const router = useRouter();
    const [error, setError] = useState(null);

    const formik = useFormik({
        initialValues: {email: '', password: ''},
        validationSchema: Yup.object({
            email: Yup.string()
                .max(30, 'Must be 30 characters or less')
                .email('Invalid email address')
                .required('Please enter your email'),
            password: Yup.string().required('Please enter your password'),
        }),
        onSubmit: async (values) => {
            message.success({
                content: JSON.stringify(values),
                duration:10
            })
            const res = await signIn('credentials', {
                redirect: false,
                email: values.email,
                password: values.password,
                callbackUrl: router.query?.callbackUrl ? router.query?.callbackUrl : window.origin,
            });
            message.info({
                content: JSON.stringify(res),
                    duration:10
            })
            if (res?.error) {
                setError(res.error);
            } else {
                setError(null);
            }
        }
    })

    const [show,setShow] = useState(false)
    const ShowPassword = ()=> setShow(!show)
    return (
        <React.Fragment>
            <MetaHead
                head={{
                    title:'Login | Core@2023'
                }}
            />
            <div className="w-full flex items-center justify-center h-screen bg-gray-100">
                <div className={'w-full flex justify-center'}>
                    <div className="px-6 lg:px-10 bg-white dark:bg-scheme-dark-primary  shadow-lg rounded-xl w-full max-w-lg py-10 space-y-4 lg:space-y-8">

                        <div className="w-full">
                            <h1 className={'text-gray-600 font-sf-bold dark:text-gray-200 text-2xl font-semibold text-center'}>Masuk</h1>
                        </div>

                        <div className="w-full text-gray-600 dark:text-gray-200 text-center">
                            <p className={'text-sm lg:text-base'}>Selamat datang di <a className={'text-red-500 font-semibold'}>Core@2023</a>.</p>
                            <p className={'text-sm lg:text-base'}>Yuk masuk dengan media sosial untuk akses seluruh fitur!</p>
                        </div>
                        <form onSubmit={formik.handleSubmit} autoComplete={'off'} className="space-y-4 flex flex-col ">
                            <label htmlFor="email">
                                <Input
                                    size={'large'}
                                    name={'email'}
                                    type={'email'}
                                    placeholder={'email'}
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                />

                            </label>
                            <label htmlFor="password">
                                <Input
                                    size={'large'}
                                    name={'password'}
                                    type={`${show ? 'text' : 'password'}`}
                                    addonAfter={
                                        <EyeOutlined onClick={ShowPassword}/>
                                    }
                                    placeholder={'password'}
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                />

                                {/*<Input*/}
                                {/*    name={'password'}*/}
                                {/*    value={formik.values.password}*/}
                                {/*    onChange={formik.handleChange}*/}
                                {/*    type={`${show ? 'text' : 'password'}`}*/}
                                {/*    placeholder={'password'}*/}
                                {/*    className={'px-4 py-2 w-full h-full border-0  bg-gray-100 dark:text-white focus:outline-0 outline-0 text-gray-500'}*/}
                                {/*    spellCheck={'false'}*/}
                                {/*    autoComplete={'new-password'}*/}
                                {/*/>*/}
                                {/*<div className="w-12 h-12 absolute right-0 top-0 flex items-center justify-center">*/}
                                {/*    <Button*/}
                                {/*        onClick={ShowPassword}*/}
                                {/*        type={'primary'}*/}
                                {/*        icon={<EyeOutlined/>}*/}
                                {/*    />*/}
                                {/*</div>*/}
                            </label>

                            <Link href={'/auth/forgot/password'}>
                                <div className={'flex items-center justify-end cursor-pointer'}>
                                    <p className={'underline text-red-500 text-sm lg:text-base border-0 focus:outline-0 outline-0 '}>Lupa password ? </p>
                                </div>
                            </Link>


                            <button
                                type={'submit'}
                                className={'border-0 focus:outline-0 outline-0  bg-gradient-to-r from-red-500 to-orange-400 transition duration-200 hover:bg-red-600 text-md font-semibold py-3 px-4 text-center rounded-full text-white'}>
                                Masuk
                            </button>

                            <div>
                                <div className={'flex items-center justify-center my-4'}>
                                    <p className={'font-semibold text-gray-500 text-sm lg:text-base'}>Belum punya akun? <Link href={'/auth/register'}><span className={'underline text-red-500 cursor-pointer text-sm lg:text-base'}>Daftar Sekarang</span></Link></p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export async function getServerSideProps(ctx){

    return {
        props: {
            data:[]
        }
    }
}