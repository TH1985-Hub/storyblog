

function createContainer(){
    const container = UI.createElement('div', {class : 'container w-100 d-flex jc-space-between fd-column ai-center'}, [
        UI.createElement('header', {class: 'header w-90 h-100px d-flex ai-center js-flex-end'},[
            UI.createElement('a', {href : 'home.html', class: 'nav_list td-none transition-5'}, 'Home'),
        ]),
        UI.createElement('main',{class: 'main-container d-flex jc-space-centre at-centre fd-column'}), 
        UI.createElement('div', {class: 'login-container d-flex ai-center jc-center ' },[
        UI.createElement('form', { class: 'form_box w-300px h-300px d-flex  jc-space-center fd-column ai-center' }, [
            UI.createElement('input', { type: 'text', placeholder: 'Username', class: 'form_box_username w-200px h-40px' }),
            UI.createElement('input', { type: 'password', placeholder: 'Password', class: 'form_box_password w-200px h-40px ' }),
            UI.createElement('button', { type: 'submit', class: 'form_box_login w-100px h-40px transition-5' }, 'Login')
        ])
        ])
        
    ]);


    UI.render(container, 'body');
}
createContainer();