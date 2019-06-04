function getUserInfo() {
  const input = document.getElementById('userName').value;
  const url = '/showprofile/' + input;
  axios.get(url).then(response => {
    const listItems = response.data.map(item => {
      return '<li>' + item.username + ' | ' + item.message + '</li>';
    });
    document.getElementById('userInfo').innerHTML = listItems.join('\n');
  });
}

function handleSubmit() {
  // Getting values from user inputs
  const userName = document.getElementById('user-name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Creating a payload object
  const payload = {
    username: userName,
    email,
    message
  };

  // Making a post request with axios
  axios.post('/api/', payload).then(response => {
    console.log(response.data);
  });
}

function getAllUsers() {
  const input = document.getElementById('userName').value;
  const url = '/getallusers/' + input;
  axios.get(url).then(response => {
    const listItems = response.data.map(item => {
      return (
        '<li class="get-all-users">' +
        item.username +
        ' | ' +
        item.message +
        ' | ' +
        item.email +
        '</li>'
      );
    });
    document.getElementById('result').innerHTML = listItems.join('\n');
  });
}
