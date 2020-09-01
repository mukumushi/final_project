let projects = [
  {
      type: "Home",
      title: 'Hello Beautiful',
      href: "projects/quitstart.html",
      desc: 'a description goes here',
      url: '../images/projectcovers/3.jpg'
  },
  {
      type: "Kitchen",
      title: 'poster 2',
      href: "projects/2.html",
      desc: 'another description goes here',
      url: '../images/projectcovers/2.jpg'
  },
  {
     type: "Kids",
     title: 'poster 2',
     href: "projects/2.html",
     desc: 'just a short 1 liner',
     url: '../images/projectcovers/4.jpg'
},
  {
      type: "Kids",
      title: 'poster 2',
      href: "projects/2.html",
      desc: 'another description goes here',
      url: '../images/projectcovers/1.jpg'
},
]

// this controls the splash screen

window.addEventListener('load', function(){
  document.querySelector('.intro').classList.add('intro-open');
})


for(let i = 0; i < projects.length; i++) {
  
  let cardDiv = document.createElement('div')
  cardDiv.classList.add('card')
  cardDiv.style.backgroundImage = "url(" + projects[i].url + ")"
  document.getElementById('portfolio').appendChild(cardDiv)

  let contentDiv = document.createElement('div')
  contentDiv.classList.add('card-content', 'hidden')
 
  cardDiv.appendChild(contentDiv)

  let h3 = document.createElement('h3')
  h3.innerText = projects[i].type
  contentDiv.appendChild(h3)

  let h2 = document.createElement('h2')
  h2.innerText = projects[i].title
  contentDiv.appendChild(h2)

  let desc = document.createElement('p')
  desc.innerText = projects[i].desc
  contentDiv.appendChild(desc)

  let button = document.createElement('button')
  button.innerText = "see more"
  contentDiv.appendChild(button)

  cardDiv.addEventListener('mouseover', () => {
    contentDiv.classList.remove('hidden')
  })
  cardDiv.addEventListener('mouseleave', () => {
    contentDiv.classList.add('hidden')
  })
 
}
