    let bal=JSON.parse(localStorage.getItem("user"));
    let wallet_balance=document.getElementById("wallet_balance");
    wallet_balance.innerText=bal.wallet;
    
    let pData = JSON.parse(localStorage.getItem("purchase"));
    purchaseData(pData)
function purchaseData(data){
    data.forEach((el)=>{
       

        let img= document.createElement("img");
        img.src=el.image;

        let name= document.createElement("h4");
        name.innerText=el.name;

        let price = document.createElement('p');
        price.innerText=el.price;


        let div = document.createElement("div");
        div.append(img,name,price);

        let purchased_vouchers=document.getElementById("purchased_vouchers");
        purchased_vouchers.append(div);
    })
}