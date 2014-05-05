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
    .add($("#home"))
    .add($("#about"))
    .add($("#experience"))
    .add($("#navy"))
    .add($("#devbootcamp"))
    .add($("#firefly"))
    .add($("#projects"))
    .add($("#tech"))
    .add($("#contact"));

  parallax.background = $("body");
  parallax.scaling = 0.2;

  parallax.preload = function(){
    rightKey = leftKey = topKey = bottomKey = "";
    $("#main-controls").html("")
    $(".control").hide();
  };

  parallax.speed = 1000;
  parallax.easing = 'linear';
  
  // Page Controls
  parallax.home.onload = function(){
    setRight("about", "About Me");
    addControls("contact");
  };

  parallax.about.onload = function(){
    setLeft("home", "Back");
    setRight("experience", "Experience");
    addControls("home", "contact");
  };

  parallax.experience.onload = function(){
    setRight("tech", "Tech Stack")
    setLeft("about", "About Me");
    setBottom("navy", "Navy");
    addControls("home", "contact");
    
  };

  parallax.navy.onload = function(){
    setTop("experience", "Back");
    setRight("tech", "Tech Stack")
    setLeft("about", "About Me");
    setBottom("devbootcamp", "Dev Bootcamp")
    addControls("home", "contact");
    
  };

  parallax.devbootcamp.onload = function(){
    setTop("navy", "Navy")
    setRight("tech", "Tech Stack")
    setLeft("about", "About Me"); 
    setBottom("firefly", "Firefly Photography")
    addControls("home", "contact");
  };

  parallax.firefly.onload = function(){
    setTop("devbootcamp", "Dev Bootcamp")
    setRight("tech", "Tech Stack");
    setLeft("about", "About Me"); 
    addControls("home", "contact");
  };

  parallax.tech.onload = function(){
    setLeft("experience", "Experience");
    setRight("contact", "Contact")
    addControls("home", "contact");
  };

  parallax.contact.onload = function(){
    setLeft("tech", "Tech Stack");
    addControls("home");
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
  
  function addControls(){
    for(var i = 0; i < arguments.length; i++){
      $("#main-controls").append('<a href="#" id="go-' + arguments[i] + '"">' + arguments[i].toUpperCase() + '</a>');
    };
  };

  // Permanent controls
  $("body").on("click", "#go-home", function(e){
    e.preventDefault();
    parallax["home"].right();
  });

  $("body").on("click", "#go-contact", function(e){
    e.preventDefault();
    parallax["contact"].right();
  });
  
  $(".control").hide();
  parallax.home.show();
});

