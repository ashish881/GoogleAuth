function onSignIn(googleUser) {
    //send token id to the backend
    var id_token = googleUser.getAuthResponse().id_token;
    console.log(id_token);

    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/login');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function () {
        console.log('Signed in as: ' + xhr.responseText);
    };
    xhr.send(JSON.stringify({ token: id_token }));

}

module.exports.onSignIn = onSignIn;