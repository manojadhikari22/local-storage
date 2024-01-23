// SELECTING ELEMENTS
const firstnameInput = document.querySelector(".firstname");
const lastnameInput = document.querySelector(".lastname");
const ageInput = document.querySelector(".age");
const submitButton = document.querySelector(".submit-button");
const deleteButton = document.querySelector(".delete-button");
const displayContainer = document.querySelector(".display-data");

// GETTING THE DATA FROM THE LOCAL STORAGE WHEN THE PAGE IS LOADED 
const users = JSON.parse(localStorage.getItem("userData")) || [];
document.addEventListener("DOMContentLoaded", () => {
renderData(users)
});


// ADDING DATA TO LOCAL STORAGE
submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  const userInfo = {
    userFirstname: firstnameInput.value,
    userLastname: lastnameInput.value,
    userAge: ageInput.value,
  };
  users.push(userInfo);
  saveData(users);
  renderData(users);
  firstnameInput.value = "";
  lastnameInput.value = "";
  ageInput.value = "";
});

deleteButton.addEventListener("click", (e) => {
  e.preventDefault();
  localStorage.removeItem("userData");
});

// STORING THE DATA IN LOCAL STORAGE
const saveData = (data) => {
  localStorage.setItem("userData", JSON.stringify(data));
};

//RENDERING THE DATA ON THE PAGE
const renderData = (storedUsers)=>{
    if (storedUsers) {
        displayContainer.textContent = "";
        storedUsers.forEach((user) => {
          const li = document.createElement("li");
          const firstnameLabel = document.createElement("label");
          const lastnameLabel = document.createElement("label");
          const ageLabel = document.createElement("label");
    
          displayContainer.append(li);
          li.append(firstnameLabel, lastnameLabel, ageLabel);
    
          firstnameLabel.textContent = user.userFirstname + " ";
          lastnameLabel.textContent = user.userLastname + " ";
          ageLabel.textContent = user.userAge;
        });
      }
}

// CLEARING THE LOCAL STORAGE
deleteButton.addEventListener('click', ()=> {
  localStorage.clear();
  document.location.reload()
})

