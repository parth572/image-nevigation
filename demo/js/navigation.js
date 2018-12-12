      window.addEventListener('load', function() {

        // Initialize
        SpatialNavigation.init();

        // Define the navigable elements.
        SpatialNavigation.add({
          selector: '.focusable'
        });
		
        SpatialNavigation.makeFocusable();

        // Focus the first navigable element.
        SpatialNavigation.focus();
		
      });	  
