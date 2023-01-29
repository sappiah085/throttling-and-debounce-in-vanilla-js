const arrayOfNames = [
  "Kwame",
  "Kwesi",
  "kofi",
  "Yaw",
  "Amena",
  "Bobe",
  "Kwaw",
  "paa",
  "Neha",
];
function api(query) {
  let num = 0;
  console.log("API called : ", (num += 1));
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const sort = arrayOfNames.filter((el) =>
        el.toLowerCase().includes(query.toLowerCase())
      );
      resolve(sort);
    }, 300);
  });
}
function debounce(func, delay = 3000) {
  let timerOut,
    number = 0;
  return (e) => {
    console.log("I am called : ", (number += 1));
    clearTimeout(timerOut);
    timerOut = setTimeout(() => {
      func(e.target.value).then((res) => console.log(res));
    }, delay);
  };
}
function throttle(func, delay = 2000) {
  let wait = false;
  return (e) => {
    if (wait) return;
    func(e.target.value).then((re) => console.log(re));
    wait = true;
    setTimeout(() => {
      wait = false;
    }, delay);
  };
}
const input = document.querySelector("input");
input.addEventListener("input", throttle(api));
