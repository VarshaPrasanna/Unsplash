import { useState } from "react";
import axios from "axios";
import './App.css'
import { AiOutlineSearch } from 'react-icons/ai';

function App() {
  const [image, setImage] = useState("");
  const accessKey = "1ZyxvzwBWMOXYQsdvPRxLjsCnrlxioS1JrZh6k0-Icw";
  const [output, setOutput] = useState([]);
  const handleChange = (event) => {
    setImage(event.target.value);
  };
  const handleSubmit = () => {
    const url = "https://api.unsplash.com/search/photos?page=1&query=" +
      image + "&client_id=" + accessKey;
    axios.get(url).then((response) => {
      setOutput(response.data.results);
      console.log(response.data.results)
    });
  };


  return (
    <>
      <div className="app">
        <div className="output">
          {output.map((image) => (
            <>
              <div className="card">
                <img src={image.urls.small} />
              </div>
            </>
          ))}
        </div>
        <div className="input">

          <div className="search-box">
            <input className="search-txt" onChange={handleChange} type="text" name="image" placeholder="Type to search images" />

            <button className="search-btn" onClick={handleSubmit} type="submit">
              <AiOutlineSearch />
            </button>


          </div>
        </div>
      </div>
    </>
  )
}
export default App