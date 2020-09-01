let projects = [
  {
      type: "kids",
      title: 'poster 1',
      href: "projects/quitstart.html",
      desc: 'a description goes here'
  },
  {
      type: "kids",
      title: 'poster 2',
      href: "projects/2.html",
      desc: 'anoter description goes here'
  },
]

window.addEventListener('load', function(){
  document.querySelector('.intro').classList.add('intro-open');
})





for(let i = 0; i < projects.length; i++) {
  
  let cardDiv = document.createElement('div')
  cardDiv.classList.add('card')

  document.querySelector('#cardsgohere').appendChild(cardDiv)

  let contentDiv = document.createElement('div')
  contentDiv.classList.add('card-content')

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

 
}
