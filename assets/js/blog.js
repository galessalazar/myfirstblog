const blogArray=JSON.parse(localStorage.getItem('blogCollection')) || []
const blogContainer= document.querySelector('.blogs')
let blogCard= ''
const bodyEl= document.querySelector('body')
blogArray.forEach(blog => {
 blogCard += `
 <div class= 'blog-card'>
 <h3>Title: ${blog.title}</h3>
 <h3>Posted by: ${blog.username}</h3>
 <p>Content: ${blog.content}</p>
 </div>
 ` 
 blogContainer.innerHTML=blogCard 
});
document.querySelector('#backButton').addEventListener('click', function(event){
    event.preventDefault()
    document.location.href='index.html'
});
document.querySelector('.d-inline-flex').addEventListener('click', function(event){
    console.log(event)
// bodyEl.setAttribute('class', 'darkMode')
    if(document.querySelector('body').getAttribute('class')=== 'darkMode') {
        bodyEl.removeAttribute('class')
    }else {
        bodyEl.setAttribute('class', 'darkMode' )
    }
});


