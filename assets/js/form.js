
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




