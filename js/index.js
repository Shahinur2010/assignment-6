const loadItems = async (dataLimit) => {
    const url = ` https://openapi.programming-hero.com/api/ai/tools`
    const res = await fetch(url);
    const data = await res.json();
    displayItems(data.data.tools, dataLimit);
}

const displayItems = (items, dataLimit) => {
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
                              <div onclick="loadItemDetails()" data-bs-toggle="modal" data-bs-target="#itemDetailModal"><i class="text-danger fa-solid fa-arrow-right"></i></div>
                              </div>
                            </div>
                        </div>
                    `
        itemsContainer.appendChild(itemDiv);
    })
    toggleSpinner(false);
}

const searchProcess = (dataLimit) => {
    toggleSpinner(true);
    loadItems(dataLimit);
}

const toggleSpinner = isLoading => {
    const loaderSection = document.getElementById('loader');
    if(isLoading){
        loaderSection.classList.remove('d-none')
    }
    else{
        loaderSection.classList.add('d-none')
    }
}

document.getElementById('btn-see-more').addEventListener('click', function () {
    searchProcess();
})

    const loadItemDetails = async id =>{
            const url =`https://openapi.programming-hero.com/api/ai/tool/01`;
            const res = await fetch(url);
            const data = await res.json();
            displayItemDetails(data.data)
        }
    loadItemDetails()

    const displayItemDetails = item =>{
        const modalTitle = document.getElementById('itemDetailModalLabel');
        modalTitle.innerText = '';
        const itemDetails = document.getElementById('item-details');
        itemDetails.innerHTML=`
        <div class="row">
        <div class="col">
                <div class="card">
                <div class="card-body">
                <p class="card-text fw-bold">${item.description}</p>
        <div class="d-flex justify-content-around my-4"> 
        <div class="d-flex flex-column text-success">
        <div class="text-center">${item.pricing[0].plan? item.pricing[0].plan : 'No Pricing Plan Found'}</div>
        <div>${item.pricing[0].price? item.pricing[0].price : 'No Pricing Data Found'}
        </div>
        </div>
        <div class="d-flex flex-column text-warning">
        <div class="text-center">${item.pricing[1].plan? item.pricing[1].plan : 'No Pricing Plan Found'}</div>
        <div>${item.pricing[1].price? item.pricing[1].price : 'No Pricing Data Found'}</div>
        </div>
        <div class="d-flex flex-column text-danger">
        <div class="text-center">${item.pricing[2].plan? item.pricing[2].plan : 'No Pricing Plan Found'}</div>
        <div>${item.pricing[2].price? item.pricing[2].price : 'No Pricing Data Found'}</div>
        </div>
        </div>
        <div class="d-flex justify-content-around">
        <div> <span class="fw-bold"> Features</span> 
        <li>${item.features.feature_name
            ? item.features.feature_name
            : 'No Features Information Found'}</li>
        <li>${item.features.feature_name
            ? item.features.feature_name
            : 'No Features Information Found'}</li>
        <li>${item.features.feature_name
            ? item.features.feature_name
            : 'No Features Information Found'}</li>
        
        </div>
            <div> <span class="fw-bold"> Integrations</span>
            : <li>
            ${item.integrations[0]
                ? item.integrations[0]
                : 'No Integration Information Found'}
            </li>
            <li>
            ${item.integrations[1]
                ? item.integrations[1]
                : 'No Integration Information Found'}
            </li>
            <li>
            ${item.integrations[2]
                ? item.integrations[2]
                : 'No Integration Information Found'}
            </li>
            </div>
                </div>
                </div>
          </div>
                <div class="col">
                <div class="card">
                <p class="text-white bg-danger ms-auto">${item.accuracy.score ? item.accuracy.score:''} % accuracy</p>
              <img src="${item.image_link[1]}
              " class="card-img-top" alt="...">
                  <div class="card-body">
                  <p class="card-text text-center">${item.input_output_examples[0].input? item.input_output_examples[0].input: 'No Input Data Found'}</p>
                  <p class="card-text text-center">${item.input_output_examples[0].output? item.input_output_examples[0].output: 'No Output Data Found'}</p>
                  </div>
                </div>
          </div>
        </div>
                `
    }

loadItems(6)
























