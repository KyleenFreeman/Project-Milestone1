function test() {
  document.getElementById('p-id').style.display = 'none';
}

function test1() {
  var name = document.getElementById('name_id')?.value;
  document.getElementById('p_name').innerHTML = "Thank you for your submission";
}

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contact-form');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;

    fetch('/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `username=${encodeURIComponent(username)}`
    })
      .then(response => response.text())
      .then(data => {
        document.getElementById('p_name').innerHTML = `Your contact info is: ${username}`;
      })
      .catch(error => {
        console.error('Error:', error);
      });
  });
});

