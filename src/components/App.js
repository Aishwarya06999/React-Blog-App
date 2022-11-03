import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { BlogsCrudContextProvider } from "../context/blogsCrudContext"

import './App.css';
import BlogList from './BlogList';
import Header from './Header';
import AddBlog from './AddBlog';
import BlogDetails from './BlogDetails';
import EditBlog from './EditBlog';

function App() {
  return (
    <div className="ui container">
      <Router>
      <Header />
      <BlogsCrudContextProvider>
        <Routes>
          <Route
            path="/"
            exact
            element={<BlogList />}
          />
          <Route
            path="/add"
            element={<AddBlog/>}
          />
          <Route
            path="/edit"
            element = {<EditBlog />}
          />
          <Route path="/blog/:id" element={<BlogDetails/>} />
        </Routes>
      </BlogsCrudContextProvider>
      </Router>
    </div>
  );
}

export default App;
