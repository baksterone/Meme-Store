let signIn = document.querySelector('#signIn');
    
    

signIn.addEventListener('click', () => {
    let login = document.querySelector('#name').value,
        pass = document.querySelector('#password').value;
    let getAcc,
        accObj = {};

      if (localStorage.getItem("accounts") !== null) {
        getAcc = localStorage.getItem("accounts");
        accObj = JSON.parse(getAcc);
      }

      if(login.trim() === '' || pass.trim() === ''){
          alert('Fill in all the fields');
      } else if(accObj[login] != pass){
          alert('wrong username or password');
      } else {
        localStorage.setItem('lastLogin', login)
          alert('ok');
          document.location.href = './catalog.html';
      }
      
console.log(localStorage.getItem('lastLogin'));

        
});