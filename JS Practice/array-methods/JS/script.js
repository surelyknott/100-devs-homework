// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.
// That is: removes all dashes, each word after dash becomes uppercased.

function camelize(str){
    return str
    .split('-')
    .map((word, index) => index == [0] ? word : word[0].toUpperCase() + word.slice(1))
    .join('')
}


  