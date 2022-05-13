// function generateHtml(data){

    // console.log(data)
    // let cardArr = [];

    // for (let index = 0; i < data.length; index++) {
    // }
    const managerHtml = function(manager){
        if (manager.getRole() === "Manager"){
            return`
            <div class="col mb-4">
                <div class="card h-100">
                    <div class="card-body">
                        <h5 class="card-title">${manager.name}</h5>
                        <h6>${manager.getRole()}</h6>
                        <ul class="list-group">
                            <li class="list-group-item">ID: # ${manager.id}</li>
                            <li class="list-group-item">Email: <a href="mailto:james@yahoo.com">james@yahoo.com</a></li>
                            <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
                        </ul>
                    </div>
                </div>
            </div>
        `;
        }
        
    };


    
module.exports = team => {


    return`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<div class="">
<header class="pt-5 pl-2 p-5 bg-info">
    <h1 class="text-center">
        Team Profile Generator
    </h1>
    
</header>
<main class="p-5">
    <!-- https://getbootstrap.com/docs/4.4/components/card/ -->
    <div class="row row-cols-1 row-cols-md-3">
        ${team.map(emp=>managerHtml(emp))}
    </div>
</main>
</div>
    
</body>
</html>
    `
}

// module.exports = generateHtml


// {/* <div class="col mb-4">
//     <div class="card h-100">
//         <div class="card-body">
//             <h5 class="card-title">namesgoeshere</h5>
//             <h6>status</h6>
//             <ul class="list-group">
//                 <li class="list-group-item">ID: # </li>
//                 <li class="list-group-item">Email: <a href="mailto:james@yahoo.com">james@yahoo.com</a></li>
//                 <li class="list-group-item">School: school</li>
//             </ul>
//         </div>
//     </div>
// </div> */}