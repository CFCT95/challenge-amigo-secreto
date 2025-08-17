// 1. array para almacenar los nombres
let friends = [];

// 2. Función para actualizar la lista de amigos en pantalla
 
function updateFriendsList() {
  const list = document.getElementById("friends-list");
  list.innerHTML = ""; // limpiar lista antes de volver a llenarla

  // recorrer el array y crear un <li> para cada amigo
  for (let i = 0; i < friends.length; i++) {
    const li = document.createElement("li");
    li.textContent = friends[i];
    list.appendChild(li);
  }
}

// 3. Función para agregar amigos

function addFriend() {
  const input = document.getElementById("friend-input");
  const name = input.value.trim();

  if (name === "") {
    alert("Please enter a valid name");
    return;
  }

  // evitar duplicados
  if (friends.includes(name)) {
    alert("This friend is already in the list");
    return;
  }

  friends.push(name); // guardar en el array
  updateFriendsList(); // mostrar en pantalla
  input.value = ""; // limpiar el input
}

/**
 * 4. Función para sortear un amigo
 */
function drawFriend() {
  const resultList = document.getElementById("result");
  resultList.innerHTML = ""; // limpiar antes de mostrar el resultado

  if (friends.length === 0) {
    alert("First, please add some friends to the list.");
    return;
  }

  // elegir un índice aleatorio
  const randomIndex = Math.floor(Math.random() * friends.length);
  const chosenFriend = friends[randomIndex];

  // mostrar el resultado
  const li = document.createElement("li");
  li.textContent = `Your Secret Santa is: ${chosenFriend}`;
  resultList.appendChild(li);
}
// 5. Función para limpiar la lista de amigos
function clearFriends() {
    friends = []; // reset the array
    const list = document.getElementById("friends-list");
    list.innerHTML = ""; // clear the displayed list
}