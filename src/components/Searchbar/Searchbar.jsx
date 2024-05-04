import "./Searchbar.css";
import PropTypes from 'prop-types';

const Searchbar = ({ active, setActive }) => {

  const SearchAll = () => {
    if (active !== 'All')
      setActive('All')
  };

  const SearchAvailabel = () => {
    if (active !== 'Availabel')
      setActive('Availabel')
  };

  return (
    <div className="search">
      <button 
      onClick={() => SearchAll()} 
      className={ active === 'All' ? 'active' : ''} 
      id="All">
        All Products
      </button>
      <button
        onClick={() => SearchAvailabel()}
        className={ active === 'Availabel' ? 'active' : ''}
        id="Availabel"
      >
        Available Now
      </button>
    </div>
  );
};

// Definir los PropTypes para el componente
Searchbar.propTypes = {
  active: PropTypes.string.isRequired,
  setActive: PropTypes.func.isRequired,
};

export default Searchbar;



// EL MOCO ASQUEROSO Q HICE

// const SearchAll = () => {
//   const {id} = document.getElementById("All")
//   // Pasa de largo xq no toca boton All
//    if (id !== "All") return console.log(active);
//   // Si toca boton All, cambia y su clase esta activa
//   //  console.log(id);
//    else if ( active === 'All') {
//     document.getElementById("All").classList.toggle("active");
//     document.getElementById("Availabel").classList.toggle("active");
//     setActive("Availabel");
//     console.log(active);
//     // Si toca boton All, cambia y su clase esta desactivada
//   } else {
//     setActive("All");
//     // document.getElementById("All").classList.toggle("active");
//     // document.getElementById("Availabel").classList.toggle("active");
//   }

// };

// const SearchAvailabel = () => {
//   if (active === "All") return
//    else if (active === "Availabel") {
//     document.getElementById(active).classList.toggle("active");
//     setActive("Availabel");
//     console.log(active);
//   } else {
//     setActive("Availabel");
//     document.getElementById(active).classList.toggle("active");
//   }
// };

// return (
//   <div className="search">
//     <button onClick={() => SearchAll()} className="active" id="All">
//       All Products
//     </button>
//     <button
//       onClick={() => SearchAvailabel()}
//       value="Availabel"
//       id="Availabel"
//     >
//       Available Now
//     </button>
//   </div>
// );