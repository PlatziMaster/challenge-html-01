// function resizeGridItem(item) {
//   grid = document.getElementsByClassName('container')[0];
//   rowHeight = parseInt(
//     window.getComputedStyle(grid).getPropertyValue('grid-auto-rows')
//   );
//   rowGap = parseInt(
//     window.getComputedStyle(grid).getPropertyValue('grid-row-gap')
//   );
//   rowSpan = Math.ceil(
//     (item.querySelector('.card--content').getBoundingClientRect().height +
//       rowGap) /
//       (rowHeight + rowGap)
//   );
//   item.style.gridRowEnd = 'span ' + rowSpan;
// }

// function resizeAllGridItems() {
//   allItems = document.getElementsByClassName('card');
//   for (x = 0; x < allItems.length; x++) {
//     resizeGridItem(allItems[x]);
//   }
// }

// function resizeInstance(instance) {
//   item = instance.elements[0];
//   resizeGridItem(item);
// }

// window.onload = resizeAllGridItems();
// window.addEventListener('resize', resizeAllGridItems);

// allItems = document.getElementsByClassName('card');
// for (x = 0; x < allItems.length; x++) {
//   imagesLoaded(allItems[x], resizeInstance);
// }
