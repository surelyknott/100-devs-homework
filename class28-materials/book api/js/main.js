//Example fetch using DnD5eAPI - place subclasses in ul
document.querySelector('button').addEventListener('click', getFetch)

function getFetch() {
  const choice = document.querySelector('input').value
  const para = document.querySelector('p')
  
  // const slug = choice.replace(/\s+/g, '-')

  if (!choice) {
    para.textContent = 'Enter an ISBN number.'
    return
  }

  const url = `https://openlibrary.org/isbn/${choice}.json`

  fetch(url)
      .then(res => {
        if (!res.ok) {
          throw new Error(`Request failed: ${res.status}`)
        }
        return res.json()
      }) // parse response as JSON
      .then(data => {

      console.log(data)
      document.querySelector('p').textContent = data.title

    })

    .catch(err => {
          console.log(`error ${err}`)
          para.textContent = 'Book not found. Check the ISBN number and try again.'
    })
}
