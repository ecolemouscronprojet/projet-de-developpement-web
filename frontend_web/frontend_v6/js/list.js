const list = {};
list.carToRemove = null;
list.init = async () => {
  const cars = await list.getCars();
  list.importCarsInTable(cars);

  /*
  jQuery('#list-cars').on('click', '.remove-line', () => {
    console.log('TEST');
  });

  Jquery
    jQuery('.remove-line').click(function(){
        alert('yoo');
    });
  */

  /*
  Javascript natif
  for (let btn of document.getElementsByClassName("remove-line")) {
    btn.addEventListener("click", () => alert("test"));
  }*/
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

list.confirmRemove = (carId) => {
  list.carToRemove = carId;
  jQuery("#remove-line-modal").modal("toggle");
};

list.remove = async () => {
  const carId = list.carToRemove;
  try {
    await jQuery.ajax({
      url: `http://localhost:3000/api/cars/${carId}`,
      method: "DELETE",
    });
    jQuery(`[data-id="${carId}"]`).fadeOut("slow");
  } catch (error) {
    console.error(error);
    alert("Une erreur est survenue impossible de supprimer la voiture.");
  } finally {
    jQuery("#remove-line-modal").modal('hide');
  }


};

list.importCarsInTable = (cars) => {
  const tbody = jQuery("#list-cars tbody");

  tbody.append(
    cars.map((car) => {
      return `
    <tr data-id="${car.id}" >
        <td>${car.id}</td>
        <td>${car.brand}</td>
        <td>${car.model}</td>
        <td>
          <button onclick="list.confirmRemove(${car.id})" class="btn btn-danger remove-line">Supprimer</button>
        </td>
    </tr>
    `;
    })
  );
};

list.init();
