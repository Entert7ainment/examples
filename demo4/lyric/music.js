'use strict'
let music = [
   {title:"stop it", author:"taylor", pubdate:1973},
   {title:"is", author:"davis", pubdate:1974},
   {title:"going down", author:"royce", pubdate:1976}
];

//let get = (title) =>{
    //return books.find((item) => {
       // console.log(item);
       //return item.title == title;
    //});
   // return title;
//}
//console.log (get("it"));
//console.log(books[0].title)
//module.exports ={
   // get
//}


exports.get =(title)=>{
return music.find((item) =>{
    return item.title==title;
});    

}