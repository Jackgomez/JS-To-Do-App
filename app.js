window.addEventListener('load', () => {
    const form = document.querySelector('#new-task-form');
    const input = document.querySelector('#new-task');
    const list_el = document.querySelector('#tasks');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
    })
})