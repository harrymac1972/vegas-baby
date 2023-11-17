$(document).ready(function() {
    $('#eventForm').submit(function(event) {
        event.preventDefault();
        getTicketmasterEvents();
    });
});

function getTicketmasterEvents() {
    const apiKey = 'ZhrXpADQebFjFTk9LOYxv1AqB7SpjLir';
    const cityInput = $('#cityInput').val();
    const numberOfEvents = $('#numberOfEvents').val();
    const searchInput = $('#searchInput').val();

    let apiUrl = `https://app.ticketmaster.com/discovery/v2/events.json?size=${numberOfEvents}&apikey=${apiKey}&city=${cityInput}`;
    
    if (searchInput.trim() !== "") {
        apiUrl += `&keyword=${searchInput}`;
    }

    $.ajax({
        type: 'GET',
        url: apiUrl,
        async: true,
        dataType: 'json',
        success: function(json) {
            console.log(json);
            displayEventInfo(json);
        },
        error: function(xhr, status, err) {
            console.error('Error fetching Ticketmaster events:', err);
            $('#event-info').html('<p>Error fetching event information</p>');
        }
    });
}

function displayEventInfo(eventData) {
    const eventInfoContainer = $('#event-info');

    if (eventData._embedded && eventData._embedded.events && eventData._embedded.events.length > 0) {
        let eventsHTML = '';

        eventData._embedded.events.forEach(event => {
            eventsHTML += `
                <div>
                    <h2>${event.name}</h2>
                    <p>Date: ${event.dates.start.localDate}</p>
                    <p>Time: ${event.dates.start.localTime}</p>
                    <p>Venue: ${event._embedded.venues[0].name}</p>
                </div>
            `;
        });

        eventInfoContainer.html(eventsHTML);
    } else {
        eventInfoContainer.html('<p>No event information available</p>');
    }
}
