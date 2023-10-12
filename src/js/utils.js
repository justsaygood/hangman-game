export const darkModeHandle = () => {
  const modeSwitcher = document.getElementById("toggleDarkMode");
  const htmlEl = document.documentElement;

  if (localStorage.getItem("mode") === "dark") {
    htmlEl.classList.add("dark");
    modeSwitcher.checked = true;
  }

  modeSwitcher.addEventListener("input", () => {
    const htmlEl = document.documentElement;
    htmlEl.classList.toggle("dark");

    if (htmlEl.classList.contains("dark")) {
      localStorage.setItem("mode", "dark");
    } else {
      localStorage.setItem("mode", "light");
    }
  });
};
