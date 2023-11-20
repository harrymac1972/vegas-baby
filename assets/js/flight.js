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
                'X-RapidAPI-Key': 'f1af298a23msh5b5e6a9fcf7c85ep1ce139jsndc8bdaa3b362',
                'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json(); // Use text() instead of json()
            console.log(result);

            document.getElementById('result-container').innerHTML = `<pre>${result}</pre>`;
        } catch (error) {
            console.error(error);
        }
    };

    window.searchFlights = searchFlights;
})();