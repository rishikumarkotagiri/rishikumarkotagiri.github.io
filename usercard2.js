// let bhuvioldinfo = {
//     imageurl: "https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/article_images/2013/04/29/329127.gif?itok=SZN8Zu9e",
//     name: "bhuvi",
//     description: "sunrisers hyderabad cricketer"
// }

let bhuviinfo={
    imageurl: "https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/article_images/2013/04/29/329127.gif?itok=SZN8Zu9e",
    name: "Bhuvaneshwar Kumar",
    description: "swing king of india"
}

let isbhuvioldinfo = true;
let displayobject;
let flipdata = function(){
    if(isbhuvioldinfo==true){
        displayobject = bhuviinfo;
        isbhuvioldinfo = false;
    }
    else{
        displayobject = bhuvioldinfo;
        isbhuvioldinfo = true;
    }
    document.getElementById("bhuvi").src = displayobject.imageurl;
    document.getElementById("bhuvaneshwarkumar").innerHTML = displayobject.name;
    document.getElementById("descrip").innerHTML = displayobject.description;


}