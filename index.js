let postsArray = []

function renderPosts() {
    let html = ""
        for (let post of postsArray) {
            html += `
                <h3>${post.title}</h3>
                <p>${post.body}</p>
                <hr/>
            `
        }
        
        document.getElementById('textDisplay').innerHTML = html
}
fetch('https://apis.scrimba.com/jsonplaceholder/posts')
    .then(response => response.json())
    .then(data => {
        postsArray = data.slice(0,5)
        // console.log(postsArr)
        renderPosts()
        
    })


document.getElementById('newPost').addEventListener('submit', (e) => {
    e.preventDefault()
    const postTitle = document.getElementById('postTitle').value
    const postBody = document.getElementById('postBody').value
    const data = {
        title: postTitle,
        body: postBody
    }
    const options = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        } 
    }
    // fetch('https://apis.scrimba.com/jsonplaceholder/posts', options)
    //     .then(res=>res.json())
    //     .then(post=> {
    //         postsArray.unshift(post)
    //         renderPosts()
    //         postTitle = document.getElementById('postTitle').value = ""
    //         postBody = document.getElementById('postBody').value = ""
    // })

    fetch("https://apis.scrimba.com/jsonplaceholder/posts", options)
        .then(res => res.json())
        .then(post => {
            postsArray.unshift(post)
            renderPosts()
            // this will clear the form
            document.getElementById("postTitle").value = ""
            document.getElementById("postBody").value = ""
        })
})