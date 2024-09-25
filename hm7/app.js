let originalArray = [1500, 400, 800, 750, 250, 8000, 150, 640, 100, 370];

function buildArrayItem(value = 0) {
    let div = document.createElement("div");
    div.className = "array-item";
    div.textContent = value;
    return div;
}

function renderArray(array, container) {
    container.innerHTML = "";
    const $arrayItems = array.map(buildArrayItem);
    container.append(...$arrayItems);
}

let $originalArray = document.querySelector("#original .array");
renderArray(originalArray, $originalArray);

let $updatedArray = document.querySelector("#updated .array");
renderArray(["?", "?", "?"], $updatedArray);

document.addEventListener("click", function (event) {
    if (event.target.tagName !== "BUTTON") return;
    let action = event.target.textContent;
    if (action === "Sale 40%") {
        let updatedArray = originalArray.map((item) => item * 0.6);
        renderArray(updatedArray, $updatedArray);
    } else if (action === "In tenge") {
        let updatedArray = originalArray.map((x) => Math.round(x / 0.18)); // Примерный курс
        renderArray(updatedArray, $updatedArray);
    } else if (action === "filter < 1000") {
        let updatedArray = originalArray.filter((item) => item < 1000);
        renderArray(updatedArray, $updatedArray);
    } else if (action === "filter /100") {
        let updatedArray = originalArray.filter((item) => item % 100 === 0);
        renderArray(updatedArray, $updatedArray);
    }    else if (action === "reduce max") {
        let updatedArray = originalArray.reduce((max, item) => {
            if (item > max) {
                return item;
            } else {
                return max;
            }
        });
        renderArray([updatedArray], $updatedArray);
    } else if (action === "reduce min") {
        let updatedArray = originalArray.reduce((min, item) => {
            if (item < min) {
                return item;
            } else {
                return min;
            }
        });
        renderArray([updatedArray], $updatedArray);
    }
});

