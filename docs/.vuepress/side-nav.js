module.exports = () => [{
    title: 'Group 1', // required
    path: '/testing-side-bar-one/', // optional, which should be a absolute path.
    collapsable: false, // optional, defaults to true
    sidebarDepth: 1, // optional, defaults to 1
    children: [
        '/testing-side-bar-one/side-bar-1-1',
        '/testing-side-bar-one/side-bar-1-2'
    ]
}]


/* Alternate configurations 

	A1:

	[
      '/',
      '/page-a',
      ['/page-b', 'Explicit link text']
	]
	
	A1:

    sidebar: {
      '/foo/': [
        '',     // /foo/
        'one',  // /foo/one.html 
        'two'   // /foo/two.html 
      ],

      '/bar/': [
        '',      // /bar/ 
        'three', // /bar/three.html 
        'four'   // /bar/four.html 
      ],

       fallback
      '/': [
        '',        // /
        'contact', // /contact.html 
        'about'    // /about.html 
      ]
    }



*/