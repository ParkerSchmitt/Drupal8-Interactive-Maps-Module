# Drupal8-Interactive-Maps-Module

This Drupal 8 Module allows site content creators to make nodes that display an interactive image map, which users can click on and point them to content that is in that region. For instance, if you are creating a map of the United States, this module can be used to allow users to click on a date, and scroll them down to resources that the state contains.

# Creating Image Map Markup

To use this module, you need to create HTML5 <area> markup for the "Image Map" content type. The best online tool that I have found for this is this image map generator found here: https://summerstyle.github.io/summer/
Please note that the <are> tags **must** have a class name- the class name must be unique and identifable of the region you are trying to display. I.e. If you have an <area> that cover florida, a class name of "FL" would be appropriate that way when someone is making a new content type of type "Image Map Content" they can easily select which region to add the content to.
