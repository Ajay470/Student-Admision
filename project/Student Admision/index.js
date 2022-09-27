// All the JS Code for the Add Students Page Goes Here

document.querySelector("form").addEventListener("submit",inputfun);
let admissionarr=JSON.parse(localStorage.getItem("admission"))||[];
function inputfun(event){
    event.preventDefault();
    // console.log("indide form input")

    let obj={
        name:document.querySelector("#name").value,
        email:document.querySelector("#email").value,
        phone:document.querySelector("#phone").value,
        gender:document.querySelector("#gender").value,
        course:document.querySelector("#course").value,

    }
    admissionarr.push(obj);
    localStorage.setItem("admission",JSON.stringify(admissionarr));
   
   
}
