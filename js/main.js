// let people = [
//   {
//     name: 'Beks',
//     rating: 0
//   },
//   {
//     name: 'Eldiyar',
//     rating: 0
//   },
//   {
//     name: 'Ulan',
//     rating: 0
//   },
//   {
//     name: 'Emir',
//     rating: 0
//   },
// ]

// localStorage.setItem('people', JSON.stringify(people));

let people = JSON.parse(localStorage.getItem('people'));
let vote_elem = document.querySelectorAll('.vote-elem')
let vote_elem1 = document.querySelector('.elem1');
let vote_elem2 = document.querySelector('.elem2');

function getRandom(arr) {
  let res = Math.floor(Math.random() * arr.length)
  return res
}

let random1 = getRandom(people);
let random2 = getRandom(people);

do {
  random2 = getRandom(people);
} while (random1 == random2);

console.log(random1, random2)
let person1 = {
  name: people[random1].name,
  rating: people[random1].rating
}
let person2 = {
  name: people[random2].name,
  rating: people[random2].rating
}

vote_elem1.style.background = `url("./assets/images/${person1.name}.jpg") no-repeat`
vote_elem1.style.backgroundSize = 'cover';
vote_elem2.style.background = `url("./assets/images/${person2.name}.jpg") no-repeat`
vote_elem2.style.backgroundSize = 'cover';

vote_elem1.innerHTML = `<span>${person1.name}</span>`
vote_elem2.innerHTML = `<span>${person2.name}</span>`

vote_elem.forEach((elem) => {
  elem.addEventListener('click', (e) => {
    if (e.target.id == 'elem1') {
      people[random1].rating++
      console.log(people[random1])
      localStorage.setItem('people', JSON.stringify(people))
    } else if (e.target.id == 'elem2') {
      people[random2].rating++
      console.log(people[random2])
      localStorage.setItem('people', JSON.stringify(people))
    }
  })  
})