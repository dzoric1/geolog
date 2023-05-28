document.addEventListener('DOMContentLoaded', () => {
  const burgerBar = document.querySelector('.burger__bar')
  const headerNav = document.querySelector('.header__nav')
  const burgerBtn = document.querySelector('.burger')

  burgerBtn.addEventListener('mousedown', () => {
    headerNav.classList.toggle('header__nav--open')
    burgerBar.classList.toggle('burger__bar--close')
  })
})