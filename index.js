let imgContainer = document.querySelector('.imgContainer');
let title = document.querySelector('.title');
let explanation = document.querySelector('.explanation'); 


class Nasa {
    async getData () {
        try {
            let result = await fetch('https://api.nasa.gov/planetary/apod?api_key=YjIl8MpvNCgMPqRhIdoNvXKW7f212NHD5h6kEMvb');
            let data = await result.json();
            
            return data;
        }
        catch (error) {
            console.log(error);
        }
    }

    display (data) {
        let img = `<img src=${data.hdurl} alt="image" class="img">`
        imgContainer.innerHTML = img;

        title.innerText = data.title;
        explanation.innerText = data.explanation;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    let nasa = new Nasa;

    nasa.getData().then(data => {
        nasa.display(data);
    })
});