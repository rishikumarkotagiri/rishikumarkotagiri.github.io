let bhuvioldinfo = {
    imageurl: "https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/article_images/2013/04/29/329127.gif?itok=SZN8Zu9e",
    name: "Bhuvaneshwar kumar",
    description: "cricketer from up"
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
    
        displayobject.imageurl = data.results[0].picture.large
        displayobject.description = data.results[0].gender
        document.getElementById("bhuvi").src = displayobject.imageurl;
        document.getElementById("huvaneshwar").innerHTML = displayobject.name;
        document.getElementById("descrip").innerHTML = displayobject.description;
    })
    
}