const URL = "https://jsonplaceholder.typicode.com/todos";
const main = document.getElementById("main");
main.innerHTML = "<p>Loading...";
fetch(URL)
  .then((response) => response.json())
  .then((tasks) => main.innerHTML = getListOfTasks(tasks));
const getListOfTasks = (tasks) => {
  const names = tasks
    .map((task) => `<li class="tbln"><input type="checkbox" onclick=countcheck() id=${task.id} class="tasktask" value=${task.title}>${task.title}</li>`)
    .join("\n");
return `<ul>${names}</ul>`;
};

 function countcheck(){
    function myDisplayer() {
        alert("Bravo!!!! , You completed 5 Tasks")
    }
    
    let Count = new Promise(function(myResolve, myReject) {
        var markedCheckbox = document.querySelectorAll('input[type="checkbox"]:checked');
        x=markedCheckbox.length;
   
        if (x == 5) {
        myResolve("OK");
        } 
    });
    
    Count.then(
        function() {myDisplayer();}
    );
}