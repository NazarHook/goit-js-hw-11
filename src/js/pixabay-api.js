'use strict'
export const form = document.querySelector('.form')
export const input = document.querySelector('.search-input')
export const searchButton = document.querySelector('.search-btn')
const url = 'https://pixabay.com/api/'
const KEY = '42555164-0de9ae952fe9eb05e418ffbde'
function submitHandler(event) {
     event.preventDefault();
     const q = input.value
const LINK = `${url}?key=${KEY}&q=${q}`
     console.log(LINK);
// fetch(url, {image_type: photo, orientation: horizontal, safesearch: true})
}
form.addEventListener('submit', submitHandler)

