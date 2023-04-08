// On clicking remove button the item should be removed from DOM as well as localstorage.

let coffee=JSON.parse(localStorage.getItem("coffee"));
// console.log(coffee)
appendData(coffee)
    

function appendData(data){
    let allPrice=0;
    data.forEach(function(el){
       
        let menu=document.getElementById("menu");

        let img=document.createElement("img");
        img.src=el.image;

        let color=document.createElement("p");
        color.innerText=el.title;

       

        let price=document.createElement("p");
        price.innerText=el.price;
        allPrice+=el.price;
         
        let total_price=document.getElementById("total_price");
        total_price.innerText=allPrice;
        let btn=document.createElement("button");
        btn.innerText="remove"
        btn.style.cursor="pointer";
        btn.addEventListener("click",()=>{
            addCart();
        });

        let div=document.createElement("div");
        div.append(img,color,price,btn);
        menu.append(div);
    })
};

function addCart(){
    event.target.parentNode.remove();
}
function checkout(){
    window.location.href="checkout.html"
}