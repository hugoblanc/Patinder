import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatService } from '../services/pat.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  patrimoines: any[];

  count = -1;

  constructor(private router: Router, private patService: PatService) {
    this.patrimoines = patService.getPatrimoine();
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.init();
    }, 300);
  }





  showDetails() {
    this.patService.setCurrentPatrimoine(this.patrimoines[this.count]);
    this.router.navigateByUrl('pat-details');
  }

  savePatrimoine() {
    this.patService.savePatrimoine(this.patrimoines[this.count])
      .subscribe((result) => {
        console.log(result);
      });

  }



  init() {

    // JavaScript Document

    const stackedCards = () => {

      const stackedOptions = 'Top'; // Change stacked cards view from 'Bottom', 'Top' or 'None'.
      const rotate = true; // Activate the elements' rotation for each move on stacked cards.
      let items = 3; // Number of visible elements when the stacked options are bottom or top.
      const elementsMargin = 10; // Define the distance of each element when the stacked options are bottom or top.
      const useOverlays = true; // Enable or disable the overlays for swipe elements.
      let maxElements; // Total of stacked cards on DOM.
      let currentPosition = 0; // Keep the position of active stacked card.
      const velocity = 0.3; // Minimum velocity allowed to trigger a swipe.
      let topObj; // Keep the swipe top properties.
      let rightObj; // Keep the swipe right properties.
      let leftObj; // Keep the swipe left properties.
      let listElNodesObj; // Keep the list of nodes from stacked cards.
      let listElNodesWidth; // Keep the stacked cards width.
      let currentElementObj; // Keep the stacked card element to swipe.
      let stackedCardsObj;
      let isFirstTime = true;
      let elementHeight;
      let obj;
      let elTrans;

      obj = document.getElementById('stacked-cards-block');
      stackedCardsObj = obj.querySelector('.stackedcards-container');
      listElNodesObj = stackedCardsObj.children;

      topObj = obj.querySelector('.stackedcards-overlay.top');
      rightObj = obj.querySelector('.stackedcards-overlay.right');
      leftObj = obj.querySelector('.stackedcards-overlay.left');

      // Keep the active card.
      const currentElement = () => {
        currentElementObj = listElNodesObj[currentPosition];
        this.count++;
      };

      // Swipe active card to right.
      const onSwipeRight = () => {
        removeNoTransition();
        transformUi(1000, 0, 0, currentElementObj);
        if (useOverlays) {
          transformUi(1000, 0, 0, rightObj); // Move rightOverlay
          transformUi(1000, 0, 0, topObj); // Move topOverlay
          resetOverlayRight();
        }

        currentPosition = currentPosition + 1;
        updateUi();
        currentElement();
        setActiveHidden();
        this.savePatrimoine();
      };
      // Functions to swipe right elements on logic external action.
      const onActionRight = () => {
        if (!(currentPosition >= maxElements)) {
          if (useOverlays) {
            rightObj.classList.remove('no-transition');
            topObj.classList.remove('no-transition');
            rightObj.style.zIndex = '8';
            transformUi(0, 0, 1, rightObj);
          }
          this.savePatrimoine();
          setTimeout(() => {
            onSwipeRight();
            resetOverlayRight();
          }, 300);
        }
      };


      countElements();
      currentElement();
      listElNodesWidth = stackedCardsObj.offsetWidth;
      currentElementObj = listElNodesObj[0];
      updateUi();

      // Prepare elements on DOM
      const addMargin = elementsMargin * (items - 1) + 'px';

      if (stackedOptions === 'Top') {

        for (let i = items; i < maxElements; i++) {
          listElNodesObj[i].classList.add('stackedcards-top', 'stackedcards--animatable', 'stackedcards-origin-top');
        }

        elTrans = elementsMargin * (items - 1);

        stackedCardsObj.style.marginBottom = addMargin;

      } else if (stackedOptions === 'Bottom') {


        for (let i = items; i < maxElements; i++) {
          listElNodesObj[i].classList.add('stackedcards-bottom', 'stackedcards--animatable', 'stackedcards-origin-bottom');
        }

        elTrans = 0;

        stackedCardsObj.style.marginBottom = addMargin;

      } else if (stackedOptions === 'None') {

        for (let i = items; i < maxElements; i++) {
          listElNodesObj[i].classList.add('stackedcards-none', 'stackedcards--animatable');
        }

        elTrans = 0;

      }

      for (let i = items; i < maxElements; i++) {
        listElNodesObj[i].style.zIndex = 0;
        listElNodesObj[i].style.opacity = 0;
        listElNodesObj[i].style.webkitTransform = 'scale(' + (1 - (items * 0.04)) + ') translateX(0) translateY(' + elTrans + 'px) translateZ(0)';
        listElNodesObj[i].style.transform = 'scale(' + (1 - (items * 0.04)) + ') translateX(0) translateY(' + elTrans + 'px) translateZ(0)';
      }

      if (listElNodesObj[currentPosition]) {
        listElNodesObj[currentPosition].classList.add('stackedcards-active');
      }

      if (useOverlays) {
        leftObj.style.transform = 'translateX(0px) translateY(' + elTrans + 'px) translateZ(0px) rotate(0deg)';
        leftObj.style.webkitTransform = 'translateX(0px) translateY(' + elTrans + 'px) translateZ(0px) rotate(0deg)';

        rightObj.style.transform = 'translateX(0px) translateY(' + elTrans + 'px) translateZ(0px) rotate(0deg)';
        rightObj.style.webkitTransform = 'translateX(0px) translateY(' + elTrans + 'px) translateZ(0px) rotate(0deg)';

        topObj.style.transform = 'translateX(0px) translateY(' + elTrans + 'px) translateZ(0px) rotate(0deg)';
        topObj.style.webkitTransform = 'translateX(0px) translateY(' + elTrans + 'px) translateZ(0px) rotate(0deg)';

      } else {
        leftObj.className = '';
        rightObj.className = '';
        topObj.className = '';

        leftObj.classList.add('stackedcards-overlay-hidden');
        rightObj.classList.add('stackedcards-overlay-hidden');
        topObj.classList.add('stackedcards-overlay-hidden');
      }

      // Remove class init
      setTimeout(() => {
        obj.classList.remove('init');
      }, 150);


      function backToMiddle() {

        removeNoTransition();
        transformUi(0, 0, 1, currentElementObj);

        if (useOverlays) {
          transformUi(0, 0, 0, leftObj);
          transformUi(0, 0, 0, rightObj);
          transformUi(0, 0, 0, topObj);
        }

        setZindex(5);

        if (!(currentPosition >= maxElements)) {
          // roll back the opacity of second element
          if ((currentPosition + 1) < maxElements) {
            listElNodesObj[currentPosition + 1].style.opacity = '.8';
          }
        }
      }

      // Usable functions
      function countElements() {
        maxElements = listElNodesObj.length;
        if (items > maxElements) {
          items = maxElements;
        }
      }



      // Functions to swipe left elements on logic external action.
      function onActionLeft() {
        if (!(currentPosition >= maxElements)) {
          if (useOverlays) {
            leftObj.classList.remove('no-transition');
            topObj.classList.remove('no-transition');
            leftObj.style.zIndex = '8';
            transformUi(0, 0, 1, leftObj);

          }

          setTimeout(() => {
            onSwipeLeft();
            resetOverlayLeft();
          }, 300);
        }
      }



      // Functions to swipe top elements on logic external action.
      function onActionTop() {
        if (!(currentPosition >= maxElements)) {
          if (useOverlays) {
            leftObj.classList.remove('no-transition');
            rightObj.classList.remove('no-transition');
            topObj.classList.remove('no-transition');
            topObj.style.zIndex = '8';
            transformUi(0, 0, 1, topObj);
          }

          setTimeout(() => {
            onSwipeTop();
            resetOverlays();
          }, 300); // wait animations end
        }
      }

      // Swipe active card to left.
      function onSwipeLeft() {
        removeNoTransition();
        transformUi(-1000, 0, 0, currentElementObj);
        if (useOverlays) {
          transformUi(-1000, 0, 0, leftObj); // Move leftOverlay
          transformUi(-1000, 0, 0, topObj); // Move topOverlay
          resetOverlayLeft();
        }
        currentPosition = currentPosition + 1;
        updateUi();
        currentElement();
        setActiveHidden();
      }


      // Swipe active card to top.
      function onSwipeTop() {
        removeNoTransition();
        transformUi(0, -1000, 0, currentElementObj);
        if (useOverlays) {
          transformUi(0, -1000, 0, leftObj); // Move leftOverlay
          transformUi(0, -1000, 0, rightObj); // Move rightOverlay
          transformUi(0, -1000, 0, topObj); // Move topOverlay
          resetOverlays();
        }

        currentPosition = currentPosition + 1;
        updateUi();
        currentElement();
        setActiveHidden();
      }

      // Remove transitions from all elements to be moved in each swipe movement to improve perfomance of stacked cards.
      function removeNoTransition() {
        if (listElNodesObj[currentPosition]) {

          if (useOverlays) {
            leftObj.classList.remove('no-transition');
            rightObj.classList.remove('no-transition');
            topObj.classList.remove('no-transition');
          }

          listElNodesObj[currentPosition].classList.remove('no-transition');
          listElNodesObj[currentPosition].style.zIndex = 6;
        }

      }

      // Move the overlay left to initial position.
      function resetOverlayLeft() {
        if (!(currentPosition >= maxElements)) {
          if (useOverlays) {
            setTimeout(() => {

              if (stackedOptions === 'Top') {

                elTrans = elementsMargin * (items - 1);

              } else if (stackedOptions === 'Bottom' || stackedOptions === 'None') {

                elTrans = 0;

              }

              if (!isFirstTime) {

                leftObj.classList.add('no-transition');
                topObj.classList.add('no-transition');

              }

              requestAnimationFrame(() => {

                leftObj.style.transform = 'translateX(0) translateY(' + elTrans + 'px) translateZ(0)';
                leftObj.style.webkitTransform = 'translateX(0) translateY(' + elTrans + 'px) translateZ(0)';
                leftObj.style.opacity = '0';

                topObj.style.transform = 'translateX(0) translateY(' + elTrans + 'px) translateZ(0)';
                topObj.style.webkitTransform = 'translateX(0) translateY(' + elTrans + 'px) translateZ(0)';
                topObj.style.opacity = '0';

              });

            }, 300);

            isFirstTime = false;
          }
        }
      }

      // Move the overlay right to initial position.
      function resetOverlayRight() {
        if (!(currentPosition >= maxElements)) {
          if (useOverlays) {
            setTimeout(() => {

              if (stackedOptions === 'Top') {

                elTrans = elementsMargin * (items - 1);

              } else if (stackedOptions === 'Bottom' || stackedOptions === 'None') {

                elTrans = 0;

              }

              if (!isFirstTime) {

                rightObj.classList.add('no-transition');
                topObj.classList.add('no-transition');

              }

              requestAnimationFrame(() => {

                rightObj.style.transform = 'translateX(0) translateY(' + elTrans + 'px) translateZ(0)';
                rightObj.style.webkitTransform = 'translateX(0) translateY(' + elTrans + 'px) translateZ(0)';
                rightObj.style.opacity = '0';

                topObj.style.transform = 'translateX(0) translateY(' + elTrans + 'px) translateZ(0)';
                topObj.style.webkitTransform = 'translateX(0) translateY(' + elTrans + 'px) translateZ(0)';
                topObj.style.opacity = '0';

              });

            }, 300);

            isFirstTime = false;
          }
        }
      }

      // Move the overlays to initial position.
      function resetOverlays() {
        if (!(currentPosition >= maxElements)) {
          if (useOverlays) {

            setTimeout(() => {
              if (stackedOptions === 'Top') {

                elTrans = elementsMargin * (items - 1);

              } else if (stackedOptions === 'Bottom' || stackedOptions === 'None') {

                elTrans = 0;

              }

              if (!isFirstTime) {

                leftObj.classList.add('no-transition');
                rightObj.classList.add('no-transition');
                topObj.classList.add('no-transition');

              }

              requestAnimationFrame(() => {

                leftObj.style.transform = 'translateX(0) translateY(' + elTrans + 'px) translateZ(0)';
                leftObj.style.webkitTransform = 'translateX(0) translateY(' + elTrans + 'px) translateZ(0)';
                leftObj.style.opacity = '0';

                rightObj.style.transform = 'translateX(0) translateY(' + elTrans + 'px) translateZ(0)';
                rightObj.style.webkitTransform = 'translateX(0) translateY(' + elTrans + 'px) translateZ(0)';
                rightObj.style.opacity = '0';

                topObj.style.transform = 'translateX(0) translateY(' + elTrans + 'px) translateZ(0)';
                topObj.style.webkitTransform = 'translateX(0) translateY(' + elTrans + 'px) translateZ(0)';
                topObj.style.opacity = '0';

              });

            }, 300);	// wait for animations time

            isFirstTime = false;
          }
        }
      }

      function setActiveHidden() {
        if (!(currentPosition >= maxElements)) {
          listElNodesObj[currentPosition - 1].classList.remove('stackedcards-active');
          listElNodesObj[currentPosition - 1].classList.add('stackedcards-hidden');
          listElNodesObj[currentPosition].classList.add('stackedcards-active');
        }
      }

      // Set the new z-index for specific card.
      function setZindex(zIndex) {
        if (listElNodesObj[currentPosition]) {
          listElNodesObj[currentPosition].style.zIndex = zIndex;
        }
      }

      // Remove element from the DOM after swipe. To use this method you need to call this function in onSwipeLeft, onSwipeRight and onSwipeTop and put the method just above the variable 'currentPosition = currentPosition + 1'.
      // On the actions onSwipeLeft, onSwipeRight and onSwipeTop you need to remove the currentPosition variable (currentPosition = currentPosition + 1) and the function setActiveHidden

      function removeElement() {
        currentElementObj.remove();
        if (!(currentPosition >= maxElements)) {
          listElNodesObj[currentPosition].classList.add('stackedcards-active');
        }
      }

      // Add translate X and Y to active card for each frame.
      function transformUi(moveX, moveY, opacity, elementObj) {
        requestAnimationFrame(() => {
          const element = elementObj;

          // Function to generate rotate value
          function RotateRegulator(value) {
            if (value / 10 > 15) {
              return 15;
            } else if (value / 10 < -15) {
              return -15;
            }
            return value / 10;
          }
          let rotateElement;
          if (rotate) {
            rotateElement = RotateRegulator(moveX);
          } else {
            rotateElement = 0;
          }

          if (stackedOptions === 'Top') {
            elTrans = elementsMargin * (items - 1);
            if (element) {
              element.style.webkitTransform = 'translateX(' + moveX + 'px) translateY(' + (moveY + elTrans) + 'px) translateZ(0) rotate(' + rotateElement + 'deg)';
              element.style.transform = 'translateX(' + moveX + 'px) translateY(' + (moveY + elTrans) + 'px) translateZ(0) rotate(' + rotateElement + 'deg)';
              element.style.opacity = opacity;
            }
          } else if (stackedOptions === 'Bottom' || stackedOptions === 'None') {

            if (element) {
              element.style.webkitTransform = 'translateX(' + moveX + 'px) translateY(' + (moveY) + 'px) translateZ(0) rotate(' + rotateElement + 'deg)';
              element.style.transform = 'translateX(' + moveX + 'px) translateY(' + (moveY) + 'px) translateZ(0) rotate(' + rotateElement + 'deg)';
              element.style.opacity = opacity;
            }

          }
        });
      }

      // Action to update all elements on the DOM for each stacked card.
      function updateUi() {
        requestAnimationFrame(() => {
          elTrans = 0;
          let elZindex = 5;
          let elScale = 1;
          let elOpac = 1;
          let elTransTop = items;
          const elTransInc = elementsMargin;

          for (let i = currentPosition; i < (currentPosition + items); i++) {
            if (listElNodesObj[i]) {
              if (stackedOptions === 'Top') {

                listElNodesObj[i].classList.add('stackedcards-top', 'stackedcards--animatable', 'stackedcards-origin-top');

                if (useOverlays) {
                  leftObj.classList.add('stackedcards-origin-top');
                  rightObj.classList.add('stackedcards-origin-top');
                  topObj.classList.add('stackedcards-origin-top');
                }

                elTrans = elTransInc * elTransTop;
                elTransTop--;

              } else if (stackedOptions === 'Bottom') {
                listElNodesObj[i].classList.add('stackedcards-bottom', 'stackedcards--animatable', 'stackedcards-origin-bottom');

                if (useOverlays) {
                  leftObj.classList.add('stackedcards-origin-bottom');
                  rightObj.classList.add('stackedcards-origin-bottom');
                  topObj.classList.add('stackedcards-origin-bottom');
                }

                elTrans = elTrans + elTransInc;

              } else if (stackedOptions === 'None') {

                listElNodesObj[i].classList.add('stackedcards-none', 'stackedcards--animatable');
                elTrans = elTrans + elTransInc;

              }

              listElNodesObj[i].style.transform = 'scale(' + elScale + ') translateX(0) translateY(' + (elTrans - elTransInc) + 'px) translateZ(0)';
              listElNodesObj[i].style.webkitTransform = 'scale(' + elScale + ') translateX(0) translateY(' + (elTrans - elTransInc) + 'px) translateZ(0)';
              listElNodesObj[i].style.opacity = elOpac;
              listElNodesObj[i].style.zIndex = elZindex;

              elScale = elScale - 0.04;
              elOpac = elOpac - (1 / items);
              elZindex--;
            }
          }

        });

      }

      // Touch events block
      const element = obj;
      let startTime;
      let startX;
      let startY;
      let translateX;
      let translateY;
      let currentX;
      let currentY;
      let touchingElement = false;
      let timeTaken;
      let topOpacity;
      let rightOpacity;
      let leftOpacity;

      function setOverlayOpacity() {

        topOpacity = (((translateY + (elementHeight) / 2) / 100) * -1);
        rightOpacity = translateX / 100;
        leftOpacity = ((translateX / 100) * -1);


        if (topOpacity > 1) {
          topOpacity = 1;
        }

        if (rightOpacity > 1) {
          rightOpacity = 1;
        }

        if (leftOpacity > 1) {
          leftOpacity = 1;
        }
      }

      function gestureStart(evt) {
        startTime = new Date().getTime();

        startX = evt.changedTouches[0].clientX;
        startY = evt.changedTouches[0].clientY;

        currentX = startX;
        currentY = startY;

        setOverlayOpacity();

        touchingElement = true;
        if (!(currentPosition >= maxElements)) {
          if (listElNodesObj[currentPosition]) {
            listElNodesObj[currentPosition].classList.add('no-transition');
            setZindex(6);

            if (useOverlays) {
              leftObj.classList.add('no-transition');
              rightObj.classList.add('no-transition');
              topObj.classList.add('no-transition');
            }

            if ((currentPosition + 1) < maxElements) {
              listElNodesObj[currentPosition + 1].style.opacity = '1';
            }

            elementHeight = listElNodesObj[currentPosition].offsetHeight / 3;
          }

        }

      }

      function gestureMove(evt) {
        currentX = evt.changedTouches[0].pageX;
        currentY = evt.changedTouches[0].pageY;

        translateX = currentX - startX;
        translateY = currentY - startY;

        setOverlayOpacity();

        if (!(currentPosition >= maxElements)) {
          evt.preventDefault();
          transformUi(translateX, translateY, 1, currentElementObj);

          if (useOverlays) {
            transformUi(translateX, translateY, topOpacity, topObj);

            if (translateX < 0) {
              transformUi(translateX, translateY, leftOpacity, leftObj);
              transformUi(0, 0, 0, rightObj);

            } else if (translateX > 0) {
              transformUi(translateX, translateY, rightOpacity, rightObj);
              transformUi(0, 0, 0, leftObj);
            }

            if (useOverlays) {
              leftObj.style.zIndex = 8;
              rightObj.style.zIndex = 8;
              topObj.style.zIndex = 7;
            }

          }

        }

      }

      function gestureEnd(evt) {

        if (!touchingElement) {
          return;
        }

        translateX = currentX - startX;
        translateY = currentY - startY;

        timeTaken = new Date().getTime() - startTime;

        touchingElement = false;

        if (!(currentPosition >= maxElements)) {
          if (translateY < (elementHeight * -1) && translateX > ((listElNodesWidth / 2) * -1) && translateX < (listElNodesWidth / 2)) {  // is Top?

            if (translateY < (elementHeight * -1) || (Math.abs(translateY) / timeTaken > velocity)) { // Did It Move To Top?
              onSwipeTop();
            } else {
              backToMiddle();
            }

          } else {

            if (translateX < 0) {
              if (translateX < ((listElNodesWidth / 2) * -1) || (Math.abs(translateX) / timeTaken > velocity)) { // Did It Move To Left?
                onSwipeLeft();
              } else {
                backToMiddle();
              }
            } else if (translateX > 0) {

              if (translateX > (listElNodesWidth / 2) && (Math.abs(translateX) / timeTaken > velocity)) { // Did It Move To Right?
                onSwipeRight();
              } else {
                backToMiddle();
              }

            }
          }
        }
      }

      element.addEventListener('touchstart', gestureStart, false);
      element.addEventListener('touchmove', gestureMove, false);
      element.addEventListener('touchend', gestureEnd, false);

      // Add listeners to call global action for swipe cards
      const buttonLeft = document.querySelector('.left-action');
      const buttonTop = document.querySelector('.top-action');
      const buttonRight = document.querySelector('.right-action');

      buttonLeft.addEventListener('click', onActionLeft, false);
      //buttonTop.addEventListener('click', onActionTop, false);
      buttonRight.addEventListener('click', onActionRight, false);

    }

    stackedCards();

  }



}
