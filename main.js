/* ============= JAVASCRIPT ============*/
// const inputBox = document.getElementById("input-box");
// const listContainer = document.getElementById("list-container");

// function addTask() {
//   if (inputBox.value === "") {
//     alert("You must write something!");
//   } else {
//     let li = document.createElement("li");
//     li.innerHTML = inputBox.value;
//     listContainer.appendChild(li);
//     let span = document.createElement("span");
//     span.innerHTML = "\u00d7";
//     li.appendChild(span);
//   }
//   inputBox.value = "";
//   saveData();
// }

// listContainer.addEventListener(
//   "click",
//   function (e) {
//     if (e.target.tagName === "LI") {
//       e.target.classList.toggle("checked");
//       saveData();
//     } else if (e.target.tagName === "SPAN") {
//       e.target.parentElement.remove();
//       saveData();
//     }
//   },
//   false
// );

// function saveData() {
//   localStorage.setItem("data", listContainer.innerHTML);
// }
// function showTask() {
//   listContainer.innerHTML = localStorage.getItem("data");
// }
// // showTask();
// const inputName = document.querySelector(".name");
// const inputAddress = document.querySelector(".address");
// const inputAge = document.querySelector(".age");
// const listContainer = document.getElementById("list-container");
// const dateE = document.getElementById("date");
// const arrayUser = [
//   {
//     name: "toan",
//     address: "hcm",
//     age: 27,
//   },
//   {
//     name: "tham",
//     address: "qn",
//     age: 26,
//   },
// ];

// // Init
// clearList();
// renderUser(arrayUser);

// var userStudent = function (name, address, age) {
//   this.name = name;
//   this.address = address;
//   this.age = age;
// };

// function clearList() {
//   listContainer.innerHTML = "";
// }

// function resetInput() {
//   inputName.value = "";
//   inputAddress.value = "";
//   inputAge.value = "";
// }

// function renderUser(array) {
//   array.forEach((e) => {
//     let li = document.createElement("li");
//     li.classList.add("li-item");
//     li.innerHTML = `${e.name} ${e.address} ${e.age}`;
//     listContainer.appendChild(li);
//     let span = document.createElement("span");
//     span.innerHTML = "\u00d7";
//     li.appendChild(span);
//   });
// }

// function addTask() {
//   if (
//     inputName.value === "" ||
//     inputAddress.value === "" ||
//     inputAge.value === ""
//   ) {
//     alert("You must write something!");
//   } else {
//     var user = new userStudent(
//       inputName.value,
//       inputAddress.value,
//       inputAge.value
//     );
//     arrayUser.push(user);
//   }
//   clearList();
//   renderUser(arrayUser);
//   resetInput();
// }

// listContainer.addEventListener("click", function (e) {
//   if (e.target.tagName === "LI") {
//     e.target.classList.toggle("checked");
//     // saveData();
//   } else if (e.target.tagName === "SPAN") {
//     var parentElement  = e.target.parentNode;
//     var str = parentElement.innerHTML;
//     var arrParent = str.split(" ");
//     var arrEx = arrayUser;
//     arrEx.forEach((e) => {
//       if (e.name === arrParent[0]) {
//         var index = arrayUser.indexOf(e);
//         arrayUser.splice(index,1);
//       }
//     });
//     clearList();
//     renderUser(arrayUser);
//   }
// });

// function addTask() {
//   if (inputBox.value === "") {
//     alert("You must write something!");
//   } else {
//     let li = document.createElement("li");
//     li.innerHTML = inputBox.value;
//     listContainer.appendChild(li);
//     let span = document.createElement("span");
//     span.innerHTML = "\u00d7";
//     li.appendChild(span);
//   }
//   inputBox.value = "";
//   saveData();
// }

// function addTask() {
//   if (inputBox.value === "") {
//     alert("You must write something!");
//   } else {
//     let li = document.createElement("li");
//     li.innerHTML = inputBox.value;
//     listContainer.appendChild(li);
//     let span = document.createElement("span");
//     span.innerHTML = "\u00d7";
//     li.appendChild(span);
//   }
//   inputBox.value = "";
//   saveData();
// }

/* ============= JQUERY ============*/
// var htmlList

// function renderList(htmlList) {
//     $(".list").html(htmlList);
// }

// $("btn-add").on("click", function () {
//     var addyourtext = $("input-value").val();
//     htmlList = htmlList + <li
//     class= "list-item">$(addyourtext) </li>
//     renderList(htmlList);
// }
// )

var array = [
  {
    id: 1,
    languge: "PHP",
  },
  {
    id: 2,
    languge: "JS",
  },
  {
    id: 3,
    languge: "CSS",
  },
];

var array3 = array.forEach(function (e) {
  // console.log(e);
  return e.id;
});
console.log(array3);

var array2 = array.map(function (e, index) {
  console.log(e);
});
console.log(array2);
