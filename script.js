const addBtn=document.getElementById("addBtn")
const taskInput=document.getElementById("taskInput")
const taskList=document.getElementById("taskList")
addBtn.addEventListener("click",function(){

    
    if(taskInput.value.trim() !==""){
        const newTask=document.createElement("p")
        const deleteBtn=document.createElement("button")
        newTask.textContent=taskInput.value 
        deleteBtn.textContent="Delete task"
        newTask.appendChild(deleteBtn)
        deleteBtn.addEventListener("click",function(){
            newTask.remove()
        })
        taskList.appendChild(newTask)
        taskInput.value=""
    }
    else{
        taskInput.value=""
    }
    
    
})