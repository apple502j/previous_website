for (const project of document.getElementsByClassName("project")) {
    project.innerHTML = `<h2><a href="${project.dataset.url}">${project.dataset.name}</a></h2>
    <p>${project.dataset.desc}</p>
    `;
}

let styleProject = document.createElement("link");
styleProject.rel="stylesheet";
styleProject.href=`${"../".repeat(depth)}projects/projects.css`;
document.head.appendChild(styleProject);
