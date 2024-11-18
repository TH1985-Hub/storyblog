function createPostPage(){
    const container = UI.createElement('div', { class: 'container w-100 d-flex js-space-between  fd-column ai-center' }, [
        UI.createElement('header', { class: 'header w-90 h-100px d-flex  ai-center jc-flex-end' }, [
            UI.createElement('a', { class: 'nav_list td-none transition-5', href: 'home.html' }, 'Home'),
            // UI.createElement('a', { class: 'nav_list td-none transition-5', href: 'index.html' }, 'Log In'),
            // UI.createElement('a', { class: 'nav_list td-none transition-5', href:  'create-page.html'}, 'Create Blog')
        ]),

        UI.createElement("main", {class: "main_box  d-flex jc-space-centre at-centre   fd-column"}, [
            UI.createElement('h2', { class: 'title' }, 'Create a New Post'),
        UI.createElement('div', {class: "label_container  w-100  d-flex ai-centre jc-centre fd-column"},[
            UI.createElement('label', {},[
                //  UI.createElement('input', { type: 'radio',  name: 'auther',value: 'Name Surname', class: 'radio' }, 'Name Surname'),
                //  UI.createElement('button', { type: 'submit', class: 'submit-btn-label ' }, 'Create New Post')
                 ]),
                
            UI.createElement("form",{class: "form_container  d-flex  jc-space-center fd-column ai-center",  id: "createPostForm"},[
                UI.createElement('input', { type: 'text', id: 'postTitle' , placeholder: 'Title of the post', class: 'form_container_input ' }),
                UI.createElement('textarea',{id: 'postStory', placeholder: 'Story', class: 'form_container_input', rows: 4} ),
                UI.createElement('input', {type: 'url', id: 'postImageUrl', placeholder: 'Image Link(URL)', class: 'form_container_input'}),
                UI.createElement('button', { type: 'submit', class: 'submit-btn-label ' }, 'Create New Post')
            ]
            

            )
            ]) 
                   

            ])
        ])

        UI.render(container, 'body');
    
        document.getElementById('createPostForm').addEventListener('submit', function (event) {
            event.preventDefault();
    
            const title = document.getElementById('postTitle').value;
            const story = document.getElementById('postStory').value;
            const imageUrl = document.getElementById('postImageUrl').value;

            const newPost = {
                title: title,
                story: story,
                img: imageUrl,
                authorName: 'Author Name',
            };
    
            let posts = JSON.parse(localStorage.getItem('posts')) || [];
            posts.push(newPost);
            localStorage.setItem('posts', JSON.stringify(posts));
            
            window.location.href = 'home.html';
            });

}

createPostPage();