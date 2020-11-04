import React from "react";
import "./App.css";
import Main from "./Views/Main";

//const Main = lazy(() => import("./Views/Main"));

export default function App() {
  return (
    //  <Suspense fallback={<h1>Loading</h1>}>
    <Main />
    //</Suspense>
  );
}
