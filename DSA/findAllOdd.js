let odd=(val)=>{

    let ans=[];

    for(let i=1;i<=val;i++)if(i%2!==0)ans.push(i);

    return ans;

}

console.log(odd(30).join(" "))