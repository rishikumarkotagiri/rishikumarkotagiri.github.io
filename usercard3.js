let Kalamoldinfo = {
    imageurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVS1XwYvv5qv2yacRfueVXin9v4JZR4Rd6rH2TwnqQWQ&usqp=CAU&ec=48600112",
    name: "Abdul Kalam",
    description: "Aerospace Scientist"
}


let displayobject = {
    name: "",
    imageurl:"",
    description:""
}; 
let getRandomUser = function(){
    fetch("https://randomuser.me/api")
    .then(response => response.json())
    .then(data=>{
        displayobject.name = data.results[0].name.first + " " + data.results[0].name.last
        // displayobject.name = "User Name"
        displayobject.imageurl = data.results[0].picture.large
        displayobject.description = data.results[0].gender
        document.getElementById("kalam").src = displayobject.imageurl;
        document.getElementById("abdulKalam").innerHTML = displayobject.name;
        document.getElementById("descrip").innerHTML = displayobject.description;
    })
    
}