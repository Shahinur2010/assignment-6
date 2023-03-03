const loadItems = async (dataLimit) => {
    const url = ` https://openapi.programming-hero.com/api/ai/tools`
    const res = await fetch(url);
    const data = await res.json();
    displayItems(data.data.tools, dataLimit);
}

const displayItems = (items, dataLimit) => {
    console.log(items)
    const itemsContainer = document.getElementById('items-container');
    itemsContainer.innerText='';
    const seeMore = document.getElementById('see-more');
    if (dataLimit && items.length > 6) {
        items = items.slice(0, 6);
        seeMore.classList.remove('d-none');
    }
    else {
        seeMore.classList.add('d-none');
    }
    items.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('col');
        itemDiv.innerHTML = `
                    <div class="card p-4">
                            <img src="${item.image}" class="card-img-top" alt="...">
                            <div class="card-body">
                            <h5 class="card-title">Features</h5>
                            <ol>
                            <li>${item.features[0]}</li>
                            <li>${item.features[1]}</li>
                            <li>${item.features[2]? item.features[2]:'No data found'}</li>
                            </ol>
                            <hr>
                              <h5 class="card-title">${item.name}</h5>
                              <div class="d-flex justify-content-around mt-4">
                              <div class="me-auto"><i class="fa-solid fa-calendar-days"></i>   ${item.published_in}</div>
                              <div><i class="text-danger fa-solid fa-arrow-right"></i></div>
                              </div>
                            </div>
                        </div>
                    `
        itemsContainer.appendChild(itemDiv);
    })
}

const searchProcess = (dataLimit) => {
    loadItems(dataLimit);
}
document.getElementById('btn-see-more').addEventListener('click', function () {
    searchProcess();
})

loadItems(6)

























// const loaditems = async (searchText, dataLimit) => {
//     const url = `https://openapi.programming-hero.com/api/items?search=${searchText}`
//     const res = await fetch(url);
//     const data = await res.json();
//     displayitems(data.data, dataLimit);
// }
// const displayitems = (items, dataLimit) => {
//     const itemsContainer = document.getElementById('items-container');
//     itemsContainer.innerText='';
//     const seeMore = document.getElementById('show-all');
//     if (dataLimit && items.length > 10) {
//         items = items.slice(0, 10);
//         seeMore.classList.remove('d-none');
//     }
//     else{
//         seeMore.classList.add('d-none');
//     }
//
//     items.forEach(item => {
//         const itemDiv = document.createElement('div');
//         itemDiv.classList.add('col');
//         itemDiv.innerHTML = `
//         <div class="card p-4">
//                 <img src="${item.image}" class="card-img-top" alt="...">
//                 <div class="card-body">
//                   <h5 class="card-title">${item.item_name}</h5>
//                   <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//                   <button onclick="loaditemDetails('${item.slug}')" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#itemDetailModal">Show Details</button>
//                 </div>
//             </div>
//         `
//         itemsContainer.appendChild(itemDiv);
//     })
//     toggleSpinner(false)
// }

// const searchProcess = (dataLimit)=>{
//     toggleSpinner(true);
//     const searchField= document.getElementById('search-field');
//     const searchText =searchField.value;
//     loaditems(searchText, dataLimit);
// }

// const toggleSpinner = isLoading => {
//     const loaderSection = document.getElementById('loader');
//     if(isLoading){
//         loaderSection.classList.remove('d-none')
//     }
//     else{
//         loaderSection.classList.add('d-none')
//     }
// }

// document.getElementById('btn-show-all').addEventListener('click',function () {
//     searchProcess();
// })

// const loaditemDetails = async id =>{
//     const url =`https://openapi.programming-hero.com/api/item/${id}`;
//     const res = await fetch(url);
//     const data = await res.json();
//     displayitemDetails(data.data)
// }

// const displayitemDetails = item =>{
//     console.log(item);
//     const modalTitle = document.getElementById('itemDetailModalLabel');
//     modalTitle.innerText = item.name;
//     const itemDetails = document.getElementById('item-details');
//     itemDetails.innerHTML=`
//     <p>Release Date: ${item.releaseDate ? item.releaseDate : 'No Release Date Found'}</p>
//     <p>Storage: ${item.mainitems.storage ? item.mainitems.storage :'No Storage Information'}</p>
//     <p>Others: ${item.others? item.others.Bluetooth : 'No Bluetooth Information'}</p>
//     `
// }

// loaditems('apple')




// const generateLi= (li) => {
//     let liHTML = ``;
//     for(let i = 0; i<features.length; i++){
//         liHTML += `item.'${features[i]}'`;
//         return liHTML
//     }
// }