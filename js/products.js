
const postContainer = document.querySelector('.card-container');

const postMethods = ()=>{

    let cardData = []

    fetch('../products.json')
    .then(response => response.json())
    .then(value => {
        cardData = value;
        console.log(cardData);
        cardData.map((postData)=>{
            const postElement = document.createElement('div');
            postElement.classList.add('card');
            postElement.innerHTML= `
            <img src="${postData.image}">
            <h3 class="card-heading">${postData.productName}</h3>
            <h2>${postData.bio}</h2>
            <p class="card-body">${postData.price}</p>
            `
    
            postContainer.appendChild(postElement)
    
        })
    });

}
postMethods()