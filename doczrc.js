const chLog = false;
const path = require( 'path' );
// import themeDefault from 'docz-theme-default/dist'
// import { splash } from 'docz-plugin-splash'

const doczConfig = {
	hashRouter: true,
	title: 'My Dev Docz',
	description: 'This is my awesome documentation',
	menu: require( './src/menu' ),
	themeConfig: {
		mode: 'light'
		// logo: {
		//     src: 'https://cdn-learnsql.c1i44.now.sh/pg-wip/_under_construction.png'
		// }
	},
	files: [
		'src/**/*.{md,markdown,mdx}'
	],
	base: "/",
	public: './public',
	indexHtml: 'public/index.html',
	dest: "/docs"
	// modifyBundlerConfig: config => {
	//     (function() {
	//         console.log('when this runs');
	//         //console.log('document', document);
	//     }())
	// }
	//plugins: [splash()]
};

// if (chLog) {
//     console.log(process.env.NODE_ENV);
//     console.log(process.env);
//     console.log('themeDefault: ', themeDefault);
//     process.exit(0);
// }

export default doczConfig;