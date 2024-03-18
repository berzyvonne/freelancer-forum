const freelancers = [
  { name: "Alice", price: 30, occupation: "Writer" },
  { name: "Bob", price: 50, occupation: "Teacher" },
];

const names = ["Carol", "Doug", "Steve"];
const occupations = ["Programmer", "Musician", "Painter"];
const prices = [70, 30, 25];

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const maxFreeLancers = 10;

function render() {
  const freeLancerTable = freelancers.map((lancer) => {
    const element = document.createElement("li");
    element.textContent = `${lancer.name} - ${lancer.price} - ${lancer.occupation}`;
    return element;
  });

  const container = document.querySelector("#freelancer-table");
  container.innerHTML = "";

  freeLancerTable.forEach((element) => {
    container.appendChild(element);
  });

  const totalPrices = freelancers.reduce(
    (accumulator, current) => accumulator + current.price,
    0
  );
  const averagePrice = totalPrices / freelancers.length;

  const averageElement = document.createElement("li");
  averageElement.textContent = `Average Price: $${averagePrice.toFixed(2)}`;
  container.appendChild(averageElement);
}
function addLancers() {
  const randomName = names[getRandom(0, names.length)];
  const randomOccupation = occupations[getRandom(0, occupations.length)];
  const randomPrice = prices[getRandom(0, prices.length)];
  const newFreelancer = {
    name: randomName,
    occupation: randomOccupation,
    price: randomPrice,
  };

  freelancers.push(newFreelancer);

  render();

  if (freelancers.length >= maxFreeLancers) {
    clearInterval(addfreeLancers);
  }
}

const addfreeLancers = setInterval(addLancers, 5000);

render();
