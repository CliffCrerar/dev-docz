const
// display main navbar
    navbar = true,
    // main navbar configuration
    // nav = require('./main-nav'),
    //You can omit the .md extension, and paths ending with / are inferred as */README.md. The text for the link is automatically inferred (either from the first header in the page or explicit title in YAML front matter). To explicitly specify the link text, use an array in form of [link, text].
    // sidebar = require('./side-nav'),
    //The sidebar only displays links for headers in the current active page. You can display all header links for every page with themeConfig.displayAllHeaders: true:
    displayAllHeaders = true,
    // By default, the nested header links and the hash in the URL are updated as the user scrolls to view the different sections of the page. This behavior can be disabled with the following theme config:
    activeHeaderLinks = true

module.exports = {
    title: "Future Dev docs",
    description: "This is a Zeit Now 2.0 example",
    themeConfig: { navbar, nav: maiNav(), displayAllHeaders, activeHeaderLinks, sidebar: sidebar() },
    dest: "public"
};


function maiNav() {
    return [
        { text: "Home", link: "/" },
        { text: "Guide", link: "/guide/" },
        { text: "Config Page", link: "/config" },
        { text: "Sidebar 1", link: "/testing-side-bar-one/" },
        { text: "Sidebar 2", link: "/testing-side-bar-two/" },
        {
            text: "test droplist",
            items: [{
                text: 'item1',
                items: [{
                    text: 'item1.1',
                    link: '/testing-nav-list/item1-1'
                }, {
                    text: 'item1.2',
                    link: '/testing-nav-list/item1-2'
                }]
            }]
        }
    ]
}


function sidebar() {
    return {
        '/testing-side-bar-one/': [{
            title: 'Group 1', // required
            path: '/testing-side-bar-one/', // optional, which should be a absolute path.
            collapsable: false, // optional, defaults to true
            sidebarDepth: 2, // optional, defaults to 1
            children: [
                '/testing-side-bar-one/side-bar-1-1',
                '/testing-side-bar-one/side-bar-1-2'
            ]
        }],
        '/testing-side-bar-two/': [{
            title: 'group 3',
            collapsable: false,
            sidebarDepth: 2,
            children: [
                'side-bar-2-1',
                // { title: 'group 5', path: 'side-bar-2-1', children: ['side-bar-2-2'] }
            ]
        }, {
            title: 'group 4',
            sidebarDepth: 1,
            children: [
                'side-bar-2-2'
            ]
        }]
    }
}