import React from 'react'
import {Routes, Route } from 'react-router-dom';
import DataFetching from './components/DataFetchTask'
import EditPage from "./components/Edit"
import ViewPage from "./components/view"
import PostDetails from'./components/PostDetails'
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <div className="App">
      
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/post">Post</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="edits/:edit">Edit</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="view/:view" >view</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    <Routes>
      <Route path='/' element={ <DataFetching />} />
      <Route path='/post' element={<PostDetails/>} />
      <Route path='edits/:edit' element={<EditPage/>} />
      <Route path ="view/:view" element={<ViewPage />} />
    </Routes>
    
    </div>
  );
}

export default App;
