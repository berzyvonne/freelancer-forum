const freelancers = [
  { name: "Dr. Slice", price: 25, occupation: "gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "programmer" },
  { name: "Prof. Possibility", price: 43, occupation: "teacher" },
  { name: "Prof. Prism", price: 81, occupation: "teacher" },
  { name: "Dr. Impulse", price: 43, occupation: "teacher" },
  { name: "Prof. Spark", price: 76, occupation: "programmer" },
  { name: "Dr. Wire", price: 47, occupation: "teacher" },
  { name: "Prof. Goose", price: 72, occupation: "driver" },
];
const maxFreeLancers = 8;

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
}

function addLancers() {
  const randomLancerIndex = Math.floor(Math.random() * freelancers.length);
  const randomLancer = freelancers[randomLancerIndex];
  freelancers.push({
    name: randomLancer.name,
    price: randomLancer.price,
    occupation: randomLancer.occupation,
  });
  render();
  if (freelancers.length >= maxFreeLancers) {
    clearInterval(addfreeLancers);
  }
}

const addfreeLancers = setInterval(addLancers, 1000);

render();
