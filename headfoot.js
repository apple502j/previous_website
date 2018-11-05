/*
    Header Footer Library
*/


const header = `
<header><span><a href="${host}"><img src="${"../".repeat(depth)}img/me.png" alt="my logo" id="appleLogo"></a></span><span>GO TO <select id="go">
    <option value="#">------SELECT-----</option>
    ${
    Array.from(routes.values()).map(function(pObj){
        let pgHidden = pObj.hidden;
        let pgTitle = pObj.title;
        let pgURL = pObj.url?"../".repeat(depth)+pObj.url+".html":pObj.extUrl;
        return pgHidden?"":`<option value="${pgURL}">${pgTitle}</option>`;
    }).join("")
}</select></span><span id="supportedBy">Made with <a href="https://github.com/apple502j/apple502j.github.io">GitHub</a></span></header>
`;

if (routes.get(relativePath)) {
    let titleElement = document.createElement("title");
    titleElement.innerHTML = titlePrefix + routes.get(relativePath).title;
    document.head.appendChild(titleElement);
}

let style = document.createElement("link");
style.rel="stylesheet";
style.href=`${"../".repeat(depth)}main.css`;
document.head.appendChild(style);

window.onload=function(){document.body.innerHTML = header + document.body.innerHTML;
document.getElementById("go").addEventListener("change",function(e){location.href=e.target.value});};
