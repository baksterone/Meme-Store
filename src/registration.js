let reg = document.querySelector('#registration'),
    sign = document.querySelector('#signIn'),
    create = document.querySelector('#create'),
    test = document.querySelector('#test'),
    acc = {};

create.addEventListener('click', () => {
    create.style.display = 'none';
    reg.style.display = 'block';
    sign.style.display = 'none';

    event.preventDefault();

});

test.addEventListener('submit', (e) => {
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
        } else if(login in accObj){
            alert('such user already exists');
        } else {
            
            localStorage.setItem('lastLogin', login);
            acc[login] = pass;
            localStorage.setItem('accounts', JSON.stringify(acc));
            alert('create');
            sign.style.display = 'block';
            reg.style.display = 'none';
            create.style.display = 'block';
        }
              
        e.preventDefault();

        e.target[0].value = '';
        e.target[1].value = '';
});