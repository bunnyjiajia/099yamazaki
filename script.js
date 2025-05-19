let slideIndex = 1 ;

function plosSlides(n) {
    showSlides(slideIndex += n)
}

function currentSlide(n) {
    showSlides(slideIndex = n)   
}

function showSlides(n) {
    let slides = document.getElementsByClassName("item")
    let dots = document.getElementsByClassName("dot")
    
    if (n> slides.length) {
        slideIndex = 1;
    }

    if (n<1) {
        slideIndex = slides.length
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
        
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className=dots[i].className.replace(" active","")
    }

    slides[slideIndex-1].style.display ='block';

    dots[slideIndex-1].className += " active";
}


showSlides();

setInterval(() => {
    plosSlides(1);
}, 3000);


let slideIndex2 = 1;
let itemsPerSlide = 3;

function showSlides2(n) {
    let slides2 = document.getElementsByClassName("product");
    let dots2 = document.getElementsByClassName("dot2");
    let totalSlides = slides2.length;

    // ตรวจสอบขอบเขต ไม่ให้เกินจำนวน slide ที่แสดงได้
    if (n < 0) {
        slideIndex2 = 0;
    } else if (n > totalSlides - itemsPerSlide) {
        slideIndex2 = totalSlides - itemsPerSlide;
    } else {
        slideIndex2 = n;
    }

    // ซ่อนทั้งหมดก่อน
    for (let i = 0; i < totalSlides; i++) {
        slides2[i].style.display = "none";
    }

    // แสดงทีละ 3 ชิ้น
    for (let i = slideIndex2-1; i < slideIndex2 + itemsPerSlide && i < totalSlides; i++) {
        slides2[i].style.display = "block";
    }

    // ล้าง active class จาก dot ทั้งหมด
    for (let i = 0; i < dots2.length; i++) {
        dots2[i].className = dots2[i].className.replace(" active", "");
    }

    // เพิ่ม active ให้ dot ปัจจุบัน
    if (dots2[Math.floor(slideIndex2-1)]) {
        dots2[Math.floor(slideIndex2-1)].className += " active";
    }
}

function currentSlide2(n) {
    showSlides2(n);
}

// เรียกใช้เมื่อโหลด
showSlides2(slideIndex2);


// let slideIndex3 = 1;
// let itemsPerSlide1 = 5;

// function showSlides3(n) {
//     let slides3 = document.getElementsByClassName("brandcontent");
//     let dots3 = document.getElementsByClassName("dot3");
//     let totalSlides1 = slides3.length;

//     // ตรวจสอบขอบเขต ไม่ให้เกินจำนวน slide ที่แสดงได้
//     if (n < 0) {
//         slideIndex3 = 0;
//     } else if (n > totalSlides1 - itemsPerSlide1) {
//         slideIndex3 = totalSlides1 - itemsPerSlide1;
//     } else {
//         slideIndex3 = n;
//     }

//     // ซ่อนทั้งหมดก่อน
//     for (let i = 0; i < totalSlides1; i++) {
//         slides3[i].style.display = "none";
//     }

//     // แสดงทีละ 5 ชิ้น
//     for (let i = slideIndex3; i < slideIndex3 + itemsPerSlide1 && i < totalSlides1; i++) {
//         slides3[i].style.display = "block";
//     }

//     // ล้าง active class จาก dot ทั้งหมด
//     for (let i = 0; i < dots3.length; i++) {
//         dots3[i].className = dots3[i].className.replace(" active", "");
//     }

//     // กำหนด active ให้ dot ปัจจุบัน
//     if (dots3[slideIndex3-1]) {
//         dots3[slideIndex3-1].className += " active";
//     }
// }

// function currentSlide3(n) {
//     showSlides3(n);
// }

// // เรียกใช้เมื่อโหลด
// showSlides3(slideIndex3);

let itemsPerSlide3 = 5;    // แสดงทีละ 5 รูป
let totalPages;           // จะคำนวณจากจำนวนรูป
let currentPage = 1;      // หน้า 1-based

function showSlides3(page) {
  const slides = document.getElementsByClassName("brandcontent");
  const dots   = document.getElementsByClassName("dot3");
  const total  = slides.length;

  // คำนวณจำนวนหน้า (1-based)
  totalPages = Math.ceil(total / itemsPerSlide3);

  // clamp page ให้อยู่ใน [1, totalPages]
  if (page < 1)      page = 1;
  if (page > totalPages) page = totalPages;
  currentPage = page;

  // ซ่อนทั้งหมด
  for (let i = 0; i < total; i++) {
    slides[i].style.display = "none";
  }

  // คำนวณ startIndex (0-based)
  let zeroBasedPage = page - 1;
  let startIndex = (zeroBasedPage === totalPages - 1)
    ? total - itemsPerSlide3    // หน้าสุดท้าย ให้เห็นรูปท้ายครบ
    : zeroBasedPage * itemsPerSlide3;

  let endIndex = startIndex + itemsPerSlide3;
  if (endIndex > total) endIndex = total;

  // แสดงรูปตั้งแต่ startIndex ถึง endIndex-1
  for (let i = startIndex; i < endIndex; i++) {
    slides[i].style.display = "block";
  }

  // อัพเดต dot
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.toggle("active", i === zeroBasedPage);
  }
}

function currentSlide3(page) {
  showSlides3(page);
}

document.addEventListener("DOMContentLoaded", () => {
  showSlides3(1);  // โหลดขึ้นมาหน้าแรก
});

