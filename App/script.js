
const input = document.querySelector("input");
const button = document.querySelector("#search");
const maps = document.querySelector("#maps");

const rua = document.querySelector("#rua");
const bairro = document.querySelector("#bairro");
const local = document.querySelector("#local");

button.addEventListener("click", getAddress);
maps.addEventListener("click", openOnMaps);

function getAddress(response) {
    let cep = input.value
    console.log(cep);
    const URL = `https://viacep.com.br/ws/${cep.replace("-", "")}/json/`;
    axios.get(URL)
    .then(response => {
        
        let ruaFormatado = response.data.logradouro.replace("Rua", "").trim()

        rua.innerHTML = `<strong>Rua:</strong> ${ruaFormatado}`
        bairro.innerHTML = `<strong>Bairro:</strong> ${response.data.bairro}`
        local.innerHTML = `<strong>Local:</strong> ${response.data.localidade} - ${response.data.uf}`

    })
    .catch(error => {
        console.log(error)
    })
    
}

function openOnMaps() {
    let cepSearch = input.value.replace("-", "").trim()
    
    if (cepSearch.length >= 8) {
        let url = `https://www.google.com/maps/search/?api=1&query=${cepSearch}`;
        window.open(url, "_blank");
    } else {
        alert("Por favor, digite um CEP válido!")
    }}