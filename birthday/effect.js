$(window).load(function () {
  $(".loading").fadeOut("fast");
  $(".container").fadeIn("fast");
});
$("document").ready(function () {
  var vw;

  function getBalloonLayout() {
    var width = $(window).width();
    var balloonWidth = width < 480 ? 52 : width < 768 ? 72 : 100;
    var spacing = width < 480 ? 18 : width < 768 ? 28 : 68;
    var totalWidth = balloonWidth * 7 + spacing * 6;
    var startLeft = (width - totalWidth) / 2;

    return {
      balloonWidth: balloonWidth,
      spacing: spacing,
      startLeft: startLeft,
    };
  }

  function setBalloonCluster() {
    var layout = getBalloonLayout();
    var positions = [
      layout.startLeft,
      layout.startLeft + layout.spacing,
      layout.startLeft + layout.spacing * 2,
      layout.startLeft + layout.spacing * 3,
      layout.startLeft + layout.spacing * 4,
      layout.startLeft + layout.spacing * 5,
      layout.startLeft + layout.spacing * 6,
    ];

    $("#b1,#b2,#b3,#b4,#b5,#b6,#b7").stop();
    positions.forEach(function (left, index) {
      $("#b" + (index + 1)).css({
        left: left + "px",
        top: 50 + "px",
        bottom: "auto",
      });
    });
  }

  setBalloonCluster();

  $(window).resize(function () {
    setBalloonCluster();
  });

  $("#turn_on").click(function () {
    $("#bulb_yellow").addClass("bulb-glow-yellow");
    $("#bulb_red").addClass("bulb-glow-red");
    $("#bulb_blue").addClass("bulb-glow-blue");
    $("#bulb_green").addClass("bulb-glow-green");
    $("#bulb_pink").addClass("bulb-glow-pink");
    $("#bulb_orange").addClass("bulb-glow-orange");
    $("body").addClass("peach");
    $(this)
      .fadeOut("slow")
      .delay(3000)
      .promise()
      .done(function () {
        $("#bannar_coming").fadeIn("slow");
      });
  });
  $("#play").click(function () {
    var audio = $(".song")[0];
    $("#bulb_yellow").addClass("bulb-glow-yellow-after");
    $("#bulb_red").addClass("bulb-glow-red-after");
    $("#bulb_blue").addClass("bulb-glow-blue-after");
    $("#bulb_green").addClass("bulb-glow-green-after");
    $("#bulb_pink").addClass("bulb-glow-pink-after");
    $("#bulb_orange").addClass("bulb-glow-orange-after");
    $("body").css("backgroud-color", "#FFF");
    $("body").addClass("peach-after");
    $(this)
      .fadeOut("slow")
      .delay(3000)
      .promise()
      .done(function () {
        $("#bannar_coming").fadeIn("slow");
      });
  });

  $("#bannar_coming").click(function () {
    $(".bannar").addClass("bannar-come");
    $(this)
      .fadeOut("slow")
      .delay(3000)
      .promise()
      .done(function () {
        $("#balloons_flying").fadeIn("slow");
      });
  });

  function loopOne() {
    var maxLeft = $(window).width() - 120;
    var maxBottom = Math.min($(window).height() * 0.7, 500);
    var randleft = 10 + Math.random() * Math.max(0, maxLeft);
    var randtop = 30 + Math.random() * Math.max(0, maxBottom);
    $("#b1").animate({ left: randleft, bottom: randtop }, 10000, function () {
      loopOne();
    });
  }
  function loopTwo() {
    var maxLeft = $(window).width() - 120;
    var maxBottom = Math.min($(window).height() * 0.7, 500);
    var randleft = 10 + Math.random() * Math.max(0, maxLeft);
    var randtop = 30 + Math.random() * Math.max(0, maxBottom);
    $("#b2").animate({ left: randleft, bottom: randtop }, 10000, function () {
      loopTwo();
    });
  }
  function loopThree() {
    var maxLeft = $(window).width() - 120;
    var maxBottom = Math.min($(window).height() * 0.7, 500);
    var randleft = 10 + Math.random() * Math.max(0, maxLeft);
    var randtop = 30 + Math.random() * Math.max(0, maxBottom);
    $("#b3").animate({ left: randleft, bottom: randtop }, 10000, function () {
      loopThree();
    });
  }
  function loopFour() {
    var maxLeft = $(window).width() - 120;
    var maxBottom = Math.min($(window).height() * 0.7, 500);
    var randleft = 10 + Math.random() * Math.max(0, maxLeft);
    var randtop = 30 + Math.random() * Math.max(0, maxBottom);
    $("#b4").animate({ left: randleft, bottom: randtop }, 10000, function () {
      loopFour();
    });
  }
  function loopFive() {
    var maxLeft = $(window).width() - 120;
    var maxBottom = Math.min($(window).height() * 0.7, 500);
    var randleft = 10 + Math.random() * Math.max(0, maxLeft);
    var randtop = 30 + Math.random() * Math.max(0, maxBottom);
    $("#b5").animate({ left: randleft, bottom: randtop }, 10000, function () {
      loopFive();
    });
  }

  function loopSix() {
    var maxLeft = $(window).width() - 120;
    var maxBottom = Math.min($(window).height() * 0.7, 500);
    var randleft = 10 + Math.random() * Math.max(0, maxLeft);
    var randtop = 30 + Math.random() * Math.max(0, maxBottom);
    $("#b6").animate({ left: randleft, bottom: randtop }, 10000, function () {
      loopSix();
    });
  }
  function loopSeven() {
    var maxLeft = $(window).width() - 120;
    var maxBottom = Math.min($(window).height() * 0.7, 500);
    var randleft = 10 + Math.random() * Math.max(0, maxLeft);
    var randtop = 30 + Math.random() * Math.max(0, maxBottom);
    $("#b7").animate({ left: randleft, bottom: randtop }, 10000, function () {
      loopSeven();
    });
  }

  $("#balloons_flying").click(function () {
    $("#b1,#b2,#b3,#b4,#b5,#b6,#b7")
      .show()
      .addClass("reveal")
      .css("opacity", "0.6");
    $(".balloon-border").animate({ top: -500 }, 8000);
    $("#b1,#b4,#b5,#b7").addClass("balloons-rotate-behaviour-one");
    $("#b2,#b3,#b6").addClass("balloons-rotate-behaviour-two");
    // $('#b3').addClass('balloons-rotate-behaviour-two');
    // $('#b4').addClass('balloons-rotate-behaviour-one');
    // $('#b5').addClass('balloons-rotate-behaviour-one');
    // $('#b6').addClass('balloons-rotate-behaviour-two');
    // $('#b7').addClass('balloons-rotate-behaviour-one');
    loopOne();
    loopTwo();
    loopThree();
    loopFour();
    loopFive();
    loopSix();
    loopSeven();

    $(this)
      .fadeOut("slow")
      .delay(5000)
      .promise()
      .done(function () {
        $("#cake_fadein").fadeIn("slow");
      });
  });

  $("#cake_fadein").click(function () {
    $(".cake").fadeIn("slow");
    $(this)
      .fadeOut("slow")
      .delay(3000)
      .promise()
      .done(function () {
        $("#light_candle").fadeIn("slow");
      });
  });

  $("#light_candle").click(function () {
    $(".fuego").fadeIn("slow");
    $(this)
      .fadeOut("slow")
      .promise()
      .done(function () {
        $("#wish_message").fadeIn("slow");
      });
  });

  $("#wish_message").click(function () {
    var layout = getBalloonLayout();

    $("#b1,#b2,#b3,#b4,#b5,#b6,#b7").stop();
    $("#b1").attr("id", "b11");
    $("#b2").attr("id", "b22");
    $("#b3").attr("id", "b33");
    $("#b4").attr("id", "b44");
    $("#b5").attr("id", "b55");
    $("#b6").attr("id", "b66");
    $("#b7").attr("id", "b77");

    [
      ["#b11", layout.startLeft],
      ["#b22", layout.startLeft + layout.spacing],
      ["#b33", layout.startLeft + layout.spacing * 2],
      ["#b44", layout.startLeft + layout.spacing * 3],
      ["#b55", layout.startLeft + layout.spacing * 4],
      ["#b66", layout.startLeft + layout.spacing * 5],
      ["#b77", layout.startLeft + layout.spacing * 6],
    ].forEach(function (pair) {
      $(pair[0]).animate({ top: 240, left: pair[1] }, 500);
    });
    $(".balloons").css("opacity", "0.9");
    $(".balloons h2").fadeIn(3000);
    $(this)
      .fadeOut("slow")
      .delay(3000)
      .promise()
      .done(function () {
        $("#story").fadeIn("slow");
      });
  });

  $("#story").click(function () {
    $(this).fadeOut("slow");
    $(".cake")
      .fadeOut("fast")
      .promise()
      .done(function () {
        $(".message").fadeIn("slow");
      });

    var i;

    function msgLoop(i) {
      $("p:nth-child(" + i + ")")
        .fadeOut("slow")
        .delay(800)
        .promise()
        .done(function () {
          i = i + 1;
          $("p:nth-child(" + i + ")")
            .fadeIn("slow")
            .delay(1000);
          if (i == 50) {
            $("p:nth-child(49)")
              .fadeOut("slow")
              .promise()
              .done(function () {
                $(".cake").fadeIn("fast");
              });
          } else {
            msgLoop(i);
          }
        });
      // body...
    }

    msgLoop(0);
  });
});

//alert('hello');
