const switcher = window.location.pathname;

function cardGenerator(
  img,
  title,
  description,
  location,
  bedrooms,
  price,
  allowSmoke,
  allowPets
) {
  return `<section>
                    <img src="${img}" alt="image card">
                    <h1>${title}</h1>
                    <p>${description}</p>
                    <p>${location}</p>
                    <p>${bedrooms}</p>
                    <p>${price}</p>
                    <div>
                        ${allowSmoke ? "<i>Si fumar</i>" : "<i>No fumar</i>"}
                        ${
                          allowSmoke
                            ? "<small>Si puedes</small>"
                            : "<small>No puedes</small>"
                        }    
                    </div>
                    <div>
                        ${
                          allowPets
                            ? "<i>Si Mascotas</i>"
                            : "<i>No Mascotas</i>"
                        }
                        ${
                          allowPets
                            ? "<small>Si puedes</small>"
                            : "<small>No puedes</small>"
                        }
                    </div>
            </section>`;
}

if (switcher === "/index.html") {
  const ventas_container = document.querySelector("#cards_ventas_container");
  const alquiler_container = document.querySelector(
    "#cards_alquiler_container"
  );

  const ventas = propiedades_venta.splice(4, 3);

  ventas.forEach(
    ({
      nombre,
      src,
      descripcion,
      ubicacion,
      habitaciones,
      costo,
      smoke,
      pets,
    }) =>
      (ventas_container.innerHTML += cardGenerator(
        src,
        nombre,
        descripcion,
        ubicacion,
        habitaciones,
        costo,
        smoke,
        pets
      ))
  );

  const alquiler = propiedades_alquiler.splice(0, 3);

  alquiler.forEach(
    ({
      nombre,
      src,
      descripcion,
      ubicacion,
      habitaciones,
      costo,
      smoke,
      pets,
    }) =>
      (alquiler_container.innerHTML += cardGenerator(
        src,
        nombre,
        descripcion,
        ubicacion,
        habitaciones,
        costo,
        smoke,
        pets
      ))
  );
} else if (switcher === "/venta.html") {
  const ventas_container = document.querySelector("#cards_ventas_container");

  propiedades_venta.forEach(
    ({
      nombre,
      src,
      descripcion,
      ubicacion,
      habitaciones,
      costo,
      smoke,
      pets,
    }) =>
      (ventas_container.innerHTML += cardGenerator(
        src,
        nombre,
        descripcion,
        ubicacion,
        habitaciones,
        costo,
        smoke,
        pets
      ))
  );
} else if (switcher === "/alquiler.html") {
  const alquiler_container = document.querySelector(
    "#cards_alquiler_container"
  );

  propiedades_alquiler.forEach(
    ({
      nombre,
      src,
      descripcion,
      ubicacion,
      habitaciones,
      costo,
      smoke,
      pets,
    }) =>
      (alquiler_container.innerHTML += cardGenerator(
        src,
        nombre,
        descripcion,
        ubicacion,
        habitaciones,
        costo,
        smoke,
        pets
      ))
  );
}
