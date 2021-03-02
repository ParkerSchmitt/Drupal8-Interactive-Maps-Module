/**
 * @Author: Parker Schmitt <parker>
 * @Date:   25-Feb-2021
 * @Email:  parker.c.schmitt@gmail.com
 * @Filename: image_map.js
 * @Last modified by:   parker
 * @Last modified time: 25-Feb-2021
 */



/* This JS creates interactive fuctionality to the image_map node (i.e. when someone goes and looks at an image map)
 * it allows for the menu below the image map to be expanded/hidden, making it easy to search through content you want,
 * as well as enabling users to click on the image and automatically be taken to the content down below.
 */

(function($) {

  $(document).ready(function() {
    $(".toggle-list-title").click(function() {
      $(this).find("ul").toggle("fast", function() {
      });
    });

    //Add hilighting when <area> is moused over.
    $('img[usemap]').maphilight();
    $("area").on('click', function(event) {
      if ($(this).attr("class") != null && $(this).attr("class")) {
        //Add a # to the front of the class name to turn it into the ID attribute of the image map contents below
        var hash = "#"+$(this).attr("class");
        if ($(hash).length != 0) {
          $('html, body').animate({scrollTop: $(hash).offset().top},800, function() {
            //Change the location after the animation otherwise it will scroll down instantly.
            window.location.hash = hash;
          });
          $(hash).parent().find("ul").toggle(true);
        }
      }


    });


  });

})(jQuery);
