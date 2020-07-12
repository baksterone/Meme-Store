let name = document.querySelector('#name'),
    phone = document.querySelector('#phone'),
    email = document.querySelector('#email'),
    city = document.querySelector('#city'),
    save = document.querySelector('#save'),
    edit = document.querySelector('#edit'),
    changePass = document.querySelector('#changePass'),
    info = document.querySelector('.info'),
    editInfo = document.querySelector('.edit-info'),
    block = document.querySelector('.change-block'),
    savePass = document.querySelector('#savePass'),
    obj = {},
    getAcc,
    accObj = {};
    form = document.querySelector('#edit-form');

edit.addEventListener('click', () => {
    info.style.display = 'none';
    editInfo.style.display = 'block';

});


save.addEventListener('click', (e) => {

        obj = {
            name: form[0].value,
            email: form[1].value,
            phone: form[2].value,
            city: form[3].value
        };

        localStorage.setItem('info', JSON.stringify(obj));

        if (localStorage.getItem("info") !== null) {
            getAcc = localStorage.getItem("info");
            accObj = JSON.parse(getAcc);
        
            name.innerHTML = accObj.name;
            phone.innerHTML = accObj.phone;
            email.innerHTML = accObj.email;
            city.innerHTML = accObj.city;
          }
        

        
        
        e.preventDefault();
        document.querySelector('.info').style.display = 'block';
        document.querySelector('.edit-info').style.display = 'none';
})

changePass.addEventListener('click', () => {

    info.style.display = 'none';
    block.style.display = 'block';
    

})


savePass.addEventListener('click', () => {
    if (localStorage.getItem("accounts") !== null) {
        getAcc = localStorage.getItem("accounts");
        accObj = JSON.parse(getAcc);
    }

    let login = localStorage.getItem('lastLogin'),
        pass = document.querySelector('#oldPass').value,
        newPass = document.querySelector('#newPass').value;


        if(accObj[login] != pass){
            alert('Wrong password');
        } else if(pass.trim() === '' || newPass.trim() === ''){
          alert('Fill in all the fields');
        } else {
            accObj[login] = newPass;
            localStorage.setItem('accounts', JSON.stringify(accObj));

            info.style.display = 'block';
            block.style.display = 'none';

        }


})





if (localStorage.getItem("info") !== null) {
    getAcc = localStorage.getItem("info");
    accObj = JSON.parse(getAcc);

    name.innerHTML = accObj.name;
    phone.innerHTML = accObj.phone;
    email.innerHTML = accObj.email;
    city.innerHTML = accObj.city;
  }
