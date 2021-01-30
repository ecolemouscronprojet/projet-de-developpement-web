const edition = {};
edition.buttonEdit = jQuery("#button-edit");
edition.buttonCancelEdit = jQuery("#button-cancel-edit");

edition.showForm = (userId) => {
  edition.cleanForm();
  if (userId) {
    edition.populate(userId);
  }
  jQuery("#container-form").fadeIn();
  edition.buttonEdit.hide();
  edition.buttonCancelEdit.show();
};

edition.populate = (userId) => {
  const car = list.cars.find((car) => car.id === userId);
  if (car) {
    jQuery("#id").val(car.id);
    jQuery("#brand").val(car.brand);
    jQuery("#model").val(car.model);
  }
};

edition.cleanForm = () => {
  jQuery("#id").val("");
  jQuery("#brand").val("");
  jQuery("#model").val("");
};

edition.hideForm = () => {
  jQuery("#container-form").fadeOut();
  edition.buttonEdit.show();
  edition.buttonCancelEdit.hide();
};

edition.save = async (event) => {
  event.preventDefault();
  const id = jQuery("#id").val();
  const isEdition = id.length > 0;
  const brand = jQuery("#brand").val();
  const model = jQuery("#model").val();
  let url = `http://localhost:3000/api/cars`;
  if (isEdition) {
    url += `/${id}`;
  }

  try {
    const newCar = await jQuery.ajax({
      url,
      method: "POST",
      data: {
        brand,
        model,
      },
    });
    if (isEdition) {
      list.init();
    } else {
      list.importCarsInTable([newCar]);
    }
    edition.hideForm();
  } catch (error) {
    console.error(error);
  }
};
