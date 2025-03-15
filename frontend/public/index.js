import API_URL from './global.js'

async function loadData() {
    try {
        const response = await fetch(API_URL+"/products");
        const data = await response.json()
        console.log(data)
        const list = document.getElementById('list')

        data.forEach(element => {
            const li = document.createElement('li');
            li.textContent = element.name;
            list.appendChild(li)
        });
    } catch (error) {
        console.error('Error: ', error)
    }
}

loadData()