const URL_COFFE_API =
  "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json";

export const CoffeeAll = (coffee, setCoffee) => {
  fetch(URL_COFFE_API)
    .then((res) => {
      // Verificar si la solicitud fue exitosa
      if (!res.ok) throw new Error("Error fetching fact");
      return res.json();
    })
    // Actualizar el estado con los datos recibidos
    .then((data) => setCoffee(data))

    // Manejar el error de manera adecuada, por ejemplo, mostrando un mensaje al usuario
    .catch((error) => {
      // Aquí podrías mostrar un mensaje de error al usuario o tomar otra acción
      console.error("Error fetching data:", error.message);
    });
};

export const CoffeAvailabel = (coffee, setCoffee) => {
  fetch(URL_COFFE_API)
    .then((res) => {
      // Verificar si la solicitud fue exitosa
      if (!res.ok) throw new Error("Error fetching fact");
      return res.json();
    })
    // Actualizar el estado con los datos recibidos
    .then((data) => {
      const available = data.filter( elem => elem.available === true )
      // console.log( 'este es available', available )
      setCoffee(available);
    })

    // Manejar el error de manera adecuada, por ejemplo, mostrando un mensaje al usuario
    .catch((error) => {
      // Aquí podrías mostrar un mensaje de error al usuario o tomar otra acción
      console.error("Error fetching data:", error.message);
    });
};
