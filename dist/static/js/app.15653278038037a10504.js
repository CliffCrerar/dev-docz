!function(e){function t(t){for(var n,a,s=t[0],o=t[1],d=t[2],l=t[3]||[],c=0,i=[];c<s.length;c++)a=s[c],Object.prototype.hasOwnProperty.call(O,a)&&O[a]&&i.push(O[a][0]),O[a]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);for(H&&H(t),q.push.apply(q,l);i.length;)i.shift()();return M.push.apply(M,d||[]),r()}function r(){for(var e,t=0;t<M.length;t++){for(var r=M[t],n=!0,a=1;a<r.length;a++){var s=r[a];0!==O[s]&&(n=!1)}n&&(M.splice(t--,1),e=E(E.s=r[0]))}return 0===M.length&&(q.forEach(function(e){if(void 0===O[e]){O[e]=null;var t=document.createElement("link");t.crossOrigin="anonymous",E.nc&&t.setAttribute("nonce",E.nc),t.rel="prefetch",t.as="script",t.href=A(e),document.head.appendChild(t)}}),q.length=0),e}var n=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(!y[e]||!w[e])return;for(var r in w[e]=!1,t)Object.prototype.hasOwnProperty.call(t,r)&&(h[r]=t[r]);0===--b&&0===k&&j()}(e,t),n&&n(e,t)};var a,s=!0,o="15653278038037a10504",d=1e4,l={},c=[],i=[];function u(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:a!==e,active:!0,accept:function(e,r){if(void 0===e)t._selfAccepted=!0;else if("function"===typeof e)t._selfAccepted=e;else if("object"===typeof e)for(var n=0;n<e.length;n++)t._acceptedDependencies[e[n]]=r||function(){};else t._acceptedDependencies[e]=r||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"===typeof e)for(var r=0;r<e.length;r++)t._declinedDependencies[e[r]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var r=t._disposeHandlers.indexOf(e);r>=0&&t._disposeHandlers.splice(r,1)},check:C,apply:S,status:function(e){if(!e)return g;p.push(e)},addStatusHandler:function(e){p.push(e)},removeStatusHandler:function(e){var t=p.indexOf(e);t>=0&&p.splice(t,1)},data:l[e]};return a=void 0,t}var p=[],g="idle";function m(e){g=e;for(var t=0;t<p.length;t++)p[t].call(null,e)}var f,h,v,b=0,k=0,x={},w={},y={};function P(e){return+e+""===e?+e:e}function C(e){if("idle"!==g)throw new Error("check() is only allowed in idle status");return s=e,m("check"),(t=d,t=t||1e4,new Promise(function(e,r){if("undefined"===typeof XMLHttpRequest)return r(new Error("No browser support"));try{var n=new XMLHttpRequest,a=E.p+""+o+".hot-update.json";n.open("GET",a,!0),n.timeout=t,n.send(null)}catch(s){return r(s)}n.onreadystatechange=function(){if(4===n.readyState)if(0===n.status)r(new Error("Manifest request to "+a+" timed out."));else if(404===n.status)e();else if(200!==n.status&&304!==n.status)r(new Error("Manifest request to "+a+" failed."));else{try{var t=JSON.parse(n.responseText)}catch(s){return void r(s)}e(t)}}})).then(function(e){if(!e)return m("idle"),null;w={},x={},y=e.c,v=e.h,m("prepare");var t=new Promise(function(e,t){f={resolve:e,reject:t}});for(var r in h={},O)z(r);return"prepare"===g&&0===k&&0===b&&j(),t});var t}function z(e){y[e]?(w[e]=!0,b++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=E.p+""+e+"."+o+".hot-update.js",t.crossOrigin="anonymous",document.head.appendChild(t)}(e)):x[e]=!0}function j(){m("ready");var e=f;if(f=null,e)if(s)Promise.resolve().then(function(){return S(s)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var r in h)Object.prototype.hasOwnProperty.call(h,r)&&t.push(P(r));e.resolve(t)}}function S(t){if("ready"!==g)throw new Error("apply() is only allowed in ready status");var r,n,a,s,d;function i(e){for(var t=[e],r={},n=t.map(function(e){return{chain:[e],id:e}});n.length>0;){var a=n.pop(),o=a.id,d=a.chain;if((s=D[o])&&!s.hot._selfAccepted){if(s.hot._selfDeclined)return{type:"self-declined",chain:d,moduleId:o};if(s.hot._main)return{type:"unaccepted",chain:d,moduleId:o};for(var l=0;l<s.parents.length;l++){var c=s.parents[l],i=D[c];if(i){if(i.hot._declinedDependencies[o])return{type:"declined",chain:d.concat([c]),moduleId:o,parentId:c};-1===t.indexOf(c)&&(i.hot._acceptedDependencies[o]?(r[c]||(r[c]=[]),u(r[c],[o])):(delete r[c],t.push(c),n.push({chain:d.concat([c]),id:c})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:r}}function u(e,t){for(var r=0;r<t.length;r++){var n=t[r];-1===e.indexOf(n)&&e.push(n)}}t=t||{};var p={},f=[],b={},k=function(){console.warn("[HMR] unexpected require("+w.moduleId+") to disposed module")};for(var x in h)if(Object.prototype.hasOwnProperty.call(h,x)){var w;d=P(x);var C=!1,z=!1,j=!1,S="";switch((w=h[x]?i(d):{type:"disposed",moduleId:x}).chain&&(S="\nUpdate propagation: "+w.chain.join(" -> ")),w.type){case"self-declined":t.onDeclined&&t.onDeclined(w),t.ignoreDeclined||(C=new Error("Aborted because of self decline: "+w.moduleId+S));break;case"declined":t.onDeclined&&t.onDeclined(w),t.ignoreDeclined||(C=new Error("Aborted because of declined dependency: "+w.moduleId+" in "+w.parentId+S));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(w),t.ignoreUnaccepted||(C=new Error("Aborted because "+d+" is not accepted"+S));break;case"accepted":t.onAccepted&&t.onAccepted(w),z=!0;break;case"disposed":t.onDisposed&&t.onDisposed(w),j=!0;break;default:throw new Error("Unexception type "+w.type)}if(C)return m("abort"),Promise.reject(C);if(z)for(d in b[d]=h[d],u(f,w.outdatedModules),w.outdatedDependencies)Object.prototype.hasOwnProperty.call(w.outdatedDependencies,d)&&(p[d]||(p[d]=[]),u(p[d],w.outdatedDependencies[d]));j&&(u(f,[w.moduleId]),b[d]=k)}var M,q=[];for(n=0;n<f.length;n++)d=f[n],D[d]&&D[d].hot._selfAccepted&&b[d]!==k&&q.push({module:d,errorHandler:D[d].hot._selfAccepted});m("dispose"),Object.keys(y).forEach(function(e){!1===y[e]&&function(e){delete O[e]}(e)});for(var A,_,I=f.slice();I.length>0;)if(d=I.pop(),s=D[d]){var T={},H=s.hot._disposeHandlers;for(a=0;a<H.length;a++)(r=H[a])(T);for(l[d]=T,s.hot.active=!1,delete D[d],delete p[d],a=0;a<s.children.length;a++){var R=D[s.children[a]];R&&((M=R.parents.indexOf(d))>=0&&R.parents.splice(M,1))}}for(d in p)if(Object.prototype.hasOwnProperty.call(p,d)&&(s=D[d]))for(_=p[d],a=0;a<_.length;a++)A=_[a],(M=s.children.indexOf(A))>=0&&s.children.splice(M,1);for(d in m("apply"),o=v,b)Object.prototype.hasOwnProperty.call(b,d)&&(e[d]=b[d]);var L=null;for(d in p)if(Object.prototype.hasOwnProperty.call(p,d)&&(s=D[d])){_=p[d];var U=[];for(n=0;n<_.length;n++)if(A=_[n],r=s.hot._acceptedDependencies[A]){if(-1!==U.indexOf(r))continue;U.push(r)}for(n=0;n<U.length;n++){r=U[n];try{r(_)}catch(B){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:d,dependencyId:_[n],error:B}),t.ignoreErrored||L||(L=B)}}}for(n=0;n<q.length;n++){var W=q[n];d=W.module,c=[d];try{E(d)}catch(B){if("function"===typeof W.errorHandler)try{W.errorHandler(B)}catch(N){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:d,error:N,originalError:B}),t.ignoreErrored||L||(L=N),L||(L=B)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:d,error:B}),t.ignoreErrored||L||(L=B)}}return L?(m("fail"),Promise.reject(L)):(m("idle"),new Promise(function(e){e(f)}))}var D={},O={1:0},M=[],q=[];function A(e){return E.p+"static/js/"+({2:"security",3:"src-cloudist-cloudination",4:"src-pages-about-docz-about-docz",5:"src-pages-about-docz-scaffolding-docz-app",6:"src-pages-aws-aws-compliance-videos",7:"src-pages-aws-dotnet-auth-app",8:"src-pages-aws-gloud-vm-snapshot",9:"src-pages-circle-back-circle-back",10:"src-pages-linux-ubuntu-swap-mem-ubuntu-swap-mem",11:"src-pages-markdown-package-stack-markdown-package-stack",12:"src-pages-mongo-mongo-db",13:"src-pages-os-related-mongo-ubuntu-mongodb-ubuntu",14:"src-pages-os-related-ms-sql-server-docker-ms-sql-server-docker",15:"src-pages-os-related-ms-sql-server-ubuntu-ms-sql-server-ubuntu",16:"src-pages-os-related-os-related-docz",17:"src-pages-package-manager-homebrew-homebrew-knowledge",18:"src-pages-package-manager-publids-npm-publish-npm",19:"src-pages-package-manager-setup-live-server-setup-live-server",20:"src-pages-package-manager-smooth-modern-smooth-modern",21:"src-pages-replace-restore-finder-rep-res-fndr",22:"src-pages-setup-nextjs-setup-nextjs",23:"src-pages-vscode-dev-extensions-vscode-dev-extensions"}[e]||e)+"."+{2:"6697d09a",3:"c47d1a8f",4:"a39f0844",5:"0bf1ebba",6:"52997fcf",7:"8c97e64f",8:"4010400c",9:"4a7c88ea",10:"b6877bd3",11:"75cffc15",12:"1aab569c",13:"e992c572",14:"fc205df2",15:"96ef8e52",16:"1d9fbc43",17:"521ec13e",18:"37af4b95",19:"eec494de",20:"da745c83",21:"07a56daa",22:"f92b9966",23:"99cae271"}[e]+".js"}function E(t){if(D[t])return D[t].exports;var r=D[t]={i:t,l:!1,exports:{},hot:u(t),parents:(i=c,c=[],i),children:[]};return e[t].call(r.exports,r,r.exports,function(e){var t=D[e];if(!t)return E;var r=function(r){return t.hot.active?(D[r]?-1===D[r].parents.indexOf(e)&&D[r].parents.push(e):(c=[e],a=r),-1===t.children.indexOf(r)&&t.children.push(r)):(console.warn("[HMR] unexpected require("+r+") from disposed module "+e),c=[]),E(r)},n=function(e){return{configurable:!0,enumerable:!0,get:function(){return E[e]},set:function(t){E[e]=t}}};for(var s in E)Object.prototype.hasOwnProperty.call(E,s)&&"e"!==s&&"t"!==s&&Object.defineProperty(r,s,n(s));return r.e=function(e){return"ready"===g&&m("prepare"),k++,E.e(e).then(t,function(e){throw t(),e});function t(){k--,"prepare"===g&&(x[e]||z(e),0===k&&0===b&&j())}},r.t=function(e,t){return 1&t&&(e=r(e)),E.t(e,-2&t)},r}(t)),r.l=!0,r.exports}E.e=function(e){var t=[],r=O[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise(function(t,n){r=O[e]=[t,n]});t.push(r[2]=n);var a,s=document.createElement("script");s.charset="utf-8",s.timeout=120,E.nc&&s.setAttribute("nonce",E.nc),s.src=A(e),0!==s.src.indexOf(window.location.origin+"/")&&(s.crossOrigin="anonymous");var o=new Error;a=function(t){s.onerror=s.onload=null,clearTimeout(d);var r=O[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;o.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",o.name="ChunkLoadError",o.type=n,o.request=a,r[1](o)}O[e]=void 0}};var d=setTimeout(function(){a({type:"timeout",target:s})},12e4);s.onerror=s.onload=a,document.head.appendChild(s)}return Promise.all(t)},E.m=e,E.c=D,E.d=function(e,t,r){E.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},E.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},E.t=function(e,t){if(1&t&&(e=E(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(E.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)E.d(r,n,function(t){return e[t]}.bind(null,n));return r},E.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return E.d(t,"a",t),t},E.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},E.p="/",E.oe=function(e){throw console.error(e),e},E.h=function(){return o};var _=window.webpackJsonp=window.webpackJsonp||[],I=_.push.bind(_);_.push=t,_=_.slice();for(var T=0;T<_.length;T++)t(_[T]);var H=I,R=(M.push([0,0]),r());t([[],{},0,[0,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]])}({"./.docz/app/db.json":function(e){e.exports=JSON.parse('{"config":{"title":"My Dev Docz","description":"my own documentation spot that might be useful to others","menu":[],"version":"1.0.0","repository":"https://github.com/CliffCrerar/dev-docz","native":false,"codeSandbox":true,"themeConfig":{},"separator":"-"},"props":[],"entries":[{"key":"SECURITY.md","value":{"id":"f1a97ccd40c28e5c0945852559d3903c","filepath":"SECURITY.md","link":"https://github.com/CliffCrerar/dev-docz/edit/master/SECURITY.md","slug":"security","route":"/security","name":"Security","menu":"","headings":[{"slug":"security-policy","depth":1,"value":"Security Policy"},{"slug":"supported-versions","depth":2,"value":"Supported Versions"},{"slug":"reporting-a-vulnerability","depth":2,"value":"Reporting a Vulnerability"}]}},{"key":"src/cloudist/cloudination.mdx","value":{"name":"Cloudenation","route":"/cloudenation-ery-bitch-nigga","id":"a737ff230049d6f4672ede97b762c7fa","filepath":"src/cloudist/cloudination.mdx","link":"https://github.com/CliffCrerar/dev-docz/edit/master/src/cloudist/cloudination.mdx","slug":"src-cloudist-cloudination","menu":"","headings":[]}},{"key":"src/pages/AWS/aws-compliance-videos.mdx","value":{"name":"AWS compliance videos","route":"/aws-compliance-videos","parent":"Documentation","id":"b4c6f299538288896e9678f6cb162da9","filepath":"src/pages/AWS/aws-compliance-videos.mdx","link":"https://github.com/CliffCrerar/dev-docz/edit/master/src/pages/AWS/aws-compliance-videos.mdx","slug":"src-pages-aws-aws-compliance-videos","menu":"","headings":[{"slug":"iam","depth":2,"value":"IAM"},{"slug":"best-practice","depth":3,"value":"Best practice"}]}},{"key":"src/pages/AWS/dotnet-auth-app.mdx","value":{"name":"Dotnet Core Authe app","route":"/dotnet-auth-app","parent":"Documentation","id":"42fdf8829649d037cbb239083dd3b855","filepath":"src/pages/AWS/dotnet-auth-app.mdx","link":"https://github.com/CliffCrerar/dev-docz/edit/master/src/pages/AWS/dotnet-auth-app.mdx","slug":"src-pages-aws-dotnet-auth-app","menu":"","headings":[{"slug":"dotnet-auth-app","depth":1,"value":"Dotnet Auth app"},{"slug":"yes","depth":2,"value":"YES!"}]}},{"key":"src/pages/AWS/gloud-vm-snapshot.mdx","value":{"name":"GCLOUD Create VM snapshot","route":"/gcloud-vm-snapshot","parent":"Documentation","id":"b2afdf4b8c4ee4c7599b7a953f31798f","filepath":"src/pages/AWS/gloud-vm-snapshot.mdx","link":"https://github.com/CliffCrerar/dev-docz/edit/master/src/pages/AWS/gloud-vm-snapshot.mdx","slug":"src-pages-aws-gloud-vm-snapshot","menu":"","headings":[{"slug":"gcloud-create-vm-snapshot","depth":1,"value":"GCLOUD Create VM snapshot"}]}},{"key":"src/pages/about-docz/about-docz.mdx","value":{"name":"Things about docz","route":"/things-about-docz","parent":"Documentation","id":"ec162412758ad33ae7e4de369ddf8443","filepath":"src/pages/about-docz/about-docz.mdx","link":"https://github.com/CliffCrerar/dev-docz/edit/master/src/pages/about-docz/about-docz.mdx","slug":"src-pages-about-docz-about-docz","menu":"","headings":[{"slug":"things-about-docz","depth":1,"value":"Things about docz"},{"slug":"tuning-the-logo","depth":2,"value":"Tuning the logo"},{"slug":"files","depth":2,"value":"Files"},{"slug":"public","depth":2,"value":"Public"},{"slug":"theme","depth":2,"value":"Theme"},{"slug":"example-project-structure","depth":2,"value":"Example project structure:"},{"slug":"menu","depth":2,"value":"Menu"}]}},{"key":"src/pages/about-docz/scaffolding-docz-app.mdx","value":{"name":"Scaffolding a DOCZ app","route":"/scaffolding-docz-app-quickly","parent":"Things about docz","id":"659654ded7061e4bad6c3084ce2eb05f","filepath":"src/pages/about-docz/scaffolding-docz-app.mdx","link":"https://github.com/CliffCrerar/dev-docz/edit/master/src/pages/about-docz/scaffolding-docz-app.mdx","slug":"src-pages-about-docz-scaffolding-docz-app","menu":"","headings":[{"slug":"scaffold-a-docz-for-use-quickly","depth":1,"value":"Scaffold a DOCZ for use quickly"},{"slug":"this-doc-will-show-you-how-to-quickly-scaffold-a-docs-app-without-having-to-decrypt-the-official-documents-first-following-theses-steps-will-have-you-up-and-running-in-no-time","depth":3,"value":"This doc will show you how to quickly scaffold a docs app without having to decrypt the official documents first. following theses steps will have you up and running in no time"},{"slug":"prepare","depth":4,"value":"Prepare:"},{"slug":"setup-project","depth":3,"value":"Setup project"},{"slug":"add-scripts-in-packagejson","depth":3,"value":"Add scripts in  package.json"},{"slug":"add--page-in-root-dir","depth":3,"value":"Add  page in root dir"},{"slug":"add--build-folder-to-gitignore-echo-docz--gitignore","depth":3,"value":"Add  build folder to gitignore  echo \\\\.docz >> .gitignore"},{"slug":"add-doczrcjs-config-file","depth":3,"value":"Add  doczrc.js  config file."},{"slug":"create-env-file-with-content","depth":3,"value":"Create  .env  file with content:"},{"slug":"create-source-directory","depth":3,"value":"Create source directory"},{"slug":"install-environment-variables-package","depth":3,"value":"Install environment variables package"},{"slug":"add-config-entries","depth":3,"value":"Add config entries:"},{"slug":"add-environment-variable-to-env","depth":3,"value":"Add environment variable to  .env"},{"slug":"create-html-index-file-in-public-folder","depth":3,"value":"Create html index file in public folder"},{"slug":"create-indexhtml-in-public-and-populate-with","depth":5,"value":"Create  index.html  in public and populate with:"},{"slug":"add-entries-to-config-file","depth":3,"value":"Add entries to config file:"},{"slug":"create-nav-menu-config-for-ordering-correctly","depth":3,"value":"Create nav menu config for ordering correctly"},{"slug":"modify-doczrcjs-add-entry","depth":3,"value":"Modify  doczrc.js  add entry"},{"slug":"modify-srcpagesindexmdx","depth":3,"value":"Modify  src/pages/index.mdx"},{"slug":"create-pages-page1mdx-and-page2mdx","depth":3,"value":"Create pages  page1.mdx  and  page2.mdx"},{"slug":"add-content-page1mdx","depth":3,"value":"Add Content  page1.mdx"},{"slug":"add-content-page2mdx","depth":3,"value":"Add Content  page2.mdx"}]}},{"key":"src/pages/circle-back/circle-back.mdx","value":{"name":"Circle back","route":"/circle-back","parent":"Documentation","id":"ddf45c78e4757ed4f75e435c369b93cb","filepath":"src/pages/circle-back/circle-back.mdx","link":"https://github.com/CliffCrerar/dev-docz/edit/master/src/pages/circle-back/circle-back.mdx","slug":"src-pages-circle-back-circle-back","menu":"","headings":[{"slug":"pages-of-interest-to-revisit","depth":1,"value":"Pages of interest to revisit"}]}},{"key":"src/pages/markdown-package-stack/markdown-package-stack.mdx","value":{"name":"Markdown Package Stack","route":"/markdown-package-stack","parent":"Documentation","id":"bff71ddf65db98d8093c199f75056e10","filepath":"src/pages/markdown-package-stack/markdown-package-stack.mdx","link":"https://github.com/CliffCrerar/dev-docz/edit/master/src/pages/markdown-package-stack/markdown-package-stack.mdx","slug":"src-pages-markdown-package-stack-markdown-package-stack","menu":"","headings":[{"slug":"markdown-stack-of-packages-to-test-for-rad","depth":1,"value":"Markdown stack of packages to test for RAD"}]}},{"key":"src/pages/mongo/mongo-db.mdx","value":{"name":"Mongo DB rest API","route":"/mongo-db","parent":"Documentation","id":"f6a3fbbc3fcff13873d288cdb9dba4b0","filepath":"src/pages/mongo/mongo-db.mdx","link":"https://github.com/CliffCrerar/dev-docz/edit/master/src/pages/mongo/mongo-db.mdx","slug":"src-pages-mongo-mongo-db","menu":"","headings":[{"slug":"mongo-db-rest-api","depth":1,"value":"Mongo DB rest API"},{"slug":"dbcollectionfindone","depth":2,"value":"db.collection.findOne"},{"slug":"behavior","depth":3,"value":"Behavior"},{"slug":"dbcollectionfindone-1","depth":2,"value":"db.collection.findOne ;"},{"slug":"with-a-query-specification","depth":3,"value":"With a Query Specification"},{"slug":"specify-the-fields-to-return","depth":3,"value":"Specify the Fields to Return"},{"slug":"dbcollectionfindandmodify","depth":2,"value":"db.collection.findAndModify()"},{"slug":"dbcollectionfind","depth":2,"value":"db.collection.find"},{"slug":"behavior-1","depth":3,"value":"Behavior"},{"slug":"projection","depth":4,"value":"Projection"},{"slug":"cursor-handling","depth":4,"value":"Cursor Handling"},{"slug":"read-concern","depth":4,"value":"Read Concern"},{"slug":"type-bracketing","depth":4,"value":"Type Bracketing"},{"slug":"dbcollectionupdate","depth":2,"value":"db.collection.Update"},{"slug":"insert-and-update-upsert","depth":2,"value":"Insert and Update (Upsert)"},{"slug":"the-update-method-parameter-model","depth":3,"value":"The update method parameter model"},{"slug":"parameters","depth":2,"value":"Parameters"},{"slug":"the-colation-attribite-model","depth":3,"value":"The colation attribite model"},{"slug":"with-a-projection","depth":3,"value":"With a Projection"},{"slug":"more-parameters","depth":3,"value":"More  parameters"}]}},{"key":"src/pages/os-related/os-related-docz.mdx","value":{"name":"OS related","route":"os-related-docz","id":"45bee0f2db5da2707a7ccbf80664b962","filepath":"src/pages/os-related/os-related-docz.mdx","link":"https://github.com/CliffCrerar/dev-docz/edit/master/src/pages/os-related/os-related-docz.mdx","slug":"src-pages-os-related-os-related-docz","menu":"","headings":[{"slug":"operating-systems-related-knowledge","depth":1,"value":"Operating systems related knowledge"}]}},{"key":"src/pages/replace-restore-finder/rep-res-fndr.mdx","value":{"name":"Replace-Restore Finder","route":"/replace-restore-finder","parent":"Documentation","id":"47729d5ef8a9091ec4ba62cfbf7bfac2","filepath":"src/pages/replace-restore-finder/rep-res-fndr.mdx","link":"https://github.com/CliffCrerar/dev-docz/edit/master/src/pages/replace-restore-finder/rep-res-fndr.mdx","slug":"src-pages-replace-restore-finder-rep-res-fndr","menu":"","headings":[{"slug":"replacerestore-finder","depth":1,"value":"Replace/Restore Finder"},{"slug":"to-make-forklift-the-default-file-manager","depth":2,"value":"To make ForkLift the default file manager"},{"slug":"to-restore-finder-as-the-default-file-manager","depth":2,"value":"To restore Finder as the default file manager"},{"slug":"removing-the-global-default-will-make-finder-the-default-file-manager-again","depth":3,"value":"Removing the global default will make Finder the default file manager again."}]}},{"key":"src/pages/setup-nextjs/setup-nextjs.mdx","value":{"name":"Setting up Next.js","route":"/setup-next","parent":"Documentation","id":"b84acd102bf27d301c56550a4aa8c49f","filepath":"src/pages/setup-nextjs/setup-nextjs.mdx","link":"https://github.com/CliffCrerar/dev-docz/edit/master/src/pages/setup-nextjs/setup-nextjs.mdx","slug":"src-pages-setup-nextjs-setup-nextjs","menu":"","headings":[{"slug":"setting-up-a-nextjs-project-to-deploy-to-zeit","depth":1,"value":"Setting up a Next.js project to deploy to Zeit"}]}},{"key":"src/pages/vscode-dev-extensions/vscode-dev-extensions.mdx","value":{"name":"VS Code Dev extensions","route":"/vscode-dev-extensions","parent":"Pages","id":"e4be3c1a6758c0bebb355f922769b1fd","filepath":"src/pages/vscode-dev-extensions/vscode-dev-extensions.mdx","link":"https://github.com/CliffCrerar/dev-docz/edit/master/src/pages/vscode-dev-extensions/vscode-dev-extensions.mdx","slug":"src-pages-vscode-dev-extensions-vscode-dev-extensions","menu":"","headings":[{"slug":"dev-extensions","depth":1,"value":"Dev extensions"},{"slug":"angular","depth":2,"value":"Angular"},{"slug":"operationally-dependant","depth":3,"value":"Operationally dependant"},{"slug":"strongly-recommended","depth":3,"value":"Strongly recommended:"},{"slug":"quality-of-coding-life","depth":3,"value":"Quality of coding life"},{"slug":"dotnet","depth":2,"value":"Dotnet"},{"slug":"using-vscode-extension","depth":2,"value":"Using Vscode extension:"},{"slug":"1-installation-is-straight-forward----","depth":4,"value":"1. Installation is straight forward . . . ."},{"slug":"2-where-are-the-extensions-installed----cusersyour-windows-usernamevscode","depth":4,"value":"2. Where are the extensions installed. --\x3e  C:\\\\Users\\\\<your windows username>\\\\.vscode"},{"slug":"3-to-see-your-installed-installations-in-vscode-in-the-search-ext-marketplace-type","depth":4,"value":"3. To see your installed installations in vscode in the  search ext marketplace  type:"}]}},{"key":"src/pages/Linux/ubuntu-swap-mem/ubuntu-swap-mem.mdx","value":{"name":"Setting up swapemory - Ubuntu","route":"/swap-mem","parent":"Documentation","id":"96338d13642164355d73c11d0af2a0db","filepath":"src/pages/Linux/ubuntu-swap-mem/ubuntu-swap-mem.mdx","link":"https://github.com/CliffCrerar/dev-docz/edit/master/src/pages/Linux/ubuntu-swap-mem/ubuntu-swap-mem.mdx","slug":"src-pages-linux-ubuntu-swap-mem-ubuntu-swap-mem","menu":"","headings":[{"slug":"swap-mem","depth":1,"value":"Swap mem"}]}},{"key":"src/pages/Package Manager/homebrew/homebrew-knowledge.mdx","value":{"name":"Homebrew","route":"/homebrew-installer","id":"e35db9ddb6470613267bea1100ae2d4b","filepath":"src/pages/Package Manager/homebrew/homebrew-knowledge.mdx","link":"https://github.com/CliffCrerar/dev-docz/edit/master/src/pages/Package Manager/homebrew/homebrew-knowledge.mdx","slug":"src-pages-package-manager-homebrew-homebrew-knowledge","menu":"","headings":[{"slug":"homebrew","depth":1,"value":"Homebrew"},{"slug":"notes-made-from-experience-working-with-homebrew","depth":3,"value":"Notes made from experience working with HomeBrew."},{"slug":"shallow-core-problem","depth":4,"value":"SHALLOW CORE PROBLEM:"}]}},{"key":"src/pages/Package Manager/publids-npm/publish-npm.mdx","value":{"name":"Publish to NPM","route":"/publish-to-node-package-manager","parent":"Documentation","id":"2b007651cee2fe00fabfe496ac400248","filepath":"src/pages/Package Manager/publids-npm/publish-npm.mdx","link":"https://github.com/CliffCrerar/dev-docz/edit/master/src/pages/Package Manager/publids-npm/publish-npm.mdx","slug":"src-pages-package-manager-publids-npm-publish-npm","menu":"","headings":[{"slug":"publishing-a-package-to-npm","depth":1,"value":"Publishing a package to NPM"}]}},{"key":"src/pages/Package Manager/setup-live-server/setup-live-server.mdx","value":{"name":"Setup Live-server","route":"/setup-live-server","parent":"Documentation","id":"a6865c67dd46d59e476d80f0dc10ddec","filepath":"src/pages/Package Manager/setup-live-server/setup-live-server.mdx","link":"https://github.com/CliffCrerar/dev-docz/edit/master/src/pages/Package Manager/setup-live-server/setup-live-server.mdx","slug":"src-pages-package-manager-setup-live-server-setup-live-server","menu":"","headings":[{"slug":"setup-live-server","depth":1,"value":"Setup Live-server"},{"slug":"install","depth":2,"value":"Install"},{"slug":"install-as-service","depth":2,"value":"install as service"},{"slug":"the-configuration-file-applicationproperties-should-be-here","depth":1,"value":"The configuration file application.properties should be here:"},{"slug":"logging","depth":2,"value":"logging"}]}},{"key":"src/pages/Package Manager/smooth-modern/smooth-modern.mdx","value":{"name":"Smooth modern","route":"/css-to-remember","parent":"Documentation","id":"4512cb7d0c350ee5a4d8e9e759ef8d4a","filepath":"src/pages/Package Manager/smooth-modern/smooth-modern.mdx","link":"https://github.com/CliffCrerar/dev-docz/edit/master/src/pages/Package Manager/smooth-modern/smooth-modern.mdx","slug":"src-pages-package-manager-smooth-modern-smooth-modern","menu":"","headings":[{"slug":"css-to-remember","depth":1,"value":"CSS To remember"},{"slug":"add-to-body-tage","depth":3,"value":"Add to body tage"}]}},{"key":"src/pages/os-related/mongo-ubuntu/mongodb-ubuntu.mdx","value":{"name":"Installing MongoDB","route":"/installing-mongodb-ubuntu","parent":"Documentation","id":"f7525277bb7b2daf2dd7208db047e4fb","filepath":"src/pages/os-related/mongo-ubuntu/mongodb-ubuntu.mdx","link":"https://github.com/CliffCrerar/dev-docz/edit/master/src/pages/os-related/mongo-ubuntu/mongodb-ubuntu.mdx","slug":"src-pages-os-related-mongo-ubuntu-mongodb-ubuntu","menu":"","headings":[{"slug":"installing-mongodb-on-ubuntu","depth":1,"value":"Installing MongoDB on ubuntu"},{"slug":"todo----","depth":2,"value":"TODO . . . ."},{"slug":"installing-mongodb-on-macos","depth":1,"value":"Installing MongoDB on MacOS"},{"slug":"running-mongo","depth":3,"value":"Running mongo"},{"slug":"connect-and-use-mongodb","depth":4,"value":"Connect and Use MongoDB"}]}},{"key":"src/pages/os-related/ms-sql-server-docker/ms-sql-server-docker.mdx","value":{"name":"MS SQL Server - Docker","route":"/sql-server-docker","parent":"Documentation","id":"c6951bdf228f788c4f695705699d87fc","filepath":"src/pages/os-related/ms-sql-server-docker/ms-sql-server-docker.mdx","link":"https://github.com/CliffCrerar/dev-docz/edit/master/src/pages/os-related/ms-sql-server-docker/ms-sql-server-docker.mdx","slug":"src-pages-os-related-ms-sql-server-docker-ms-sql-server-docker","menu":"","headings":[{"slug":"running-docker-instance-of-sql-server","depth":1,"value":"Running Docker instance of SQL server"},{"slug":"puling-the-docker-file","depth":2,"value":"Puling the docker file"},{"slug":"starting-and-running","depth":2,"value":"Starting and running"},{"slug":"normal","depth":3,"value":"Normal"},{"slug":"2017","depth":3,"value":"2017"},{"slug":"sql-express","depth":3,"value":"SQL Express"},{"slug":"environment-variables","depth":2,"value":"Environment Variables"},{"slug":"other","depth":2,"value":"Other"},{"slug":"related-repos","depth":2,"value":"Related repos"}]}},{"key":"src/pages/os-related/ms-sql-server-ubuntu/ms-sql-server-ubuntu.mdx","value":{"name":"MS SQL Server - Ubuntu","route":"/sql-server-ubuntu","parent":"Documentationv","id":"07a7240d8193761184f2e93ab2bdd1b2","filepath":"src/pages/os-related/ms-sql-server-ubuntu/ms-sql-server-ubuntu.mdx","link":"https://github.com/CliffCrerar/dev-docz/edit/master/src/pages/os-related/ms-sql-server-ubuntu/ms-sql-server-ubuntu.mdx","slug":"src-pages-os-related-ms-sql-server-ubuntu-ms-sql-server-ubuntu","menu":"","headings":[{"slug":"installing-sql-server-on-ubuntu","depth":1,"value":"Installing SQL server on ubuntu"}]}}]}')},"./.docz/app/index.jsx":function(e,t,r){"use strict";r.r(t);var n=r("./node_modules/react/index.js"),a=r.n(n),s=r("./node_modules/react-dom/index.js"),o=r.n(s),d=r("./node_modules/docz/dist/index.esm.js"),l=r("./node_modules/docz-theme-default/dist/index.esm.js"),c={"SECURITY.md":function(){return Promise.all([r.e(0),r.e(2)]).then(r.bind(null,"./SECURITY.md"))},"src/cloudist/cloudination.mdx":function(){return Promise.all([r.e(0),r.e(3)]).then(r.bind(null,"./src/cloudist/cloudination.mdx"))},"src/pages/AWS/aws-compliance-videos.mdx":function(){return Promise.all([r.e(0),r.e(6)]).then(r.bind(null,"./src/pages/AWS/aws-compliance-videos.mdx"))},"src/pages/AWS/dotnet-auth-app.mdx":function(){return Promise.all([r.e(0),r.e(7)]).then(r.bind(null,"./src/pages/AWS/dotnet-auth-app.mdx"))},"src/pages/AWS/gloud-vm-snapshot.mdx":function(){return Promise.all([r.e(0),r.e(8)]).then(r.bind(null,"./src/pages/AWS/gloud-vm-snapshot.mdx"))},"src/pages/about-docz/about-docz.mdx":function(){return Promise.all([r.e(0),r.e(4)]).then(r.bind(null,"./src/pages/about-docz/about-docz.mdx"))},"src/pages/about-docz/scaffolding-docz-app.mdx":function(){return Promise.all([r.e(0),r.e(5)]).then(r.bind(null,"./src/pages/about-docz/scaffolding-docz-app.mdx"))},"src/pages/circle-back/circle-back.mdx":function(){return Promise.all([r.e(0),r.e(9)]).then(r.bind(null,"./src/pages/circle-back/circle-back.mdx"))},"src/pages/markdown-package-stack/markdown-package-stack.mdx":function(){return Promise.all([r.e(0),r.e(11)]).then(r.bind(null,"./src/pages/markdown-package-stack/markdown-package-stack.mdx"))},"src/pages/mongo/mongo-db.mdx":function(){return Promise.all([r.e(0),r.e(12)]).then(r.bind(null,"./src/pages/mongo/mongo-db.mdx"))},"src/pages/os-related/os-related-docz.mdx":function(){return Promise.all([r.e(0),r.e(16)]).then(r.bind(null,"./src/pages/os-related/os-related-docz.mdx"))},"src/pages/replace-restore-finder/rep-res-fndr.mdx":function(){return Promise.all([r.e(0),r.e(21)]).then(r.bind(null,"./src/pages/replace-restore-finder/rep-res-fndr.mdx"))},"src/pages/setup-nextjs/setup-nextjs.mdx":function(){return Promise.all([r.e(0),r.e(22)]).then(r.bind(null,"./src/pages/setup-nextjs/setup-nextjs.mdx"))},"src/pages/vscode-dev-extensions/vscode-dev-extensions.mdx":function(){return Promise.all([r.e(0),r.e(23)]).then(r.bind(null,"./src/pages/vscode-dev-extensions/vscode-dev-extensions.mdx"))},"src/pages/Linux/ubuntu-swap-mem/ubuntu-swap-mem.mdx":function(){return Promise.all([r.e(0),r.e(10)]).then(r.bind(null,"./src/pages/Linux/ubuntu-swap-mem/ubuntu-swap-mem.mdx"))},"src/pages/Package Manager/homebrew/homebrew-knowledge.mdx":function(){return Promise.all([r.e(0),r.e(17)]).then(r.bind(null,"./src/pages/Package Manager/homebrew/homebrew-knowledge.mdx"))},"src/pages/Package Manager/publids-npm/publish-npm.mdx":function(){return Promise.all([r.e(0),r.e(18)]).then(r.bind(null,"./src/pages/Package Manager/publids-npm/publish-npm.mdx"))},"src/pages/Package Manager/setup-live-server/setup-live-server.mdx":function(){return Promise.all([r.e(0),r.e(19)]).then(r.bind(null,"./src/pages/Package Manager/setup-live-server/setup-live-server.mdx"))},"src/pages/Package Manager/smooth-modern/smooth-modern.mdx":function(){return Promise.all([r.e(0),r.e(20)]).then(r.bind(null,"./src/pages/Package Manager/smooth-modern/smooth-modern.mdx"))},"src/pages/os-related/mongo-ubuntu/mongodb-ubuntu.mdx":function(){return Promise.all([r.e(0),r.e(13)]).then(r.bind(null,"./src/pages/os-related/mongo-ubuntu/mongodb-ubuntu.mdx"))},"src/pages/os-related/ms-sql-server-docker/ms-sql-server-docker.mdx":function(){return Promise.all([r.e(0),r.e(14)]).then(r.bind(null,"./src/pages/os-related/ms-sql-server-docker/ms-sql-server-docker.mdx"))},"src/pages/os-related/ms-sql-server-ubuntu/ms-sql-server-ubuntu.mdx":function(){return Promise.all([r.e(0),r.e(15)]).then(r.bind(null,"./src/pages/os-related/ms-sql-server-ubuntu/ms-sql-server-ubuntu.mdx"))}},i=r("./.docz/app/db.json"),u=function(){return a.a.createElement(l.a,{linkComponent:d.b,db:i},a.a.createElement(d.c,{imports:c}))},p=[],g=[],m=function(){return p.forEach(function(e){return e&&e()})},f=function(){return g.forEach(function(e){return e&&e()})},h=document.querySelector("#root");!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u;m(),o.a.render(a.a.createElement(e,null),h,f)}(u)},0:function(e,t,r){e.exports=r("./.docz/app/index.jsx")}});
//# sourceMappingURL=app.15653278038037a10504.js.map