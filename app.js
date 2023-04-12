// selectors
const ratingCard = document.querySelector('.rating-card');
const thankYouCard = document.querySelector('.thank-you-card');
const ratings = document.querySelectorAll('.rates');
const submitBtn = document.querySelector('.btn-submit');
const displayRating = document.querySelector('.display-rating');
const rate = document.querySelector('.rate');

// variable to store selected value
let selectedRating = 0;


// add event listerner to each rating score
ratings.forEach(rating => 
    rating.addEventListener('click', () => {
        selectedRating = parseInt(rating.textContent);
        ratings.forEach(rate => rate.classList.remove('selected'));
        rating.classList.add('selected');
    })
);

// add event listener to submit button
submitBtn.addEventListener('click', () => {
    if(selectedRating === 0) {
        alert('Please select a rating')
    } else {
        displayRating.textContent = `You selected ${selectedRating} out of 5`;
        ratingCard.style.display = 'none';
        thankYouCard.style.display = 'block';
    }
})