// window.location.href='http://127.0.0.1:5500/FSF-PT-EAST-APRIL-040824/myfirstblog/blog.html';
// I am trying this to see if it redirects to the 2nd page after hitting the POST CONTENT button
// function redirect(){
//     location.replace('http://127.0.0.1:5500/FSF-PT-EAST-APRIL-040824/myfirstblog/blog.html')
//     event.preventDefault()
// }
const usernameEl = document.querySelector('#username')
const titleEl = document.querySelector('#blogtitle')
const contentEl = document.querySelector('#blogcontent')
const buttonEl = document.querySelector('#submitbutton')
const formEl = document.querySelector('#savedInfo')
const blogCollection = JSON.parse(localStorage.getItem('blogCollection')) || []
document.addEventListener('DOMContentLoaded', function(event){
    event.preventDefault()
    usernameEl.value=''
    titleEl.value=''
    contentEl.value=''
})
formEl.addEventListener('submit', function(event){
event.preventDefault()
const newBlog = {
    username: usernameEl.value.trim(),
    title: titleEl.value.trim(),
    content: contentEl.value.trim(),

}
blogCollection.push(newBlog)
localStorage.setItem('blogCollection', JSON.stringify(blogCollection))
console.log(blogCollection, 'mylistofblogs')
if (usernameEl.value ===''|| titleEl.value === '' || contentEl.value === '') {
    alert('all fields must be entered')
}else {
    
    document.location.href = 'blog.html'
}
})




// function updateLocalStorage() {
//     localStorage.setItem('savedInfo', JSON.stringify(tempStorageObject));
// }
// let button = !null;


// could not use, it would pop us live server message saying no head or body tag and site would disapper

// if i use href it comes up with an error and nothing else
// if (button) {
//     document.location.replace='blog.html';
//     // after i hit submit the page goes away
//     // removed the window in front of location and the page now stays

// } 
//  else {
//     alert('Please fill in empty fields');
//     const alert = document.createElement(alert);
//     alert.textContent = 'Please fill in empty fields';
//     document.body.append(alert);
// }
