import "./App.css";
import { router } from "./routes";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import "./assets/css/main-alpha.css"
import './assets/css/reset.css';

function App() {
    return <div className="App">
      <RouterProvider router={router}/>
    </div>;
}

export default App;
