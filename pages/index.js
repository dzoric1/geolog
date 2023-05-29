document.addEventListener('DOMContentLoaded', () => {
  const burgerBar = document.querySelector('.burger__bar')
  const headerNav = document.querySelector('.header__nav')
  const burgerBtn = document.querySelector('.burger')
  const profileBtn = document.querySelector('.header__profile-link')
  const popup = document.querySelector('.popup')
  const popupCloseBtn = document.querySelector('.popup__close')

  burgerBtn.addEventListener('mousedown', () => {
    headerNav.classList.toggle('header__nav--open')
    burgerBar.classList.toggle('burger__bar--close')
  })

  profileBtn.addEventListener('mousedown', () => {
    popup.classList.add('popup--opened')
  })

  popupCloseBtn.addEventListener('mousedown', () => {
    popup.classList.remove('popup--opened')
  })

})