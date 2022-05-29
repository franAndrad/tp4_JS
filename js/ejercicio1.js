let meses = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];

document.write(`<ol>`);
for (let i = 0; i < meses.length; i++) {
    document.write(`<li>${meses[i]}</li>`);
}
document.write(`</ol>`);