function generateCSS() {
    let bg = document.getElementById("bgColor").value;
    let font = document.getElementById("fontSize").value + "px";
    let spacing = document.getElementById("spacing").value + "px";

    let css = `
body {
    background: ${bg};
    font-size: ${font};
    padding: ${spacing};
}
`;

    document.getElementById("output").value = css;
}

function copyCSS() {
    let text = document.getElementById("output");
    text.select();
    document.execCommand("copy");
}
