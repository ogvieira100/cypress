document.querySelector('button[type="submit"][id="login"]').addEventListener('click', function(event) 
    { 
        event.preventDefault();
        const login = document.getElementById('login-txt');
        const password = document.getElementById('password-txt');

        if (!login.value || !password.value) {
            showAndHideErrorMessage()
        }   
        else {
            if (login.value === 'admin'
                && password.value === 'admin') {    
                login.value = '';
                password.value = '';
                window.location.href = './index.html';
             }
             else {

                login.value = '';
                password.value = '';
                showAndHideUserPasswordInvalid()
             }
        }   
     }, false); 

     function showAndHideUserPasswordInvalid() {
        const errorMessage = document.querySelector('.password-invalid')
        errorMessage.style.display = 'block'
        scroll(0,0)
        hideMessageAfterTimeout(errorMessage)
        

     }


     function showAndHideErrorMessage() {
        const errorMessage = document.querySelector('.login-error')
        errorMessage.style.display = 'block'
        scroll(0,0)
        hideMessageAfterTimeout(errorMessage)
        
      }
      
      function hideMessageAfterTimeout(element) {
        setTimeout(function() {
          element.style.display = 'none'
        }, 3000)
      }