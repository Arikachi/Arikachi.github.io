import data from "./data.js";
console.log(data);

let container1 = document.querySelector(".container1");

function a() {
  data.forEach((item) => {
    console.log*(item)
    container1.innerHTML += `
                            <column class="container">
                                <div class = "cardodesu">
                                    <div class="player">
                                        <p>Seed: ${item.seed}</p>
                                        <img src="flag.png">
                                    </div>
                                    <img class="avatar" src=${item.avatar}>
                                    <div class="name">${item.name}</div>
                                    <img class="one" src="card.png"/>
                                </div>
                            </column>`;
  });
}

a();