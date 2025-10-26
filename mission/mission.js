const themeSelector = document.querySelector("#theme");
const logo = document.querySelector("#logo");

function changeTheme() {
  if (themeSelector.value === "dark") {
    document.body.classList.add("dark");
    logo.src = "byui-logo_white.webp"; // <-- Make sure you have this image
  } else {
    document.body.classList.remove("dark");
    logo.src = "byui-logo_blue.webp";
  }
}

themeSelector.addEventListener("change", changeTheme);