(async () => {
    const searchFlights = async () => {
        const departureAirport = document.getElementById('departureAirport').value;
        const arrivalAirport = 'LAS';
        const flightDate = document.getElementById('flightDate').value;
        const returnDate = document.getElementById('returnDate').value;
        const passengerCount = document.getElementById('passengerCount').value;
        const classOfService = document.getElementById('classOfService').value;

        const url = `https://tripadvisor16.p.rapidapi.com/api/v1/flights/searchFlights?sourceAirportCode=${departureAirport}&destinationAirportCode=${arrivalAirport}&date=${flightDate}&itineraryType=ROUND_TRIP&sortOrder=ML_BEST_VALUE&numAdults=${passengerCount}&numSeniors=0&classOfService=${classOfService}&pageNumber=1&currencyCode=CAD&returnDate=${returnDate}`;

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '03999fd41cmshd8e276a9d64426cp18c24ajsndb415e912b8f',
                'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json(); // Use text() instead of json()
            let flightsArr = result["data"]["flights"];
            displayResults(flightsArr);

            document.getElementById('result-container').innerHTML = `<pre>${result}</pre>`;
        } catch (error) {
            console.error(error);
        }
    };

    window.searchFlights = searchFlights;
})();

function displayResults(flightsArr) {
    for(var i=0;i<flightsArr.length;i++) {
        var details = flightsArr[i]["purchaseLinks"]["0"];
        var provider = details["partnerSuppliedProvider"]["displayName"];
        var price = details["totalPrice"];
        console.log(provider);
        console.log(price);
    }
}
