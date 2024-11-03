import './App.css';
import {data} from './sampleData';
import LandingPage from "./pages/LandingPage/LandingPage";
import Footer from "./components/Footer/Footer";
import Background from "./components/Background/Background";
import Header from "./components/Header/Header";

function App() {
    return (
        <div className="App">
            <Background/>
            <Header/>
            <LandingPage questionData={data}/>
            <Footer/>
        </div>
    );
}

export default App;
