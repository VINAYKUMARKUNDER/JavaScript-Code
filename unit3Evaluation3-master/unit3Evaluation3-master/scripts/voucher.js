    let user = JSON.parse(localStorage.getItem("user"));

    let wallet_balance=document.getElementById("wallet_balance");
    wallet_balance.innerText=user.wallet;
    // console.log(user)

    async function display(){
        try{
            const url=`https://masai-vouchers-api.herokuapp.com/api/vouchers`

            let res = await fetch(url);
            let data= await res.json();
    
            // console.log(data[0].vouchers)
            appendData(data[0].vouchers)
        } catch(err){
            console.log("error:",err)
        }
       
    }

    display()

    function appendData(data){
        data.forEach((el)=>{
            // console.log(el)

            let img= document.createElement("img");
            img.src=el.image;

            let name= document.createElement("h4");
            name.innerText=el.name;

            let price = document.createElement('p');
            price.innerText=el.price;

            let btn = document.createElement("button");
            btn.innerText="BUY";
            btn.style.cursor="pointer";
            btn.addEventListener("click",()=>{
                buy_voucher(el);
            });

            let div = document.createElement("div");
            div.append(img,name,price,btn);

            let voucher_list=document.getElementById("voucher_list");
            voucher_list.append(div);
        })
    }
let purchase=[];
    function buy_voucher(el){
        if(user.wallet>el.price){
            purchase.push(el);
            localStorage.setItem("purchase",JSON.stringify(purchase));
            alert("Hurray! purchase successful")
            let newWallet=user.wallet-el.price;
            user.wallet=newWallet;
            wallet_balance.innerText=newWallet;
            localStorage.setItem("user",JSON.stringify(user))
        }else{
            alert("Sorry! insufficient balance")
        }
      
    }

