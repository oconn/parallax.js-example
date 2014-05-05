var rightKey, leftKey, topKey, bottomKey;

$(document).ready(function () {
  
  // Set up the triggers for the arrow keys
  $(document).keydown(function(e){
    if (e.keyCode == 37 && typeof leftKey === 'function') {
      leftKey();
    } else if(e.keyCode == 38 && typeof topKey === 'function') {
      topKey();
    } else if(e.keyCode == 39 && typeof rightKey === 'function') {
      rightKey();
    } else if(e.keyCode == 40 && typeof bottomKey === 'function') {
      bottomKey();
    }
  });

  parallax
      .add($("#index"))
      .add($("#about"))
      .add($("#other"));

  parallax.background = $("body");
  parallax.scaling = 0.05;

  parallax.preload = function(){
    rightKey = leftKey = topKey = bottomKey = "";
    $(".control").hide();
  };

  parallax.speed = 1000;
  parallax.easing = 'linear';
  
  parallax.index.onload = function(){
    setRight("about", "About");
    setLeft("about", "About");
  };

  parallax.about.onload = function(){
    setLeft("index", "Index");
    setBottom("other", "Other");
    setRight("index", "Index");
  };

  parallax.other.onload = function(){
    setTop("about", "About"); 
  };

  //Sets the correct triggers for the arrows, plus arrow keys
  function setRight(page, text){
    $("#right-text").text(text);
    $("#rightControl").show().unbind('click').click(function(){
      parallax[page].right();
    });
    rightKey = function(){
      parallax[page].right();
    };
  }

  function setLeft(page, text){
    $("#left-text").text(text);
    $("#leftControl").show().unbind('click').click(function(){
      parallax[page].left();
    });
    leftKey = function(){
      parallax[page].left();
    };
  }

  function setTop(page, text){
    $("#top-text").text(text);
    $("#topControl").show().unbind('click').click(function(){
      parallax[page].top();
    });
    topKey = function(){
      parallax[page].top();
    };
  }

  function setBottom(page, text){
    $("#bottom-text").text(text);
    $("#bottomControl").show().unbind('click').click(function(){
      parallax[page].bottom();
    });
    bottomKey = function(){
      parallax[page].bottom();
    };
  }

  $(".control")
    .mouseenter(function(){
      $(this).css("opacity", "1.0")
    })
    .mouseleave(function(){
      $(this).css("opacity", "0.4")
    })
  
  $(".control").hide();
  parallax.index.show();
});

