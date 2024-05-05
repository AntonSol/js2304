import { start } from "../../data.js";

export function Settings() {
  const element = document.createElement("div");

  const startButton = document.createElement("button");
  startButton.append("Start");

  startButton.addEventListener("click", () => {
    start();
  });

  element.append(startButton);

  return element;
}
export function Size() {
  const gridSize = document.createElement("div");

  // Создаем выпадающий список
  const select = document.createElement("select");

  // Создаем опции для выбора размера поля
  const option1 = document.createElement("option");
  option1.value = "10x10";
  option1.textContent = "10x10";

  const option2 = document.createElement("option");
  option2.value = "15x15";
  option2.textContent = "15x15";

  const option3 = document.createElement("option");
  option3.value = "20x20";
  option3.textContent = "20x20";

  // Добавляем опции в выпадающий список
  select.append(option1);
  select.append(option2);
  select.append(option3);

  // Добавляем выпадающий список на страницу
  gridSize.append(select);

  return gridSize;
}

export function PointsToWin() {
  const points = document.createElement("div");

  // Создаем выпадающий список
  const select = document.createElement("select");

  // Создаем опции для выбора очков
  const option1 = document.createElement("option");
  option1.value = "5";
  option1.textContent = "5";

  const option2 = document.createElement("option");
  option2.value = "10";
  option2.textContent = "10";

  const option3 = document.createElement("option");
  option3.value = "15";
  option3.textContent = "15";

  // Добавляем опции в выпадающий список
  select.append(option1);
  select.append(option2);
  select.append(option3);

  // Добавляем выпадающий список на страницу
  points.append(select);

  return points;
}
export function MaximumMisses() {
  const points = document.createElement("div");

  // Создаем выпадающий список
  const select = document.createElement("select");

  // Создаем опции для выбора очков
  const option1 = document.createElement("option");
  option1.value = "5";
  option1.textContent = "5";

  const option2 = document.createElement("option");
  option2.value = "10";
  option2.textContent = "10";

  const option3 = document.createElement("option");
  option3.value = "15";
  option3.textContent = "15";

  // Добавляем опции в выпадающий список
  select.append(option1);
  select.append(option2);
  select.append(option3);

  // Добавляем выпадающий список на страницу
  points.append(select);

  return points;
}
