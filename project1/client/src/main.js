// document.querySelector('#app').innerHTML = `
//       <div class="container">
//         Hello World
        
//       </div>
// `

const home_button = document.querySelector("#home_nav");

home_button.addEventListener('click', function handleClick(event) {
  window.location = '/'
})
