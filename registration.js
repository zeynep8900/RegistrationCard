
function fetchCompanies() {
    const companySelect = document.getElementById('company-select')
    const url = "https://run.mocky.io/v3/1b613953-9863-4408-a742-e5dcd597fa4f"
    fetch(url).then(async (res) => {
        const items = await res.json()
        items.forEach(item => { generateOption(item.id, item.company, companySelect) })
    })

}

function generateOption(value, text, selectDom) {
    const option = document.createElement("option")
    option.text = text
    option.value = value
    selectDom.appendChild(option)

}

window.addEventListener('load', () => {
   fetchCompanies()
})

function fetchArea_code(){
    const areaCodeSelect = document.getElementById('areaCode-select')
    const url = "https://run.mocky.io/v3/c6c6a02c-8cbc-4f09-80ea-e067eb7543c2"
    fetch(url).then(async(res)=>{
        const items = await res.json()
        items.forEach(item => {generateOption(item.name, item.dial_code, areaCodeSelect)})
    })
}
function generateOption(value, text, selectDom) {
    const option = document.createElement("option")
    option.text = text
    option.value = value

    const displayText = `${value} - ${text}`;
    option.text = displayText;
    
    selectDom.appendChild(option)


}

window.addEventListener('load', () => {
    fetchArea_code()
})

function fetchsubject(){
    const subjectselect = document.getElementById('subject-select')
    const url = "https://run.mocky.io/v3/e2d40208-8be0-4dc1-966d-87d8ae237362"
    fetch(url).then(async(res)=>{
        const items = await res.json()
        items.forEach(item => {generateOption(item.id, item.subject, subjectselect)})
    })
}
function generateOption(value, text, selectDom) {
    const option = document.createElement("option")
    option.text = text
    option.value = value
    selectDom.appendChild(option)

}

window.addEventListener('load', () => {
    fetchsubject()
})

function validateForm() {
    if (!validateEmail(document.getElementById('email').value)) {
        alert('Invalid email');
        return false;
    }

    if (!validatePhoneNumber(document.getElementById('phone').value)) {
        alert('Invalid phone number');
        return false;
    }

    return true;
}

function validatePhoneNumber(phoneNumber) {
    var phonePattern = /^[0-9]+$/;
    return phonePattern.test(phoneNumber);
}



function submitForm() {
    
    window.open("submit.html", "_blank");
    return false; 
}






