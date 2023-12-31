// main.js

//화면 스크롤할때 section에 on 붙이기  
const contents = document.querySelectorAll("#container>div") //div.content~~ 
const sections = document.querySelectorAll("#container>div>section")

// 현재 윈도우의 높이값을 저장하고 resize될 경우에도 다시 지정해주기 
let devHeight = window.innerHeight;

window.addEventListener("resize", () =>{
  devHeight = window.innerHeight;
});

// contents의 height 지정해주기
for(let i=0; i<contents.length; i++){
    contents[i].style.height = devHeight+ "px";
}
// 함수정의
let activation=(element)=>{
  window.scroll({
    top:element,
    left:0,
    behavior:'smooth'
  });
  // scroll값이 다음 content 보다 작을 경우에 
  for(let j=0; j<sections.length; j++){
    if(element>=j*devHeight && element<`${j+1}`*devHeight){
      sections.forEach(item=>{
        item.classList.remove("on");
      })
      sections[j].classList.add("on");
    };
  };
};
// // contents에서 mousewheel 이벤트 작동시 화면높이만큼 내려가도록 지정--기본
for(let i=0; i<contents.length; i++){
contents[i].addEventListener("wheel", e =>{
  // scroll-up
  if(e.deltaY<0){
    let prev = e.currentTarget.previousElementSibling.offsetTop;
    activation(prev)
    changeOrange(i-1)
    removeScroll(i-1)
  }else if(e.deltaY>0){
    let next = e.currentTarget.nextElementSibling.offsetTop;
    activation(next)
    changeOrange(i+1)
    removeScroll(i+1)
  }
});  
}


// 첫번째section에 on붙는 타임 지정 
let start = setTimeout(() => {
    sections[0].classList.add('on');
  }, 500);

//section 다섯번째페이지에 공굴러간다
  sections[4].addEventListener('transitionend', () => {
    if (sections[4].classList.contains('on')) {
      const animateMotion = sections[4].querySelector('animateMotion');
      if (animateMotion) {
        animateMotion.beginElement();
      }
    }
  });
  sections[sections.length-1].addEventListener('transitionend', () => {
    if (sections[sections.length-1].classList.contains('on')) {
      const animateMotion = sections[sections.length-1].querySelector('animateMotion');
      if (animateMotion) {
        animateMotion.beginElement();
      }
    }
  });
// 스크롤바 컬러 체인지 & 없애기
const scrollBarEllipse = document.querySelector(".scrollBarEllipse")
const scrollBarArrow = document.querySelector(".scrollBarArrow")
const scrollPath = document.querySelector(".path_scroll")

function changeOrange(contentsNumber){
  if(contents[contentsNumber].classList.contains("orange")){
    scrollBarEllipse.classList.add("orange");
    scrollBarArrow.classList.add("orange");
    scrollPath.classList.add("orange");
  }
  else{
    scrollBarEllipse.classList.remove("orange");
    scrollBarArrow.classList.remove("orange");
    scrollPath.classList.remove("orange");
  }
};

function removeScroll(contentsNumber){
  if(contents[contentsNumber].classList.contains("open")){
    scrollBar.classList.add("open")
  }
  else{
    scrollBar.classList.remove("open")
  }
};

// 햄버거 버튼
const menuFrame = document.querySelector(".menuFrame");
const menuInside = document.querySelector(".menu_inside");
const scrollBar = document.querySelector(".scrollBar")
const menuClose = document.querySelector(".menu_btn_close")

menuFrame.addEventListener("click",e=>{
  e.preventDefault();
  menuInside.classList.add("open");
  menuFrame.classList.add("open");
  scrollBar.classList.add("open")
});

menuClose.addEventListener("click",e=>{
  e.preventDefault();
  menuInside.classList.remove("open");
  menuFrame.classList.remove("open");
  scrollBar.classList.remove("open");
});

// 햄버거 메뉴클릭시 이동 ---- 
const aboutMenu = document.querySelector(".aboutMenu");
const workMenu = document.querySelector(".workMenu");
const contactMenu = document.querySelector(".contactMenu");

//해당 메뉴버튼 누르면 그 해당 페이지로 이동해야하고 (remove open), (scroll해당 content top값 입력),
// aboutMenu
aboutMenu.addEventListener("click",e=>{ //content5
  e.preventDefault();
  menuInside.classList.remove("open");
  menuFrame.classList.remove("open");
  scrollBar.classList.remove("open");
  window.scroll({
    top:4*devHeight,
    left:0,
    behavior:'smooth'
  });
  sections.forEach(item =>{
    item.classList.remove("on");
  })
  sections[4].classList.add("on")
});

// contactMenu
contactMenu.addEventListener("click",e=>{ //contentLast
  e.preventDefault();
  menuInside.classList.remove("open");
  menuFrame.classList.remove("open");
  scrollBar.classList.remove("open");
  window.scroll({
    top:(contents.length-1)*devHeight,
    left:0,
    behavior:'smooth'
  });
  sections.forEach(item =>{
    item.classList.remove("on");
  })
  sections[contents.length-1].classList.add("on")
});

// worKMenu
workMenu.addEventListener("click",e=>{ //content7...
  e.preventDefault();
  menuInside.classList.remove("open");
  menuFrame.classList.remove("open");
  scrollBar.classList.remove("open");
  window.scroll({
    top:(6)*devHeight,
    left:0,
    behavior:'smooth'
  });
  sections.forEach(item =>{
    item.classList.remove("on");
  })
  sections[6].classList.add("on")
});

//validation 창 열고 닫기
$(function(){
  var validationBtnOpen = $('.validationBtnOpen');
  var validation = $('.validation');
  validationBtnOpen.click(function(){
    validation.show();
    return false;
  });
});

$(function(){
  var validationBtnClose = $('.validationBtnClose');
  var validation = $('.validation');
  validationBtnClose.click(function(){
    validation.hide();
    return false;
  });
});


