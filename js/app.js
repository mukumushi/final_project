let portfolio = [
  {
      type: "Mobile App | Native iOS & Android",
      title: 'QuitSTART',
      desc: 'asdlf',
      url: 'images/projectcovers/tile_quitstart.jpg',
      link: "#"
  },

]



let posters = [
{
    type: "Kids",
    title: 'Wild Thing',
    desc: 'You make my heart sing',
    url: 'images/posters/wildthing.jpg',
    link: "https://www.etsy.com/listing/842798798/wild-thing-printable-poster-wall-art"
},
{
    type: "Kids",
    title: 'Kind People Are My Kind of People',
    desc: 'Be Kind. Be Nice.',
    url: 'images/posters/kindpeople.jpg',
    link: "https://www.etsy.com/listing/848278536/kind-people-are-my-kind-of-people"
},
{
  type: "Kids",
  title: 'You Are So Loved (Oh so very much)',
  desc: 'Nursery Room Printable',
  url: 'images/posters/youaresoloved.jpg',
  link: "https://www.etsy.com/listing/843716600/you-are-so-loved-oh-so-very-much"
},
  {
      type: "Home",
      title: 'Hello Beautiful',
      desc: 'You\'re looking good today',
      url: 'images/posters/hellobeautiful.jpg',
      link: "https://www.etsy.com/listing/853707153/hello-beautiful-printable-poster-wall"
},
{
  type: "Kids",
  title: 'Hip Hip Hooray!',
  desc: 'Let\'s Play!',
  url: 'images/posters/hiphiphooray.jpg',
  link: "https://www.etsy.com/listing/846012062/hip-hip-hooray-lets-play-printable"
},
{
  type: "Home",
  title: 'Spotted Cat',
  desc: 'He\'s yellow. He\'s spotted.',
  url: 'images/posters/spottedcatyellow.jpg',
  link: "https://www.etsy.com/listing/840928108/spotted-cat-printable-poster-wall-art"
},
{
 type: "Home",
 title: 'Spotted Cat (Green)',
 desc: 'I\'m a green cat.',
 url: 'images/posters/spottedcatgreen.jpg',
 link: "https://www.etsy.com/listing/842307166/spotted-cat-green-printable-poster-wall"
},
{
  type: "Inspiration",
  title: 'Daring Greatly',
  desc: 'Quote from Theodore Roosevelt',
  url: 'images/posters/daringgreatly.jpg',
  link: "https://www.etsy.com/listing/839449356/daring-greatly-inspirational-poster-the"
},
{
  type: "Kids",
  title: 'Oh Hai!',
  desc: 'Nice to meet you!',
  url: 'images/posters/ohhai.jpg',
  link: "https://www.etsy.com/listing/854776345/oh-hai-printable-poster-wall-art-decor"
},
{
  type: "Home",
  title: 'Desiderata',
  desc: 'Poem by Max Ehrmann',
  url: 'images/posters/desiderata.jpg',
  link: "https://www.etsy.com/listing/840184702/desiderata-inspirational-poster-max"
},
{
  type: "Home",
  title: 'Nevermore',
  desc: '...quoth the Raven.',
  url: 'images/posters/nevermore.jpg',
  link: "https://www.etsy.com/listing/854188865/nevermore-the-raven-edgar-allen-poe"
},
{
  type: "Home",
  title: 'Love Lives Here',
  desc: 'This is a loving home.',
  url: 'images/posters/loveliveshere.jpg',
  link: "https://www.etsy.com/listing/840813330/love-lives-here-printable-poster-wall"
 },
 {
   type: "Kids",
   title: 'You Are Awesome!',
   desc: 'Just thought you should know...',
   url: 'images/posters/youareawesome.jpg',
   link: "hhttps://www.etsy.com/listing/842963568/you-are-awesome-printable-poster-wall"
 },
 {
   type: "Home",
   title: 'It\'s Good To Be Home',
   desc: 'Take your shoes off and stay awhile.',
   url: 'images/posters/itsgoodtobehome.jpg',
   link: "https://www.etsy.com/listing/854164595/its-good-to-be-home-printable-poster"
 },
 {
  type: "Home",
  title: 'Hello Gorgeous',
  desc: 'I see you.',
  url: 'images/posters/hellogorgeous.jpg',
  link: "https://www.etsy.com/listing/854286033/hello-gorgeous-printable-poster-wall-art"
},
{
  type: "Home",
  title: 'Curiouser and Curiouser',
  desc: 'Let\'s go down the rabbit hole.',
  url: 'images/posters/curiouser.jpg',
  link: "https://www.etsy.com/listing/853684165/curiouser-and-curiouser-printable-poster"
},
{
  type: "Home",
  title: 'Hey There Good Lookin\'',
  desc: 'Put some pep in your day.',
  url: 'images/posters/heytheregoodlookin.jpg',
  link: "https://www.etsy.com/listing/854792165/hey-there-good-lookin-printable-poster"
},
{
  type: "Kitchen",
  title: 'People Who Love To Eat Are Always The Best People',
  desc: 'Quote by Julia Child',
  url: 'images/posters/peoplewholovetoeat.jpg',
  link: "https://www.etsy.com/listing/854271311/people-who-love-to-eat-are-always-the"
},
{
  type: "Kids",
  title: 'You Are My Sunshine',
  desc: 'My Only Sunshine',
  url: 'images/posters/youaremysunshine.jpg',
  link: "https://www.etsy.com/listing/842547382/you-are-my-sunshine-printable-poster"
},
{
  type: "Home",
  title: 'You Are Home',
  desc: 'Home is where the heart is.',
  url: 'images/posters/youarehome.jpg',
  link: "https://www.etsy.com/listing/839829838/you-are-home-printable-poster-wall-art"
},
]

for(let i = 0; i < posters.length; i++) {
  
  let cardDiv = document.createElement('div')
  cardDiv.classList.add('card')
  cardDiv.style.backgroundImage = "url(" + posters[i].url + ")"
  document.getElementById('posters').appendChild(cardDiv)

  let contentDiv = document.createElement('div')
  contentDiv.classList.add('card-content', 'hidden')
 
  cardDiv.appendChild(contentDiv)

  let h3 = document.createElement('h3')
  h3.innerText = posters[i].type
  contentDiv.appendChild(h3)

  let h2 = document.createElement('h2')
  h2.innerText = posters[i].title
  contentDiv.appendChild(h2)

  let desc = document.createElement('p')
  desc.innerText = posters[i].desc
  contentDiv.appendChild(desc)

  let link = document.createElement('a')
  link.href = posters[i].link
  link.setAttribute('target', "_blank")
  let button = document.createElement('button')
  button.innerText = "View on Etsy"
  link.appendChild(button)
  contentDiv.appendChild(link)

  cardDiv.addEventListener('mouseover', () => {
    contentDiv.classList.remove('hidden')
  })
  cardDiv.addEventListener('mouseleave', () => {
    contentDiv.classList.add('hidden')
  })
 
}


for(let i = 0; i < portfolio.length; i++) {
  
  let portDiv = document.createElement('div')
  portDiv.classList.add('card-port')
  portDiv.style.backgroundImage = "url(" + portfolio[i].url + ")"
  document.getElementById('portfolio').appendChild(portDiv)

  let contentDiv = document.createElement('div')
  contentDiv.classList.add('card-content', 'hidden')
 
  portDiv.appendChild(contentDiv)

  let h3 = document.createElement('h3')
  h3.innerText = portfolio[i].type
  contentDiv.appendChild(h3)

  let h2 = document.createElement('h2')
  h2.innerText = portfolio[i].title
  contentDiv.appendChild(h2)

  let desc = document.createElement('p')
  desc.innerText = portfolio[i].desc
  contentDiv.appendChild(desc)

  let link = document.createElement('a')
  link.href = portfolio[i].link
  link.setAttribute('target', "_blank")
  let button = document.createElement('button')
  button.innerText = "View on Etsy"
  link.appendChild(button)
  contentDiv.appendChild(link)

  portDiv.addEventListener('mouseover', () => {
    card-port.classList.add('expand')
  })
  portDiv.addEventListener('mouseover', () => {
    contentDiv.classList.remove('hidden')
  })
  portDiv.addEventListener('mouseleave', () => {
    contentDiv.classList.add('hidden')
  })
 
}