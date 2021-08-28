const defaultMenu = [
    {
        title: '参数设置',
        index: '1',
        children: [
            {
                title: '开放平台对接',
                index: '1',
                path: 'index.html',
            },
            {
                title: 'AI平台对接',
                index: '2',
                path: 'aiPlat.html',
            },
            {
                title: '通用参数设置',
                index: '3',
                path: 'setting.html',
            },
        ],
        icon: 'el-icon-setting',
    },
    {
        title: '商户管理',
        index: '2',
        children: [
            {
                title: '我的商户',
                index: '1',
                path: 'myShop.html',
            },
        ],
        icon: 'el-icon-s-shop',
    },
    {
        title: '团队管理',
        index: '3',
        children: [
            {
                title: '我的团队',
                index: '1',
                path: 'myTeam.html',
            },
        ],
        icon: 'el-icon-user-solid',
    },
    {
        title: '活动管理',
        index: '4',
        children: [
            {
                title: '活动管理',
                index: '1',
                path: 'activity.html',
            },
        ],
        icon: 'el-icon-date',
    },
]
const defaultAvatar = '../images/avatar.jpg'