
        window.onload= function(){
            const todoList = document.getElementById('todoList');
            const inputTodo = document.getElementById('inputTodo');
            const btnAdd= document.getElementById('btnAdd');
            

            btnAdd.addEventListener('click',function(e){
                let todoValue = inputTodo.value;
                if(todoValue==""){
                    alert('할 일을 입력하세요.');
                    return;
                }

            const listItem = document.createElement('li');
            listItem.className= 'd-flex list-group-item';
            listItem.innerText= todoValue;

            const listBtn = document.createElement('button');
            listBtn.className= 'btn-close ms-auto';//x모양버튼
            listBtn.onclick=function(e){
            //X버튼을 눌렀을 때 내용값이 지워지게 만드는 기능
                let pNode= e.target.parentNode;
                todoList.removeChild(pNode);
                
            }
                
            listItem.appendChild(listBtn);
            //여기서 버튼을 list 내로 넣음
            todoList.appendChild(listItem);
            //리스트아이템을 TodoList에 넣음

            inputTodo.value='';
            });

            

        };
