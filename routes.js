const host = "https://apple502j.github.io";
const domain = "apple502j.github.io";
const titlePrefix = "Apple502j - ";
let paths = document.URL.split("/");
let newpaths = [];
for (let k of paths) {
    if (newpaths.includes(domain) || k==domain) newpaths.push(k);
}
newpaths.shift();
const relativePath = newpaths.join("/").replace(/\.html?$/g, "");
const depth = relativePath.split("/").length - 1;

const routes = new Map(Object.entries({
    "index": {
        title: "HOME",
        url: ""
    },
    "who": {
        title: "About Me",
        url: "who"
    },
    "who_en": {
        title: "About Me (English)",
        url: "who_en"
    },
    "projects/index": {
        title: "My Projects",
        url: "projects/index"
    },
    "scratch": {
        title: "Scratch",
        extUrl: "https://scratch.mit.edu/users/apple502j"
    },
    "jawiki": {
        title: "Japanese Scratch-Wiki",
        extUrl: "https://ja.scratch-wiki.info/wiki/User:Apple502j"
    }
}));
