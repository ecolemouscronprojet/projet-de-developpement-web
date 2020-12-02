const list = {};

list.init = async () => {
  const cars = await list.getCars();
  list.importCarsInTable(cars);
};

list.getCars = () => {
  return jQuery
    .ajax({
      url: "http://localhost:3000/api/cars",
      method: "GET",
    })
    .catch((error) => {
      console.warn(error);
      return [];
    });
};

list.importCarsInTable = (cars) => {
  const tbody = jQuery("#list-cars tbody");

  tbody.append(
    cars.map((car) => {
      return `
    <tr>
        <td>${car.id}</td>
        <td>${car.brand}</td>
        <td>${car.model}</td>
        <td> - </td>
    </tr>
    `;
    })
  );
};

list.init();
