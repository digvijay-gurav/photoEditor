import './App.css';
import imagOne from "./images/imageOne.png";
import PhotoEditor from "./component/photoEditor";
function App() {
  return (
    <div className="App">
      <PhotoEditor src={imagOne} />
    </div>
  );
}

export default App;
