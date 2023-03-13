
/*get the number of characters*/
function charLength() {

    let charLength = document.getElementById('length').value;
    document.getElementById('result').innerHTML = charLength;
    return charLength;

}
document.getElementById('length').addEventListener('change', charLength)

function saveCheckbox(e){
    e.preventDefault();

    checkedBoxes = document.getElementsByTagName('input[type="checkbox"]:checked');
    let charset="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let password = '';
    let charLength = document.getElementById('length').value;
    // for(i=0;i<charLength;i++){
    //     password = (Math.random()*charLength)

    // }
    // document.getElementById("password__result").value = password.value;
    

    
}


