//NAV BAR SCROLL GRADIENT
$(function () {
  $(document).scroll(function () {
    var $nav = $("#mainNavBar");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});
function TestsFunction() {
  var T = document.getElementById("othersMain");
  if (T.style.display === "block") {
    T.style.display = "none"; // <-- Set it to block
  } else {
    T.style.display = "none";
  }
}
$(".navbar-collapse").on("shown.bs.collapse", function () {
  $(".navbar-collapse .collapse.show").parent().addClass("mt-3 mb-3");
});
$(".navbar-collapse").on("hidden.bs.collapse", function () {
  $(".navbar-collapse  >.collapse.m-0").removeClass("mt-3 mb-3");
});
function onBeforeUnload(e) {
  if (thereAreUnsavedChanges()) {
    e.preventDefault();
    e.returnValue = "wakoko";
    return;
  }

  delete e["returnValue"];
}

window.addEventListener("beforeunload", onBeforeUnload);
// window.onbeforeunload = function (e) {
//   e = e || window.event;
//   alertString = "Awit wakokohaha";
//   // For IE and Firefox prior to version 4
//   if (e) {
//     e.returnValue = "wrawrawrwar";
//   }

//   // For Safari
//   return "wrwarawraw";
// };

function unloadConfirm() {
  window.onbeforeunload = function (e) {
    var e = e || window.event;
    if (e) {
      e.returnValue = "You turned me on.";
    }
    return "You turned me on.";
  };
}
$(document).ready(function () {
  $('[data-toggle="popover"]').popover({
    //trigger: 'focus',
    trigger: "hover",
    html: true,
    content: function () {
      return (
        '<img class="h-100 w-100 d-block " src="' + $(this).data("img") + '" />'
      );
    },
    title: "Toolbox",
  });
});
function quelaVid() {
  var vid = document.getElementById("quelaVid");
  document.getElementsByTagName("video")[0].volume = 0.2;
  vid.volume = 0.2;
  vid.autoplay = true;
  // vid.load();
}
function quelaVidStop() {
  var vid = document.getElementById("quelaVid");
  document.getElementsByTagName("video")[0].volume = 0.2;
  vid.pause();
  vid.currentTime = 0;
}
$(function () {
  $('[data-bs-toggle="modal"]').hover(function () {
    var modalId = $(this).data("target");
    $(modalId).modal("show");
  });
});
