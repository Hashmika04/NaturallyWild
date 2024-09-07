$(document).ready(function() {
    // Function to filter items based on button clicks
    function filterItems() {
      let button = this;
      let selector = $(button).data('filter');
  
      // Hide all images that do not match the selected filter
      $('#products img').not(selector).hide(500);
  
      // Show images that match the selected filter
      $(selector).show(500);
    }
  
    // Attach click event to buttons
    $('button').click(filterItems);
  });
  