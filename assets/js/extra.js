function consoleMessage() {
  const currentColor = `background: #${window.currentColor}; color: white;`;

  const style = {
    header: `text-shadow: 1px 1px gray; font-size: 25px; ${currentColor}`,
    normal: `font-weight: bold; font-size: 14px;`
  };

  console.log("%cHello there!", style.header);
  console.log(
    "%cSince you've also found this part of the site, let me just give you my links again:",
    style.normal
  );
  console.log("");
  console.log(
    "%c- Resume: https://github.com/doidor/resume/blob/master/resume.pdf",
    style.normal
  );
  console.log(
    "%c- LinkedId: https://www.linkedin.com/in/tdrpopa/",
    style.normal
  );
  console.log("%c- Mail: tdr.popa@gmail.com", style.normal);
  console.log("%c- Github: https://github.com/doidor", style.normal);
  console.log("%c- Facebook: https://facebook.com/tudorpopa", style.normal);
  console.log("%c- Medium: https://medium.com/@tdr.popa", style.normal);
  console.log("");
  console.log("%cCheers!", style.normal);
}

function _marphaTranlsate(input) {
  let ret = input
    .replace(/stii/ig, "shtee")
    .replace(/(^|\s)+si(\s|$)+/ig, "$1shi$2")
    .replace(/si/ig, "sh")
    .replace(/ii|i/ig, "ee")
    .replace(/ș/ig, "sh")
    .replace(/ț/ig, "tz")
    .replace(/astea/ig, "ăștia")
    .replace(/st/ig, "sht");

  return ret;
}

function enableMarphaTranslator() {
  const input = document.querySelector("#input");
  const output = document.querySelector("#output");

  input.addEventListener("input", function () {
    const translation = _marphaTranlsate(this.value);
    output.value = translation;
  });
}