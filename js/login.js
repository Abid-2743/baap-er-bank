document.getElementById('btn-submit').addEventListener('click', function(){
    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    if(email === 'sontan@baap.com' && password === 'secret'){
        window.location.href = 'bank.html'
    }
    else if(email === 'arabyhossainabid@gmail.com' && password === '2743'){
        window.location.href = 'bank.html'
    }
    else{
        console.log('invalid usr')
    }

})