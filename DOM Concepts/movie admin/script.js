 
async function addmovie(){

  let title = document.getElementById('title').value;
  let year =  document.getElementById('year').value;
  let gener =  document.getElementById('gener').value;
  let image =  document.getElementById('image').value;
  let id =  document.getElementById('id').value;

  if(!title || !year || !gener || !image){
    alert("All field are required !")
  }else{

    let movie = {
      title : document.getElementById('title').value,
      year : document.getElementById('year').value,
      gener : document.getElementById('gener').value,
      image :  document.getElementById('image').value
    } // movie object

    if(id == ""){    

    let res = await fetch('https://moviedatabase-7ddef-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json',
    {
      method : 'POST',
      headers : {
        'Content-Type' : 'application/json'
      },
      body : JSON.stringify(movie)

    }) // fetch 
  } // if for add new movie
  else{

     let res = await fetch(`https://moviedatabase-7ddef-default-rtdb.asia-southeast1.firebasedatabase.app/movies/${id}.json`,
     {
      method : 'PATCH',
      headers : {
        'Content-Type' : 'application/json'
      },
      body : JSON.stringify(movie)
      
     })

  } // else for update exiting movie details
    showMovies()

    document.getElementById('title').value = "";
  document.getElementById('year').value = "";
  document.getElementById('gener').value = "";
  document.getElementById('image').value = "";
  document.getElementById('id').value = "";

  } // else

} //  addmovie

async function fetchmovie(){

   
   try {
     let res = await fetch('https://moviedatabase-7ddef-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json');
     let data = await res.json();
// console.log(data)
     if(!data){
          console.log("data are empty")
     }else{

      let array = [];
      for(let key in data){
        array.push(({id:key, ...data[key]}))
      } // for

      // console.log(array)

            return array;

     } // else
 
   } catch (error) {
        console.log(error);
        alert("Something wntn wrong !")
   }   
  
} // fetchmovie

 
 async function showMovies(){

  let array = await fetchmovie();
// console.log(array)
  let container = document.getElementById('movie-list');
      container.innerHTML = "";

      array.forEach(element => {
            let moviecart = document.createElement('div');

            moviecart.innerHTML = `        
                        <img src="${element.image}" alt="${element.title}">
                        <h4>${element.title}   (${element.year}) </h4> 
                       <button onclick="deletemovie('${element.id}')">Delete</button>
                       <button onclick="editmovie('${element.id}','${element.title}','${element.year}','${element.image}','${element.gener}')">Edit</button>
            `;
            container.appendChild(moviecart)
      });
  
} //  showMovies


async function deletemovie(movieId){
  alert ("Are you sure")
console.log(movieId)
  let res = await fetch(`https://moviedatabase-7ddef-default-rtdb.asia-southeast1.firebasedatabase.app/movies/${movieId}.json `,
  {
    method : 'DELETE'
  })
  showMovies()

} // deletemovie


async function editmovie(id,title,year,image,gener){

    document.getElementById('id').value = id;
    document.getElementById('title').value = title;
    document.getElementById('year').value = year;
    document.getElementById('image').value = image;
    document.getElementById('gener').value = gener;

} // editmovie


showMovies()