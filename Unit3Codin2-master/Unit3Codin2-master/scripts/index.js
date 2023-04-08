// Add the coffee to local storage with key "coffee"

    let show=document.getElementById("show");
    let arr=[];
   async function showData(){
        const url="https://masai-mock-api.herokuapp.com/coffee/menu";

        let achiv=await fetch(url);
        let mainData= await achiv.json();
        console.log(mainData.menu.data)
        appendData(mainData.menu.data)
    }
    showData();

    function appendData(data){
        data.forEach(function(el){
            let img=document.createElement("img");
            img.src=el.image;

            let color=document.createElement("p");
            color.innerText=el.title;

            let price=document.createElement("p");
            price.innerText=el.price;

            let btn=document.createElement("button");
            btn.innerText="Add To Bucket"
            btn.style.cursor="pointer";
            btn.addEventListener("click",()=>{
                addCart(el);
            });

            let div=document.createElement("div");
            div.append(img,color,price,btn);
            show.append(div);

            
        })
    };

   function addCart(el){
    let count=document.getElementById("counter")
      count.innerText=arr.length+1;
            console.log(el)
            arr.push(el);
            localStorage.setItem("coffee",JSON.stringify(arr));
    }
    function bucket(){
        window.location.href="bucket.html"
    }


