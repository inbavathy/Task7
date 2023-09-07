import Home from "./components/Home";
import Auth from "./components/auth";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
function App(){
    return(
        <div className="App">
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<Auth/>}/>
                <Route path="/home" element={<Home/>}/>
                </Routes>
                </BrowserRouter>
        </div>
    );
}
export default app;
