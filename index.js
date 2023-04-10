fetch('http://localhost:8080/users/')
  .then(response => response.json())
  .then(posts => {
    console.log(posts);
    // Do something with the posts data
  })
  .catch(error => console.error(error));