// Custom cursor
let body = document.querySelector('body')
let cursor = document.getElementById('cursor')

body.addEventListener('mousemove', (event) => {
  // console.log(event.x, event.y)

  cursor.style.top = `${event.pageY}px`
  cursor.style.left = `${event.pageX}px`
})

// Disable Right click

body.addEventListener('contextmenu', (event) => {
  // console.log(event.which);

  event.preventDefault()
})