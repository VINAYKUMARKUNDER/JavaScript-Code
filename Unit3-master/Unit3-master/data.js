
    let data=JSON.parse(localStorage.getItem("data"))||[];
    console.log(data)

    display(data);
    function display(data){
        data.forEach(function(el){
            var td=document.createElement("td");
            var img=document.createElement("img")
            img.setAttribute("src",el.image);
            td.append(img)

            var name=document.createElement("td");
            name.innerText=el.name;

            var email=document.createElement("td")
            email.innerText=el.email;

            var course=document.createElement("td");
            course.innerText=el.course;

            var unit= document.createElement("td");
            unit.innerText=el.unit;

            var batch= document.createElement("td");
            batch.innerText=el.batch;

            var del=document.createElement("td")
            del.innerText="Remove"
            del.style.backgroundColor="red";
            del.style.cursor="pointer"
            del.addEventListener("click",myFun);
            function myFun(){
                event.target.parentNode.remove();
            }

            var tr= document.createElement("tr")
            tr.append(td,name,email,course,unit,batch,del)

            var body=document.getElementById("body");
            body.append(tr)
        })
    }