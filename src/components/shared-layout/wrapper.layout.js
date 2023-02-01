import React from 'react'
import PropTypes from 'prop-types'
import {StyledChildren} from "@moonlay/src/components/shared-layout";
import {NavbarLayout} from "@moonlay/src/components/shared-layout/navbar.layout";
import {useTheme} from "next-themes";
import {Button, Tooltip} from "antd";
import { SettingOutlined } from '@ant-design/icons'

const WrapperLayout = (props)=> {
    const { theme, setTheme } = useTheme()
    return(
        <div className="w-full min-h-screen">

            <div className="w-full fixed z-[9999] top-0 left-0 h-20 bg-white border-b app-navbar">
                {
                    props?.navbar ? <StyledChildren children={props?.navbar}/> : <NavbarLayout/>
                }
            </div>
            <div className="pt-20 min-h-screen">
                {
                    typeof(props?.children) !== 'undefined' && (
                        <StyledChildren children={props?.children}/>
                    )
                }

            </div>
            <div style={{position:'fixed',bottom:100,right:20}}>
                <Tooltip title="Settings">
                    <Button
                        size={'large'}
                        onClick={()=> setTheme(theme === 'dark'? 'light':'dark')}
                        icon={<SettingOutlined />}/>
                </Tooltip>
            </div>
        </div>
    )
}

WrapperLayout.propTypes = {
    navbar: PropTypes.element.isRequired,
    navbarType: PropTypes.string,
}
WrapperLayout.defaultProps = {
    navbar: null,
    navbarType: 'default'
}

export {WrapperLayout}
