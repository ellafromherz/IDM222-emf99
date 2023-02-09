const menu = document.querySelector('nav')
const btn_close_menu = document.querySelector('.btn_menu_close')
const btn_open_menu = document.querySelector('.btn_menu_open')

// function toggle_menu() {
//   console.log('toggle menu')
//   if (menu) menu.classList.toggle('open')
// }

// if (btn_close_menu) {
//   btn_close_menu.addEventListener('click', toggle_menu)
// }

// if (btn_open_menu) {
//   btn_open_menu.addEventListener('click', toggle_menu)
// }

const menu_buttons = document.querySelectorAll('.btn_menu')
// console.log(menu_buttons)

if (menu_buttons) {
  menu_buttons.forEach(button => {
    button.addEventListener('click', () => {
      console.log('hello world')
      if (menu) menu.classList.toggle('open')
    })
  })
}