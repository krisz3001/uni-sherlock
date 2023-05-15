function check(){
    var a1 = document.querySelector('input[name="q1"]:checked');
    var a2 = document.querySelector('input[name="q2"]:checked');
    var a3 = document.querySelector('input[name="q3"]:checked');
    var result = document.querySelector('#result');
    if(a1 === null || a2 === null || a3 === null){
        result.innerText = 'Válaszolj meg minden kérdést!';
        return;
    }
    result.innerText = `Eredmény: ${(a1.id == 'q1-3' ? 1 : 0) + (a2.id == 'q2-2' ? 1 : 0) + (a3.id == 'q3-1' ? 1 : 0)}/3`
}