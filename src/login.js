let signIn = document.querySelector('#signIn'),
    nameInput = document.querySelector('#name').value,
    passInput = document.querySelector('#password').value,
    lastLogin = localStorage.getItem('lastLogin');
    
    let getAcc,
    accObj = {};

signIn.addEventListener('click', () => {
    let login = document.querySelector('#name').value,
        pass = document.querySelector('#password').value;


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
});

// if(lastLogin == nameInput){
//   document.location.href = './account.html';
// }
