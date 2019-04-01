let url = 'https://swapi.co/api/planets/';

fetch(url)
.then(res => res.json())
.then((out) => {
  console.log('Checkout this JSON! ', out);
  let data = out.results;
  console.log(data);  
  for (var i = 0; i < data.length; i++) {
    var tbody = document.getElementById("content");
    var row = tbody.insertRow(0);

    var name = row.insertCell(0);
    var rotationPeriod = row.insertCell(1);
    var orbitalPeriod = row.insertCell(2);
    var diameter = row.insertCell(3);
    var climate = row.insertCell(4);
    var gravity = row.insertCell(5);
    var terrain = row.insertCell(6);
    var surfaceWater = row.insertCell(7);
    var population = row.insertCell(8);
    var residents = row.insertCell(9);
    var films = row.insertCell(10);
    var created = row.insertCell(11);
    var edited = row.insertCell(12);    

    name.innerHTML = data[i].name;
    rotationPeriod.innerHTML = data[i].rotation_period;
    orbitalPeriod.innerHTML = data[i].orbital_period;
    diameter.innerHTML = data[i].diameter;
    climate.innerHTML = data[i].climate;
    gravity.innerHTML = data[i].gravity;
    terrain.innerHTML = data[i].terrain;
    surfaceWater.innerHTML = data[i].surface_water;
    population.innerHTML = data[i].population;     
    for(var j=0; j<(data[i].residents).length; j++) {
      var tmp = "<li><a href='" + (data[i].films)[j] + "'>" + "Resident " + (j+1) + "</a></li><br/>";
      residents.innerHTML += tmp;
    }
    for(var j=0; j<(data[i].films).length; j++) {
      var tmp = "<li><a href='" + (data[i].films)[j] + "'>" + "Film " + (j+1) + "</a></li><br/>";
      films.innerHTML += tmp;
    }
    created.innerHTML = data[i].created;
    edited.innerHTML = data[i].edited;

  };
})
.catch(err => { throw err });