function decoder(code){
    let codeArr = code.split('');
    let uncoded = [];
    let i = 0;
    while(i < codeArr.length){
        if(!isNaN(codeArr[i])){
            // console.log(Number(codeArr[i]));
            i += Number(codeArr[i]) + 1;
        } else {
            uncoded.push(codeArr[i]);
            i++;
        }
    }
    return uncoded.join('');
}

console.log(decoder("2bna0p1mp2osl0e"));