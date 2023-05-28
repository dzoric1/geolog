document.addEventListener('DOMContentLoaded', () => {
  const burgerBar = document.querySelector('.burger_bar')
  const headerNav = document.querySelector('.header_nav')
  const burgerBtn = document.querySelector('.burger')

  burgerBtn.addEventListener('mousedown', () => {
    headerNav.classList.toggle('header_nav--open')
    burgerBar.classList.toggle('burger_bar--close')
  })
})