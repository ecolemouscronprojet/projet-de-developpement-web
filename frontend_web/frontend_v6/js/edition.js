const edition = {};
edition.buttonEdit = jQuery('#button-edit');
edition.buttonCancelEdit = jQuery('#button-cancel-edit');

edition.showForm = () => {
    jQuery('#container-form').fadeIn();
    edition.buttonEdit.hide();
    edition.buttonCancelEdit.show();
}

edition.cleanForm = () => {
    jQuery('#container-form').fadeOut();
    edition.buttonEdit.show();
    edition.buttonCancelEdit.hide();
}

edition.save = async (event) => {
    event.preventDefault();
    const brand = jQuery('#brand').val();
    const model = jQuery('#model').val();
    try {
        const newCar = await jQuery.ajax({
            url: `http://localhost:3000/api/cars`,
            method: "POST",
            data: {
                brand,
                model,
            }
        });
        list.importCarsInTable([newCar]);
        edition.cleanForm();
    } catch(error) {
        console.error(error);
    }
    
}