import "./App.css";
import { useState } from "react";
import cityData from "./assets/asian-cities-data.json";
import City from "./components/City.js";
import Filters from "./components/Filters.js";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
cityData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  const [populationSort, setPopulationSort] = useState(false)
  const [currRegion, setRegion] = useState("All")
  const [currReligions, setReligions] = useState({})
  const [favorites, setFavorites] = useState({})
  const [displayFavorites, toggleDisplayFavorites] = useState(false)

  const matchesRegion = (city) => {
    if (currRegion === "All") {
      return true
    } else if (city.region === currRegion) {
      return true
    } else {
      return false
    }
  }

  const matchesReligion = (city) => {
    var matches = true;
    {Object.keys(currReligions).map((item, index) => ( 
      (!city.religions.includes(item) ? matches = false : null)
    ))}
    return matches

  }

  var data = null

  if (displayFavorites) {
    data = Object.keys(favorites).map((key, value) => (favorites[key]))
  } else {
    data = cityData
  }

  var filteredData = data.filter(matchesReligion).filter(matchesRegion)
  if (populationSort) {
    filteredData = filteredData.sort((a, b) => {return b.population - a.population})
  }

  return (
    <div className="App">
      <h1>Cities in Asia</h1>
      <div id="content">
        <div id="gallery">

        {filteredData.map((item, index) => (
          <p>
            <City key={index} item={item} favorites={favorites} setFavorites={setFavorites} />
            <br></br>
          </p>
        ))}
        </div>

        <Filters setPopulationSort={setPopulationSort} setRegion={setRegion} currReligions={currReligions} setReligions={setReligions} displayFavorites={displayFavorites} toggleDisplayFavorites={toggleDisplayFavorites} favorites={favorites} />
        </div>
    </div>
  );
}

export default App;
