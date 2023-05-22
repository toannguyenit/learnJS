/* Javascript */
// var listToDo = document.querySelector(".list-wrapper");

// var htmlList = `
//     <ul class="list">
//         <li class="list-item">a</li>
//         <li class="list-item">a</li>
//         <li class="list-item">a</li>
//         <li class="list-item">a</li>
//     </ul>
//  `;
//  listToDo.innerHTML = htmlList;

/* JQuery */
// const headingJQ = $(".heading");
// console.log($(".heading"));

// var htmlList

// function renderList(htmlList) {
//   $(".list").html(htmlList);
// }

// $(".btn-add").on("click", function () {
//   var giatrinhap = $("#input-value").val();
//   htmlList = htmlList + `<li class="list-item">${giatrinhap} </li>`
//   renderList(htmlList);
// });
var todoList = [
  {
    content: "Lam bai tap ve nha",
    finish: false,
  },
];
var students = {
  name: "song toan",
  age: 27,
  address: "HCM",
};

console.log(students);
$(".news").html(students.name);
