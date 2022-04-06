function decoder(code){
    let uncoded = [];
    let i = 0;
    while(i < code.length){
        if(!isNaN(code[i])){
            // console.log(Number(codeArr[i]));
            i += Number(code[i]) + 1;
        } else {
            uncoded.push(code[i]);
            i++;
        }
    }
    return uncoded.join('');
}

console.log(decoder("2bna0p1mp2osl0e"));