//Example fetch using DnD5eAPI - place subclasses in ul
document.querySelector('button').addEventListener('click', getFetch)

function getFetch() {
  const ul = document.querySelector('ul')
  const choice = document.querySelector('input').value.trim().toLowerCase()
  const slug = choice.replace(/\s+/g, '-')

  ul.innerHTML = ''

  if (!choice) {
    ul.textContent = 'Enter a spell name.'
    return
  }

  const url = `https://www.dnd5eapi.co/api/spells/${slug}`

  fetch(url)
      .then(res => {
        if (!res.ok) {
          throw new Error(`Request failed: ${res.status}`)
        }
        return res.json()
      }) // parse response as JSON
      .then(data => {
        const subclasses = data.subclasses || []
        if (!subclasses.length) {
          ul.textContent = 'No subclasses found for that spell.'
          return
        }

        subclasses.forEach(obj => {
          const li = document.createElement('li')
          li.textContent = obj.name
          ul.appendChild(li)
        })
    })
    .catch(err => {
          console.log(`error ${err}`)
          ul.textContent = 'Spell not found. Check the spelling and try again.'
    })
}
