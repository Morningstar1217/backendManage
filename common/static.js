const defaultMenu = [
    {
        title: '参数设置',
        index: '1',
        children: [
            {
                title: '开放平台设置',
                index: '1',
                path: 'index.html',
            },
            {
                title: 'AI混剪设置',
                index: '2',
                path: 'aiPlat.html',
            },
            {
                title: '参数设置',
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
            {
                title: '添加分类及商户',
                index: '2',
                path: 'addShop.html',
            },
            {
                title: '综合数据',
                index: '3',
                path: 'dataBlank.html',
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
            {
                title: '商户详情',
                index: '2',
                path: 'shopList.html',
            },
        ],
        icon: 'el-icon-user-solid',
    },
    {
        title: '活动管理',
        index: '4',
        children: [
            {
                title: '活动列表',
                index: '1',
                path: 'activity.html',
            },
            {
                title: '数据统计',
                index: '2',
                path: 'activeDataBlank.html',
            },
        ],
        icon: 'el-icon-date',
    },
    {
        title: '用户管理',
        index: '5',
        children: [
            {
                title: '用户管理',
                index: '1',
                path: 'userManage.html',
            },
        ],
        icon: 'el-icon-user',
    },
    {
        title: '卡券管理',
        index: '6',
        children: [
            {
                title: '卡券列表',
                index: '1',
                path: 'cardManage.html',
            },
        ],
        icon: 'el-icon-bank-card',
    },
]
const defaultAvatar = '../images/avatar.jpg'