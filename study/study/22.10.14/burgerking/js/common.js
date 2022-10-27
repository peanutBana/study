/*1.PC버전 서브메뉴 관련 */ 
const menu = document.querySelector('.menu__main')      //전체 메뉴
const subMenus = document.querySelectorAll('.list__drop')        //하위 메뉴
const panel = document.querySelector('.header__panel')      //하위 메뉴 나올 때 나오는 판넬
const header = document.querySelector('.header')        //전체 헤더

//상위 메뉴에 마우스 올렸을 때 하위메뉴 드롭
menu.addEventListener('mouseover',() => {       
    panel.style.display = 'block';
    subMenus.forEach(function(subMenu){
        subMenu.style.display = 'block'
    })
})
//하위 메뉴 숨기기
header.addEventListener('mouseout',() => {
    panel.style.display = 'none';
    subMenus.forEach(function(subMenu){
        subMenu.style.display = 'none'
    })
})
panel.addEventListener('mouseout',() => {
    panel.style.display = 'block';
    subMenus.forEach(function(subMenu){
        subMenu.style.display = 'block'
    })
})

/*2. 모바일 버전 메뉴 보이기, 숨기기*/
const Mhanburger = document.querySelector('.mobile.hamburger')
const Mclose = document.querySelector('.mobile.close')
const Mnav = document.querySelector('.header__Mnav')

Mhanburger.addEventListener('click',() => {
    Mnav.style.display = 'block';
})

Mclose.addEventListener('click',() => {
    Mnav.style.display = 'none';
})

/*3. 모바일 하위메뉴 보이기, 숨기기*/ 
function showHide(e){
    const MListDrop = e.children[2];        //내가 선택한 메뉴의 하위메뉴를 가져옴
    const displayAttr = window.getComputedStyle(MListDrop).display

    if(displayAttr === 'none'){
        MListDrop.style.display = 'block';
    } else {
        MListDrop.style.display = 'none';
    }
}
/*4. width가 767px이상일 때 모바일 메뉴 보임 방지*/ 
//.window == 전체
window.addEventListener('optimizedResize',() => {
    let winWidth = window.innerWidth;   //윈도우 창 크기 저장
    if(winWidth >= 767){
        Mnav.style.display = 'none'
    }
})