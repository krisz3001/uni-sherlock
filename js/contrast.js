var css = document.getElementById('contrast');
css.disabled = !JSON.parse(localStorage.getItem('contrast'))
function toggleContrast(){
    css.disabled = !css.disabled;
    localStorage.setItem("contrast", !css.disabled);
}
console.log(localStorage);