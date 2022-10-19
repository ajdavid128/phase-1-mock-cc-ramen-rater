// write your code here
// GET fetch request all ramen data
// append ramen images in div with id="ramen-menu"
    // use img tags to append to div (don't forget to use src)

// click on img from ramen menu and it will display information inside div with id="ramen-detail"
// create new ramen with "new-ramen" form (submit form event)
// new ramen should be added to #ramen-menu (the ramen does not need to stay on the page with page refresh, unless you do a POST request)


// GET fetch request all ramen data

const ramenURL = "http://localhost:3000/ramens"

const ramenMenuDiv = document.querySelector('#ramen-menu');

function addingRamenImgToTheDOM(){
    fetch(ramenURL)
    .then(res => res.json())
    .then(ramenData => ramenData.forEach(
        typeOfRamen => renderRamen(typeOfRamen)
    ));

    // const ramenMenuDiv = document.querySelector('#ramen-menu');
// append ramen images in div with id="ramen-menu"
    // use img tags to append to div (don't forget to use src)
    function renderRamen(typeOfRamen){
        const ramenImg = document.createElement('img');
        // ramenImg.id = typeOfRamen.id;
        ramenImg.src = typeOfRamen.image;
        ramenMenuDiv.append(ramenImg);

    };
};
addingRamenImgToTheDOM()

const nameDisplay = document.querySelector('.name');
const restaurantDisplay = document.querySelector('.restaurant');


// console.log(nameDisplay, restaurantDisplay)





// .addEventListener('click', (e) => {
//     const ramen1 = document.querySelector('#1')
    
// })



// function renderRamenFromForm(addNewRamen){
    
    const form = document.querySelector('#new-ramen');
    form.addEventListener('submit', (e) => {
     e.preventDefault();
     
    const inputFieldName = document.querySelector('#new-name');
    inputFieldName.textContent = e.target.name.value;
    console.log(inputFieldName.textContent)

    const inputFieldRestaurant = document.querySelector('#new-restaurant');
    inputFieldRestaurant.textContent = e.target.restaurant.value;
    console.log(inputFieldRestaurant.textContent)

    // I need to make a new image tag and append it to the ramen menu div
    const newRamenImg = document.createElement('img');
    newRamenImg.src = e.target.image.value;

    const inputFieldImage = document.querySelector('#new-image');
    inputFieldImage.src = e.target.image.value;
    ramenMenuDiv.append(newRamenImg);
    console.log(newRamenImg.src)

    const inputFieldRating = document.querySelector('#new-rating');
    inputFieldRating.textContent = Number(e.target.rating.value);
    console.log(inputFieldRating.textContent)

    const inputFieldComment = document.querySelector('#new-comment');
    inputFieldComment.textContent = e.target['new-comment'].value;
    console.log(inputFieldComment.textContent)
    
    form.reset();

//     // ramenMenuDiv.append(inputFieldImage);

})
// }
// renderRamenFromForm(addNewRamen)
