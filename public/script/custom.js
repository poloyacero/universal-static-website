$(document).ready(function() {

  $('#myCarousel').carousel({
    interval: 10000
  })

  $(".scroll-to").click(function() {
    var data = $(this).attr('data-scroll');
    if(data !== "") {
      if(data.length)
        $("html, body").animate({ scrollTop: $("."+data).offset().top }, "slow");
    }else{
        $("html, body").animate({ scrollTop: 0 }, "slow");
    }
  });
    
  $("myCarousel").carousel({ interval:false });

    /* activate the carousel */
  $("#modal-carousel").carousel({ interval:false });
 
    /* change modal title when slide changes */
  $("#modal-carousel").on("slid.bs.carousel", function () {
      $(".modal-title")
        .html($(this)
        .find(".active img")
        .attr("title"));
  });
 
    /* when clicking a thumbnail */
  $(".portfolios .portfolio").click(function() {
      var content = $(".carousel-modal");
      var title = $("#modal-gallery .modal-title");
   
      content.empty();  
      title.empty();
   
      var id = this.id;  
      var repo = $("#img-repo .carousel-item");
      var repoCopy = repo.filter("#" + id).clone();
      var active = repoCopy.first();
   
      active.addClass("active");
      title.html(active.find("img").attr("title"));
      content.append(repoCopy);
 
      // show the modal
      $("#modal-gallery").modal("show");
  });

  $(".contact-us-link").on("click", function(e) {
    e.preventDefault();
    $("#modal-email").modal("show");
  });

  $(".emailto").on("click", function(e) {
    e.preventDefault();
    $("#modal-email").modal("show");
  });

  $("form[name='emailForm']").validate({
    // Specify validation rules
    rules: {
      // The key name on the left side is the name attribute
      // of an input field. Validation rules are defined
      // on the right side
      name: "required",
      email: {
        required: true,
        // Specify that email should be validated
        // by the built-in "email" rule
        email: true
      },
      phone: {
        required: true,
      },
      honeypot: {
        required: false
      }
    },
    // Specify validation error messages
    messages: {
      name: "Please provide your name",
      email: {
        required: "Please provide your email",
      },
      phone: {
        required: "Please provide a password",
      },
    },
    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    submitHandler: function(form, e) {
      e.preventDefault();

      var dataString = $(form).serializeArray();
      var values = {};

      $(dataString).each(function(i, field) {
        values[field.name] = field.value;
      });

      if(values['honeypot'] === "") {
        form.reset();
        $(".email .btn").before("<p class='success'>Thanks! Your message has been sent.</p>");
        setTimeout(hideSuccessMessage, 3000); 
      }
    }
  });

  function hideSuccessMessage() {
    $(".success").fadeOut();
  }

 });