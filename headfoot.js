/*
    Header Footer Library
*/

let titleElement = document.createElement("title");

const header = `
<header><span><a href="${host}"><img src="./img/me.png" alt="my logo" id="appleLogo"></a></span><span>GO TO <select id="go">${
    Array.from(routes.values()).map(function(pObj){
        let pgTitle = pObj.title;
        let pgURL = pObj.url?host+pObj.url:pObj.extUrl;
        return `<option value="${pgURL}">${pgTitle}</option>`
    }).join("")
}</select></span><span id="supportedBy">Supported By <a href="https://github.com/apple502j/apple502j.github.io">GitHub</a></span></header>
`;
titleElement.innerHTML = titlePrefix + routes[
    document.URL.replace(host,'home')
    .replace(/index(?:\.html?|)$/,"")
    .replace(/\.html?/,"")
    .replace(/\//g,'-')
];
document.head.appendChild(titleElement);

let style = document.createElement("link");
style.rel="stylesheet";
style.href="./main.css"
document.head.appendChild(style);

window.onload=function(){document.body.innerHTML = header + document.body.innerHTML;
document.getElementById("go").addEventListener("change",function(e){location.href=e.target.value});};
