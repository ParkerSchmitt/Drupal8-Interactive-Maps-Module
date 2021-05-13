/**
 * @Author: Parker Schmitt <parker>
 * @Date:   24-Feb-2021
 * @Email:  parker.c.schmitt@gmail.com
 * @Filename: test.js
 * @Last modified by:   parker
 * @Last modified time: 04-Mar-2021
 */

/* We are implementing JS to allow the content type (image_map_content)'s field (field_regions) to be be
 * modified responsively on page update's, displaying the image_map <map><area> class attributes as
 * the dropdown options.
 */

(function($) {

  $(document).ready(function() {
    //On load
    if ($('#edit-field-map-reference').val() != "_none" && $('#-edit-field-region').val() == "_none") {
      UpdateRegionField($('#edit-field-map-reference').val());
    }
    //On edit
    $('#edit-field-map-reference').change(function() {
      if ($('#edit-field-map-reference').val() != "_none") {
        UpdateRegionField($('#edit-field-map-reference').val());
      }
    })

    function UpdateRegionField(class_nid) {
      var $field = $('#edit-field-region');
      //Remove the old ones
      $field.empty();
      //People are used to states/regions being in alphabetical order, so let us sort the array.
      drupalSettings.interactive_map.image_map_content_lib.regions[class_nid].sort();
      for (var key in drupalSettings.interactive_map.image_map_content_lib.regions[class_nid]) {
        var value = drupalSettings.interactive_map.image_map_content_lib.regions[class_nid][key];
        $field.append($("<option></option>").attr("value", value).text(value));
      }
    }

  });

})(jQuery);
