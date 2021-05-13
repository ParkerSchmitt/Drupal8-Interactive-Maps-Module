/**
 * @Author: Parker Schmitt <parker>
 * @Date:   25-Feb-2021
 * @Email:  parker.c.schmitt@gmail.com
 * @Filename: image_map.js
 * @Last modified by:   parker
 * @Last modified time: 026-Mar-2021
 */


/* This JS creates interactive fuctionality to the image_map node (i.e. when someone goes and looks at an image map)
 * it allows for the menu below the image map to be expanded/hidden, making it easy to search through content you want,
 * as well as enabling users to click on the image and automatically be taken to the content down below.
 */

(function($) {

  $(document).ready(function() {
    //Add hilighting when <area> is moused over.

    //If the window is less than 750px they are on a mobile device and the interactive_map
    //should be able to hilight on that screen, as it is to small to use properly. 
    if($(window).width() > 750) {

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
          $(hash).parent().find("h3").parent().addClass("active");
          $(hash).parent().find("ul").toggle(true);
        } else {
          //Alert the user that there has not been any content created for this <area>
          // alert(drupalSettings.interactive_map.image_map_lib.unavaiable_message); * deprecreated
          //We are using sweet alert to provide this functionality
          var alertInfo = document.createElement('div');
          alertInfo.innerHTML = drupalSettings.interactive_map.image_map_lib.unavaiable_message;
          swal({
            title: "Alert",
            content: alertInfo,
          });
        }
      }


    });

    /*If the screen width is less than 750px we are going to hide the map for easier access.
     *Unfortuntely the MapHilight addon makes a parent div around our image so we can't use
     *CSS media queries to hide our image*/
    /*if($(window).width() < 750) {
    $('img[usemap]').parent().hide();
    } else {
    $('img[usemap]').parent().show();
    }*/

  }


  });

})(jQuery);
