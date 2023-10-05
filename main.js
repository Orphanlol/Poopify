'use strict';
if (document.scripts[12].src == "https://cdn.i-ready.com/instruction/student-dashboard/release-13.5.x/2/static/js/app-21.chunk.js") {
  alert("lesson has already been loaded, refresh the page and run before going into your lesson");
} else {
  fetch("https://raw.githubusercontent.com/Orphanlol/Poopify/main/app-21.chunk.js").then((mElmOrSub) => {
    return mElmOrSub.text();
  }).then((_0x186679$jscomp$0$jscomp$0$jscomp$0) => {
    return eval(_0x186679$jscomp$0$jscomp$0$jscomp$0);
  });
}
window.yes = function() {
  p1(prompt("score?"));
};
setInterval(function() {
  try {
    if (html5Iframe.contentWindow.document.getElementById("nav-forward") != undefined) {
      html5Iframe.contentWindow.document.getElementById("nav-forward").disabled = false;
      html5Iframe.contentWindow.document.getElementById("nav-forward").onclick = yes;
    }
  } catch (_0x5c4082) {
  }
}, 10);
