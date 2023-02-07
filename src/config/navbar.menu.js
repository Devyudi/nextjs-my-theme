const defaultMenu = [
    {
        key:'home',
        breadcrumbs: true,
        path:'/',
        isDisabled: false,
        isPrivate: false,
        label:'Home',
        submenu: []
    },
    {
        key:'data-fetching',
        breadcrumbs: true,
        path:'/data-fetching',
        isDisabled: false,
        isPrivate: false,
        label:'Data Fetching',
        submenu: [
            {
                key:'data-fetching.CSR',
                breadcrumbs: true,
                path:'/data-fetching/csr',
                isDisabled: false,
                isPrivate: false,
                label:'Client Side Rendering',
                submenu: [

                ]
            },
            {
                key:'data-fetching.SSR',
                breadcrumbs: true,
                path:'/data-fetching/ssr',
                isDisabled: false,
                isPrivate: false,
                label:'Server Side Rendering',
                submenu: [

                ]
            },
            {
                key:'data-fetching.SSG',
                breadcrumbs: true,
                path:'/data-fetching/ssg',
                isDisabled: false,
                isPrivate: false,
                label:'Static Site Generation',
                submenu: []
            },
        ]
    },
    {
        key:'components',
        breadcrumbs: true,
        path:'/components',
        isDisabled: false,
        isPrivate: false,
        label:'Components',
        submenu: [
            {
                key:'components.grid',
                breadcrumbs: true,
                path:'/components/grid',
                isDisabled: false,
                isPrivate: false,
                label:'Grid',
                submenu: [

                ]
            },
            {
                key:'components.card',
                breadcrumbs: true,
                path:'/components/card',
                isDisabled: false,
                isPrivate: false,
                label:'Card',
                submenu: []
            },
            {
                key:'components.moonlay',
                breadcrumbs: true,
                path:'/components/moonlay',
                isDisabled: false,
                isPrivate: false,
                label:'Moonlay',
                submenu: [
                    {
                        key:'components.moonlay.card',
                        breadcrumbs: true,
                        path:'/components/moonlay/card',
                        isDisabled: false,
                        isPrivate: false,
                        label:'Card',
                        submenu: []
                    },
                ]
            },
            {
                key:'components.antd',
                breadcrumbs: true,
                path:'/components/antd',
                isDisabled: false,
                isPrivate: false,
                label:'Ant Design',
                submenu: [
                    {
                        key:'components.antd/button',
                        breadcrumbs: true,
                        path:'/components/antd/button',
                        isDisabled: false,
                        isPrivate: false,
                        label:'Button',
                        submenu: [
                        ]
                    },
                    {
                        key:'components.antd/dropdown',
                        breadcrumbs: true,
                        path:'/components/antd/dropdown',
                        isDisabled: false,
                        isPrivate: false,
                        label:'Dropdown',
                        submenu: [
                        ]
                    },
                    {
                        key:'components.antd/grid',
                        breadcrumbs: true,
                        path:'/components/antd/grid',
                        isDisabled: false,
                        isPrivate: false,
                        label:'Grid',
                        submenu: [
                        ]
                    },
                    {
                        key:'components.antd/typography',
                        breadcrumbs: true,
                        path:'/components/antd/typography',
                        isDisabled: false,
                        isPrivate: false,
                        label:'Typography',
                        submenu: [
                        ]
                    },

                ]
            },

        ]
    },
    {
        key:'template',
        breadcrumbs: true,
        path:'/template',
        isDisabled: false,
        isPrivate: false,
        label:'Template',
        submenu: []
    },
    {
        key:'blog',
        breadcrumbs: true,
        path:'/blog',
        isDisabled: false,
        isPrivate: false,
        label:'Blog',
        submenu: []
    },
    // {
    //     key:'demo',
    //     breadcrumbs: true,
    //     path:'/demo',
    //     isDisabled: false,
    //     isPrivate: false,
    //     label:'Demo',
    //     submenu: [
    //         {
    //             key:'demo.ssr',
    //             breadcrumbs: true,
    //             path:'/demo/ssr',
    //             isDisabled: false,
    //             isPrivate: false,
    //             label:'SSR',
    //             submenu: [
    //
    //             ]
    //         },
    //         {
    //             key:'demo.csr',
    //             breadcrumbs: true,
    //             path:'/demo/csr',
    //             isDisabled: false,
    //             isPrivate: false,
    //             label:'CSR',
    //             submenu: [
    //
    //             ]
    //         }
    //     ]
    // }
]


export const ConfigMenu = [
    ...defaultMenu
]