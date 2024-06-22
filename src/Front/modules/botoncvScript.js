function downloadFile(url, filename) {
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

const btnCv = document.getElementById("downloadCvButton");

btnCv.addEventListener("click", () => {
    downloadFile("/src/assets/MaxiNievas.pdf", 'cv.pdf');
});