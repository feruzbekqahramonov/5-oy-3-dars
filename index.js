let data = [
    {
      rec: 1,
      Name: "photo",
      img: "https://picsum.photos/seed/picsum/200/300",
    },
    {
      rec: 2,
      Name: "photo",
      img: "https://picsum.photos/200/300?grayscale",
    },
    {
      rec: 3,
      Name: "photo",
      img: "https://picsum.photos/200/300",
    },
    {
      rec: 4,
      Name: "photo",
      img: "https://picsum.photos/id/1/200/300",
    },
    {
      rec: 5,
      Name: "photo",
      img: "https://picsum.photos/id/23/200/300",
    },
  ];
  
  function displayRandomCar() {
    var bodyElement = document.body;
    var randomIndex = Math.floor(Math.random() * data.length);
    var car = data[randomIndex];
    var carDiv = document.createElement("div");
    carDiv.innerHTML =
      "<h3>" +
      car.Name +
      "</h3><img src='" +
      car.img +
      "' alt='" +
      car.Name +
      "'>";
    bodyElement.appendChild(carDiv);
}