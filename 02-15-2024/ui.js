export function renderData(users, posts, todos) {
  const render = document.getElementById("render");

  // Render users
  const usersList = document.createElement("ul");
  users.forEach(user => {
    const li = document.createElement("li");
    li.textContent = user.name;
    usersList.appendChild(li);
  });
  render.appendChild(usersList);

  // Render posts
  const postsList = document.createElement("ul");
  posts.forEach(post => {
    const li = document.createElement("li");
    li.textContent = post.title;
    postsList.appendChild(li);
  });
  render.appendChild(postsList);

  // Render todos
  const todosList = document.createElement("ul");
  todos.forEach(todo => {
    const li = document.createElement("li");
    li.textContent = todo.title;
    todosList.appendChild(li);
  });
  render.appendChild(todosList);
}