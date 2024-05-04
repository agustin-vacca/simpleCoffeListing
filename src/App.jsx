import { useEffect, useState } from "react";
// ESTILOS
import "./App.css";
// COMPONENTES
import Card from "./components/Card/Card";
import Searchbar from "./components/Searchbar/Searchbar";
import { CoffeeAll, CoffeAvailabel } from "./store/store";

// const URL_COFFE_API = "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json";

function App() {
  const [ coffee, setCoffee ] = useState([]);
  const [ active, setActive ] = useState('All')

  useEffect(() => {
    active === 'All' 
      ? CoffeeAll(coffee, setCoffee)
      : CoffeAvailabel(coffee, setCoffee)
  },[active]);

  return (
    <main>
      <section>
        <div className="menu">
          <h1> Our Collection </h1>
          <h3>
            Introducing our Coffee Collection, a selection of unique coffees
            from different roast types and origins, expertly roasted in small
            batches and shipped fresh weekly.
          </h3>
        </div>

        <Searchbar setActive={setActive} active={active} />
        <Card coffee={coffee} />
        
      </section>
    </main>
  );
}

export default App;
