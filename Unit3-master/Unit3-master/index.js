
    var arr=[];
    function submitData(){
        event.preventDefault();

        let form= document.getElementById("form");

        let name= form.name.value;
        let email= form.email.value;
        let image=form.url.value;
        if(image==""){
            image="https://www.kindpng.com/picc/m/495-4952535_create-digital-profile-icon-blue-user-profile-icon.png"
        }
        let course=form.course.value;
        let unit = form.unit.value;
        let batch = form.batch.value;
        
        if(name=="" || email==""||image==""||course==""||unit==""||batch==""){
            alert("plese Fill all data!!!")
        }
        else{
            var obj={
                name:name,
                image:image,
                email:email,
                course:course,
                unit:unit,
                batch:batch,
            }
           arr.push(obj);
           localStorage.setItem("data",JSON.stringify(arr));
           
        }
       

    }
    function see(){
        window.location.href="data.html"
    }
   