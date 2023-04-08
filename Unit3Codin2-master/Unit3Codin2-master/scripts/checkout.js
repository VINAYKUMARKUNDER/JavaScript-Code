    
    
        let confirm=document.getElementById("confirm");
    
    confirm.addEventListener("click",fun);

    function fun(){
        event.preventDefault();
        let name=document.getElementById("name").value;
        let number=document.getElementById("number").value;
        let address=document.getElementById("address").value;
    
        
        if(name==""||number==""||address==""){
            alert("Field All data maindotry")
        }
        else{
            let i=0;
            setInterval(function(){
               
            
            if(i==0){
                alert("Your order is accepted")
            }
            i++;
            if(i==3){
                alert("Your order is being Prepared")
            }

            if(i==8){
                alert("Your order is being packed")
            }

            if(i==10){
                alert("Your order is out for delivery")
            }
            if(i==12){
                alert("Order delivered")
                window.location.href="index.html"
            }
            
           
        },1000)
        }
    }