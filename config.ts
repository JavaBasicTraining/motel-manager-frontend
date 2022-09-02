module.exports = [
    // user
    {
        path: '/user',
        component: '../layouts/UserLayout',
        routes: [{ path: '/', redirect: '/dashboard/analysis' }]
    },
    // app
    {
        path: '/',
        component: '../layouts/BasicLayout',
        routes: [{ path: '/', redirect: '/dashboard/analysis' }]
    },
    // new
    {
        path: '/new',
        component: '../layouts/new_page',
        routes: [{ path: '/', redirect: '/dashboard/analysis' }]
    },
]