!function(e){function t(t){for(var r,n,s=t[0],o=t[1],d=t[2],l=t[3]||[],i=0,c=[];i<s.length;i++)n=s[i],Object.prototype.hasOwnProperty.call(S,n)&&S[n]&&c.push(S[n][0]),S[n]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);for(I&&I(t),q.push.apply(q,l);c.length;)c.shift()();return M.push.apply(M,d||[]),a()}function a(){for(var e,t=0;t<M.length;t++){for(var a=M[t],r=!0,n=1;n<a.length;n++){var s=a[n];0!==S[s]&&(r=!1)}r&&(M.splice(t--,1),e=_(_.s=a[0]))}return 0===M.length&&(q.forEach(function(e){if(void 0===S[e]){S[e]=null;var t=document.createElement("link");t.crossOrigin="anonymous",_.nc&&t.setAttribute("nonce",_.nc),t.rel="prefetch",t.as="script",t.href=A(e),document.head.appendChild(t)}}),q.length=0),e}var r=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(!y[e]||!w[e])return;for(var a in w[e]=!1,t)Object.prototype.hasOwnProperty.call(t,a)&&(h[a]=t[a]);0===--b&&0===x&&j()}(e,t),r&&r(e,t)};var n,s=!0,o="536fbc7df89cb8fb09ff",d=1e4,l={},i=[],c=[];function u(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:n!==e,active:!0,accept:function(e,a){if(void 0===e)t._selfAccepted=!0;else if("function"===typeof e)t._selfAccepted=e;else if("object"===typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=a||function(){};else t._acceptedDependencies[e]=a||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"===typeof e)for(var a=0;a<e.length;a++)t._declinedDependencies[e[a]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var a=t._disposeHandlers.indexOf(e);a>=0&&t._disposeHandlers.splice(a,1)},check:z,apply:D,status:function(e){if(!e)return g;p.push(e)},addStatusHandler:function(e){p.push(e)},removeStatusHandler:function(e){var t=p.indexOf(e);t>=0&&p.splice(t,1)},data:l[e]};return n=void 0,t}var p=[],g="idle";function m(e){g=e;for(var t=0;t<p.length;t++)p[t].call(null,e)}var f,h,v,b=0,x=0,k={},w={},y={};function P(e){return+e+""===e?+e:e}function z(e){if("idle"!==g)throw new Error("check() is only allowed in idle status");return s=e,m("check"),(t=d,t=t||1e4,new Promise(function(e,a){if("undefined"===typeof XMLHttpRequest)return a(new Error("No browser support"));try{var r=new XMLHttpRequest,n=_.p+""+o+".hot-update.json";r.open("GET",n,!0),r.timeout=t,r.send(null)}catch(s){return a(s)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)a(new Error("Manifest request to "+n+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)a(new Error("Manifest request to "+n+" failed."));else{try{var t=JSON.parse(r.responseText)}catch(s){return void a(s)}e(t)}}})).then(function(e){if(!e)return m("idle"),null;w={},k={},y=e.c,v=e.h,m("prepare");var t=new Promise(function(e,t){f={resolve:e,reject:t}});for(var a in h={},S)C(a);return"prepare"===g&&0===x&&0===b&&j(),t});var t}function C(e){y[e]?(w[e]=!0,b++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=_.p+""+e+"."+o+".hot-update.js",t.crossOrigin="anonymous",document.head.appendChild(t)}(e)):k[e]=!0}function j(){m("ready");var e=f;if(f=null,e)if(s)Promise.resolve().then(function(){return D(s)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var a in h)Object.prototype.hasOwnProperty.call(h,a)&&t.push(P(a));e.resolve(t)}}function D(t){if("ready"!==g)throw new Error("apply() is only allowed in ready status");var a,r,n,s,d;function c(e){for(var t=[e],a={},r=t.map(function(e){return{chain:[e],id:e}});r.length>0;){var n=r.pop(),o=n.id,d=n.chain;if((s=O[o])&&!s.hot._selfAccepted){if(s.hot._selfDeclined)return{type:"self-declined",chain:d,moduleId:o};if(s.hot._main)return{type:"unaccepted",chain:d,moduleId:o};for(var l=0;l<s.parents.length;l++){var i=s.parents[l],c=O[i];if(c){if(c.hot._declinedDependencies[o])return{type:"declined",chain:d.concat([i]),moduleId:o,parentId:i};-1===t.indexOf(i)&&(c.hot._acceptedDependencies[o]?(a[i]||(a[i]=[]),u(a[i],[o])):(delete a[i],t.push(i),r.push({chain:d.concat([i]),id:i})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:a}}function u(e,t){for(var a=0;a<t.length;a++){var r=t[a];-1===e.indexOf(r)&&e.push(r)}}t=t||{};var p={},f=[],b={},x=function(){console.warn("[HMR] unexpected require("+w.moduleId+") to disposed module")};for(var k in h)if(Object.prototype.hasOwnProperty.call(h,k)){var w;d=P(k);var z=!1,C=!1,j=!1,D="";switch((w=h[k]?c(d):{type:"disposed",moduleId:k}).chain&&(D="\nUpdate propagation: "+w.chain.join(" -> ")),w.type){case"self-declined":t.onDeclined&&t.onDeclined(w),t.ignoreDeclined||(z=new Error("Aborted because of self decline: "+w.moduleId+D));break;case"declined":t.onDeclined&&t.onDeclined(w),t.ignoreDeclined||(z=new Error("Aborted because of declined dependency: "+w.moduleId+" in "+w.parentId+D));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(w),t.ignoreUnaccepted||(z=new Error("Aborted because "+d+" is not accepted"+D));break;case"accepted":t.onAccepted&&t.onAccepted(w),C=!0;break;case"disposed":t.onDisposed&&t.onDisposed(w),j=!0;break;default:throw new Error("Unexception type "+w.type)}if(z)return m("abort"),Promise.reject(z);if(C)for(d in b[d]=h[d],u(f,w.outdatedModules),w.outdatedDependencies)Object.prototype.hasOwnProperty.call(w.outdatedDependencies,d)&&(p[d]||(p[d]=[]),u(p[d],w.outdatedDependencies[d]));j&&(u(f,[w.moduleId]),b[d]=x)}var M,q=[];for(r=0;r<f.length;r++)d=f[r],O[d]&&O[d].hot._selfAccepted&&b[d]!==x&&q.push({module:d,errorHandler:O[d].hot._selfAccepted});m("dispose"),Object.keys(y).forEach(function(e){!1===y[e]&&function(e){delete S[e]}(e)});for(var A,E,T=f.slice();T.length>0;)if(d=T.pop(),s=O[d]){var H={},I=s.hot._disposeHandlers;for(n=0;n<I.length;n++)(a=I[n])(H);for(l[d]=H,s.hot.active=!1,delete O[d],delete p[d],n=0;n<s.children.length;n++){var L=O[s.children[n]];L&&((M=L.parents.indexOf(d))>=0&&L.parents.splice(M,1))}}for(d in p)if(Object.prototype.hasOwnProperty.call(p,d)&&(s=O[d]))for(E=p[d],n=0;n<E.length;n++)A=E[n],(M=s.children.indexOf(A))>=0&&s.children.splice(M,1);for(d in m("apply"),o=v,b)Object.prototype.hasOwnProperty.call(b,d)&&(e[d]=b[d]);var W=null;for(d in p)if(Object.prototype.hasOwnProperty.call(p,d)&&(s=O[d])){E=p[d];var U=[];for(r=0;r<E.length;r++)if(A=E[r],a=s.hot._acceptedDependencies[A]){if(-1!==U.indexOf(a))continue;U.push(a)}for(r=0;r<U.length;r++){a=U[r];try{a(E)}catch(B){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:d,dependencyId:E[r],error:B}),t.ignoreErrored||W||(W=B)}}}for(r=0;r<q.length;r++){var R=q[r];d=R.module,i=[d];try{_(d)}catch(B){if("function"===typeof R.errorHandler)try{R.errorHandler(B)}catch(N){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:d,error:N,originalError:B}),t.ignoreErrored||W||(W=N),W||(W=B)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:d,error:B}),t.ignoreErrored||W||(W=B)}}return W?(m("fail"),Promise.reject(W)):(m("idle"),new Promise(function(e){e(f)}))}var O={},S={1:0},M=[],q=[];function A(e){return _.p+"static/js/"+({2:"src-cloudist-cloudination",3:"src-pages-about-docz-about-docz",4:"src-pages-about-docz-scaffolding-docz-app",5:"src-pages-aws-aws-compliance-videos",6:"src-pages-aws-dotnet-auth-app",7:"src-pages-aws-gloud-vm-snapshot",8:"src-pages-circle-back-circle-back",9:"src-pages-landing-index",10:"src-pages-linux-ubuntu-swap-mem-ubuntu-swap-mem",11:"src-pages-list-of-dom-events-dom-events",12:"src-pages-live-server-live-server-doc",13:"src-pages-markdown-package-stack-markdown-package-stack",14:"src-pages-mongo-mongo-db",15:"src-pages-os-related-mongo-ubuntu-mongodb-ubuntu",16:"src-pages-os-related-ms-sql-server-docker-ms-sql-server-docker",17:"src-pages-os-related-ms-sql-server-ubuntu-ms-sql-server-ubuntu",18:"src-pages-os-related-os-related-docz",19:"src-pages-package-manager-homebrew-homebrew-knowledge",20:"src-pages-package-manager-publids-npm-publish-npm",21:"src-pages-package-manager-setup-live-server-setup-live-server",22:"src-pages-package-manager-smooth-modern-smooth-modern",23:"src-pages-replace-restore-finder-rep-res-fndr",24:"src-pages-setup-nextjs-setup-nextjs",25:"src-pages-vscode-dev-extensions-vscode-dev-extensions"}[e]||e)+"."+{2:"e825d742",3:"7bd680c3",4:"5a3c160f",5:"5c6d8ef1",6:"b32944cf",7:"7b1eeef3",8:"7723a5bd",9:"7397d1b0",10:"b6877bd3",11:"ea5cef3c",12:"4fbb300d",13:"d5fc60c6",14:"3a04aadf",15:"9f207538",16:"078986f7",17:"1c9d7901",18:"a5bc0a42",19:"72491a75",20:"bc4f5154",21:"e0ec95e8",22:"5fc7d584",23:"f6cf3b60",24:"81e38f7d",25:"deddbbd4"}[e]+".js"}function _(t){if(O[t])return O[t].exports;var a=O[t]={i:t,l:!1,exports:{},hot:u(t),parents:(c=i,i=[],c),children:[]};return e[t].call(a.exports,a,a.exports,function(e){var t=O[e];if(!t)return _;var a=function(a){return t.hot.active?(O[a]?-1===O[a].parents.indexOf(e)&&O[a].parents.push(e):(i=[e],n=a),-1===t.children.indexOf(a)&&t.children.push(a)):(console.warn("[HMR] unexpected require("+a+") from disposed module "+e),i=[]),_(a)},r=function(e){return{configurable:!0,enumerable:!0,get:function(){return _[e]},set:function(t){_[e]=t}}};for(var s in _)Object.prototype.hasOwnProperty.call(_,s)&&"e"!==s&&"t"!==s&&Object.defineProperty(a,s,r(s));return a.e=function(e){return"ready"===g&&m("prepare"),x++,_.e(e).then(t,function(e){throw t(),e});function t(){x--,"prepare"===g&&(k[e]||C(e),0===x&&0===b&&j())}},a.t=function(e,t){return 1&t&&(e=a(e)),_.t(e,-2&t)},a}(t)),a.l=!0,a.exports}_.e=function(e){var t=[],a=S[e];if(0!==a)if(a)t.push(a[2]);else{var r=new Promise(function(t,r){a=S[e]=[t,r]});t.push(a[2]=r);var n,s=document.createElement("script");s.charset="utf-8",s.timeout=120,_.nc&&s.setAttribute("nonce",_.nc),s.src=A(e),0!==s.src.indexOf(window.location.origin+"/")&&(s.crossOrigin="anonymous");var o=new Error;n=function(t){s.onerror=s.onload=null,clearTimeout(d);var a=S[e];if(0!==a){if(a){var r=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;o.message="Loading chunk "+e+" failed.\n("+r+": "+n+")",o.name="ChunkLoadError",o.type=r,o.request=n,a[1](o)}S[e]=void 0}};var d=setTimeout(function(){n({type:"timeout",target:s})},12e4);s.onerror=s.onload=n,document.head.appendChild(s)}return Promise.all(t)},_.m=e,_.c=O,_.d=function(e,t,a){_.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},_.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},_.t=function(e,t){if(1&t&&(e=_(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(_.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)_.d(a,r,function(t){return e[t]}.bind(null,r));return a},_.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return _.d(t,"a",t),t},_.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},_.p="/",_.oe=function(e){throw console.error(e),e},_.h=function(){return o};var E=window.webpackJsonp=window.webpackJsonp||[],T=E.push.bind(E);E.push=t,E=E.slice();for(var H=0;H<E.length;H++)t(E[H]);var I=T,L=(M.push([0,0]),a());t([[],{},0,[0,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]])}({"./.docz/app/db.json":function(e){e.exports=JSON.parse('{"config":{"title":"My Dev Docz","description":"This is my awesome documentation","menu":[],"version":"1.0.0","repository":"https://github.com/CliffCrerar/dev-docz","native":false,"codeSandbox":true,"themeConfig":{"mode":"dark"},"separator":"-","hashRouter":true,"files":["/Users/cliff/dev-docz/src/**/*.{md,markdown,mdx}"],"base":"/","indexHtml":"index.html","dest":"./dist"},"entries":[{"key":"src/cloudist/cloudination.mdx","value":{"name":"Cloudenation","route":"/cloudenation-ery-bitch-nigga","id":"9908a67723d9a48c1437b805a7f655cc","filepath":"src/cloudist/cloudination.mdx","link":"https://github.com/CliffCrerar/dev-docz/edit/master/src/cloudist/cloudination.mdx","slug":"src-cloudist-cloudination","menu":"","headings":[]}},{"key":"src/pages/AWS/aws-compliance-videos.mdx","value":{"name":"AWS compliance videos","route":"/aws-compliance-videos","parent":"Documentation","id":"0a5ec81aa9a8a7941deafaa497b397d0","filepath":"src/pages/AWS/aws-compliance-videos.mdx","link":"https://github.com/CliffCrerar/dev-docz/edit/master/src/pages/AWS/aws-compliance-videos.mdx","slug":"src-pages-aws-aws-compliance-videos","menu":"","headings":[{"slug":"iam","depth":2,"value":"IAM"},{"slug":"best-practice","depth":3,"value":"Best practice"}]}},{"key":"src/pages/AWS/dotnet-auth-app.mdx","value":{"name":"Dotnet Core Authe app","route":"/dotnet-auth-app","parent":"Documentation","id":"7e5e5773444c808e093fff381a54b761","filepath":"src/pages/AWS/dotnet-auth-app.mdx","link":"https://github.com/CliffCrerar/dev-docz/edit/master/src/pages/AWS/dotnet-auth-app.mdx","slug":"src-pages-aws-dotnet-auth-app","menu":"","headings":[{"slug":"dotnet-auth-app","depth":1,"value":"Dotnet Auth app"},{"slug":"yes","depth":2,"value":"YES!"}]}},{"key":"src/pages/AWS/gloud-vm-snapshot.mdx","value":{"name":"GCLOUD Create VM snapshot","route":"/gcloud-vm-snapshot","parent":"Documentation","id":"99d27558f99510ec97d23649088b0a83","filepath":"src/pages/AWS/gloud-vm-snapshot.mdx","link":"https://github.com/CliffCrerar/dev-docz/edit/master/src/pages/AWS/gloud-vm-snapshot.mdx","slug":"src-pages-aws-gloud-vm-snapshot","menu":"","headings":[{"slug":"gcloud-create-vm-snapshot","depth":1,"value":"GCLOUD Create VM snapshot"}]}},{"key":"src/pages/_landing/index.mdx","value":{"name":"Landing","route":"/","parent":"Documentation","id":"9723c0b19bd7ff5645c5f7c97ae0793c","filepath":"src/pages/_landing/index.mdx","link":"https://github.com/CliffCrerar/dev-docz/edit/master/src/pages/_landing/index.mdx","slug":"src-pages-landing-index","menu":"","headings":[{"slug":"my-dev-docz","depth":1,"value":"My Dev Docz"},{"slug":"public-record-of-things-documented-for-reasons-that-will-someday-become-clear","depth":3,"value":"Public record of things documented for reasons that will someday become clear."}]}},{"key":"src/pages/about-docz/about-docz.mdx","value":{"name":"Things about docz","route":"/things-about-docz","parent":"Documentation","id":"728de640c353c65327c16f784a02950f","filepath":"src/pages/about-docz/about-docz.mdx","link":"https://github.com/CliffCrerar/dev-docz/edit/master/src/pages/about-docz/about-docz.mdx","slug":"src-pages-about-docz-about-docz","menu":"","headings":[{"slug":"things-about-docz","depth":1,"value":"Things about docz"},{"slug":"tuning-the-logo","depth":2,"value":"Tuning the logo"},{"slug":"files","depth":2,"value":"Files"},{"slug":"public","depth":2,"value":"Public"},{"slug":"theme","depth":2,"value":"Theme"},{"slug":"example-project-structure","depth":2,"value":"Example project structure:"},{"slug":"menu","depth":2,"value":"Menu"}]}},{"key":"src/pages/about-docz/scaffolding-docz-app.mdx","value":{"name":"Scaffolding a DOCZ app","route":"/scaffolding-docz-app-quickly","parent":"Things about docz","id":"922cd51584f0e5c00fa9a105a28b3fac","filepath":"src/pages/about-docz/scaffolding-docz-app.mdx","link":"https://github.com/CliffCrerar/dev-docz/edit/master/src/pages/about-docz/scaffolding-docz-app.mdx","slug":"src-pages-about-docz-scaffolding-docz-app","menu":"","headings":[{"slug":"scaffold-a-docz-for-use-quickly","depth":1,"value":"Scaffold a DOCZ for use quickly"},{"slug":"this-doc-will-show-you-how-to-quickly-scaffold-a-docs-app-without-having-to-decrypt-the-official-documents-first-following-theses-steps-will-have-you-up-and-running-in-no-time","depth":3,"value":"This doc will show you how to quickly scaffold a docs app without having to decrypt the official documents first. following theses steps will have you up and running in no time"},{"slug":"prepare","depth":4,"value":"Prepare:"},{"slug":"setup-project","depth":3,"value":"Setup project"},{"slug":"add-scripts-in-packagejson","depth":3,"value":"Add scripts in  package.json"},{"slug":"add--page-in-root-dir","depth":3,"value":"Add  page in root dir"},{"slug":"add--build-folder-to-gitignore-echo-docz--gitignore","depth":3,"value":"Add  build folder to gitignore  echo \\\\.docz >> .gitignore"},{"slug":"add-doczrcjs-config-file","depth":3,"value":"Add  doczrc.js  config file."},{"slug":"create-env-file-with-content","depth":3,"value":"Create  .env  file with content:"},{"slug":"create-source-directory","depth":3,"value":"Create source directory"},{"slug":"install-environment-variables-package","depth":3,"value":"Install environment variables package"},{"slug":"add-config-entries","depth":3,"value":"Add config entries:"},{"slug":"add-environment-variable-to-env","depth":3,"value":"Add environment variable to  .env"},{"slug":"create-html-index-file-in-public-folder","depth":3,"value":"Create html index file in public folder"},{"slug":"create-indexhtml-in-public-and-populate-with","depth":5,"value":"Create  index.html  in public and populate with:"},{"slug":"add-entries-to-config-file","depth":3,"value":"Add entries to config file:"},{"slug":"create-nav-menu-config-for-ordering-correctly","depth":3,"value":"Create nav menu config for ordering correctly"},{"slug":"modify-doczrcjs-add-entry","depth":3,"value":"Modify  doczrc.js  add entry"},{"slug":"modify-srcpagesindexmdx","depth":3,"value":"Modify  src/pages/index.mdx"},{"slug":"create-pages-page1mdx-and-page2mdx","depth":3,"value":"Create pages  page1.mdx  and  page2.mdx"},{"slug":"add-content-page1mdx","depth":3,"value":"Add Content  page1.mdx"},{"slug":"add-content-page2mdx","depth":3,"value":"Add Content  page2.mdx"}]}},{"key":"src/pages/circle-back/circle-back.mdx","value":{"name":"Circle back","route":"/circle-back","parent":"Documentation","id":"c13446e1df9d7f608691f874ad8c5771","filepath":"src/pages/circle-back/circle-back.mdx","link":"https://github.com/CliffCrerar/dev-docz/edit/master/src/pages/circle-back/circle-back.mdx","slug":"src-pages-circle-back-circle-back","menu":"","headings":[{"slug":"pages-of-interest-to-revisit","depth":1,"value":"Pages of interest to revisit"}]}},{"key":"src/pages/list-of-dom-events/dom-events.mdx","value":{"name":"DOM events","route":"/dom-events-doc","id":"2a0dbdd4e4abab0aee22a88847cd851b","filepath":"src/pages/list-of-dom-events/dom-events.mdx","link":"https://github.com/CliffCrerar/dev-docz/edit/master/src/pages/list-of-dom-events/dom-events.mdx","slug":"src-pages-list-of-dom-events-dom-events","menu":"","headings":[{"slug":"dom-events-list","depth":1,"value":"DOM events list"}]}},{"key":"src/pages/live-server/live-server-doc.mdx","value":{"name":"Live Server Guide","route":"/live-server-guide","parent":"Documents","id":"11e8e98b47663dff9c3b700d1bae04c8","filepath":"src/pages/live-server/live-server-doc.mdx","link":"https://github.com/CliffCrerar/dev-docz/edit/master/src/pages/live-server/live-server-doc.mdx","slug":"src-pages-live-server-live-server-doc","menu":"","headings":[{"slug":"live-server","depth":1,"value":"Live Server"},{"slug":"there-are-two-reasons-for-using-this","depth":3,"value":"There are two reasons for using this:"},{"slug":"installation","depth":2,"value":"Installation"},{"slug":"npm-way","depth":3,"value":"Npm way"},{"slug":"manual-way","depth":3,"value":"Manual way"},{"slug":"command-line-parameters","depth":2,"value":"Command line parameters:"},{"slug":"default-options","depth":2,"value":"Default options:"},{"slug":"usage-from-node","depth":2,"value":"Usage from node"},{"slug":"https","depth":2,"value":"HTTPS"},{"slug":"http2","depth":2,"value":"HTTP/2"},{"slug":"troubleshooting","depth":2,"value":"Troubleshooting"}]}},{"key":"src/pages/markdown-package-stack/markdown-package-stack.mdx","value":{"name":"Markdown Package Stack","route":"/markdown-package-stack","parent":"Documentation","id":"c73f992bf242496fce2ef0a18aa4c0b6","filepath":"src/pages/markdown-package-stack/markdown-package-stack.mdx","link":"https://github.com/CliffCrerar/dev-docz/edit/master/src/pages/markdown-package-stack/markdown-package-stack.mdx","slug":"src-pages-markdown-package-stack-markdown-package-stack","menu":"","headings":[{"slug":"markdown-stack-of-packages-to-test-for-rad","depth":1,"value":"Markdown stack of packages to test for RAD"}]}},{"key":"src/pages/mongo/mongo-db.mdx","value":{"name":"Mongo DB rest API","route":"/mongo-db","parent":"Documentation","id":"db635ac95f9e12a2f210af4e7ba20b01","filepath":"src/pages/mongo/mongo-db.mdx","link":"https://github.com/CliffCrerar/dev-docz/edit/master/src/pages/mongo/mongo-db.mdx","slug":"src-pages-mongo-mongo-db","menu":"","headings":[{"slug":"mongo-db-rest-api","depth":1,"value":"Mongo DB rest API"},{"slug":"dbcollectionfindone","depth":2,"value":"db.collection.findOne"},{"slug":"behavior","depth":3,"value":"Behavior"},{"slug":"dbcollectionfindone-1","depth":2,"value":"db.collection.findOne ;"},{"slug":"with-a-query-specification","depth":3,"value":"With a Query Specification"},{"slug":"specify-the-fields-to-return","depth":3,"value":"Specify the Fields to Return"},{"slug":"dbcollectionfindandmodify","depth":2,"value":"db.collection.findAndModify()"},{"slug":"dbcollectionfind","depth":2,"value":"db.collection.find"},{"slug":"behavior-1","depth":3,"value":"Behavior"},{"slug":"projection","depth":4,"value":"Projection"},{"slug":"cursor-handling","depth":4,"value":"Cursor Handling"},{"slug":"read-concern","depth":4,"value":"Read Concern"},{"slug":"type-bracketing","depth":4,"value":"Type Bracketing"},{"slug":"dbcollectionupdate","depth":2,"value":"db.collection.Update"},{"slug":"insert-and-update-upsert","depth":2,"value":"Insert and Update (Upsert)"},{"slug":"the-update-method-parameter-model","depth":3,"value":"The update method parameter model"},{"slug":"parameters","depth":2,"value":"Parameters"},{"slug":"the-colation-attribite-model","depth":3,"value":"The colation attribite model"},{"slug":"with-a-projection","depth":3,"value":"With a Projection"},{"slug":"more-parameters","depth":3,"value":"More  parameters"}]}},{"key":"src/pages/os-related/os-related-docz.mdx","value":{"name":"OS related","route":"os-related-docz","id":"26172855c3352d58b1ef63ba0ec51b37","filepath":"src/pages/os-related/os-related-docz.mdx","link":"https://github.com/CliffCrerar/dev-docz/edit/master/src/pages/os-related/os-related-docz.mdx","slug":"src-pages-os-related-os-related-docz","menu":"","headings":[{"slug":"operating-systems-related-knowledge","depth":1,"value":"Operating systems related knowledge"}]}},{"key":"src/pages/replace-restore-finder/rep-res-fndr.mdx","value":{"name":"Replace-Restore Finder","route":"/replace-restore-finder","parent":"Documentation","id":"77bbdc8b1c9e32ca61acd685a4def6a1","filepath":"src/pages/replace-restore-finder/rep-res-fndr.mdx","link":"https://github.com/CliffCrerar/dev-docz/edit/master/src/pages/replace-restore-finder/rep-res-fndr.mdx","slug":"src-pages-replace-restore-finder-rep-res-fndr","menu":"","headings":[{"slug":"replacerestore-finder","depth":1,"value":"Replace/Restore Finder"},{"slug":"to-make-forklift-the-default-file-manager","depth":2,"value":"To make ForkLift the default file manager"},{"slug":"to-restore-finder-as-the-default-file-manager","depth":2,"value":"To restore Finder as the default file manager"},{"slug":"removing-the-global-default-will-make-finder-the-default-file-manager-again","depth":3,"value":"Removing the global default will make Finder the default file manager again."}]}},{"key":"src/pages/vscode-dev-extensions/vscode-dev-extensions.mdx","value":{"name":"VS Code Dev extensions","route":"/vscode-dev-extensions","parent":"Pages","id":"fad6b43ed4e61c8e7a8b7e3d0f142f08","filepath":"src/pages/vscode-dev-extensions/vscode-dev-extensions.mdx","link":"https://github.com/CliffCrerar/dev-docz/edit/master/src/pages/vscode-dev-extensions/vscode-dev-extensions.mdx","slug":"src-pages-vscode-dev-extensions-vscode-dev-extensions","menu":"","headings":[{"slug":"dev-extensions","depth":1,"value":"Dev extensions"},{"slug":"angular","depth":2,"value":"Angular"},{"slug":"operationally-dependant","depth":3,"value":"Operationally dependant"},{"slug":"strongly-recommended","depth":3,"value":"Strongly recommended:"},{"slug":"quality-of-coding-life","depth":3,"value":"Quality of coding life"},{"slug":"dotnet","depth":2,"value":"Dotnet"},{"slug":"using-vscode-extension","depth":2,"value":"Using Vscode extension:"},{"slug":"1-installation-is-straight-forward----","depth":4,"value":"1. Installation is straight forward . . . ."},{"slug":"2-where-are-the-extensions-installed----cusersyour-windows-usernamevscode","depth":4,"value":"2. Where are the extensions installed. --\x3e  C:\\\\Users\\\\<your windows username>\\\\.vscode"},{"slug":"3-to-see-your-installed-installations-in-vscode-in-the-search-ext-marketplace-type","depth":4,"value":"3. To see your installed installations in vscode in the  search ext marketplace  type:"}]}},{"key":"src/pages/setup-nextjs/setup-nextjs.mdx","value":{"name":"Setting up Next.js","route":"/setup-next","parent":"Documentation","id":"047ed071372ce552de180cf3dc8557d3","filepath":"src/pages/setup-nextjs/setup-nextjs.mdx","link":"https://github.com/CliffCrerar/dev-docz/edit/master/src/pages/setup-nextjs/setup-nextjs.mdx","slug":"src-pages-setup-nextjs-setup-nextjs","menu":"","headings":[{"slug":"setting-up-a-nextjs-project-to-deploy-to-zeit","depth":1,"value":"Setting up a Next.js project to deploy to Zeit"}]}},{"key":"src/pages/Linux/ubuntu-swap-mem/ubuntu-swap-mem.mdx","value":{"name":"Setting up swapemory - Ubuntu","route":"/swap-mem","parent":"Documentation","id":"915b44eed72d6ee1e26f3a40ad44d3ed","filepath":"src/pages/Linux/ubuntu-swap-mem/ubuntu-swap-mem.mdx","link":"https://github.com/CliffCrerar/dev-docz/edit/master/src/pages/Linux/ubuntu-swap-mem/ubuntu-swap-mem.mdx","slug":"src-pages-linux-ubuntu-swap-mem-ubuntu-swap-mem","menu":"","headings":[{"slug":"swap-mem","depth":1,"value":"Swap mem"}]}},{"key":"src/pages/Package Manager/homebrew/homebrew-knowledge.mdx","value":{"name":"Homebrew","route":"/homebrew-installer","id":"04da99db4c656e904b285958649582a8","filepath":"src/pages/Package Manager/homebrew/homebrew-knowledge.mdx","link":"https://github.com/CliffCrerar/dev-docz/edit/master/src/pages/Package Manager/homebrew/homebrew-knowledge.mdx","slug":"src-pages-package-manager-homebrew-homebrew-knowledge","menu":"","headings":[{"slug":"homebrew","depth":1,"value":"Homebrew"},{"slug":"notes-made-from-experience-working-with-homebrew","depth":3,"value":"Notes made from experience working with HomeBrew."},{"slug":"shallow-core-problem","depth":4,"value":"SHALLOW CORE PROBLEM:"}]}},{"key":"src/pages/Package Manager/publids-npm/publish-npm.mdx","value":{"name":"Publish to NPM","route":"/publish-to-node-package-manager","parent":"Documentation","id":"302eb35e04d7d89b7a5c27aa694fbf1a","filepath":"src/pages/Package Manager/publids-npm/publish-npm.mdx","link":"https://github.com/CliffCrerar/dev-docz/edit/master/src/pages/Package Manager/publids-npm/publish-npm.mdx","slug":"src-pages-package-manager-publids-npm-publish-npm","menu":"","headings":[{"slug":"publishing-a-package-to-npm","depth":1,"value":"Publishing a package to NPM"}]}},{"key":"src/pages/Package Manager/smooth-modern/smooth-modern.mdx","value":{"name":"Smooth modern","route":"/css-to-remember","parent":"Documentation","id":"abf291394aded2500d90c98e60d24150","filepath":"src/pages/Package Manager/smooth-modern/smooth-modern.mdx","link":"https://github.com/CliffCrerar/dev-docz/edit/master/src/pages/Package Manager/smooth-modern/smooth-modern.mdx","slug":"src-pages-package-manager-smooth-modern-smooth-modern","menu":"","headings":[{"slug":"css-to-remember","depth":1,"value":"CSS To remember"},{"slug":"add-to-body-tage","depth":3,"value":"Add to body tage"}]}},{"key":"src/pages/Package Manager/setup-live-server/setup-live-server.mdx","value":{"name":"Setup Live-server","route":"/setup-live-server","parent":"Documentation","id":"c9d7a8ae2860b74242381824140a354e","filepath":"src/pages/Package Manager/setup-live-server/setup-live-server.mdx","link":"https://github.com/CliffCrerar/dev-docz/edit/master/src/pages/Package Manager/setup-live-server/setup-live-server.mdx","slug":"src-pages-package-manager-setup-live-server-setup-live-server","menu":"","headings":[{"slug":"setup-live-server","depth":1,"value":"Setup Live-server"},{"slug":"install","depth":2,"value":"Install"},{"slug":"install-as-service","depth":2,"value":"install as service"},{"slug":"the-configuration-file-applicationproperties-should-be-here","depth":1,"value":"The configuration file application.properties should be here:"},{"slug":"logging","depth":2,"value":"logging"}]}},{"key":"src/pages/os-related/mongo-ubuntu/mongodb-ubuntu.mdx","value":{"name":"Installing MongoDB","route":"/installing-mongodb-ubuntu","parent":"Documentation","id":"2a7bdb1a831dc00f6a753afce1123504","filepath":"src/pages/os-related/mongo-ubuntu/mongodb-ubuntu.mdx","link":"https://github.com/CliffCrerar/dev-docz/edit/master/src/pages/os-related/mongo-ubuntu/mongodb-ubuntu.mdx","slug":"src-pages-os-related-mongo-ubuntu-mongodb-ubuntu","menu":"","headings":[{"slug":"installing-mongodb-on-ubuntu","depth":1,"value":"Installing MongoDB on ubuntu"},{"slug":"todo----","depth":2,"value":"TODO . . . ."},{"slug":"installing-mongodb-on-macos","depth":1,"value":"Installing MongoDB on MacOS"},{"slug":"running-mongo","depth":3,"value":"Running mongo"},{"slug":"connect-and-use-mongodb","depth":4,"value":"Connect and Use MongoDB"}]}},{"key":"src/pages/os-related/ms-sql-server-docker/ms-sql-server-docker.mdx","value":{"name":"MS SQL Server - Docker","route":"/sql-server-docker","parent":"Documentation","id":"de6fe44c29dcfbf3844a6811bce407d4","filepath":"src/pages/os-related/ms-sql-server-docker/ms-sql-server-docker.mdx","link":"https://github.com/CliffCrerar/dev-docz/edit/master/src/pages/os-related/ms-sql-server-docker/ms-sql-server-docker.mdx","slug":"src-pages-os-related-ms-sql-server-docker-ms-sql-server-docker","menu":"","headings":[{"slug":"running-docker-instance-of-sql-server","depth":1,"value":"Running Docker instance of SQL server"},{"slug":"puling-the-docker-file","depth":2,"value":"Puling the docker file"},{"slug":"starting-and-running","depth":2,"value":"Starting and running"},{"slug":"normal","depth":3,"value":"Normal"},{"slug":"2017","depth":3,"value":"2017"},{"slug":"sql-express","depth":3,"value":"SQL Express"},{"slug":"environment-variables","depth":2,"value":"Environment Variables"},{"slug":"other","depth":2,"value":"Other"},{"slug":"related-repos","depth":2,"value":"Related repos"}]}},{"key":"src/pages/os-related/ms-sql-server-ubuntu/ms-sql-server-ubuntu.mdx","value":{"name":"MS SQL Server - Ubuntu","route":"/sql-server-ubuntu","parent":"Documentationv","id":"9ebb669377dae6cadde733ca79523605","filepath":"src/pages/os-related/ms-sql-server-ubuntu/ms-sql-server-ubuntu.mdx","link":"https://github.com/CliffCrerar/dev-docz/edit/master/src/pages/os-related/ms-sql-server-ubuntu/ms-sql-server-ubuntu.mdx","slug":"src-pages-os-related-ms-sql-server-ubuntu-ms-sql-server-ubuntu","menu":"","headings":[{"slug":"installing-sql-server-on-ubuntu","depth":1,"value":"Installing SQL server on ubuntu"}]}}],"props":[]}')},"./.docz/app/index.jsx":function(e,t,a){"use strict";a.r(t);var r=a("./node_modules/react/index.js"),n=a.n(r),s=a("./node_modules/react-dom/index.js"),o=a.n(s),d=a("./node_modules/docz/dist/index.esm.js"),l=a("./node_modules/docz-theme-default/dist/index.esm.js"),i={"src/cloudist/cloudination.mdx":function(){return Promise.all([a.e(0),a.e(2)]).then(a.bind(null,"./src/cloudist/cloudination.mdx"))},"src/pages/AWS/aws-compliance-videos.mdx":function(){return Promise.all([a.e(0),a.e(5)]).then(a.bind(null,"./src/pages/AWS/aws-compliance-videos.mdx"))},"src/pages/AWS/dotnet-auth-app.mdx":function(){return Promise.all([a.e(0),a.e(6)]).then(a.bind(null,"./src/pages/AWS/dotnet-auth-app.mdx"))},"src/pages/AWS/gloud-vm-snapshot.mdx":function(){return Promise.all([a.e(0),a.e(7)]).then(a.bind(null,"./src/pages/AWS/gloud-vm-snapshot.mdx"))},"src/pages/_landing/index.mdx":function(){return Promise.all([a.e(0),a.e(9)]).then(a.bind(null,"./src/pages/_landing/index.mdx"))},"src/pages/about-docz/about-docz.mdx":function(){return Promise.all([a.e(0),a.e(3)]).then(a.bind(null,"./src/pages/about-docz/about-docz.mdx"))},"src/pages/about-docz/scaffolding-docz-app.mdx":function(){return Promise.all([a.e(0),a.e(4)]).then(a.bind(null,"./src/pages/about-docz/scaffolding-docz-app.mdx"))},"src/pages/circle-back/circle-back.mdx":function(){return Promise.all([a.e(0),a.e(8)]).then(a.bind(null,"./src/pages/circle-back/circle-back.mdx"))},"src/pages/list-of-dom-events/dom-events.mdx":function(){return Promise.all([a.e(0),a.e(11)]).then(a.bind(null,"./src/pages/list-of-dom-events/dom-events.mdx"))},"src/pages/live-server/live-server-doc.mdx":function(){return Promise.all([a.e(0),a.e(12)]).then(a.bind(null,"./src/pages/live-server/live-server-doc.mdx"))},"src/pages/markdown-package-stack/markdown-package-stack.mdx":function(){return Promise.all([a.e(0),a.e(13)]).then(a.bind(null,"./src/pages/markdown-package-stack/markdown-package-stack.mdx"))},"src/pages/mongo/mongo-db.mdx":function(){return Promise.all([a.e(0),a.e(14)]).then(a.bind(null,"./src/pages/mongo/mongo-db.mdx"))},"src/pages/os-related/os-related-docz.mdx":function(){return Promise.all([a.e(0),a.e(18)]).then(a.bind(null,"./src/pages/os-related/os-related-docz.mdx"))},"src/pages/replace-restore-finder/rep-res-fndr.mdx":function(){return Promise.all([a.e(0),a.e(23)]).then(a.bind(null,"./src/pages/replace-restore-finder/rep-res-fndr.mdx"))},"src/pages/vscode-dev-extensions/vscode-dev-extensions.mdx":function(){return Promise.all([a.e(0),a.e(25)]).then(a.bind(null,"./src/pages/vscode-dev-extensions/vscode-dev-extensions.mdx"))},"src/pages/setup-nextjs/setup-nextjs.mdx":function(){return Promise.all([a.e(0),a.e(24)]).then(a.bind(null,"./src/pages/setup-nextjs/setup-nextjs.mdx"))},"src/pages/Linux/ubuntu-swap-mem/ubuntu-swap-mem.mdx":function(){return Promise.all([a.e(0),a.e(10)]).then(a.bind(null,"./src/pages/Linux/ubuntu-swap-mem/ubuntu-swap-mem.mdx"))},"src/pages/Package Manager/homebrew/homebrew-knowledge.mdx":function(){return Promise.all([a.e(0),a.e(19)]).then(a.bind(null,"./src/pages/Package Manager/homebrew/homebrew-knowledge.mdx"))},"src/pages/Package Manager/publids-npm/publish-npm.mdx":function(){return Promise.all([a.e(0),a.e(20)]).then(a.bind(null,"./src/pages/Package Manager/publids-npm/publish-npm.mdx"))},"src/pages/Package Manager/smooth-modern/smooth-modern.mdx":function(){return Promise.all([a.e(0),a.e(22)]).then(a.bind(null,"./src/pages/Package Manager/smooth-modern/smooth-modern.mdx"))},"src/pages/Package Manager/setup-live-server/setup-live-server.mdx":function(){return Promise.all([a.e(0),a.e(21)]).then(a.bind(null,"./src/pages/Package Manager/setup-live-server/setup-live-server.mdx"))},"src/pages/os-related/mongo-ubuntu/mongodb-ubuntu.mdx":function(){return Promise.all([a.e(0),a.e(15)]).then(a.bind(null,"./src/pages/os-related/mongo-ubuntu/mongodb-ubuntu.mdx"))},"src/pages/os-related/ms-sql-server-docker/ms-sql-server-docker.mdx":function(){return Promise.all([a.e(0),a.e(16)]).then(a.bind(null,"./src/pages/os-related/ms-sql-server-docker/ms-sql-server-docker.mdx"))},"src/pages/os-related/ms-sql-server-ubuntu/ms-sql-server-ubuntu.mdx":function(){return Promise.all([a.e(0),a.e(17)]).then(a.bind(null,"./src/pages/os-related/ms-sql-server-ubuntu/ms-sql-server-ubuntu.mdx"))}},c=a("./.docz/app/db.json"),u=function(){return n.a.createElement(l.a,{linkComponent:d.b,db:c},n.a.createElement(d.c,{imports:i}))},p=[],g=[],m=function(){return p.forEach(function(e){return e&&e()})},f=function(){return g.forEach(function(e){return e&&e()})},h=document.querySelector("#root");!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u;m(),o.a.render(n.a.createElement(e,null),h,f)}(u)},0:function(e,t,a){e.exports=a("./.docz/app/index.jsx")}});
//# sourceMappingURL=app.536fbc7df89cb8fb09ff.js.map