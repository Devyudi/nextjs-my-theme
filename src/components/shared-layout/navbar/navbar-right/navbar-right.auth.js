import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'antd'
import { BellOutlined } from '@ant-design/icons'
function NavbarRightAuth (props){
    return (
        <div className="flex-none h-full  flex items-center px-4 space-x-4">
            <div className={'w-10 h-10 3xl:h-6 3xl:w-6 flex items-center justify-center'}>
                <BellOutlined className={'!text-xl transition duration-200 hover:text-red-500 '} onClick={()=> {

                }}/>
            </div>
            <div className="flex-none h-full  flex items-center relative">
                <div
                    className="w-10 h-10 cursor-pointer rounded-full bg-gray-500 relative overflow-hidden">
                    <img src="/assets/img/users/users_1_hd.png" alt="user-images"
                         className={'w-full h-full object-cover'}/>
                </div>
            </div>
        </div>
    )
}

NavbarRightAuth.propTypes = {}
NavbarRightAuth.defaultProps = {}

export default NavbarRightAuth