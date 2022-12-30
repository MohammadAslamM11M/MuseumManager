import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/pages/Dashboard";
import Archives from "./components/pages/Archives";
import Entry from "./components/pages/Entry";
import "./App.css";

function App() {
    return (
        <div className="App admin-background">
            <BrowserRouter>
                <Sidebar>
                    <Routes>
                        <Route path="/" element={<Dashboard />} exact />
                        <Route path="/archives" element={<Archives />} exact />
                        <Route path="/entry" element={<Entry />} exact />
                        {/* <Navigate to="/" replace={true} /> */}
                    </Routes>
                </Sidebar>
            </BrowserRouter>
        </div>
    );
}

export default App;
