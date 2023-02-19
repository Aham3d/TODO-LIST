window.addEventListener("load", () => {
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector('#new-task-input');
    const list_el = document.querySelector(".tasks");

    // preventing to load the page after clicking the submit button of the form
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const task = input.value;  
        if(!task) {
            alert("add a task");
            return; 
        }


        const task_el = document.createElement('div');
        task_el.classList.add('task');

        const task_content_el = document.createElement('div');
        task_content_el.classList.add('content');

        task_el.appendChild(task_content_el);

        const task_input_el = document.createElement('input');
        task_input_el.classList.add("text");
        task_input_el.type = "text";
        task_input_el.value = task; 
        task_input_el.setAttribute("readonly", "readonly"); 

        task_content_el.appendChild(task_input_el);

        const task_buttons_el = document.createElement('div');
        task_buttons_el.classList.add('buttons');

        const task_edit_el = document.createElement('button');
        task_edit_el.classList.add('edit');
        task_edit_el.innerHTML = "Edit";

        const task_delete_el = document.createElement('button');
        task_delete_el.classList.add('delete');
        task_delete_el.innerHTML = '<i class="fas fa-trash"></i>';

        task_buttons_el.appendChild(task_edit_el);
        task_buttons_el.appendChild(task_delete_el);

        task_el.appendChild(task_buttons_el);

        list_el.appendChild(task_el);

        input.value = "";

        task_edit_el.addEventListener("click", () => {
            if(task_edit_el.innerHTML.toLocaleLowerCase() == "edit") {
                task_input_el.removeAttribute("readonly");
                task_input_el.focus();
                task_edit_el.innerHTML = "save";
            } else {
                task_input_el.setAttribute("readonly", "readonly");
                task_edit_el.innerHTML = "edit";
            }
        });

        task_delete_el.addEventListener('click', () => {
            list_el.removeChild(task_el);
        });
        






    });
});

