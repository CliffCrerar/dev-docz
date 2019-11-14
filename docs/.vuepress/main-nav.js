module.exports = [
    { text: "Home", link: "/" },
    { text: "Guide", link: "/guide/" },
    { text: "Config Page", link: "/config" },
    // { text: "Sidebar 1", link: "/testing-side-bar-one/" },
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