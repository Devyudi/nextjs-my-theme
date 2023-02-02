import React, {useCallback, useEffect, useRef, useState} from 'react'

import {useRouter} from "next/router";
import {ContainerLayout} from "@moonlay/src/components/shared-layout";
import {ConfigMenu} from "@moonlay/src/config";
import Link from "next/link";
import {Button, Menu} from 'antd';
import {useTheme} from "next-themes";

const TopBarDesktop = () => {
    const router = useRouter();
    return (
        <div className="w-full">
            <Menu mode="horizontal" className={'w-full border-0'}>
                {
                    ConfigMenu.map((child, i) => {

                        return Array.isArray(child?.submenu) && child?.submenu.length === 0 ?
                            <Menu.Item key={child?.key} className={'poppins'}>
                                <span>{child?.label}</span>
                                <Link href={child?.path}/>
                            </Menu.Item>
                            : (
                                <Menu.SubMenu
                                    className={'poppins'}
                                    disabled={child?.disabled ?? false}
                                    icon={
                                        null
                                    }
                                    key={child?.key}
                                    title={child?.label}
                                >
                                    {
                                        child?.submenu.map((item, key) => {
                                            return Array.isArray(item?.submenu) && item?.submenu.length === 0  ?(
                                                <Menu.Item key={item?.key} className={'poppins'}>
                                                    <span>{item?.label}</span>
                                                    <Link href={item?.path}/>
                                                </Menu.Item>
                                            ): (
                                                <Menu.SubMenu
                                                    className={'app-submenu poppins'}
                                                    disabled={item?.disabled ?? false}
                                                    icon={null}
                                                    key={item?.key}
                                                    title={item?.label}
                                                >
                                                    {
                                                        item?.submenu.map((child2, key) => {
                                                            return Array.isArray(child2?.submenu) && child2?.submenu.length === 0  ?(
                                                                <Menu.Item key={child2?.key} className={'poppins'}>
                                                                    <span>{child2?.label}</span>
                                                                    <Link href={child2?.path}/>
                                                                </Menu.Item>
                                                            ): null
                                                        })
                                                    }
                                                </Menu.SubMenu>

                                            )
                                        })
                                    }
                                </Menu.SubMenu>

                            )
                    })
                }
            </Menu>
        </div>
    )
}


export const NavbarLayout = (props) => {
    const {theme, setTheme } = useTheme()
    const divRef = useRef();

    const controlDirection = () => {
        // oldScrollY = window.scrollY;
    }

    useEffect(() => {
        window.addEventListener('scroll', controlDirection);
        return () => {
            window.removeEventListener('scroll', controlDirection);
        };
    }, []);
    return (
        <header
            className="w-full fixed top-0 left-0 h-20 transition poppins border-b border-transparent z-[9999] duration-200 "
            ref={divRef}>
            <section className="w-full flex items-center  h-full">
                <ContainerLayout className={'gap-10 flex items-center justify-between'}>
                    <div className="min-w-40 w-40 h-full flex items-center">
                        <picture>
                            <img src="/assets/google-logo.svg" alt="google-logo" className={'h-8 object-contain'}/>
                        </picture>
                    </div>
                    <div className="w-full h-full  flex items-center gap-6">
                        {/***/}

                        <TopBarDesktop/>
                    </div>
                    <div className="h-full flex items-center gap-4">
                            <Link href={'/auth/login'}>
                                <Button ghost={theme === 'dark'}>
                                    <span>Masuk</span>
                                </Button>
                            </Link>
                        <Button type={'primary'} >Daftar</Button>
                    </div>
                </ContainerLayout>
            </section>
        </header>

    )
}

NavbarLayout.propTypes = {}
NavbarLayout.defaultProps = {}