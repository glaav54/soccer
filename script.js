var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var todayElement = document.getElementById(dd);
// todayElement.classList.add("current-day");

sampleOnClick = (id) => {

  if (id === '04') {
    document.getElementById("gameday").innerHTML = `Monday, April 4 2022`
    document.getElementById("maxim").innerHTML = `
    <h4>Maxim: Town practice</h4>
    <p>5:00 pm - 6:00 pm EDT</p>
    <a href="https://goo.gl/maps/nVotz7KCnmRRkb2UA" target="_blank">
    Marshall field 2</a>
    <p><em>Practice uniform</em></p>
    `
    document.getElementById("daniel").innerHTML = `
    <h4>Daniel: No events</h4>
    <p></p>
    `
  }

  if (id === '05') {
    document.getElementById("gameday").innerHTML = `Tuesday, April 5 2022`
    document.getElementById("maxim").innerHTML = `
    <h4>Maxim: No events</h4>
    <p></p>
    `
    document.getElementById("daniel").innerHTML = `
    <h4>Daniel: No events</h4>
    <p></p>
    `
  }

  if (id === '06') {
    document.getElementById("gameday").innerHTML = `Wednesday, April 6 2022`
    document.getElementById("maxim").innerHTML = `
    <h4>Maxim: No events</h4>
    <p></p>
    `
    document.getElementById("daniel").innerHTML = `
    <h4>Daniel: No events</h4>
    <p></p>
    `
  }

  if (id === '07') {
    document.getElementById("gameday").innerHTML = `Thursday, April 7 2022`
    document.getElementById("maxim").innerHTML = `
    <h4>Maxim: Juventus practice</h4>
    <p>5:00 pm - 6:15 pm EDT</p>
    <a href="https://goo.gl/maps/yvPjpj5vMP7bQ7Wq8" target="_blank">
    2450 Main Street, South Walpole, MA, USA</a>
    <p><em>Gray practice uniform</em></p>
    `
    document.getElementById("daniel").innerHTML = `
    <h4>Daniel: No events</h4>
    <p></p>
    `
  }

  if (id === '08') {
    document.getElementById("gameday").innerHTML = `Friday, April 8 2022`
    document.getElementById("maxim").innerHTML = `
    <h4>Maxim: Town practice</h4>
    <p>5:00 pm - 6:00 pm EDT</p>
    <a href="https://goo.gl/maps/nVotz7KCnmRRkb2UA" target="_blank">
    Marshall field 2</a>
    <p><em>Practice uniform</em></p>
    `
    document.getElementById("daniel").innerHTML = `
    <h4>Daniel: No events</h4>
    <p></p>
    `
  }

  if (id === '09') {
    document.getElementById("gameday").innerHTML = `Saturday, April 9 2022`
    document.getElementById("maxim").innerHTML = `
    <h4>Maxim: Town away game</h4>
    <p>Holliston B7/8 Dufault at Hopkinton Hillers (B8)</p>
    <p>2:15 pm - 3:45 pm EDT<br>Arrive by 1:45 pm</p>
    <a href="https://goo.gl/maps/4nfPKqU3JKsExLPr8" target="_blank">
    Fruit St. Turf Field 1</a>
    <p><em>White uniform (Bring red)</em></p>
    `
    document.getElementById("daniel").innerHTML = `
    <h4>Daniel: Clinic home game</h4>
    <p>Clinic 14 - Isabelle vs Clinic 10 - Lansdale</p>
    <p>9:00 am - 10:00 am EDT<br>Arrive by 8:45 am</p>
    <a href="https://goo.gl/maps/GwrB5JEbJxrXNJGH7" target="_blank">
    Stoddard Park, Holliston, MA</a>
    <p><em>Red uniform</em></p>
    `
  }
  
  if (id === '10') {
    document.getElementById("gameday").innerHTML = `Sunday, April 10 2022`
    document.getElementById("maxim").innerHTML = `
    <h4>Maxim: Juventus away game</h4>
    <p>Premier 2008 Boys at NEFC Metro West Boys 2008 United</p>
    <p>7:00 pm - 8:30 pm EDT<br>Arrive by 6:15 pm</p>
    <a href="https://goo.gl/maps/pqGC8ACoRAg1UbQZ9" target="_blank">
    33 Cape Road, Mendon, MA, USA - Field 2</a>
    <p><em>Pink uniform (Bring white)</em></p>
    `
    document.getElementById("daniel").innerHTML = `
    <h4>Daniel: No events</h4>
    <p></p>
    `
  }

  if (id === '13') {
    document.getElementById("gameday").innerHTML = `Wednesday, April 13 2022`
    document.getElementById("maxim").innerHTML = `
    <h4>Maxim: Running practice</h4>
    <p> TBD </p>
    <a href="https://goo.gl/maps/SezUUmavg7KN8QJ49" target="_blank">
    TBD</a>
    <p><em>Running outfit</em></p>
    `
    document.getElementById("daniel").innerHTML = `
    <h4>Daniel: No events</h4>
    <p></p>
    `
  }
  
  
    

  
}