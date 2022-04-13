import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import history from "../history";
import Header from "./Header";
import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter history={history}>
        <Header />
        <Routes>
          <Route path="/" exact element={<StreamList />}></Route>
          <Route path="/streams/new" element={<StreamCreate />}></Route>
          <Route
            path="/streams/delete"
            element={<StreamDelete />}
          ></Route>
          <Route
            path="/streams/edit/:id"
            element={<StreamEdit />}
          ></Route>
          <Route path="/streams/show" element={<StreamShow />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
