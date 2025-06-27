
const apiKey = "102f834ab7d6d72bd7111dedfa8151bf";
const displayWether = document.getElementById("displayWether");


let cityName = document.querySelector(".inputWether");
const submit = document.getElementById("btnWether");



submit.addEventListener("click", async event =>{

    displayWether.textContent = " ";
    event.preventDefault();

        const city = cityName.value.toLowerCase();
        if(city)
        {
            try{
                const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
                const wetherData = await fetch(apiurl);
                if(!wetherData.ok){
                    throw new Error("City Not Found");
                }
                // const jsonData = await wetherData.json();
                // console.log(jsonData);
                displayWetherOnPage(wetherData);
            }
            catch(error){
                displayError(error.message);
            }

        }
        else{
            displayError("Please Enter City");
        }




});



async function displayWetherOnPage(wetherData){
    const data = await wetherData.json();
    console.log(data);

    const displayTemp = document.createElement("p");
    displayTemp.textContent = `Temparature : ${(data.main.temp  - 273.15).toFixed(2)} C `;
    displayWether.appendChild(displayTemp);
    displayWether.style.display = "block";

    const displayHumidity = document.createElement("p");
    displayHumidity.textContent = `Humidity : ${data.main.humidity} % `;
    displayWether.appendChild(displayHumidity);
    displayWether.style.display = "block";

    const displayPresure = document.createElement("p");
    displayPresure.textContent = `Pressure : ${data.main.pressure} hPa `;
    displayWether.appendChild(displayPresure);
    displayWether.style.display = "block";

    const displayWindSpeed = document.createElement('p');
    displayWindSpeed.textContent = `Wind Speed : ${data.wind.speed} m/s `;
    displayWether.appendChild(displayWindSpeed);
    displayWether.style.display = "block";


}

function displayError(msg){

    const displayError = document.createElement("p");
    displayError.textContent = msg ; 
    displayError.classList.add("displayError");
    displayWether.appendChild(displayError);
    displayWether.style.display = "block";

}
