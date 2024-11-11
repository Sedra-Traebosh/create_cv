const btn=document.querySelector('#btn1');
const item_2=document.querySelector("#item-2");

window.onscroll=()=>{
    if(scrollY>=400){
        btn.style.display="block";
    }else{
        btn.style.display="none";
    }
    
}
    btn.onclick=()=>{
        scroll({
            left:0,
            top:0,
            behavior:"smooth"
        });
}


var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
     loop:true,
     breakpoints:{
         0:{
             slidesPerView:1
         },
         640:{
            slidesPerView:2
        },
        768:{
            slidesPerView:2
        },
       1024 :{
            slidesPerView:3
        }
    }
  });