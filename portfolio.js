
    const Skills = document.querySelector(".skills");
    const about1 = document.querySelector(".about1");
    const about2 = document.querySelector(".about2");
    const Experiance = document.querySelector(".Experiance");
    const about3 = document.querySelector(".about3")
    const Education = document.querySelector(".education")
  
   Skills.addEventListener("click",function(){
    about1.style.display = "block"
    about2.style.display = "none"
    about3.style.display = "none"
   })
   
   Experiance.addEventListener("click",function(){
    about1.style.display = "none"
    about2.style.display = "block"
    about3.style.display = "none"
   })
  

   Education.addEventListener("click",function(){
    about1.style.display = "none"
    about2.style.display = "none"
    about3.style.display = "block"
   })
  
  
  
  const bar = document.querySelector(".bar");
  const barContent = document.querySelector(".barContent")
  const body = document.querySelector("body")

  bar.addEventListener("click", function(){
    if(barContent.style.display == "none")
    {

        barContent.style.display = "block"
    }
    else{
        barContent.style.display = "none"
    }
  })

  const button = document.createElement("button");
  document.body.appendChild(button);
button.textContent = "Top";
button.style.position = "fixed";
button.style.bottom = "60px";
button.style.right = "20px";
button.style.background = "black";
button.style.color = "white";
button.style.borderRadius = "100%";
button.style.border = "1px solid red";
button.style.padding = "10px"
button.style.paddingBottom = "11px"



button.addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});






//   body.addEventListener("click",function(){
//     if(barContent.style.display == "block"){
//         barContent.style.display = "none"
//     }
//     else{
//         barContent.style.display = "none"
//     }
//   })

document.addEventListener("click", function(event) {
    if (event.target !== bar && event.target !== barContent) {
      barContent.style.display = "none";
    }
  });