const toDoForm = document.querySelector(".js-toDoForm"),
      toDoInput = toDoForm.querySelector("input"),
      toDoList = document.querySelector(".js-toDoList");

      const TODOS_LS = "toDos"; //todos local storage
      let toDos = [] ;
      // localstorage에 ToDos를 저장하는 함수
      
    // array를 만드는 함수
      function filterFn(toDo){
        return toDo.id === 1;
        /* if you do toDo.id === 1 filter will return an array with an element
        that has an id that equals to 1 */
        //<li에 없는 id인 toDos를 체크하고 싶음>
        //-> 왜냐면 그것을 찾아서 삭제 해야하기 때문이다.
      }


    // todo를 삭제하는버튼
    function deleteToDo(event){
        //어떤 항목이 삭제되었는지 분류
        const btn = event.target;
        const li = btn.parentNode;
        toDoList.removeChild(li);
        // 여기까지 하면 삭제는 되지만 새로고침하면 다시 현상유지됨
        const cleanToDos = toDos.filter(function(toDo) {
            // console.log(toDo.id, li.id); toDo.id -> int  li.id -> String 임
            // li.id 를 문자에서 숫자로 변환 시켜줘야함
            return toDo.id !== parseInt(li.id);
            
        });
        toDos = cleanToDos
        saveToDos();
        console.log(cleanToDos);
    }

      function saveToDos(){
          localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
          /**
           * local storage에는, 자바스크립트의 object를 저장할 수 가 없음.
           * 오직 String만 저장할 수 있음
           * 그러므로 JSON.stringify : object들을 String 타입으로 바꾸어줌
           */
      }
      
      function paintToDO(text){
        const li = document.createElement("li");
        const delBtn = document.createElement("button");
        const span = document.createElement("span");
        const newId = toDos.length + 1;
        delBtn.innerHTML = " X ";
        delBtn.addEventListener("click",deleteToDo)
        span.innerText = text;
        li.appendChild(delBtn);
        li.appendChild(span);
        li.id = newId;
        toDoList.appendChild(li);

        const toDoObj = {
            text:text,
            id:newId
        };

        toDos.push(toDoObj);
        //push를 써서 array안에 element하나를 넣을 수 있다.
        saveToDos();
        //push후에 로컬 스토리지에 저장시켜야 한다. 그러니 위치는 여기다.
        //밀어넣은 뒤! 세이브!
        /**
         * local storage에는, 자바스크립트의 object를 저장할 수가 없음.
         * 오직 String만 저장할 수 있음
         */
      }

      function handleSubmit(event){
          event.preventDefault();
          const currentValue = toDoInput.value;
          paintToDO(currentValue);
          toDoInput.value = " "; //제출 했을때 placehold 부분 제거후 공백 생기게 하는것
      }

      function loadToDos(){
        const loadedToDos = localStorage.getItem(TODOS_LS);
        if(loadedToDos !== null){
            const parsedToDos = JSON.parse(loadedToDos);
            // *parse :(문법적으로) 분석하다.
            parsedToDos.forEach(function(toDo){
                //parsedToDos에 있는것들을 각각에 대해 실행 해 줄것이므로 바로안에 만듬
                console.log(toDo.text);

                paintToDO(toDo.text);
                /**
                 * 정리하자면, toDos를 가져온 뒤, 이 라인에서는 parse 즉
                 * 가져온 것을 자바스크립트 object로 변환 해 줄것이고
                 * 각각에 대해서는 paintToDO라는 function이 실행된다.
                 * paintToDO는 이 위에 정의 해뒀었던 거다.
                 */
        })
        /**
         * JSON : 'javaScript Object Notation'
         * 데이터를 전달할 때, 자바스크립트가 그걸 다룰 수 있도록
         * object로 바꿔주는 기능인 셈, 그래서 자바스크립트의 object를 String으로 변환 해 주기도하고
         * String을 Object로 바꿔 줄 수 있음
         */

         /**
          * array의 forEach 기본적인 함수로 실행하는데
          * array에 담겨있는것들을 각각에 한번씩 함수를 실행 시켜주는것임
          */
        
          
      }

    }
      
      function init(){
          loadToDos();
          toDoForm.addEventListener("submit", handleSubmit);
      }

      init();