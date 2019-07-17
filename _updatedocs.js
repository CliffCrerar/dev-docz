/**
 * @ Author: Cliff Crerar
 * @ Create Time: 2019-07-06 13:46:42
 * @ Modified by: Your name
 * @ Modified time: 2019-07-17 23:50:41
 * @ Description: publishes package and pushes the project to master and prod build to gh-pages brach
 */

// use strict
const ut = require( 'util' );
const fs = require( 'fs' );
const path = require( 'path' );
const cp = require( 'child_process' );
const ghPages = require( 'gh-pages' );
const os = require( 'os' );
//var gitOpsCommitMsg = 'auto-commit-on-publish';
//var gitOpsFile;

// switch (os.platform()) {
//     case 'darwin':
//         gitOpsFile = path.join(__dirname, '_git-scr/os-commit-push.sh');
//         break;
//     case 'linux??':
//         gitOpsFile = path.join(__dirname, `_git-scr/<filename for linux>`); // error
//         break;
//     case 'win32??':
//         gitOpsFile = path.join(__dirname, `_git-scr/<filename for windows>`); // error
//         break;
// };

// Decision 
//cp.execSync('npm', ['run', 'build']);
// cp.execSync('git', ['add', '--all']);
// cp.execSync('git', ['commit', '-m', '"publish docs"']);
// cp.execSync('git', ['push']);

console.log( require( 'dotenv' ).config() );

const publishOptions = {
	repo: require( './package.json' ).repository.url.split( '+' )[1],
	remote: 'upstream',
	message: 'Auto-generated commit',
	user: {
		name: 'cliffcrerar',
		email: 'cliff.crerar@gmail'
	}
}
console.log( 'publishOptions: ', publishOptions );

ghPages.publish( 'docs', publishOptions )