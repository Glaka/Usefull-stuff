let BrowserSyncConfig = {
    server: { baseDir: "./dev/" },
    tunnel: false,
    host: 'localhost',
    port: 9451,
    open: false,
    notify: true,
    scrollProportionally: false,
    logPrefix: "Frontend",
    // proxy: "http://inchoo.net/magento/magento-frontend/a-simple-frontend-workflow-for-gulp/",
    // middleware: require('serve-static')('./dev'),
    // files: "./dev/style/main.css",
    // rewriteRules: [
    //     {
    //         match: new RegExp('</head>'),
    //         fn: function() {
    //             return '<script async="" src="/browser-sync/browser-sync-client.2.9.6.js"></script>' +
    //                 '<link rel="stylesheet" type="text/css" href="/css/main.css" media="all"><script src="/js/responsive.js" type="text/javascript"></script></head >'
    //         }
    //     },
    //     {
    //         match: new RegExp('<link rel="up" href="/">'),
    //         fn: function() {
    //             return '<link rel="stylesheet" type="text/css" href="/css/music.css" media="all">'
    //         }
    //     },
    //     {
    //         match: '<link rel="stylesheet" type="text/css" href="/f/1/business/find_solutions/smeLandingNew.css?1.1" media="all">',
    //         fn: function() {
    //             return '<link rel="stylesheet" type="text/css" href="/f/1/business/find_solutions/smeLandingNew.css?1.1" media="all"><link rel="stylesheet" type="text/css" href="/css/find-solutions.css" media="all">'
    //         }
    //     },
    //     // removing already deployed assets
    //     {
    //         match: new RegExp('/f/1/mm/tariffs/contract/global/main.css'),
    //         fn: function() {
    //             return ''
    //         }
    //     },
    //     {
    //         match: new RegExp('/f/1/mm/tariffs/contract/global/responsive.js'),
    //         fn: function() {
    //             return ''
    //         }
    //     }
    // ],
};