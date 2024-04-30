function toggleMenu(){
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');
    menu.classList.toggle('open');
    icon.classList.toggle('open');

}

function fadeInSalman() {
    var logo = document.getElementById('logo1');
    logo.textContent = 'Abdullah Nashat Salman';
    
}

function fadeOutSalman() {
    var logo = document.getElementById('logo1');
    logo.textContent = 'Abdullah Nashat';
 
}

var logo = document.getElementById('logo1');
logo.addEventListener('mouseover', fadeInSalman);
logo.addEventListener('mouseout', fadeOutSalman);

window.addEventListener('scroll', function() {
    const slider = document.getElementById('about-slider');
    const sliderPosition = slider.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.5;
  
    if (sliderPosition < screenPosition) {
      const detailContainers = document.querySelectorAll('.about-details-container');
      detailContainers.forEach(container => {
        container.classList.add('animate-slider');
      });
    }
  });


  window.addEventListener('scroll', function() {
    const slider = document.getElementById('about-slider');
    const sliderPosition = slider.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.5;
  
    if (sliderPosition < screenPosition) {
      const detailContainers = document.querySelectorAll('.project-details-container');
      detailContainers.forEach(container => {
        container.classList.add('animate-slider');
      });
    }
  });



 // Get references to the education container and the Auc-box
const eduContainer = document.getElementById('edu-container');
const aucBox = document.getElementById('Auc-box');

// Flag to keep track of whether the Auc-box is clicked
let aucBoxClicked = false;

// Add event listener for hover on the education container
eduContainer.addEventListener('mouseenter', () => {
  // Show the Auc-box when hovering over the education container
  aucBox.style.display = 'block';
});

// Add event listener for hover on the Auc-box
aucBox.addEventListener('mouseenter', () => {
  // Set the flag to indicate that the mouse is over the Auc-box
  aucBoxHovered = true;
});



// Add event listener for mouseleave on the education container
eduContainer.addEventListener('mouseleave', () => {
  // Hide the Auc-box if it is not clicked
  if (!aucBoxClicked && !aucBoxHovered) {
    aucBox.style.display = 'none';
  }
});

// Add event listener for click on the Auc-box
aucBox.addEventListener('click', () => {
  // Set the flag to indicate that the Auc-box is clicked
  aucBoxClicked = true;
});

// Add event listener for mouseleave on the Auc-box
aucBox.addEventListener('mouseleave', () => {
  // Reset the flag and hide the Auc-box
  aucBoxClicked = false;
  aucBox.style.display = 'none';
});


const aucIcon = document.querySelector('.AUC_icon');

// Add a click event listener to the AUC_icon
aucIcon.addEventListener('click', () => {
  window.open('https://www.aucegypt.edu/', '_blank');
});



