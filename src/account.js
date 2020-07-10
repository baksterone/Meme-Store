let name = document.querySelector('#name'),
    phone = document.querySelector('#phone'),
    email = document.querySelector('#email'),
    city = document.querySelector('#city'),
    save = document.querySelector('#save'),
    edit = document.querySelector('#edit'),
    changePass = document.querySelector('#changePass'),
    obj = {},
    getAcc,
    accObj = {};
    form = document.querySelector('#edit-form');

edit.addEventListener('click', () => {
    document.querySelector('.info').style.display = 'none';
    document.querySelector('.edit-info').style.display = 'block';

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
    if (localStorage.getItem("accounts") !== null) {
        getAcc = localStorage.getItem("accounts");
        accObj = JSON.parse(getAcc);
    }

    console.log(localStorage.getItem('lastLogin'))

    
})


if (localStorage.getItem("info") !== null) {
    getAcc = localStorage.getItem("info");
    accObj = JSON.parse(getAcc);

    name.innerHTML = accObj.name;
    phone.innerHTML = accObj.phone;
    email.innerHTML = accObj.email;
    city.innerHTML = accObj.city;
  }
