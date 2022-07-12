import './App.css';
import Divider from './components/Divider';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Shorts from './components/Shorts';
import Keywords from './components/Keywords';
import Posts from './components/Posts';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Keywords />
      <Banner />
      <Divider />
      <Posts/>
      <Shorts />
      <Sidebar />
    </div>
  );
}

export default App;
