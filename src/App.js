import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Card from './components/Card';
// import { BrowserRouter, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Header />
      <div className='cards'>
        <Card imgUrl="https://cdn.langeek.co/photo/43856/original/something-vs-some-thing"
          title="asmer chougle"
          disc="jadfjshaohbvbladhsvbb aijsdb fasvblv aflivhavl vhv"
          tags="HTML | CSS | JS | React"
        />

      </div>


    </>
  );
}

export default App;
