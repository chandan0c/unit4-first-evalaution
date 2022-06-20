// fill in javascript code here

document.querySelector("form").addEventListener("submit",data);
function data(){
    event.preventDefault();
    let name=document.getElementById("name").value;
    let id=document.getElementById("docID").value;
    let dept=document.getElementById("dept").value;
    let exp=document.getElementById("exp").value;
    let email=document.getElementById("email").value;
    let mobile=document.getElementById("mbl").value;
   // console.log(name,id,dept,exp,email,mobile);
   let tr=document.createElement("tr");
   let td1=document.createElement("td");
   td1.innerHTML=name;
   let td2=document.createElement("td");
   td2.innerHTML=id;
   let td3=document.createElement("td");
   td3.innerHTML=dept;
   let td4=document.createElement("td");
   td4.innerHTML=exp;
   let td5=document.createElement("td");
   td5.innerHTML=email;
   let td6=document.createElement("td");
   td6.innerHTML=mobile;
   let td7=document.createElement("td");
   if(exp>5){
    td7.innerHTML="Senior"
   }
   else if(exp>=2 && exp<=5){
    td7.innerHTML="Junior"
   }
   else{
    td7.innerHTML="Trainee"
   }
   let td8=document.createElement("td");
   td8.innerHTML="Delete"
   tr.append(td1,td2,td3,td4,td5,td6,td7,td8);
   document.querySelector("tbody").append(tr);
   td8.addEventListener("click",del);
   td8.style.background="red";
}
function del(){
    console.log(event.target.parentNode.remove())
}