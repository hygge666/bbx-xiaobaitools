const menuToggle = document.querySelector('.menuToggle')

menuToggle.onclick = () =>{
  menuToggle.classList.toggle('active')
}
javascript
function returnToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    return false; // 防止链接跳转
}