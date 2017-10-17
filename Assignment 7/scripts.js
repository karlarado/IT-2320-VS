var main = {};

main.Planets = {
    "galaxy": "Milky Way",
    "system": "Solar",
    "planets": [
        {
            "name": "Mercury",
            "color": "grey",
            "moons": 0
        },
        {
            "name": "Venus",
            "color": "yellow",
            "moons": 0
        },
        {
            "name": "Earth",
            "color": "blue",
            "moons": 1
        },
        {
            "name": "Mars",
            "color": "red",
            "moons": 2
        },
        {
            "name": "Jupiter",
            "color": "orange",
            "moons": 67
        },
        {
            "name": "Saturn",
            "color": "gold",
            "moons": 62
        },
        {
            "name": "Uranus",
            "color": "blue",
            "moons": 27
        },
        {
            "name": "Neptune",
            "color": "blue",
            "moons": 13
        }
    ]
}


function displayPlanet() {

    alert(main.Planets.galaxy);

};

$(document).ready(function () {
    
    displayPlanet();
    
});

