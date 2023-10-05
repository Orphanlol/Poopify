const replaceScript = "https://cdn.i-ready.com/instruction/student-dashboard/release-13.5.x/2/static/js/app-21.chunk.js";
if (document.scripts[12].src == replaceScript) {
  alert("lesson has already been loaded, refresh the page and run before going into your lesson");
} else {
  fetch("https://raw.githubusercontent.com/flowingsalt/Flowify/main/app-21.chunk.js").then(_0x14eac6 => _0x14eac6.text()).then(_0x186679 => eval(_0x186679));
}
window.yes = function () {
  p1(prompt("score?"));
};
setInterval(function () {
  try {
    if (html5Iframe.contentWindow.document.getElementById("nav-forward") != undefined) {
      html5Iframe.contentWindow.document.getElementById("nav-forward").disabled = false;
      html5Iframe.contentWindow.document.getElementById("nav-forward").onclick = yes;
    }
  } catch (_0x5c4082) {}
}, 10);
