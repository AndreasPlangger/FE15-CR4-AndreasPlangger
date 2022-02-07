var classbt = "bg-success";

let tasks = JSON.parse(taskList);

for (let i = 0; i < tasks.length; i++) {

    document.getElementById('row').innerHTML += `
    <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12">
    <div class="card text-center border border-primary shadow-0" style="background-color:#ffffff;">
        <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
            <div class="topline">
                <span class="card-left">Task</span>    
                <span class="card-right"><i class="far fa-bookmark"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fas fa-ellipsis-v"></i></span>
            </div>
            <img src="${tasks[i].image}" class="img-fluid" />
            <a href="#!">
                <div class="mask" style="background-color: rgba(251, 251, 251, 0.15)"></div>
            </a>
        </div>
        <div class="card-body">
            <h5 class="card-title">${tasks[i].taskName}</h5>
            <p class="card-text">${tasks[i].description}
            </p>
            <hr>
            <p><i class="fas fa-exclamation-triangle"></i> Priority level: <button type="button" class="increment-btn ${classbt} counter"><span class="beta" id="${i}">${tasks[i].importance}</span></button></p>
            <p><i class="far fa-calendar-alt"></i> Deadline: ${tasks[i].deadline}</p>
            <hr>
            <button type="button" class="btn btn-danger"><i class="far fa-trash-alt"></i> Delete</button>
            <button type="button" class="btn btn-success"><i class="far fa-check-circle"></i> Done</button>
        </div>
    </div>
    </div>`;
}



var button = document.getElementsByClassName('increment-btn');

for (let i = 0; i < tasks.length; i++) {
    button[i].addEventListener('click', function () {
        increment(i)
        // color(i)
    }, false);
}
function increment(i) {
    tasks[i].importance += 1;
    console.log(tasks[i].importance);
    if (tasks[i].importance > 3) {
        document.getElementsByClassName("increment-btn")[i].setAttribute("class", "increment-btn bg-danger");
    }
    var counter = document.getElementById(`${i}`);
    counter.innerHTML = tasks[i].importance;
    sorttest
}

var val = document.getElementsByClassName('beta').outerText
function sorttest() {
    tasks.sort((a, b) => a.importance - b.importance);
    console.log(tasks);
}

// var colorc = document.getElementsByClassName('beta');

// for (let i = 0; i < tasks.length; i++) {

//     function color(i) {
//         if (colorc.outerText > 1 && colorc.outerText < 4) {
//             classbt = "bg-warning";
//         }
//         if (colorc.outerText > 4) {
//             classbt = "bg-danger";
//         }
//     }
// }


// for (let i = 0; i < tasks.length; i++) {

//     function colorChange(i) {
//         if (tasks[i].importance > 1 && tasks[i].importance < 4) {
//             classbt = "bg-warning";
//         }
//         if (tasks[i].importance > 4) {
//             classbt = "bg-danger";
//         }
//     }
// }
