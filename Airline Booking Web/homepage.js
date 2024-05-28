document.addEventListener("DOMContentLoaded", function() {
    const searchIcon = document.getElementById("search-icon");
    const searchBar = document.getElementById("search-bar");

    searchIcon.addEventListener("click", function() {
        if (searchBar.style.display === "block") {
            searchBar.style.display = "none";
        } else {
            searchBar.style.display = "block";
            searchBar.focus();
        }
    });
});
let slideIndex = 0;
    showSlides();

    function showSlides() {
        let slides = document.getElementsByClassName("slide");
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}
        slides[slideIndex-1].style.display = "block";
        setTimeout(showSlides, 3000); 
    }
    
    $(document).ready(function() {
        const airports = ["Manila (MNL)", "Cebu (CEB)", "Davao (DVO)", "Clark (CRK)", "Boracay (MPH)"]; // Dummy airport data
    
        $("#origin, #destination").autocomplete({
            source: airports,
            select: function(event, ui) {
                $(this).val(ui.item.value.split(" ")[0]); // Extract the airport code and set it as the input value
                return false; // Prevent the default behavior
            }
        });

        $(document).ready(function() {
            // Initialize datepicker for departure date
            $("#depart-date").datepicker({
                dateFormat: "yy-mm-dd",
                onSelect: function(date) {
                    updateFarePrice(date, "#departure-fare");
                }
            });
        
            // Initialize datepicker for return date
            $("#return-date").datepicker({
                dateFormat: "yy-mm-dd",
                onSelect: function(date) {
                    updateFarePrice(date, "#return-fare");
                }
            });
        
            // Hide return date initially
            $("#return-group").hide();
        
            // Handle trip type selection
            $("#trip-type").change(function() {
                var tripType = $(this).val();
                if (tripType === "one-way") {
                    $("#return-date").hide();
                    $("#return-date").val(""); // Clear return date
                    $("#return-fare").text(""); // Clear return fare
                } else {
                    $("#return-date").show();
                }
            });
        
            // Function to update fare price
            function updateFarePrice(date, elementId) {
                // This is just a placeholder function, you need to implement logic to get fare price based on selected date
                var farePrice = calculateFarePrice(date); // Implement this function
                $(elementId).text("Base Fare: $" + farePrice);
            }
        
            // Placeholder function to calculate fare price based on date
            function calculateFarePrice(date) {
                // This is a placeholder function, you need to implement your logic to calculate fare price based on selected date
                // For demonstration purpose, returning a random fare price
                return Math.floor(Math.random() * 100) + 50;
            }
        });
        // Additional JavaScript code here
    });
    
    // cities 
    document.addEventListener('DOMContentLoaded', function() {
        const cities = document.querySelectorAll('.city');
        const detailsContainer = document.querySelector('.details-container');
        
        cities.forEach(city => {
            city.addEventListener('click', function() {
                const cityName = this.dataset.city;
                updateDetails(cityName);
            });
        });

        function updateDetails(cityName) {
            // Simulated data for tourist destinations and prices
            const destinations = {
                Manila: [
                    { img: 'magellan.jpg', title: 'Cebu', description: 'For as low as', price: '₱188' },
                    { img: 'palawan.jpg', title: 'Palawan', description: 'For as low as', price: '₱288' },
                    { img: 'bora.jpg', title: 'Boracay', description: 'For as low as', price: '₱188' },
                    { img: 'seoul.jpg', title: 'Seoul', description: 'For as low as', price: '₱578' },
                    { img: 'tokyo.jpg', title: 'Tokyo', description: 'For as low as', price: '₱899' },
                    { img: 'taipei.jpg', title: 'Taipei', description: 'For as low as', price: '₱489' },

                ],
                Cebu: [
                    { img: 'Manila.jpg', title: 'Manila', description: 'For as low as', price: '₱238' },
                    { img: 'clark.jpg', title: 'Clark', description: 'For as low as', price: '₱258' },
                    { img: 'davao.jpg', title: 'Davao', description: 'For as low as', price: '₱288' },
                    { img: 'indo.jpg', title: 'Jakarta', description: 'For as low as', price: '₱988' },
                    { img: 'kl.jpg', title: 'Kuala Lumpur', description: 'For as low as', price: '₱899' },
                    { img: 'sin.jpg', title: 'Singapore', description: 'For as low as', price: '₱899' },

                ],
                Seoul: [
                    { img: 'Manila.jpg', title: 'Manila', description: 'For as low as', price: '₱1288' },
                    { img: 'shanghai.jpg', title: 'Shanghai', description: 'For as low as', price: '₱1099' },
                    { img: 'honolulu.jpg', title: 'Honolulu', description: 'For as low as', price: '₱2348' },
                    { img: 'bali.jpg', title: 'Bali', description: 'For as low as', price: '₱1369' },
                    { img: 'bk.jpg', title: 'Bangkok', description: 'For as low as', price: '₱988' },
                    { img: 'sin.jpg', title: 'Singapore', description: 'For as low as', price: '₱988' },

                ],
                Taipei: [
                    { img: 'Manila.jpg', title: 'Manila', description: 'For as low as', price: '₱588' },
                    { img: 'seoul.jpg', title: 'Seoul', description: 'For as low as', price: '₱758' },
                    { img: 'fuk.jpg', title: 'Fukouka', description: 'For as low as', price: '₱898' },
                    { img: 'Magellan.jpg', title: 'Cebu', description: 'For as low as', price: '₱688' },
                    { img: 'kl.jpg', title: 'Kuala Lumpur', description: 'For as low as', price: '₱988' },
                    { img: 'sin.jpg', title: 'Singapore', description: 'For as low as', price: '₱988' },

                ]
            };

            // Generate HTML for the details
            const detailsHTML = destinations[cityName].map(destination => `
                <div class="city-details">
                    <img src="${destination.img}" alt="${destination.title}">
                    <div class="details-overlay">
                        <h2>${destination.title}</h2>
                        <p>${destination.description}</p>
                        <p class="price">${destination.price}</p>
                        <a href ="homepage.html" class="book-flight-button">Book a Flight</a>
                    </div>
                </div>
            `).join('');

            detailsContainer.innerHTML = detailsHTML;
        }

        // Initialize with default city details (Manila)
        updateDetails('Manila');
    });

    document.addEventListener('DOMContentLoaded', () => {
        const cities = document.querySelectorAll('.city');
    
        cities.forEach(city => {
            city.addEventListener('click', () => {
                // Remove active class from all cities
                cities.forEach(c => c.classList.remove('active'));
    
                // Add active class to the clicked city
                city.classList.add('active');
            });
        });
    });
    