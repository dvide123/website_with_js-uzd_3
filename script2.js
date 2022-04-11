
const commentBox = document.querySelector('.js_comments')
let html = ''
const getComments = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
    const comments = await data.json()

    console.log(comments)
    comments.forEach((comment) => {
        const {name, email, body} = comment

        html = html + `
        <div class="comment"> 
            <h4 class="name">Vārds: ${name}</h4>
            <span class="email">e-pasts: ${email}</span>
            <p class="text">${body}</p>
        </div> 
        `
    });

    commentBox.innerHTML = html


}
getComments()

const form = document.querySelector('.js_form')


form.addEventListener('submit', (e) =>{ 
    e.preventDefault()
    
    
    const name =document.querySelector('.js_form_text').value
    const email =document.querySelector('.js_form_email').value
    const body =document.querySelector('.js_form_body').value



    html = html + `
        <div class="comment"> 
            <h4 class="name">Vārds: ${name}</h4>
            <span class="email">e-pasts: ${email}</span>
            <p class="text">${body}</p>
        </div> 
        `

        commentBox.innerHTML = html
})