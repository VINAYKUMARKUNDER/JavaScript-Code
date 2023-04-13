
let sum=(val)=>{
    let sum =0;

    for(let i=0;i<val.length;i++){
        sum+=Number(val[i]);
    }
    return sum;
}

console.log(sum("123456789"));