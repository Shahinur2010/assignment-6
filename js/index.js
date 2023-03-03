const loadFeatures = async () => {
        const url = ` https://openapi.programming-hero.com/api/ai/tools`
        const res = await fetch(url);
        const data = await res.json();
        displayFeatures(data.data.tools);
    }

    const displayFeatures = (features) => {
        console.log(features)
        const featuresContainer = document.getElementById('features-container');
        features.forEach(feature => {
                    const featureDiv = document.createElement('div');
                    featureDiv.classList.add('col');
                    featureDiv.innerHTML = `
                    <div class="card p-4">
                            <img src="${feature.image}" class="card-img-top" alt="...">
                            <div class="card-body">
                            <h5 class="card-title">Features</h5>
                            <ol>
                            <li>${feature.features[0]}</li>
                            <li>${feature.features[1]}</li>
                            <li>${feature.features[2]}</li>
                            </ol>
                            <hr>
                              <h5 class="card-title">${feature.name}</h5>
                              <div class="d-flex justify-content-around mt-4">
                              <div class="me-auto"><i class="fa-solid fa-calendar-days"></i>   ${feature.published_in}</div>
                              <div><i class="text-danger fa-solid fa-arrow-right"></i></div>
                              </div>
                            </div>
                        </div>
                    `
                    featuresContainer.appendChild(featureDiv);
                })
            }    

    loadFeatures()

























// const loadfeatures = async (searchText, dataLimit) => {
//     const url = `https://openapi.programming-hero.com/api/features?search=${searchText}`
//     const res = await fetch(url);
//     const data = await res.json();
//     displayfeatures(data.data, dataLimit);
// }
// const displayfeatures = (features, dataLimit) => {
//     const featuresContainer = document.getElementById('features-container');
//     featuresContainer.innerText='';
//     const showAll = document.getElementById('show-all');
//     if (dataLimit && features.length > 10) {
//         features = features.slice(0, 10);
//         showAll.classList.remove('d-none');
//     }
//     else{
//         showAll.classList.add('d-none');
//     }
//     
//     features.forEach(feature => {
//         const featureDiv = document.createElement('div');
//         featureDiv.classList.add('col');
//         featureDiv.innerHTML = `
//         <div class="card p-4">
//                 <img src="${feature.image}" class="card-img-top" alt="...">
//                 <div class="card-body">
//                   <h5 class="card-title">${feature.feature_name}</h5>
//                   <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//                   <button onclick="loadfeatureDetails('${feature.slug}')" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#featureDetailModal">Show Details</button>
//                 </div>
//             </div>
//         `
//         featuresContainer.appendChild(featureDiv);
//     })
//     toggleSpinner(false)
// }

// const searchProcess = (dataLimit)=>{
//     toggleSpinner(true);
//     const searchField= document.getElementById('search-field');
//     const searchText =searchField.value;
//     loadfeatures(searchText, dataLimit);
// }
// document.getElementById('btn-search').addEventListener('click',function(){
//     searchProcess(10)
// })
// document.getElementById('search-field').addEventListener('keypress',function(e){
//     if(e.key === 'Enter'){
//         searchProcess(10)   
//     }
// })
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

// const loadfeatureDetails = async id =>{
//     const url =`https://openapi.programming-hero.com/api/feature/${id}`;
//     const res = await fetch(url);
//     const data = await res.json();
//     displayfeatureDetails(data.data)
// }

// const displayfeatureDetails = feature =>{
//     console.log(feature);
//     const modalTitle = document.getElementById('featureDetailModalLabel');
//     modalTitle.innerText = feature.name;
//     const featureDetails = document.getElementById('feature-details');
//     featureDetails.innerHTML=`
//     <p>Release Date: ${feature.releaseDate ? feature.releaseDate : 'No Release Date Found'}</p>
//     <p>Storage: ${feature.mainFeatures.storage ? feature.mainFeatures.storage :'No Storage Information'}</p>
//     <p>Others: ${feature.others? feature.others.Bluetooth : 'No Bluetooth Information'}</p>
//     `
// }

// loadfeatures('apple')