// All the Code for the Admitted page goes here
let admitdata=JSON.parse(localStorage.getItem("admission-accepted")) || [] ;



displayadmission(admitdata)

function displayadmission(rejdata){
    document.querySelector("tbody").innerHTML=""
    admitdata.forEach(function(elem,index){
   


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

    // let td6=document.createElement("td");
    // td6.innerText="Admitted";
    // td6.style.backgroundColor="green";
    // td6.addEventListener("click",function(){
    //       admitfun(index,elem);
    // })

//     let td7=document.createElement("td");
//     td7.innerText="Rejected";
//     td7.style.backgroundColor="red";
//     td7.addEventListener("click",function(){
//         admitfun1(index,elem);
//   })
   

    tr.append(td1,td2,td3,td4,td5);
    document.querySelector("tbody").append(tr);


  })
}