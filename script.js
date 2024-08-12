document.addEventListener("DOMContentLoaded", function() {
    const editor = document.getElementById("html-editor");
    const preview = document.getElementById("preview");

    editor.addEventListener("input", function() {
        const content = editor.value;
        preview.srcdoc = content;
    });

    // Set an initial value if you want to test with some default HTML content
    editor.value = "<!DOCTYPE html>\n<html>\n<head>\n    <title>Document</title>\n</head>\n<body>\n    <h1>Hello, World!</h1>\n</body>\n</html>";
    preview.srcdoc = editor.value;
});
