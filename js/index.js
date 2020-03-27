function clickMe(){

    let listContainer = document.querySelector( '.listContainer' );

    listContainer.addEventListener( 'click', ( event ) => {
      
      if( event.target.matches( '.checkBtn' ) ){
    
        if (event.target.parentNode.classList.contains("uncheck"))
        {
            event.target.parentNode.classList.remove("uncheck");
            event.target.parentNode.classList.add("check");
        }
        else{
            event.target.parentNode.classList.remove("check");
            event.target.parentNode.classList.add("uncheck");
        }

      }
      else if ( event.target.matches( '.deleteBtn' ) ){
          event.target.parentNode.remove();
      }
  
 
    });
  
  }


function watchButton(){
    let addBtn = document.querySelector( '#addBtn' );
    let textField = document.querySelector( '#textField');
  
    addBtn.addEventListener( 'click', ( event ) => {
      event.preventDefault();
  
      let listContainer = document.querySelector( '.listContainer' );

      listContainer.innerHTML += `<li class = "uncheck">
      <div>
        ${textField.value}
      </div>
      <button type="submit" class = "checkBtn">check</button>
      <button type="submit" class = "deleteBtn">delete</button>
    </li>`;
      

    });
  }
  
  function init(){
    watchButton();
    clickMe();
  }
  
  init();