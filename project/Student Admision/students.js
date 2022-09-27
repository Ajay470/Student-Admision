// All the Code for All Students Page Goes Here
let admissionls=JSON.parse(localStorage.getItem("admission")) || [] ;
let delete1=JSON.parse(localStorage.getItem("admission-rejected")) || [] ;
let admit=JSON.parse(localStorage.getItem("admission-accepted")) || [] ;

let filter=document.querySelector("#filter");
filter.addEventListener("change",function(){
    console.log("inside filter")
    if(filter.value==="all"){
        console.log("all")
        displayadmission(admissionls);
    }else{
        
        let filtered=admissionls.filter(function(element){
            console.log("one")
            return element.course===filter.value;
            displayadmission(filtered);
        })
    }
})




displayadmission(admissionls)


function displayadmission(admissionls){
    document.querySelector("tbody").innerHTML=""
  admissionls.forEach(function(elem,index){
   


    // console.log(elem.name);
    let tr=document.createElement("tr");

    let td1=document.createElement("td");
    td1.innerText=elem.name;

    let td2=document.createElement("td");
    td2.innerText=elem.email;

    let td3=document.createElement("td");
    td3.innerText=elem.phone;

    let td4=document.createElement("td");
    td4.innerText=elem.gender;

    let td5=document.createElement("td");
    td5.innerText=elem.course;

    let td6=document.createElement("td");
    td6.innerText="Admitted";
    td6.style.backgroundColor="green";
    td6.addEventListener("click",function(){
          admitfun(index,elem);
    })

    let td7=document.createElement("td");
    td7.innerText="Rejected";
    td7.style.backgroundColor="red";
    td7.addEventListener("click",function(){
        admitfun1(index,elem);
  })
   

    tr.append(td1,td2,td3,td4,td5,td6,td7);
    document.querySelector("tbody").append(tr);


  })

  

  

}

function admitfun(index,elem){
    console.log("inside admit")
    admit.push(elem);
    localStorage.setItem("admission-accepted",JSON.stringify(admit));

    admissionls.splice(index,1);
    localStorage.setItem("admission",JSON.stringify(admissionls));
    window.location.reload();


  }

  function admitfun1(index,elem){
    console.log("inside delete")
    delete1.push(elem);
    localStorage.setItem("admission-rejected",JSON.stringify(delete1));

    admissionls.splice(index,1);
    localStorage.setItem("admission",JSON.stringify(admissionls));
    window.location.reload();


  }