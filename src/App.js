import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/hello">
          <h1>Hello</h1>
        </Route>
        <Route path="/movie/:id">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;



/*
import { useEffect } from "react";
import { useState } from "react";

function App(){
  const[loading, setLoading] = useState(true);
  const[movies, setMovies] = useState([]);

  const getMovies = async()=>{
    // const response = await fetch(
    //   `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
    // );

    // const json = await response.json();
    // setMovies(json.data.movies);
    // setLoading(false);

    const json = await(await fetch(
      `https://raw.githubusercontent.com/francisBae/TIL/master/list_movies.json`
    )).json();

    setMovies(json.data.movies);
    setLoading(false);


    };


  useEffect(()=>{
    // fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`)
    // .then((response)=>response.json())
    // .then((json)=>{
    //   // console.log(json);
    //   setMovies(json.data.movies);
    //   setLoading(false); //로딩 끝냈으므로

    // });
    getMovies();
  },[]);

  console.log(movies);

  return <div>
    {loading ? <h1>Loading...</h1>:<div>
      {movies.map((movie)=>(<div key={movie.id}>
        <img src={
          //movie.medium_cover_image
          `https://images.poster24x36.org/l-m/ironman.jpg`
        }/>
        <h2>{movie.title}</h2>
        <p>{movie.summary}</p>
        <ul>
          {movie.genres.map((genre)=>(
            <li key={genre}>{genre}</li>
          ))}
        </ul>
      </div>))}
  </div>}
  </div>;

          }

export default App;
*/
//


// import {useState, useEffect} from "react";

// function App(){
//   const [toDo, setToDo] = useState("");
//   const [toDos, setToDos] = useState([]);

//   const onChange = (event) => {
//     setToDo(event.target.value);
//   }


//   const onSubmit = (event) =>{
//     event.preventDefault();

//     if (toDo === ""){
//       return;
//     }
//     setToDos((currentArray)=>[toDo, ...currentArray]); //새로운 array return
//     //...을 하면 해당 array의 elements를 가져옴
//     setToDo("");
//   }

//   console.log(toDos);

//   return <div>
//     <h1>My ToDos ({toDos.length})</h1>
//     <form onSubmit={onSubmit}>
//       <input value={toDo} onChange={onChange} type="text" placeholder="Write your to do ..."/>
//       <button>Add To Do</button>
//     </form>
//     <hr />
//     <ul>
//       {toDos.map((item, index)=>(<li key={index}>{item}</li>))}
//     </ul>
//   </div>;
//   //item은 그냥 변수로 쓸 이름. 정해진 규칙은 없음
//   //첫번째 argument가 각 값
// }
// //map의 첫 arg는 value
// //2번째는 index

// export default App;