

      function stars() {
        let sizes =parseInt(document.getElementById('size').value);
             result = '';
  
         for (let i = 1; i <=sizes ; i++) {
         let row = '';
         for (let j = 1; j <=sizes ; j++) {
        row+='*';
        }
        result+= row + '<br>'
    }
        document.getElementById('Output').innerHTML= result
}




function stars2() {
    let sizes2 =parseInt(document.getElementById('size2').value);
         result = '';

     for (let i = 1; i <=sizes2 ; i++) {
     let row = '';
     for (let j = 1; j <=i ; j++) {
    row+='*';
    }
    result+= row + '<br>'
}
    document.getElementById('Output').innerHTML= result
}




function stars3() {
    let sizes3 =parseInt(document.getElementById('size3').value);
         result = '';

     for (let i = 1; i <=sizes3 ; i++) {
     let row = '';
     for (let j = 1; j <=sizes3-i ; j++) {
    row+='*';
    }
    result+= row + '<br>'
}
    document.getElementById('Output').innerHTML= result
}

function stars4() {
    let sizes4 =parseInt(document.getElementById('size4').value);
         result = '';

     for (let i = 1; i <=sizes4 ; i++) {
     let row = '';
     for (let j = 1; j <=i ; j++) {
    row+='*';
    }
    result+= row + '<br>'
}
    document.getElementById('Output2').innerHTML= result
}



function stars5() {
    let sizes5 =parseInt(document.getElementById('size5').value);
         result = '';

     for (let i = 1; i <=sizes5 ; i++) {
     let row = '';
     for (let j = 1; j <=sizes5-i ; j++) {
    row+='*';
    }
    result+= row + '<br>'
}
    document.getElementById('Output2').innerHTML= result
}
