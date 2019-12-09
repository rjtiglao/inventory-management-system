const url = "http://localhost:8080/api/items";

const apiCall = () => {
  fetch(url)
    .then(response => {
      return response.json();
    })
    .then(data => {
      this.setState(data);
    });
};
