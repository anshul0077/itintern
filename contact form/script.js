let sbtn =document.querySelector("#s-btn")
let lbtn =document.querySelector("#l-btn")
let cbtn =document.querySelector("#c-btn")

let sform=document.querySelector(".Sign-up")
let lform=document.querySelector(".login")
let cform=document.querySelector(".Contact")
let con=document.querySelector(".shower")

sbtn.addEventListener("click",()=>{
lform.style.display="none"
cform.style.display="none"
sform.style.display="flex"   
con.style.height="85vh"
    
})
lbtn.addEventListener("click",()=>{
    lform.style.display="flex"
    cform.style.display="none"
    sform.style.display="none"  
    con.style.height="60vh"
    })
    cbtn.addEventListener("click",()=>{
        lform.style.display="none"
cform.style.display="flex"
sform.style.display="none"  
con.style.height="89vh"   
            
        })