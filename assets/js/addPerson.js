const addBtn = document.querySelector('#submit-person');

// Question: What is "e" short for?
addBtn.addEventListener('click', (e) => {
  e.preventDefault();

  // Question: What does this code do?
  let name = document.querySelector('#name').value.trim();
  let phone = document.querySelector('#phone').value.trim();
  let email = document.querySelector('#email').value.trim();
  let id = document.querySelector('#id').value.trim();

  let newPerson = {
    name: name,
    phone: phone,
    email: email,
    id: id,
  };

  fetch('/api/reservations', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(newPerson)
  })
  .then((response) => response.json())
  .then((data) => {
    console.log(console.log('success', data));
    if(data.length < 5){
      alert('You have made a reservaton.');
    }else{
      alert('Sorry we are full. You are put on the waitlist');
    }
  })
  .catch(err => console.error('Error:',err));
});