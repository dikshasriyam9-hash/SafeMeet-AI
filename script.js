let form = document.getElementById("personForm");
let list = document.getElementById("list");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let social = document.getElementById("social").value;
  let notes = document.getElementById("notes").value;

  let person = { name, phone, social, notes };

  let data = JSON.parse(localStorage.getItem("people")) || [];
  data.push(person);

  localStorage.setItem("people", JSON.stringify(data));

  display();
  form.reset();
});

function display() {
  list.innerHTML = "";
  let data = JSON.parse(localStorage.getItem("people")) || [];

  data.forEach(p => {
    let li = document.createElement("li");
    li.innerText = p.name + " - " + p.notes;
    list.appendChild(li);
  });
}

display();
