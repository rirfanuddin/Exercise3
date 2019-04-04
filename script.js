let url = 'https://swapi.co/api/planets/';

let dataAll;

fetch(url)
.then(res => res.json())
.then((out) => {

  var contentSearch = document.getElementById("content-search");
  contentSearch.style.display='none';

  console.log('Checkout this JSON! ', out);
  let data = out.results;
  dataAll = data;
  
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

function search(){  
  var mainContent = document.getElementById("content");
  mainContent.style.display='none';

  var mainContent = document.getElementById("content-search");
  mainContent.style.display='inline-block';

  let query = document.getElementById("searchValue").value
  
  for(var i in dataAll) {        
    if(query === dataAll[i].name) {
      console.log("ADA");
      var tbody = document.getElementById("content-search");
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

      name.innerHTML = dataAll[i].name;
      rotationPeriod.innerHTML = dataAll[i].rotation_period;
      orbitalPeriod.innerHTML = dataAll[i].orbital_period;
      diameter.innerHTML = dataAll[i].diameter;
      climate.innerHTML = dataAll[i].climate;
      gravity.innerHTML = dataAll[i].gravity;
      terrain.innerHTML = dataAll[i].terrain;
      surfaceWater.innerHTML = dataAll[i].surface_water;
      population.innerHTML = dataAll[i].population;     
      for(var j=0; j<(dataAll[i].residents).length; j++) {
        var tmp = "<li><a href='" + (dataAll[i].films)[j] + "'>" + "Resident " + (j+1) + "</a></li><br/>";
        residents.innerHTML += tmp;
      }
      for(var j=0; j<(dataAll[i].films).length; j++) {
        var tmp = "<li><a href='" + (dataAll[i].films)[j] + "'>" + "Film " + (j+1) + "</a></li><br/>";
        films.innerHTML += tmp;
      }
      created.innerHTML = dataAll[i].created;
      edited.innerHTML = dataAll[i].edited;
    }
  }
  
}