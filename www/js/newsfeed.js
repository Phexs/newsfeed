//Initialize the Library 
const news = new NewsLibrary; 

//Initialize the UI
// const ui = new UI();

// Get news Appon Roading the App 
document.addEventListener('DOMContentLoaded', getnews);

//Get data 
function getnews(){
    news.getNews()
        .then(data =>{
         console.log(data)
        //  ui.printData(data);
   let output = '';
  //  let author = '';
  //  let title = '';
  //  let desc = '';
data.forEach(post => {
  output += ` <img src="${post.urlToImage}" width="300px" > </img>`
  output += `<div class="card" id="output">${post.author}</div>`;
  output += `<div class="card" id="output">${post.title}</div>`;
  output += `<div class="card" id="output">${post.description}</div>`;

})
document.getElementById('output').innerHTML += '<br>' + output;
    
})
.catch(err => console.log(err));
}

// 89629d684fbc4e59bac9a9ed95f2d196
// const url = 'https://newsapi.org/v2/top-headlines?'+'country=us&v'+'apiKey=89629d684fbc4e59bac9a9ed95f2d196';
// const req = new Request(url);
//  function getApi(){
//    fetch('https://newsapi.org/v2/top-headlines?'+'country=us&'+'apiKey=89629d684fbc4e59bac9a9ed95f2d196')
//               .then(function(res){
              
//                   return res.json();
//               })  
//               .then(function(data){
                  
//                   let output = "";
                  
//                   for(i = 0;i < data;i++){
//                     console.log(data);

//                       data.forEach(function(post){
//                               output += `<div class="card" id="output">${post.articles}</div>`;
//                           // output += ` <li> ${post.login}</li>`;
//                           // output += ` <img src="${user.avatar_url}"> </img>`;
//                       });
//                   }
//                   document.getElementById('output').innerHTML = output;
//               });
//             }
//             getApi();


// const getPosts = ()=> {
//   return fetch('https://newsapi.org/v2/top-headlines?'+'country=us&'+'apiKey=89629d684fbc4e59bac9a9ed95f2d196')
//   .then(res => res.json())
//   .then(posts =>{
//     console.log(posts)
    
  
//   })
// }


// fetch(req)
//   .then(response => {
//     return response.json()
//   })
//   .then(function (data) {
//     console.log(data);
//     let output = '';
    
//     data.forEach(post => {
//         output += `<div class="card" id="output">${post.articles}</div>`;
//         console.log(output);
//     })
//     document.getElementById('output').innerHTML = output;
// })
// .catch(err => {
//    console.log(err);
// })


// async function getNews(){
//     const response = await fetch (req);
//     const data = await response.json();
//     return data;
// }
// getNews().then( data => {
//     console.log(data);
//     let output = '';
//     data.forEach(post => {
//         output += `<div class="card" id="output">${post.articles}</div>`;
//     });
//     document.getElementById('output').innerHTML += output;
// }); 


