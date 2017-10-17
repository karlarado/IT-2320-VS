var main = {};

main.Planet = function (planetName, planetColor, numberMoons)
{
    this.name = planetName;
    this.color = planetColor;
    this.moons = numberMoons;
}

main.Mercury = new main.Planet("Mercury", "grey", 0);
main.Venus = new main.Planet("Venus", "yellow", 0);
main.Earth = new main.Planet("Earth", "blue", 1);
main.Mars = new main.Planet("Mars", "red", 2);
main.Jupiter = new main.Planet("Jupiter", "orange", 67);
main.Saturn = new main.Planet("Saturn", "gold", 62);
main.Uranus = new main.Planet("Uranus", "blue", 27);
main.Neptune = new main.Planet("Neptune", "blue", 13);

main.Planet.prototype.StatePlanetColor = function ()
{
    return this.name + " is " + this.color + ".";
}

main.Planet.prototype.StatePlanetMoons = function () {
    return this.name + " has " + this.moons + " moon(s)!";
}

document.body.innerHTML = main.Saturn.StatePlanetColor();
document.body.innerHTML += "<p/>";
document.body.innerHTML += main.Jupiter.StatePlanetMoons();