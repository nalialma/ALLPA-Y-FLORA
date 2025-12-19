// Splash screen
        window.addEventListener('load', function() {
            setTimeout(function() {
                document.getElementById('splash').classList.add('hide-splash');
                setTimeout(function() {
                    document.getElementById('splash').style.display = 'none';
                }, 1500);
            }, 4500);
        });

        // Initialize map
        var map = L.map('map').setView([-24.7859, -65.4117], 6);
        
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(map);
        
        // Add markers for locations
        var locations = [
            {coords: [-24.7859, -65.4117], name: "Salta, Argentina"},
            {coords: [-26.8241, -65.2226], name: "Tucumán, Argentina"},
            {coords: [-31.4201, -64.1888], name: "Córdoba, Argentina"}
        ];
        
        locations.forEach(function(location) {
            L.marker(location.coords)
                .addTo(map)
                .bindPopup('<strong>' + location.name + '</strong><br>Proyecto de sanación comunitaria');
        });
