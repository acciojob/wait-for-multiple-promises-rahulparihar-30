//your JS code here. If required.
const createPromise = () => {
  let time = Math.floor((Math.random() * 3) + 1)
  return new Promise((resolve, rejcet) => {
    setTimeout(() => resolve(time), time * 1000);
  })
}

const [promise1, promise2, promise3] = [createPromise(), createPromise(), createPromise()];

Promise.all([promise1, promise2, promise3]).then((data) => {
  let table = document.getElementById("output");
  data.map((time, index) => {
    table.innerHTML += `
      <tr>
      <td>Promise ${index + 1}</td>
      <td>${time}</td>
      </tr>
    `
  });
});