function render() {
  let workers_div = document.querySelector("#workers");
  workers_div.innerHTML = "";
  fetch(`https://api.thecatapi.com/v1/images/search`)
    .then(res => res.json())
    .then(data =>
      data.forEach(item => {
        workers_div.innerHTML += `
        <div class="card m-5" style="width: 18rem;">
          <img src="${item.url}" class="card-img-top" width="300" height="300">
        </div>`;
      })
    );
}
render();

let btn_fetch = document.querySelector("#others");
btn_fetch.addEventListener("click", render);

let clicker_btn = document.querySelector("#like");
let clicker_count = document.querySelector("#like_count");
let count = 0;

clicker_btn.addEventListener("click", () => {
  (count += 1), (clicker_count.innerText = `${count} likes`);
});
