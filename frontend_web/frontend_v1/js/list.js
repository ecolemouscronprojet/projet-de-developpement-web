const list = {};
list.getCars = () => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "http://localhost:3000/api/cars");

  xhr.responseType = "json";

  xhr.send();

  xhr.onload = () => {
    list.importDataInTable(xhr.response);
  };
};

list.importDataInTable = (data) => {
  const tbody = document.querySelector("table tbody");

  data.forEach((car) => {
    const row = tbody.insertRow();
    const id = row.insertCell(0);
    const brand = row.insertCell(1);
    const model = row.insertCell(2);

    id.innerHTML = car.id;
    brand.innerHTML = car.brand;
    model.innerHTML = car.model;
  });
};

document.getElementById("import").addEventListener("click", () => {
  list.getCars();
});
