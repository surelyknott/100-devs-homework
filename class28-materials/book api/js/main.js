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

      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data.title) // put title into localStorage
        let books = localStorage.getItem('books') + ' ; ' + data.title
        localStorage.setItem('books', books)
        document.querySelector('p').innerText = localStorage.getItem('books')
      })
    
    .catch(err => {
          console.log(`error ${err}`)
          para.textContent = 'Book not found. Check the ISBN number and try again.'
    });
}