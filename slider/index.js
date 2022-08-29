const slider = document.getElementById("goji-bar");
const anchor = document.getElementById("goji-link");
const url = new URL("https://localhost:8080");
url.searchParams.append("goBackUrl", window.location.href);

anchor.href = url;

const root = document.documentElement;

slider.oninput = function () {
  const value = ((this.value - this.min) / (this.max - this.min)) * 100;
  this.style.background =
    "linear-gradient(to right, #DADCDE 0%, #004077 " +
    value +
    "%, #97999b " +
    value +
    "%,  #97999b 100%)";

  if (this.value < 100) {
    root.style.setProperty("--goji-before-opacity", 1);
    root.style.setProperty("--goji-premium-opacity", 0);
    root.style.setProperty("--goji-medium-opacity", this.value / 100);

    root.style.setProperty("--goji-before-score-opacity", 1);
    root.style.setProperty("--goji-medium-score-opacity", 0);
    root.style.setProperty("--goji-premium-score-opacity", 0);
  } else if (this.value > 190) {
    root.style.setProperty("--goji-before-score-opacity", 0);
    root.style.setProperty("--goji-medium-score-opacity", 0);
    root.style.setProperty("--goji-premium-score-opacity", 1);
  } else {
    root.style.setProperty("--goji-before-opacity", 0);
    root.style.setProperty("--goji-medium-opacity", 2 - this.value / 100);
    root.style.setProperty("--goji-premium-opacity", 1);

    root.style.setProperty("--goji-before-score-opacity", 0);
    root.style.setProperty("--goji-medium-score-opacity", 1);
    root.style.setProperty("--goji-premium-score-opacity", 0);
  }
  if (this.value > 1) {
    root.style.setProperty("--goji-text-height", "0");
    root.style.setProperty("--goji-text-mb", "0");
    root.style.setProperty("--goji-text-opacity", "0");
  } else {
    root.style.setProperty("--goji-text-height", "103px");
    root.style.setProperty("--goji-text-mb", "33px");
    root.style.setProperty("--goji-text-opacity", "1");
  }
};
