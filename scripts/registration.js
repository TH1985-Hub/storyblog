function createRegisterationContainer() {
    const container = UI.createElement('div', { class: 'container w-100 d-flex jc-space-between  fd-column ai-center' }, [
        UI.createElement('header', { class: 'header w-90 h-100px d-flex  ai-center js-flex-end' }, [
            UI.createElement('a', { class: 'nav_list td-none transition-5', href: 'home.html' }, 'Home'),
            UI.createElement('a', { class: 'nav_list td-none transition-5', href: 'index.html' }, 'Log In')
            ]),
           
        
        UI.createElement('form', { class: 'formBox_container w-400px h-400px d-flex ai-center fd-column ta-center relative' }, [
            UI.createElement('input', { type: 'text', placeholder: 'First Name', class: 'formBox_container_input w-300px h-40px' }),
            UI.createElement('input', { type: 'text', placeholder: 'Last Name', class: 'formBox_container_input  w-300px h-40px' }),
            UI.createElement('select', { class: 'select w-300px h-40px' }, [
                UI.createElement('option', { class: 'option', value: 'City' }, 'City'),
                UI.createElement('option', { class: 'option', value: 'Vanadzor' }, 'Vanadzor'),
                UI.createElement('option', { class: 'option', value: 'Erevan' }, 'Erevan')
            ]),
            UI.createElement('div', { class: 'gender w-300px h-40px d-flex ai-center' }, [
                UI.createElement('label', {}, [
                    UI.createElement('input', { type: 'radio', name: 'gender', value: 'male', class: 'radio' }),
                    ' Male'
                ]),
                UI.createElement('label', {}, [
                    UI.createElement('input', { type: 'radio', name: 'gender', value: 'female', class: 'radio-two' }),
                    ' Female'
                ])
            ]),
            UI.createElement('div', {class: 'inputBox w-300px h-40px d-flex jc-space-between ai-center '},[
                UI.createElement('div', {class: 'box_checkbox'},[
                    UI.createElement('input', {type: 'checkbox', class: 'checkbox'}),'Send me email',
                ]),
                UI.createElement('button', { type: 'submit', class: 'submit-btn w-100px h-30px' }, 'Submit')
            ])
        ])
        

    ]);

    UI.render(container, 'body');
}
createRegisterationContainer();