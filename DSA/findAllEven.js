
let even=(max)=>{
    let ans=[];
    for(let i=1;i<=max;i++){
        if(i%2==0)ans.push(i);
    }
return ans;
}

console.log(even(30).join(" "));