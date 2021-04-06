/*===== LINK ACTIVE  =====*/ 
const linkColor = document.querySelectorAll('.navigate-link')
function colorLink(){
  linkColor.forEach(l=> l.classList.remove('active'))
  this.classList.add('active')
}
linkColor.forEach(l=> l.addEventListener('click', colorLink))