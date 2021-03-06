
/* Constants */

var WISHLIST_HEIGHT = 600; // px
var WISHLIST_WIDTH = 1000; // px
var ITEM_SIZE = 100;

// Absolute position of basketball item:
var BASKETBALL_X = 500;
var BASKETBALL_Y = 200;

// Absolute position of teddy-bear item:
var TEDDY_BEAR_X = 200;
var TEDDY_BEAR_Y = 300;

// Absolute position of roller-skates item:
var ROLLER_SKATES_X = 400;
var ROLLER_SKATES_Y = 320;


/* Global Variables */

var isDragging = false; // flag whether an item is being dragged.

var dragItemID; // store the ID of the item currently dragged.

/*
 * Store the (x,y) position of the item currently being dragged
 * around in the wishlist. Helpful in mousedown, mousemove, and
 * mouseup listeners since these will update as the item moves.
 */
var dragItemX;
var dragItemY;

/*
 * Store the initial (x,y) position of the item currently being
 * dragged around in the wishlist. Helpful when the item is dragged
 * to an area outside the wishlist, in this case we just move it
 * back to where it was initially picked up from.
 */
var initialDragItemX;
var initialDragItemY;


/* Helper Functions */

/*
 * Helper function for retrieving the mouse position relative to
 * the div container (in the bounding client that contains it).
 * @param container is the wishlist container that is clicked
 */
function getMousePosition(container, evt) {
  var boundingRect = container.getBoundingClientRect();
  return {
    x: evt.clientX - boundingRect.left,
    y: evt.clientY - boundingRect.top
  };
}

/*
 * Helper function for retrieving the ID of the item clicked at the
 * given mouse position, if any. If the position does not correspond
 * to any item, returns "none".
 */
function getItemFromPosition(x, y) {
  if (x >= BASKETBALL_X && x < BASKETBALL_X + ITEM_SIZE &&
      y >= BASKETBALL_Y && y < BASKETBALL_Y + ITEM_SIZE) {
    return "basketball";
  }
  if (x >= TEDDY_BEAR_X && x < TEDDY_BEAR_X + ITEM_SIZE &&
      y >= TEDDY_BEAR_Y && y < TEDDY_BEAR_Y + ITEM_SIZE) {
    return "teddyBear";
  }
  if (x >= ROLLER_SKATES_X && x < ROLLER_SKATES_X + ITEM_SIZE &&
      y >= ROLLER_SKATES_Y && y < ROLLER_SKATES_Y + ITEM_SIZE) {
    return "rollerSkates";
  }
  return "none";
}


/* Mouse Listeners */

// mousedown in wishlist container:
// $(document).on('mousedown', "#wishlistContainer", function(evt)
// {
//   evt.preventDefault();

//   // Reference the wishlist container
//   var container = document.getElementById("wishlistContainer");

//   // Retrieve mouse coordinates with respect to wishlist
//   var mousePosition = getMousePosition(container, evt);
//   var x = mousePosition.x;
//   var y = mousePosition.y;

//   // Check whether user clicked on an item
//   dragItemID = getItemFromPosition(x, y);

//   if (dragItemID == 'none') {
//     return;
//   }

//   // Clicked on an item, now dragging
//   isDragging = true;

//   // Record current click
//   dragItemX = x;
//   dragItemY = y;

//   // Record initial (x,y) position
//   switch(dragItemID) {
//     case "basketball":
//       initialDragItemX = BASKETBALL_X;
//       initialDragItemY = BASKETBALL_Y;
//       return;
//     case "teddyBear":
//       initialDragItemX = TEDDY_BEAR_X;
//       initialDragItemY = TEDDY_BEAR_Y;
//       return;
//     case "rollerSkates":
//       initialDragItemX = ROLLER_SKATES_X;
//       initialDragItemY = ROLLER_SKATES_Y;
//     case "none":
//       return;
//   }
// });

// // mousemove anywhere, not necessarily in wishlist container:
// $(document).on('mousemove', function(evt)
// {
//   evt.preventDefault();


//   if (isDragging) {

//     // Reference the wishlist container
//     var container = document.getElementById("wishlistContainer");

//     var mousePosition = getMousePosition(container, evt);
//     var x = mousePosition.x;
//     var y = mousePosition.y;

//     console.log(x, y);

//     var deltaX = x - dragItemX;
//     var deltaY = y - dragItemY;

//     // Reference the item being currently dragged
//     var item = document.getElementById(dragItemID);

//     $("#" + dragItemID).css({
//       left: item.offsetLeft + deltaX,
//       top: item.offsetTop + deltaY,
//       zIndex: "100"
//     });

//     dragItemX = x;
//     dragItemY = y;
//   }
// });


// // mouseup anywhere, not necessarily in wishlist container:
// $(document).on('mouseup', function(evt)
// {
//   evt.preventDefault();
//   isDragging = false;

//   $("#" + dragItemID).css({zIndex: "1"});
  


//   // Reference the wishlist container
//   var container = document.getElementById("wishlistContainer");

//   var mousePosition = getMousePosition(container, evt);
//   var x = mousePosition.x;
//   var y = mousePosition.y;

//   console.log(x);
//   console.log(y);


//   if (x < 0 || x > WISHLIST_WIDTH ||
//       y < 0 || y > WISHLIST_HEIGHT) {
//     console.log("hey");

//     // Return to initial position
//     $("#" + dragItemID).css({
//       left: initialDragItemX,
//       top: initialDragItemY,
//       zIndex: "1"
//     });
//     return;
//   }


//   /*
//    * TODO: Include logic for what happens when item is dragged
//    * and released onto either the trash can or shopping cart.
//    */

//   // Return to initial position
//   $("#" + dragItemID).css({
//     left: initialDragItemX,
//     top: initialDragItemY,
//     zIndex: "1"
//   });

// });


 // var dragged;

 //  /* events fired on the draggable target */
 //  document.addEventListener("drag", function( event ) {
 //    event.dataTransfer.setData("text", event.currentTarget.id);
 //    console.log(event.currentTarget.id);
 //    console.log("in drag");
 //  }, false);

 //  document.addEventListener("dragstart", function( event ) {
 //      // store a ref. on the dragged elem
 //      dragged = event.target;
 //      clone = event.target.cloneNode(true);
 //      // make it half transparent
 //      event.target.style.opacity = 0;
 //  }, false);

 //  document.addEventListener("dragend", function( event ) {
 //      // reset the transparency
 //      event.target.style.opacity = "";
 //  }, false);

 //  /* events fired on the drop targets */
 //  document.addEventListener("dragover", function( event ) {
 //      // prevent default to allow drop
 //      event.preventDefault();
 //  }, false);

 //  document.addEventListener("dragenter", function( event ) {
 //      // highlight potential drop target when the draggable element enters it
 //      if ( event.target.className == "dropZone" ) {
 //          //event.target.style.background = "lightgrey";
 //      }

 //  }, false);

 //  document.addEventListener("dragleave", function( event ) {
 //      // reset background of potential drop target when the draggable element leaves it
 //      if ( event.target.className == "dropZone" ) {
 //          event.target.style.background = "";
 //      }
 //  }, false);

 //  document.addEventListener("drop", function( event ) {
 //      // prevent default action (open as link for some elements)
 //      event.preventDefault();
 //      // move dragged elem to the selected drop target
 //      if ( event.target.className == "dropZone" ) {
 //          event.target.style.background = "";
 //          dragged.parentNode.removeChild( dragged );



 //      }
    
 //  }, false);



 //  // Get the modal
 //        var modal = document.getElementById('myModal');

 //        // Get the button that opens the modal
 //        var btn = document.getElementById("wishListPlusSign");

 //        // Get the <span> element that closes the modal
 //        var span = document.getElementsByClassName("close")[0];

 //        // When the user clicks the button, open the modal 
 //        btn.onclick = function() {
 //            modal.style.display = "block";
 //        }

 //        // When the user clicks on <span> (x), close the modal
 //        span.onclick = function() {
 //            modal.style.display = "none";
 //        }

 //        // When the user clicks anywhere outside of the modal, close it
 //        window.onclick = function(event) {
 //            if (event.target == modal) {
 //                modal.style.display = "none";
 //            }
 //        }
