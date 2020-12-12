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
      var title = $(".modal-title");
   
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

 });