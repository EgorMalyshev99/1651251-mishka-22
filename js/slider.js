
const sliderItems=document.querySelectorAll(".slide");const nextBtn=document.querySelector(".next");const prevBtn=document.querySelector(".prev");let i=0;const showSlide=(currentSlide)=>{sliderItems.forEach((slide,index)=>{if(index===currentSlide){slide.classList.add("current-slide");return;}
slide.classList.remove("current-slide");});};nextBtn.addEventListener("click",(evt)=>{i++;if(i===sliderItems.length){i=0;}
showSlide(i);console.log("next");});prevBtn.addEventListener("click",(evt)=>{if(i===0){i=sliderItems.length;}
i--;showSlide(i);console.log("prev");});