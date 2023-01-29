const productImages = document.querySelectorAll(".product-images img");
const productImageSlide = document.querySelector(".image-slider");

let activateImageSlide = 0;

productImages.forEach((item, i) => {
    item.addEventListener('click', () =>{
        productImages[activateImageSlide].classList.remove('active');
        item.classList.add('active');
        productImageSlide.style.backgroundImage = `url('${item.src}')`;
        activateImageSlide = i;
 })
})

//toggle size buttons

const  sizeBtns = document.querySelectorAll('.size-radio-btn');
let checkedBtn = 0;

sizeBtns.forEach((item, i) => {
 item.addEventListener('click', () => {
  sizeBtns[checkedBtn].classList.remove('check');
  item.classList.add('check');
  checkedBtn = i;
 })
})