'use strict'
let books = [
   {title:"dune", author:"frank", pubdate:1969},
   {title:"it", author:"steve", pubdate:1989},
   {title:"moby dick", author:"james", pubdate:1869}
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
return books.find((item) =>{
    return item.title==title;
});    

}