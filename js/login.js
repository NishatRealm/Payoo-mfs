// console.log("oi mama na plz")
// document.getElementById('button-login')
//     .addEventListener('click', function(){})
//step-1: event handler
document.getElementById('button-login')
    .addEventListener('click', function(event){
        //step-2: prevent default behavior
        event.preventDefault();
        console.log('login button clicked')
        //step-3: get phone number
        const phoneNumber= document.getElementById('phone-number').value;
        const pinNumber = document.getElementById('pin-number').value;
        console.log(phoneNumber,pinNumber);
        //step-4: validate phone and pin
        //this is not ideal just for cheking purpose
        if(phoneNumber==='5'&& pinNumber=='1234'){
            console.log('login successfull');
            window.location.href= '/home.html';
        }
        else {
            alert('wrong number and pin');
        }
    })