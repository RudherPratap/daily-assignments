import { renderData } from "./ui.js";

document.addEventListener("DOMContentLoaded", () => {
  const render = document.getElementById("render");


  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(posts => {
      return fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(users => {
          return fetch("https://jsonplaceholder.typicode.com/todos")
            .then(response => response.json())
            .then(todos => {
              renderData(users, posts, todos);
            })
            .catch(err => {
              console.log("Error in fetching the todos: ", err);
            });
        })
        .catch(err => {
          console.log("Error in fetching the users: ", err);
        });
    })
    .catch(err => {
      console.log("Error in fetching the posts: ", err);
    });
});
