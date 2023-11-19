// Wait for the document to be fully loaded before executing the code
$(document).ready(function() {
    // Handle form submission
    $('#eventForm').submit(function(event) {
        event.preventDefault(); // Prevent the default form submission behavior
        getTicketmasterEvents(); // Call the function to retrieve Ticketmaster events
    });
});

// Function to fetch Ticketmaster events
function getTicketmasterEvents() {
    // Ticketmaster API key
    const apiKey = 'ZhrXpADQebFjFTk9LOYxv1AqB7SpjLir';
    // Get input values from the form
    const cityInput = $('#cityInput').val();
    const numberOfEvents = $('#numberOfEvents').val();
    const searchInput = $('#searchInput').val();

    // Build the Ticketmaster API URL
    let apiUrl = `https://app.ticketmaster.com/discovery/v2/events.json?size=${numberOfEvents}&apikey=${apiKey}&city=${cityInput}`;
    
    // Append search keyword to the API URL if provided
    if (searchInput.trim() !== "") {
        apiUrl += `&keyword=${searchInput}`;
    }

    // Make an AJAX request to the Ticketmaster API
    $.ajax({
        type: 'GET',
        url: apiUrl,
        async: true,
        dataType: 'json',
        // Callback function on successful API response
        success: function(json) {
            console.log(json); // Log the API response for debugging
            displayEventInfo(json); // Call the function to display event information
        },
        // Callback function on AJAX request error
        error: function(xhr, status, err) {
            console.error('Error fetching Ticketmaster events:', err);
            $('#event-info').html('<p>Error fetching event information</p>');
        }
    });
}

// Function to display Ticketmaster event information
function displayEventInfo(eventData) {
    const eventInfoContainer = $('#event-info');

    // Check if event data is available
    if (eventData._embedded && eventData._embedded.events && eventData._embedded.events.length > 0) {
        let eventsHTML = '';

        // Loop through each event in the response and build HTML
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

        // Display the generated HTML in the specified container
        eventInfoContainer.html(eventsHTML);
    } else {
        // Display a message if no event information is available
        eventInfoContainer.html('<p>No event information available</p>');
    }
}
