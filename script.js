const input = document.querySelector('input');
const btn = document.querySelector('.addTask > button');
const completedNo = document.querySelector('.completedNo');
const taskListNo = document.querySelector('.taskListNo');
let totalTasks = 0;
let completeTasks = 0;


btn.addEventListener('click',addList);
function addList(e){
    
    const taskList = document.querySelector('.taskList');
    const completed = document.querySelector('.completed');
    const newLi = document.createElement('li');
    const checkBtn = document.createElement('button');
    const delBtn = document.createElement('button');
  
    checkBtn.innerHTML = '<button><i class="fa fa-check"></i></button>';
    delBtn.innerHTML =  '<button><i class="fa fa-trash"></i></button>';


    if(input.value !== '') {
        newLi.textContent = input.value;
        input.value =''; 
        taskList.appendChild(newLi);
        newLi.appendChild(checkBtn);
        newLi.appendChild(delBtn);
        totalTasks += 1; 
        taskListNo.textContent = totalTasks;  
        completedNo.textContent =completeTasks;   
        
    }
    checkBtn.addEventListener('click',function(){
        const parent = this.parentNode;
        parent.remove();
        completed.appendChild(parent);
        completeTasks++;
        checkBtn.style.display = 'none';
        delBtn.style.display = 'none';
        completedNo.textContent =completeTasks;
        
    });
    delBtn.addEventListener('click',function(){
        const parent = this.parentNode;
        parent.remove();
        totalTasks -= 1;
        taskListNo.textContent = totalTasks; 
    });
   
    
}
