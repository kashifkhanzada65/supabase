const { createClient } = supabase;
const PROJECT_URL = 'https://wvgfjuzaqrlqxazgjsxw.supabase.co';
const PROJECT_KEY = 'sb_publishable_s-aHRNhlx1EKW8z2ArQMrQ_FJ1Tq2Rf';

const input = document.querySelector(".input-box input");
const task_parent = document.querySelector(".task-parent");
let counter = 0;


const supabaseClient = createClient(PROJECT_URL, PROJECT_KEY);


const dataCall = async () => {

    if (!input.value) return alert('enter task');

    const data = {
        task: input.value,
        isCompleted: false
    }


    const { error } = await supabaseClient
        .from("todos")
        .insert(data)
        .select()
        
    input.value = "";
    addTodo()
}

const addTodo = async () => {

    const { data, error } = await supabaseClient
        .from('todos')
        .select()

    task_parent.innerHTML = '';
    counter = data.length;
    document.querySelector('p').innerHTML = `Total task: ${counter}`;

    data.forEach((element) => {
        task_parent.innerHTML += ` 
           <div class="task-box">
                <textarea disabled>${element.task}</textarea>
                <button onclick='update(${element.id})' class="update-btn">Edit</button>
                <button onclick='del(${element.id})' class="delete-btn">✕</button>
            </div>`
    });

}

const del = async (id) => {

    const response = await supabaseClient
        .from('todos')
        .delete()
        .eq('id', id)

    addTodo()
}

const update = async (id) => {

    const updateValue = prompt('update task');

    if (!updateValue) return;

    const { error } = await supabaseClient
        .from('todos')
        .update({ task: updateValue })
        .eq('id', id)

    addTodo()
}

const delAll = async () => {

    const response = await supabaseClient
        .from('todos')
        .delete()
        .neq('id', 0)

    addTodo()
}







window.dataCall = dataCall;
window.del = del;
window.update = update;
window.delAll = delAll;
addTodo();