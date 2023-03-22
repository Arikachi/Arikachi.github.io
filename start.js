import data from "./data.js";
console.log(data);

let container1 = document.querySelector(".container1");

function a() {
  data.slice().reverse().forEach((item) => {
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
                                    <div class="team">${item.team}</div>
                                    <img class="one" src="${item.card}.png"/>
                                </div>
                            </column>`;
  });
}

a();