
// function submitData(name, email) {
//   // Create an object with the user's name and email
//   const userData = {
//     name: name,
//     email: email
//   };

// //   Send the user's data to the server
//   fetch('https://example.com/submit', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(userData)
//   })
//   .then(response => response.json())
//   .then(data => {
//     console.log('Data submitted successfully:', data);
//     // Perform any additional actions after successful submission
//   })
//   .catch(error => {
//     console.error('Error submitting data:', error);
//     // Handle the error or display an error message
//   });
// }


// function submitData(name, email) {
//     // Create an object with the user's name and email
//     const userData = {
//       name: name,
//       email: email
//     };
  
//     // Send the user's data to the server
//     fetch('hhttp://localhost:3000/userst', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         Accept: 'application/json'
//       },
//       body: JSON.stringify(userData)
//     })
//     .then(response => response.json())
//     .then(data => {
//       console.log('Data submitted successfully:', data);
//       // Perform any additional actions after successful submission
//     })
//     .catch(error => {
//       console.error('Error submitting data:', error);
//       // Handle the error or display an error message
//     });
//   }


function submitData(name, email) {
    const userData = {
      name: name,
      email: email
    };
  
    return fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(userData)
    })
      .then(response => response.json())
      .then(data => {
        const newId = data.id;
        const idElement = document.createElement('p');
        idElement.textContent = `New ID: ${newId}`;
        document.body.appendChild(idElement);
        return data;
      })
      .catch(error => {
        const errorElement = document.createElement('p');
        errorElement.textContent = `Error: ${error.message}`;
        document.body.appendChild(errorElement);
        throw error;
      });
  }
  