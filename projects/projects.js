for (const project of document.getElementsByClassName("project")) {
    project.innerHTML = `<h2><a href="${project.dataset.url}">${project.dataset.name}</a></h2>
    <p>${project.dataset.desc}</p>
    `;
}

let styleProject = document.createElement("link");
styleProject.rel="stylesheet";
styleProject.href=`${"../".repeat(depth)}projects/projects.css`;
document.head.appendChild(styleProject);

if (relativePath !== "projects/index") window.addEventListener("load", function(){
    let madeWith = document.querySelector("header span:last-child");
    madeWith.innerHTML = `<a href="./index.html">← Back</a>&nbsp;` + madeWith.innerHTML;
});

let pbox = document.querySelector(".pbox");
pbox.innerHTML = `<h4>${pbox.dataset.name}</h4><br>
${pbox.dataset.github ? `<p><a href="${pbox.dataset.github}">See on GitHub</a>` : ""}
${pbox.dataset.url ? `<p><a href="${pbox.dataset.url}">Website</a>` : ""}
${pbox.dataset.license ? `<p>ライセンス: ${pbox.dataset.license}</p>` : ""}
`;
