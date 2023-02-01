/*******************************************************************************
 * @author Mochamad Yudi Sobari
 * @github https://github.com/mochamadyudi
 * @email yuyuid.id12@gmail.com
 * @contact +6285718851007
 ******************************************************************************/

import React from 'react'
import PropTypes from 'prop-types'
import {ContainerLayout} from "@moonlay/src/components/shared-layout";
import Helpers from "@moonlay/helpers";
import {Image} from "antd";

function IconComponent({icon}){
    if(typeof(icon) === 'undefined' && typeof(icon) === 'object' && Object.keys(icon).length === 0) return null
    if(typeof(icon?.element) !== 'undefined' && typeof(icon?.element) !== 'string' && icon?.element !== null) return icon?.element
    if(typeof (icon?.src) !== 'undefined' && typeof (icon?.src) === 'string'){
        return (
            <div className="w-14 h-14 rounded-full bg-gray-100">
                <Image src={icon?.src} alt="icon-page-header-alt" className={'w-full h-full object-contain'}/>
            </div>
        )
    }
    if(typeof(icon?.text) !== 'undefined' && typeof(icon?.text) === 'string') {
        return (
            <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center">
                <span className={'font-bold text-lg'}>{Helpers.getNameInitial(icon?.text)}</span>
            </div>
        )
    }
    return null
}

function PageHeadAlt({title,description,icon}){
    return (
        <div className="w-full h-40 mb-2 app-page-header">
            <ContainerLayout className={'flex justify-center flex-col'}>
                <div className={'w-full flex items-center gap-4'}>
                    <IconComponent icon={icon}/>
                    <h1 className={'font-bold tracking-wides'}>{title}</h1>
                </div>
                <p className={'font-normal text-normal tracking-wides'}>{description}</p>
            </ContainerLayout>
        </div>
    )
}
PageHeadAlt.propTypes = {
    icon: PropTypes.shape({
        element: PropTypes.node,
        src: PropTypes.string
    }),
    title: PropTypes.string.isRequired,
    description: PropTypes.string
}
PageHeadAlt.defaultProps = {
    icon: {
        element:null,
        src:'/next.svg'
    },
    title: "",
    description:''
}

export default PageHeadAlt
