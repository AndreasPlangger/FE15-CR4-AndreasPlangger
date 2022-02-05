var classbt = "bg-success";

let tasks = JSON.parse(taskList);

for (let i = 0; i < 3; i++) {
    // {
    //     if (2 <= tasks[i].importance <= 3) {
    //         classbt = "bg-warning"
    //     }
    //     else { classbt = "bg-danger" };
    // }
    document.getElementById('row1').innerHTML += `
    <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12">
    <div class="card text-center border border-primary shadow-0" style="background-color:#ffffff;">
        <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
            <div>
                <span class="card-right"><i class="far fa-bookmark"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i
                        class="fas fa-ellipsis-v"></i></span><span class="card-left">Task</span>
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
            <p><i class="fas fa-exclamation-triangle"></i> Priority level: <button type="button" class="increment-btn ${classbt} counter"><span id="${i}">${tasks[i].importance}</span></button></p>
            <p><i class="far fa-calendar-alt"></i> Deadline: ${tasks[i].deadline}</p>
            <hr>
            <button type="button" class="btn btn-danger"><i class="far fa-trash-alt"></i> Delete</button>
            <button type="button" class="btn btn-success"><i class="far fa-check-circle"></i> Done</button>
        </div>
    </div>
    </div>`;
}

var button = document.getElementsByClassName('increment-btn');


for (let i = 0; i < 3; i++) {
    button[i].addEventListener('click', function () {
        increment(i)
    }, false);
}
function increment(i) {
    console.log(tasks, i);
    tasks[i].importance += 1;
    var counter = document.getElementById(`${i}`);
    counter.innerHTML = tasks[i].importance
}
for (let i = 3; i < 6; i++) {

    // var classbt = "bg-danger";
    // if (books[i].read == "true") {
    //     classbt = "bg-success";

    document.getElementById('row2').innerHTML += `
    <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12">
    <div class="card text-center border border-primary shadow-0" style="background-color:#ffffff;">
        <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
            <div>
                <span class="card-right"><i class="far fa-bookmark"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i
                        class="fas fa-ellipsis-v"></i></span><span class="card-left">Task</span>
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
            <p><i class="fas fa-exclamation-triangle"></i> Priority level: <span class="${classbt}">${tasks[i].importance}</span></p>
            <p><i class="far fa-calendar-alt"></i> Deadline: </p>
            <hr>
            <button type="button" class="btn btn-danger"><i class="far fa-trash-alt"></i> Delete</button>
            <button type="button" class="btn btn-success"><i class="far fa-check-circle"></i> Done</button>
        </div>
    </div>
    </div>`;
}
for (let i = 6; i < 9; i++) {

    // var classbt = "bg-danger";
    // if (books[i].read == "true") {
    //     classbt = "bg-success";
    document.getElementById('row3').innerHTML += `
    <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12">
    <div class="card text-center border border-primary shadow-0" style="background-color:#ffffff;">
        <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
            <div>
                <span class="card-right"><i class="far fa-bookmark"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i
                        class="fas fa-ellipsis-v"></i></span><span class="card-left">Task</span>
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
            <p><i class="fas fa-exclamation-triangle"></i> Priority level: <span class="${classbt}">${tasks[i].importance}</span></p>
            <p><i class="far fa-calendar-alt"></i> Deadline: </p>
            <hr>
            <button type="button" class="btn btn-danger"><i class="far fa-trash-alt"></i> Delete</button>
            <button type="button" class="btn btn-success"><i class="far fa-check-circle"></i> Done</button>
        </div>
    </div>
    </div>`;
}
