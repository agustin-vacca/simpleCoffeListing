import "./Card.css";
import PropTypes from "prop-types"; // Abajo definimos las propiedades

const Card = ({ coffee }) => {
  // Verificar si coffee existe y tiene elementos
  if (!coffee || coffee.length === 0) {
    return <div>No coffee data available.</div>;
  }

  function parsedInt(x) {
    const parsed = Number.parseInt(x, 10);
    if (Number.isNaN(parsed)) {
      return "No es un numero";
    }
    return parsed * 100;
  }

  return (
    <div className="container">
      {coffee.map((elem) => {
        
        // active === 'All' ? { elem = elements }
        // : {elem = elements.filter }

        return (
          <div key={elem.id} className="card">
            <img src={elem.image} alt={elem.name} className="image" />
            {elem.popular ? <span className="popular">Popular</span> : ""}
            <div className="description">
              <div className="desFirst">
                <p className="name"> {elem.name} </p>
                <p className="price"> {elem.price} </p>
              </div>

              <div className="desSecond">
                <a className="rating" href="#">
                  ⭐{parsedInt(elem.rating)}
                </a>
                <span className="votes"> ({elem.votes} votes) </span>

                {elem.available ? "" : <span className="sold"> sold out </span>}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

// Definir los PropTypes para el componente
Card.propTypes = {
  coffee: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      popular: PropTypes.bool,
      rating: PropTypes.number,
      votes: PropTypes.number,
      available: PropTypes.bool,
      // Aquí puedes agregar más validaciones para otras propiedades si es necesario
    })
  ).isRequired,
};

export default Card;
