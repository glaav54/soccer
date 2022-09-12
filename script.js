var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
// January gives 00
var mm = String(today.getMonth() + 1).padStart(2, '0');
var mmdd = mm + dd;
var mm2022 = String(today.getMonth() + 1).padStart(2, '0') + '2022';
var todayElement = document.getElementById(mmdd);
if (document.getElementById(mm2022)) {
  todayElement.classList.add("current-day");
}


sampleOnClick = (id) => {

  if (id === '0401') {
    document.getElementById("gameday").innerHTML = `Friday, April 1 2022`
    document.getElementById("maxim").innerHTML = `
    <h4>Maxim: No events</h4>
    <p></p>
    `
    document.getElementById("daniel").innerHTML = `
    <h4>Daniel: No events</h4>
    <p></p>
    `
  }

  if (id === '0402') {
    document.getElementById("gameday").innerHTML = `Saturday, April 2 2022`
    document.getElementById("maxim").innerHTML = `
    <h4>Maxim: No events</h4>
    <p></p>
    `
    document.getElementById("daniel").innerHTML = `
    <h4>Daniel: No events</h4>
    <p></p>
    `
  }

  if (id === '0403') {
    document.getElementById("gameday").innerHTML = `Sunday, April 3 2022`
    document.getElementById("maxim").innerHTML = `
    <h4>Maxim: No events</h4>
    <p></p>
    `
    document.getElementById("daniel").innerHTML = `
    <h4>Daniel: No events</h4>
    <p></p>
    `
  }
  
  if (id === '0404') {
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

  if (id === '0405') {
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

  if (id === '0406') {
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

  if (id === '0407') {
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

  if (id === '0408') {
    document.getElementById("gameday").innerHTML = `Friday, April 8 2022`
    document.getElementById("maxim").innerHTML = `
    <h4>Maxim: Town practice</h4>
    <p>5:00 pm - 6:15 pm EDT</p>
    <a href="https://goo.gl/maps/nVotz7KCnmRRkb2UA" target="_blank">
    Marshall field 2</a>
    <p><em>Practice uniform</em></p>
    `
    document.getElementById("daniel").innerHTML = `
    <h4>Daniel: No events</h4>
    <p></p>
    `
  }

  if (id === '0409') {
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
  
  if (id === '0410') {
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

  if (id === '0411') {
    document.getElementById("gameday").innerHTML = `Monday, April 11 2022`
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

  if (id === '0412') {
    document.getElementById("gameday").innerHTML = `Tuesday, April 12 2022`
    document.getElementById("maxim").innerHTML = `
    <h4>Maxim: No events</h4>
    <p></p>
    `
    document.getElementById("daniel").innerHTML = `
    <h4>Daniel: No events</h4>
    <p></p>
    `
  }

  if (id === '0413') {
    document.getElementById("gameday").innerHTML = `Wednesday, April 13 2022`
    document.getElementById("maxim").innerHTML = `
    <h4>Maxim: Town away game</h4>
    <p>Holliston B7/8 Dufault at Hopkinton Hillers (B8)</p>
    <p>6:00 pm - 7:30 pm EDT<br>Arrive by 5:30 pm</p>
    <a href="https://goo.gl/maps/4nfPKqU3JKsExLPr8" target="_blank">
    Fruit St. Turf Field 1</a>
    <p><em>White uniform (Bring red)</em></p>
    `
    document.getElementById("daniel").innerHTML = `
    <h4>Daniel: No events</h4>
    <p></p>
    `
  }
  
  if (id === '0414') {
    document.getElementById("gameday").innerHTML = `Thursday, April 14 2022`
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

  if (id === '0415') {
    document.getElementById("gameday").innerHTML = `Friday, April 15 2022`
    document.getElementById("maxim").innerHTML = `
    <h4>Maxim: Town practice</h4>
    <p>5:00 pm - 6:15 pm EDT</p>
    <a href="https://goo.gl/maps/nVotz7KCnmRRkb2UA" target="_blank">
    Marshall field 2</a>
    <p><em>Practice uniform</em></p>
    `
    document.getElementById("daniel").innerHTML = `
    <h4>Daniel: No events</h4>
    <p></p>
    `
  }

  if (id === '0416') {
    document.getElementById("gameday").innerHTML = `Saturday, April 16 2022`
    document.getElementById("maxim").innerHTML = `
    <h4>Maxim: Town home game</h4>
    <p>Holliston B7/8 Dufault vs Natick Blazers</p>
    <p>4:00 pm - 5:30 pm EDT<br>Arrive by 3:30 pm</p>
    <a href="https://goo.gl/maps/nVotz7KCnmRRkb2UA" target="_blank">
    Marshall field 2</a>
    <p><em>White uniform (Bring red)</em></p>
    `
    document.getElementById("daniel").innerHTML = `
    <h4>Daniel: Clinic home game</h4>
    <p>Clinic 14 - Isabelle vs Clinic 6 - Santos</p>
    <p>11:30 am - 12:30 pm EDT<br>Arrive by 11:15 am</p>
    <a href="https://goo.gl/maps/GwrB5JEbJxrXNJGH7" target="_blank">
    Stoddard Park, Holliston, MA</a>
    <p><em>Red uniform</em></p>
    `
  }
  
  if (id === '0417') {
    document.getElementById("gameday").innerHTML = `Sunday, April 17 2022`
    document.getElementById("maxim").innerHTML = `
    <h4>Maxim: No events</h4>
    <p></p>
    `
    document.getElementById("daniel").innerHTML = `
    <h4>Daniel: No events</h4>
    <p></p>
    `
  }

  if (id === '0418') {
    document.getElementById("gameday").innerHTML = `Monday, April 18 2022`
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

  if (id === '0419') {
    document.getElementById("gameday").innerHTML = `Tuesday, April 19 2022`
    document.getElementById("maxim").innerHTML = `
    <h4>Maxim: No events</h4>
    <p></p>
    `
    document.getElementById("daniel").innerHTML = `
    <h4>Daniel: No events</h4>
    <p></p>
    `
  }

  if (id === '0420') {
    document.getElementById("gameday").innerHTML = `Wednesday, April 20 2022`
    document.getElementById("maxim").innerHTML = `
    <h4>Maxim: Running Clinic (optional)</h4>
    <p>TBD</p>
    <p><em>Running outfit</em></p>
    `
    document.getElementById("daniel").innerHTML = `
    <h4>Daniel: No events</h4>
    <p></p>
    `
  }
  
  if (id === '0421') {
    document.getElementById("gameday").innerHTML = `Thursday, April 21 2022`
    document.getElementById("maxim").innerHTML = `
    <h4>Maxim: No events</h4>
    <p></p>
    `
    document.getElementById("daniel").innerHTML = `
    <h4>Daniel: No events</h4>
    <p></p>
    `
  }

  if (id === '0422') {
    document.getElementById("gameday").innerHTML = `Friday, April 22 2022`
    document.getElementById("maxim").innerHTML = `
    <h4>Maxim: Town practice</h4>
    <p>5:00 pm - 6:15 pm EDT</p>
    <a href="https://goo.gl/maps/nVotz7KCnmRRkb2UA" target="_blank">
    Marshall field 2</a>
    <p><em>Practice uniform</em></p>
    `
    document.getElementById("daniel").innerHTML = `
    <h4>Daniel: No events</h4>
    <p></p>
    `
  }

  if (id === '0423') {
    document.getElementById("gameday").innerHTML = `Saturday, April 23 2022`
    document.getElementById("maxim").innerHTML = `
    <h4>Maxim: Town away game</h4>
    <p>Holliston B7/8 Dufault at Milford-Hopedale Hawks</p>
    <p>4:00 pm - 5:30 pm EDT<br>Arrive by 3:30 pm</p>
    <a href="https://goo.gl/maps/sF3EjGKxahWyXSEY9" target="_blank">
    Milford High School 11v11 GRASS</a>
    <p><em>White uniform (Bring red)</em></p>
    
    <hr>
   
    <h4>Maxim: Juventus home game</h4>
    <p>Premier 2008 Boys vs Seacoast United Boston 2008 Pre Elite Boys</p>
    <p>6:30 pm - 8:00 pm EDT<br>Arrive by 6:00 pm</p>
    <a href="https://goo.gl/maps/yvPjpj5vMP7bQ7Wq8" target="_blank">
    2450 Main Street, South Walpole, MA, USA</a>
    <p><em>White uniform (Bring pink)</em></p>
    `
    document.getElementById("daniel").innerHTML = `
    <h4>Daniel: Clinic away game</h4>
    <p>Clinic 14 - Isabelle at Clinic 7 - McSherry</p>
    <p>10:15 am - 11:15 am EDT<br>Arrive by 10:00 am</p>
    <a href="https://goo.gl/maps/GwrB5JEbJxrXNJGH7" target="_blank">
    Stoddard Park, Holliston, MA</a>
    <p><em>White uniform</em></p>
    `
  }
  
  if (id === '0424') {
    document.getElementById("gameday").innerHTML = `Sunday, April 24 2022`
    document.getElementById("maxim").innerHTML = `
    <h4>Maxim: No events</h4>
    <p></p>
    `
    // document.getElementById("maxim").innerHTML = `
    // <h4>Maxim: Juventus away game</h4>
    // <p>Premier 2008 Boys at Juventus Academy Boston Cen 2008 Boys Azzuro</p>
    // <p>2:30 pm - 4:00 pm EDT<br>Arrive by 2:00 pm</p>
    // <a href="https://goo.gl/maps/CDFJ2H8LL8jmY8ur9" target="_blank">
    // Fore Kicks II Indoor & Outdoor Sports Complex, Forest Street, Marlborough, MA, USA - 8</a>
    // <p><em>Pink uniform (Bring white)</em></p>
    // `
    document.getElementById("daniel").innerHTML = `
    <h4>Daniel: No events</h4>
    <p></p>
    `
  }

  if (id === '0425') {
    document.getElementById("gameday").innerHTML = `Monday, April 25 2022`
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

  if (id === '0426') {
    document.getElementById("gameday").innerHTML = `Tuesday, April 26 2022`
    document.getElementById("maxim").innerHTML = `
    <h4>Maxim: Juventus practice</h4>
    <p>6:00 pm - 7:20 pm EDT</p>
    <a href="https://goo.gl/maps/bvqp8ebQkYKVTi6e7" target="_blank">
    Fore Kicks Sports Complex and Golf Course, Pine Street, Norfolk, MA, USA - TURF</a>
    <p><em>Gray practice uniform</em></p>
    `
    document.getElementById("daniel").innerHTML = `
    <h4>Daniel: No events</h4>
    <p></p>
    `
  }

  if (id === '0427') {
    document.getElementById("gameday").innerHTML = `Wednesday, April 27 2022`
    document.getElementById("maxim").innerHTML = `
    <h4>Maxim: Running Clinic (optional)</h4>
    <p>TBD</p>
    <p><em>Running outfit</em></p>
    `
    document.getElementById("daniel").innerHTML = `
    <h4>Daniel: No events</h4>
    <p></p>
    `
  }
  
  if (id === '0428') {
    document.getElementById("gameday").innerHTML = `Thursday, April 28 2022`
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

  if (id === '0429') {
    document.getElementById("gameday").innerHTML = `Friday, April 29 2022`
    document.getElementById("maxim").innerHTML = `
    <h4>Maxim: Town practice</h4>
    <p>5:00 pm - 6:15 pm EDT</p>
    <a href="https://goo.gl/maps/nVotz7KCnmRRkb2UA" target="_blank">
    Marshall field 2</a>
    <p><em>Practice uniform</em></p>
    `
    document.getElementById("daniel").innerHTML = `
    <h4>Daniel: No events</h4>
    <p></p>
    `
  }

  if (id === '0430') {
    document.getElementById("gameday").innerHTML = `Saturday, April 30 2022`
    document.getElementById("maxim").innerHTML = `
    <h4>Maxim: Town away game</h4>
    <p>Holliston B7/8 Dufault at Medfield United 8B</p>
    <p>4:00 pm - 5:30 pm EDT<br>Arrive by 3:30 pm</p>
    <a href="https://goo.gl/maps/d2ZyrrnryXrSwgRGA" target="_blank">
    Wheelock - # 10</a>
    <p><em>White uniform (Bring red)</em></p>
    `
    document.getElementById("daniel").innerHTML = `
    <h4>Daniel: Clinic home game</h4>
    <p>Clinic 14 - Isabelle vs Clinic 9 - Kane</p>
    <p>10:15 am - 11:15 am EDT<br>Arrive by 10:00 am</p>
    <a href="https://goo.gl/maps/GwrB5JEbJxrXNJGH7" target="_blank">
    Stoddard Park, Holliston, MA</a>
    <p><em>Red uniform</em></p>
    `
  }
  
  if (id === '0501') {
    document.getElementById("gameday").innerHTML = `Sunday, May 1 2022`
    document.getElementById("maxim").innerHTML = `
    <h4>Maxim: Juventus away game</h4>
    <p>Premier 2008 Boys at Fellsway Wanderers FC Boys 2008</p>
    <p>5:30 pm - 7:00 pm EDT<br>Arrive by 5:00 pm</p>
    <a href="https://goo.gl/maps/gD3hsyUEu8TrraCv6" target="_blank">
    500 Potash Hill Road, Tyngsborough, MA, USA - 1A</a>
    <p><em>White uniform (Bring pink)</em></p>
    `
    document.getElementById("daniel").innerHTML = `
    <h4>Daniel: No events</h4>
    <p></p>
    `
  }

  if (id === '0502') {
    document.getElementById("gameday").innerHTML = `Monday, May 2 2022`
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

  if (id === '0503') {
    document.getElementById("gameday").innerHTML = `Tuesday, May 3 2022`
    document.getElementById("maxim").innerHTML = `
    <h4>Maxim: Juventus practice</h4>
    <p>6:00 pm - 7:20 pm EDT</p>
    <a href="https://goo.gl/maps/bvqp8ebQkYKVTi6e7" target="_blank">
    Fore Kicks Sports Complex and Golf Course, Pine Street, Norfolk, MA, USA - TURF</a>
    <p><em>Gray practice uniform</em></p>
    `
    document.getElementById("daniel").innerHTML = `
    <h4>Daniel: No events</h4>
    <p></p>
    `
  }

  if (id === '0504') {
    document.getElementById("gameday").innerHTML = `Wednesday, May 4 2022`
    document.getElementById("maxim").innerHTML = `
    <h4>Maxim: Running Clinic (optional)</h4>
    <p>TBD</p>
    <p><em>Running outfit</em></p>
    `
    document.getElementById("daniel").innerHTML = `
    <h4>Daniel: No events</h4>
    <p></p>
    `
  }
  
  if (id === '0505') {
    document.getElementById("gameday").innerHTML = `Thursday, May 5 2022`
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

  if (id === '0506') {
    document.getElementById("gameday").innerHTML = `Friday, May 6 2022`
    document.getElementById("maxim").innerHTML = `
    <h4>Maxim: Town practice</h4>
    <p>5:00 pm - 6:15 pm EDT</p>
    <a href="https://goo.gl/maps/nVotz7KCnmRRkb2UA" target="_blank">
    Marshall field 2</a>
    <p><em>Practice uniform</em></p>
    `
    document.getElementById("daniel").innerHTML = `
    <h4>Daniel: No events</h4>
    <p></p>
    `
  }

  if (id === '0507') {
    document.getElementById("gameday").innerHTML = `Saturday, May 7 2022`
    document.getElementById("maxim").innerHTML = `
    <h4>Maxim: Town home game</h4>
    <p>Holliston B7/8 Dufault vs Framingham Bloody Sharks</p>
    <p>4:00 pm - 5:30 pm EDT<br>Arrive by 3:30 pm</p>
    <a href="https://goo.gl/maps/nVotz7KCnmRRkb2UA" target="_blank">
    Marshall field 2</a>
    <p><em>Red uniform (Bring white)</em></p>
    `
    document.getElementById("daniel").innerHTML = `
    <h4>Daniel: Clinic away game</h4>
    <p>Clinic 14 - Isabelle at Clinic 1 - Bernstein</p>
    <p>11:30 am - 12:30 pm EDT<br>Arrive by 11:15 am</p>
    <a href="https://goo.gl/maps/GwrB5JEbJxrXNJGH7" target="_blank">
    Stoddard Park, Holliston, MA</a>
    <p><em>White uniform</em></p>
    `
  }
  
  if (id === '0508') {
    document.getElementById("gameday").innerHTML = `Sunday, May 8 2022`
    document.getElementById("maxim").innerHTML = `
    <h4>Maxim: Juventus home game</h4>
    <p>Premier 2008 Boys vs Juventus Academy Boston MW 2009 Boys</p>
    <p>4:00 pm - 5:30 pm EDT<br>Arrive by 3:30 pm</p>
    <a href="https://goo.gl/maps/nVotz7KCnmRRkb2UA" target="_blank">
    Marshall field 2</a>
    <p><em>White uniform (Bring pink)</em></p>
    `
    document.getElementById("daniel").innerHTML = `
    <h4>Daniel: No events</h4>
    <p></p>
    `
  }

  if (id === '0509') {
    document.getElementById("gameday").innerHTML = `Monday, May 9 2022`
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

  if (id === '0510') {
    document.getElementById("gameday").innerHTML = `Tuesday, May 10 2022`
    document.getElementById("maxim").innerHTML = `
    <h4>Maxim: Juventus practice</h4>
    <p>6:00 pm - 7:20 pm EDT</p>
    <a href="https://goo.gl/maps/bvqp8ebQkYKVTi6e7" target="_blank">
    Fore Kicks Sports Complex and Golf Course, Pine Street, Norfolk, MA, USA - TURF</a>
    <p><em>Gray practice uniform</em></p>
    `
    document.getElementById("daniel").innerHTML = `
    <h4>Daniel: No events</h4>
    <p></p>
    `
  }

  if (id === '0511') {
    document.getElementById("gameday").innerHTML = `Wednesday, May 11 2022`
    document.getElementById("maxim").innerHTML = `
    <h4>Maxim: Running Clinic (optional)</h4>
    <p>TBD</p>
    <p><em>Running outfit</em></p>
    `
    document.getElementById("daniel").innerHTML = `
    <h4>Daniel: No events</h4>
    <p></p>
    `
  }
  
  if (id === '0512') {
    document.getElementById("gameday").innerHTML = `Thursday, May 12 2022`
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

  if (id === '0513') {
    document.getElementById("gameday").innerHTML = `Friday, May 13 2022`
    document.getElementById("maxim").innerHTML = `
    <h4>Maxim: Town practice</h4>
    <p>5:00 pm - 6:15 pm EDT</p>
    <a href="https://goo.gl/maps/nVotz7KCnmRRkb2UA" target="_blank">
    Marshall field 2</a>
    <p><em>Practice uniform</em></p>
    `
    document.getElementById("daniel").innerHTML = `
    <h4>Daniel: No events</h4>
    <p></p>
    `
  }

  if (id === '0514') {
    document.getElementById("gameday").innerHTML = `Saturday, May 14 2022`
    document.getElementById("maxim").innerHTML = `
    <h4>Maxim: Town home game</h4>
    <p>Holliston B7/8 Dufault vs Hopkinton Hillers (B8)</p>
    <p>2:30 pm - 4:00 pm EDT<br>Arrive by 2:00 pm</p>
    <a href="https://goo.gl/maps/nVotz7KCnmRRkb2UA" target="_blank">
    Marshall field 2</a>
    <p><em>Red uniform (Bring white)</em></p>
    `
    document.getElementById("daniel").innerHTML = `
    <h4>Daniel: Clinic away game</h4>
    <p>Clinic 14 - Isabelle at Clinic 12 - Lindros</p>
    <p>9:00 am - 10:00 am EDT<br>Arrive by 8:45 am</p>
    <a href="https://goo.gl/maps/GwrB5JEbJxrXNJGH7" target="_blank">
    Stoddard Park, Holliston, MA</a>
    <p><em>White uniform</em></p>
    `
  }
  
  if (id === '0515') {
    document.getElementById("gameday").innerHTML = `Sunday, May 15 2022`
    document.getElementById("maxim").innerHTML = `
    <h4>Maxim: Juventus away game</h4>
    <p>Premier 2008 Boys at Juventus Academy Boston GB 2008 Boys</p>
    <p>9:45 am - 11:15 am EDT<br>Arrive by 9:15 am</p>
    <a href="https://goo.gl/maps/DYby4YQSSMBXLttL7" target="_blank">
    Veterans Fields, Forest Street, Waltham, MA, USA - #2</a>
    <p><em>Pink uniform (Bring white)</em></p>
    `
    document.getElementById("daniel").innerHTML = `
    <h4>Daniel: No events</h4>
    <p></p>
    `
  }

  if (id === '0516') {
    document.getElementById("gameday").innerHTML = `Monday, May 16 2022`
    document.getElementById("maxim").innerHTML = `
    <h4>Maxim: Town cup game</h4>
    <p>Holliston B7/8 Dufault vs North Attleboro</p>
    <p>6:00 pm - 7:30 pm EDT<br>Arrive by 5:30 pm</p>
    <a href="https://goo.gl/maps/nVotz7KCnmRRkb2UA" target="_blank">
    Marshall field 2</a>
    <p><em>White uniform (Bring Red)</em></p>
    `
    document.getElementById("daniel").innerHTML = `
    <h4>Daniel: No events</h4>
    <p></p>
    `
  }

  if (id === '0517') {
    document.getElementById("gameday").innerHTML = `Tuesday, May 17 2022`
    document.getElementById("maxim").innerHTML = `
    <h4>Maxim: Juventus practice</h4>
    <p>6:00 pm - 7:20 pm EDT</p>
    <a href="https://goo.gl/maps/bvqp8ebQkYKVTi6e7" target="_blank">
    Fore Kicks Sports Complex and Golf Course, Pine Street, Norfolk, MA, USA - TURF</a>
    <p><em>Gray practice uniform</em></p>
    `
    document.getElementById("daniel").innerHTML = `
    <h4>Daniel: No events</h4>
    <p></p>
    `
  }

  if (id === '0518') {
    document.getElementById("gameday").innerHTML = `Wednesday, May 18 2022`
    document.getElementById("maxim").innerHTML = `
    <h4>Maxim: Running Clinic (optional)</h4>
    <p>TBD</p>
    <p><em>Running outfit</em></p>
    `
    document.getElementById("daniel").innerHTML = `
    <h4>Daniel: No events</h4>
    <p></p>
    `
  }
  
  if (id === '0519') {
    document.getElementById("gameday").innerHTML = `Thursday, May 19 2022`
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

  if (id === '0520') {
    document.getElementById("gameday").innerHTML = `Friday, May 20 2022`
    document.getElementById("maxim").innerHTML = `
    <h4>Maxim: Town practice</h4>
    <p>5:00 pm - 6:15 pm EDT</p>
    <a href="https://goo.gl/maps/nVotz7KCnmRRkb2UA" target="_blank">
    Marshall field 2</a>
    <p><em>Practice uniform</em></p>
    `
    document.getElementById("daniel").innerHTML = `
    <h4>Daniel: No events</h4>
    <p></p>
    `
  }

  if (id === '0521') {
    document.getElementById("gameday").innerHTML = `Saturday, May 21 2022`
    document.getElementById("maxim").innerHTML = `
    <h4>Maxim: Town away game</h4>
    <p>Holliston B7/8 Dufault at Natick Blazers</p>
    <p>10:35 am - 12:05 pm EDT<br>Arrive by 10:00 am</p>
    <a href="https://goo.gl/maps/cwbC41j96VKTYyhL8" target="_blank">
    Kennedy Middle School, Natick, MA</a>
    <p><em>White uniform (Bring red)</em></p>
    `
    document.getElementById("daniel").innerHTML = `
    <h4>Daniel: Clinic home game</h4>
    <p>Clinic 14 - Isabelle vs Clinic 5 - Fowler</p>
    <p>9:00 am - 10:00 am EDT<br>Arrive by 8:45 am</p>
    <a href="https://goo.gl/maps/GwrB5JEbJxrXNJGH7" target="_blank">
    Stoddard Park, Holliston, MA</a>
    <p><em>Red uniform</em></p>
    `
  }
  
  if (id === '0522') {
    document.getElementById("gameday").innerHTML = `Sunday, May 22 2022`
    document.getElementById("maxim").innerHTML = `
    <h4>Maxim: Juventus home game</h4>
    <p>Premier 2008 Boys vs NEFC World Class Soccer Academy Boys 2008</p>
    <p>4:00 pm - 5:30 pm EDT<br>Arrive by 3:30 pm</p>
    <a href="https://goo.gl/maps/zHPHaXA74Q7YgBEv9" target="_blank">
    99 Kimberly Dr, Medway, MA 02053</a>
    <p><em>White uniform (Bring pink)</em></p>
    `
    document.getElementById("daniel").innerHTML = `
    <h4>Daniel: No events</h4>
    <p></p>
    `
  }

  if (id === '0523') {
    document.getElementById("gameday").innerHTML = `Monday, May 23 2022`
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

  if (id === '0524') {
    document.getElementById("gameday").innerHTML = `Tuesday, May 24 2022`
    document.getElementById("maxim").innerHTML = `
    <h4>Maxim: Juventus practice</h4>
    <p>6:00 pm - 7:20 pm EDT</p>
    <a href="https://goo.gl/maps/bvqp8ebQkYKVTi6e7" target="_blank">
    Fore Kicks Sports Complex and Golf Course, Pine Street, Norfolk, MA, USA - TURF</a>
    <p><em>Gray practice uniform</em></p>
    `
    document.getElementById("daniel").innerHTML = `
    <h4>Daniel: No events</h4>
    <p></p>
    `
  }

  if (id === '0525') {
    document.getElementById("gameday").innerHTML = `Wednesday, May 25 2022`
    document.getElementById("maxim").innerHTML = `
    <h4>Maxim: No events</h4>
    <p></p>
    `
    document.getElementById("daniel").innerHTML = `
    <h4>Daniel: No events</h4>
    <p></p>
    `
  }
  
  if (id === '0526') {
    document.getElementById("gameday").innerHTML = `Thursday, May 26 2022`
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
  
  if (id === '0527') {
    document.getElementById("gameday").innerHTML = `Friday, May 27 2022`
    document.getElementById("maxim").innerHTML = `
    <h4>Maxim: No events</h4>
    <p></p>
    `
    document.getElementById("daniel").innerHTML = `
    <h4>Daniel: No events</h4>
    <p></p>
    `
  }

  if (id === '0528') {
    document.getElementById("gameday").innerHTML = `Saturday, May 28 2022`
    document.getElementById("maxim").innerHTML = `
    <h4>Maxim: Seacoast Memorial Weekend Tournament</h4>
    <p>Premier 2008 Boys vs Maine Lightning Soccer Club 2008 Boys</p>
    <p>3:30 pm - 5:00 pm EDT<br>Arrive by 3:00 pm</p>
    <a href="https://goo.gl/maps/R8pjpMmHTbMRpy9i8" target="_blank">
    Epping High School - Field # 1</a>
    <p><em>White uniform (Bring pink)</em></p>
    
    <hr>
    
    <h4>Maxim: Seacoast Memorial Weekend Tournament</h4>
    <p>Premier 2008 Boys at Seacoast United Maine SC 2008B Premier Volt</p>
    <p>6:00 pm - 7:30 pm EDT<br>Arrive by 5:30 pm</p>
    <a href="https://goo.gl/maps/M6msZWQqrDnuLmA47" target="_blank">
    Derryfield School - Turf</a>
    <p><em>Pink uniform (Bring white)</em></p>
    `
       
   
    document.getElementById("daniel").innerHTML = `
    <h4>Daniel: Clinic away game</h4>
    <p>Clinic 14 - Isabelle at Clinic 4 - Wagner</p>
    <p>9:00 am - 10:00 am EDT<br>Arrive by 8:45 am</p>
    <a href="https://goo.gl/maps/GwrB5JEbJxrXNJGH7" target="_blank">
    Stoddard Park, Holliston, MA</a>
    <p><em>White uniform</em></p>
    `
  }

  if (id === '0529') {
    document.getElementById("gameday").innerHTML = `Sunday, May 29 2022`
    document.getElementById("maxim").innerHTML = `
    <h4>Maxim: Seacoast Memorial Weekend Tournament</h4>
    <p>TBD</p>
    <a href="https://goo.gl/maps/EKQ8QqN1EFAKZGBfA" target="_blank">
    Epping, NH</a>
    <p><em>TBD</em></p>
    `
    document.getElementById("daniel").innerHTML = `
    <h4>Daniel: No events</h4>
    <p></p>
    `
  }

  if (id === '0530') {
    document.getElementById("gameday").innerHTML = `Monday, May 30 2022`
    document.getElementById("maxim").innerHTML = `
    <h4>Maxim: No events</h4>
    <p></p>
    `
    document.getElementById("daniel").innerHTML = `
    <h4>Daniel: No events</h4>
    <p></p>
    `
  }

  if (id === '0531') {
    document.getElementById("gameday").innerHTML = `Tuesday, May 31 2022`
    document.getElementById("maxim").innerHTML = `
    <h4>Maxim: Juventus practice</h4>
    <p>6:00 pm - 7:20 pm EDT</p>
    <a href="https://goo.gl/maps/bvqp8ebQkYKVTi6e7" target="_blank">
    Fore Kicks Sports Complex and Golf Course, Pine Street, Norfolk, MA, USA - TURF</a>
    <p><em>Gray practice uniform</em></p>
    `
    document.getElementById("daniel").innerHTML = `
    <h4>Daniel: No events</h4>
    <p></p>
    `
  }

  if (id === '0601') {
    document.getElementById("gameday").innerHTML = `Wednesday, June 1 2022`
    document.getElementById("maxim").innerHTML = `
    <h4>Maxim: No events</h4>
    <p></p>
    `
    document.getElementById("daniel").innerHTML = `
    <h4>Daniel: No events</h4>
    <p></p>
    `
  }
  
  if (id === '0602') {
    document.getElementById("gameday").innerHTML = `Thursday, June 2 2022`
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

  if (id === '0603') {
    document.getElementById("gameday").innerHTML = `Friday, June 3 2022`
    document.getElementById("maxim").innerHTML = `
    <h4>Maxim: Town practice</h4>
    <p>5:00 pm - 6:15 pm EDT</p>
    <a href="https://goo.gl/maps/nVotz7KCnmRRkb2UA" target="_blank">
    Marshall field 2</a>
    <p><em>Practice uniform</em></p>
    `
    document.getElementById("daniel").innerHTML = `
    <h4>Daniel: No events</h4>
    <p></p>
    `
  }

  if (id === '0604') {
    document.getElementById("gameday").innerHTML = `Saturday, June 4 2022`
    document.getElementById("maxim").innerHTML = `
    <h4>Maxim: Juventus home game</h4>
    <p>Premier 2008 Boys vs Juventus Academy Boston Cen Azzuro</p>
    <p>1:30 pm - 3:00 pm EDT<br>Arrive by 1:00 pm</p>
    <a href="https://goo.gl/maps/4zUoTDb7WzAt3eax9" target="_blank">
    Medway High School, Summer Street, Medway, MA</a>
    <p><em>White uniform (Bring pink)</em></p>

    <hr>
    
    <h4>Maxim: Town home game</h4>
    <p>Holliston B7/8 Dufault vs 	Medfield United 8B</p>
    <p>2:30 pm - 4:00 pm EDT<br>Arrive by 2:00 pm</p>
    <a href="https://goo.gl/maps/nVotz7KCnmRRkb2UA" target="_blank">
    Marshall field 2</a>
    <p><em>Red uniform (Bring white)</em></p>
    `
    document.getElementById("daniel").innerHTML = `
    <h4>Daniel: Clinic home game</h4>
    <p>Clinic 14 - Isabelle vs Clinic 13 - Mason</p>
    <p>11:30 am - 12:30 pm EDT<br>Arrive by 11:15 am</p>
    <a href="https://goo.gl/maps/GwrB5JEbJxrXNJGH7" target="_blank">
    Stoddard Park, Holliston, MA</a>
    <p><em>Red uniform</em></p>
    `
  }
  
  if (id === '0605') {
    document.getElementById("gameday").innerHTML = `Sunday, June 5 2022`
    document.getElementById("maxim").innerHTML = `
    <h4>Maxim: Juventus away game</h4>
    <p>Premier 2008 Boys at Real Boston FC RBFC Everton boys 2008</p>
    <p>9:00 am - 10:30 am EDT<br>Arrive by 8:30 am</p>
    <a href="https://goo.gl/maps/7eP6NBU9hi4TUDLo7" target="_blank">
    The Rivers School, Winter Street, Weston, MA</a>
    <p><em>Pink uniform (Bring white)</em></p>
    `
    document.getElementById("daniel").innerHTML = `
    <h4>Daniel: No events</h4>
    <p></p>
    `
  }

  if (id === '0606') {
    document.getElementById("gameday").innerHTML = `Monday, June 6 2022`
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

  if (id === '0607') {
    document.getElementById("gameday").innerHTML = `Tuesday, june 7 2022`
    document.getElementById("maxim").innerHTML = `
    <h4>Maxim: NEFC Tryout</h4>
    <p>6:30 pm - 7:30 pm EDT</p>
    <a href="https://goo.gl/maps/vjEzrGLs5rR5gLU58" target="_blank">
    NEFC Park, Mendon</a>
    <p><em>Practice uniform</em></p>
    `
    document.getElementById("daniel").innerHTML = `
    <h4>Daniel: No events</h4>
    <p></p>
    `
  }

  if (id === '0608') {
    document.getElementById("gameday").innerHTML = `Wednesday, June 8 2022`
    document.getElementById("maxim").innerHTML = `
    <h4>Maxim: No events</h4>
    <p></p>
    `
    document.getElementById("daniel").innerHTML = `
    <h4>Daniel: No events</h4>
    <p></p>
    `
  }
  
  if (id === '0609') {
    document.getElementById("gameday").innerHTML = `Thursday, June 9 2022`
    document.getElementById("maxim").innerHTML = `
    <h4>Maxim: Juventus practice</h4>
    <p>5:00 pm - 6:15 pm EDT</p>
    <a href="https://goo.gl/maps/yvPjpj5vMP7bQ7Wq8" target="_blank">
    2450 Main Street, South Walpole, MA, USA</a>
    <p><em>Gray practice uniform</em></p>

    <h4>Maxim: Scorpions tryout</h4>
    <p>6:00 pm - 7:15 pm EDT</p>
    <a href="https://goo.gl/maps/yvPjpj5vMP7bQ7Wq8" target="_blank">
    2450 Main Street, South Walpole, MA, USA</a>
    <p><em>Gray practice uniform</em></p>
    `
    document.getElementById("daniel").innerHTML = `
    <h4>Daniel: No events</h4>
    <p></p>
    `
  }

  if (id === '0610') {
    document.getElementById("gameday").innerHTML = `Friday, June 10 2022`
    document.getElementById("maxim").innerHTML = `
    <h4>Maxim: Town practice</h4>
    <p>5:00 pm - 6:15 pm EDT</p>
    <a href="https://goo.gl/maps/nVotz7KCnmRRkb2UA" target="_blank">
    Marshall field 2</a>
    <p><em>Practice uniform</em></p>
    `
    document.getElementById("daniel").innerHTML = `
    <h4>Daniel: No events</h4>
    <p></p>
    `
  }

  if (id === '0611') {
    document.getElementById("gameday").innerHTML = `Saturday, June 11 2022`
    document.getElementById("maxim").innerHTML = `
    <h4>Maxim: Town away game</h4>
    <p>Holliston B7/8 Dufault at Framingham Bloody Sharks</p>
    <p>4:00 pm - 5:30 pm EDT<br>Arrive by 3:30 pm</p>
    <a href="https://goo.gl/maps/8tzbXGsWxJ6vrL2i6" target="_blank">
    99 Merchant Rd, Framingham, MA</a>
    <p><em>White uniform (Bring red)</em></p>
    `
    document.getElementById("daniel").innerHTML = `
    <h4>Daniel: Clinic away game</h4>
    <p>Clinic 14 - Isabelle at Clinic 2 - Fioravanti</p>
    <p>10:15 am - 11:15 am EDT<br>Arrive by 10:00 am</p>
    <a href="https://goo.gl/maps/GwrB5JEbJxrXNJGH7" target="_blank">
    Stoddard Park, Holliston, MA</a>
    <p><em>White uniform</em></p>
    `
  }
  
  if (id === '0612') {
    document.getElementById("gameday").innerHTML = `Sunday, June 12 2022`
    document.getElementById("maxim").innerHTML = `
    <h4>Maxim: No events</h4>
    <p></p>
    `
    document.getElementById("daniel").innerHTML = `
    <h4>Daniel: No events</h4>
    <p></p>
    `
  }

  if (id === '0829') {
    document.getElementById("gameday").innerHTML = `Monday, August 29 2022`
    document.getElementById("maxim").innerHTML = `
    <h4>Maxim: HHS JV2 Practice</h4>
    <p>3:00 pm - 4:40 pm EDT</p>
    <a href="https://goo.gl/maps/gXr2bjG9LQrATPhJ7" target="_blank">
    Holliston High School</a>
    <p><em>Practice uniform, cleats, running shoes, ball</em></p>
    `
    document.getElementById("daniel").innerHTML = `
    <h4>Daniel: No events</h4>
    <p></p>
    `
  }

  if (id === '0830') {
    document.getElementById("gameday").innerHTML = `Tuesday, August 30 2022`
    document.getElementById("maxim").innerHTML = `
    <h4>Maxim: HHS JV2 Practice</h4>
    <p>3:00 pm - 4:30 pm EDT</p>
    <a href="https://goo.gl/maps/gXr2bjG9LQrATPhJ7" target="_blank">
    Holliston High School</a>
    <p><em>Practice uniform, cleats, running shoes, ball</em></p>
    
    <hr>
   
    <h4>Maxim: NEFC Practice (optional)</h4>
    <p>7:30 pm - 9:00 pm EDT</p>
    <a href="https://goo.gl/maps/8yKvjXpCMw7UCYxB8" target="_blank">
    NEFC Park - Mendon, MA</a>
    <p><em>Gray/Black/Black NEFC Training Uniform</em></p>
    `
    document.getElementById("daniel").innerHTML = `
    <h4>Daniel: No events</h4>
    <p></p>
    `
  }

  if (id === '0831') {
    document.getElementById("gameday").innerHTML = `Wednesday, August 31 2022`
    document.getElementById("maxim").innerHTML = `
    <h4>Maxim: HHS JV2 Practice</h4>
    <p>TBD</p>
    <a href="#" target="_blank">
    TBD</a>
    <p><em>Practice uniform, cleats, running shoes, ball</em></p>
    
    <hr>
   
    <h4>Maxim: NEFC Practice (optional)</h4>
    <p>7:30 pm - 9:00 pm EDT</p>
    <a href="https://goo.gl/maps/8yKvjXpCMw7UCYxB8" target="_blank">
    NEFC Park - Mendon, MA</a>
    <p><em>Gray/Black/Black NEFC Training Uniform</em></p>
    `
    document.getElementById("daniel").innerHTML = `
    <h4>Daniel: No events</h4>
    <p></p>
    `
  }

  if (id === '0901') {
    document.getElementById("gameday").innerHTML = `Thursday, September 1 2022`
    document.getElementById("maxim").innerHTML = `
    <h4>Maxim: No events</h4>
    <p></p>
    `
    document.getElementById("daniel").innerHTML = `
    <h4>Daniel: No events</h4>
    <p></p>
    `
  }

  if (id === '0902') {
    document.getElementById("gameday").innerHTML = `Friday, September 2 2022`
    document.getElementById("maxim").innerHTML = `
    <h4>Maxim: HHS JV2 Practice</h4>
    <p>4:30 pm - 5:30 pm EDT</p>
    <a href="https://goo.gl/maps/gXr2bjG9LQrATPhJ7" target="_blank">
    Holliston High School</a>
    <p><em>Practice uniform, cleats, running shoes, ball</em></p>
    `
    document.getElementById("daniel").innerHTML = `
    <h4>Daniel: No events</h4>
    <p></p>
    `
  }

  if (id === '0903') {
    document.getElementById("gameday").innerHTML = `Saturday, September 3 2022`
    document.getElementById("maxim").innerHTML = `
    <h4>Maxim: No events</h4>
    <p></p>
    `
    document.getElementById("daniel").innerHTML = `
    <h4>Daniel: No events</h4>
    <p></p>
    `
  }

  if (id === '0904') {
    document.getElementById("gameday").innerHTML = `Sunday, September 4 2022`
    document.getElementById("maxim").innerHTML = `
    <h4>Maxim: HHS Soccer Family Picnic and Team Photos</h4>
    <p>5:00 pm - 6:30 pm EDT</p>
    <a href="https://goo.gl/maps/GwrB5JEbJxrXNJGH7" target="_blank">
    Stoddard Park, Holliston, MA</a>
    <p><em>Red Holliston uniform</em></p>
    `
    document.getElementById("daniel").innerHTML = `
    <h4>Daniel: No events</h4>
    <p></p>
    `
  }

  if (id === '0905') {
    document.getElementById("gameday").innerHTML = `Monday, September 5 2022`
    document.getElementById("maxim").innerHTML = `
    <h4>Maxim: No events</h4>
    <p></p>
    `
    document.getElementById("daniel").innerHTML = `
    <h4>Daniel: No events</h4>
    <p></p>
    `
  }

  if (id === '0906') {
    document.getElementById("gameday").innerHTML = `Tuesday, September 6 2022`
    document.getElementById("maxim").innerHTML = `
    <h4>Maxim: HHS JV2 Practice (CANCELLED ???)</h4>
    <p>4:15 pm - 5:45 pm EDT<br>Arrive by 4:00 pm</p>
    <a href="https://goo.gl/maps/gXr2bjG9LQrATPhJ7" target="_blank">
    Holliston High School</a>
    <p><em>Practice uniform, cleats, running shoes, ball</em></p>
    
    <hr>
   
    <h4>Maxim: NEFC Practice (choose one)</h4>
    <p>7:15 pm - 8:30 pm EDT<br>Arrive by 7:00 pm</p>
    <a href="https://goo.gl/maps/8yKvjXpCMw7UCYxB8" target="_blank">
    NEFC Park - Mendon, MA</a>
    <p><em>Gray/Black/Black NEFC Practice Uniform</em></p>
    `
    document.getElementById("daniel").innerHTML = `
    <h4>Daniel: No events</h4>
    <p></p>
    `
  }

  if (id === '0907') {
    document.getElementById("gameday").innerHTML = `Wednesday, September 7 2022`
    document.getElementById("maxim").innerHTML = `
    <h4>Maxim: HHS JV2 Practice (choose one)</h4>
    <p>4:15 pm - 5:45 pm EDT<br>Arrive by 4:00 pm</p>
    <a href="https://goo.gl/maps/gXr2bjG9LQrATPhJ7" target="_blank">
    Holliston High School</a>
    <p><em>Practice uniform, cleats, running shoes, ball</em></p>
    
    <hr>
   
    <h4>Maxim: NEFC Practice (choose one)</h4>
    <p>7:30 pm - 9:00 pm EDT<br>Arrive by 7:15 pm</p>
    <a href="https://goo.gl/maps/8yKvjXpCMw7UCYxB8" target="_blank">
    NEFC Park - Mendon, MA</a>
    <p><em>Gray/Black/Black NEFC Practice Uniform</em></p>
    `
    document.getElementById("daniel").innerHTML = `
    <h4>Daniel: HYSA Practice</h4>
    <p>5:30 pm - ??? pm EDT<br>Arrive by 5:20 pm</p>
    <a href="https://goo.gl/maps/GwrB5JEbJxrXNJGH7" target="_blank">
    Stoddard Park, Holliston, MA</a>
    <p><em>Practice uniform</em></p>
    `
  }

  if (id === '0908') {
    document.getElementById("gameday").innerHTML = `Thursday, September 8 2022`
    document.getElementById("maxim").innerHTML = `
    <h4>Maxim: HHS JV2 Practice</h4>
    <p>4:15 pm - 5:45 pm EDT<br>Arrive by 4:00 pm</p>
    <a href="https://goo.gl/maps/gXr2bjG9LQrATPhJ7" target="_blank">
    Holliston High School</a>
    <p><em>Practice uniform, cleats, running shoes, ball</em></p>
    `
    document.getElementById("daniel").innerHTML = `
    <h4>Daniel: No events</h4>
    <p></p>
    `
  }
  
  if (id === '0909') {
    document.getElementById("gameday").innerHTML = `Friday, September 9 2022`
    document.getElementById("maxim").innerHTML = `
    <h4>Maxim: NEFC Technical training</h4>
    <p>7:15 pm - 8:30 pm EDT</p>
    <a href="https://goo.gl/maps/SKoiiUvufEhCoJBXA" target="_blank">
    NEFC Training Center - Northborough, MA</a>
    <p><em>Gray/Black/Black NEFC Practice Uniform</em></p>
    `
    document.getElementById("daniel").innerHTML = `
    <h4>Daniel: No events</h4>
    <p></p>
    `
  }

  if (id === '0910') {
    document.getElementById("gameday").innerHTML = `Saturday, September 10 2022`
    document.getElementById("maxim").innerHTML = `
    <h4>Maxim: No events</h4>
    <p></p>
    `
    document.getElementById("daniel").innerHTML = `
    <h4>Daniel: HYSA Game</h4>
    <p>B1/2 - Aud	B1/2 - Gogineni</p>
    <p>1:00 pm - 2:00 pm EDT<br>Arrive by 12:45 pm</p>
    <a href="https://goo.gl/maps/m4hoKty47Ubeekzj8" target="_blank">
    Weston Pond, Holliston, MA</a>
    <p><em>Red HYSA uniform</em></p>
    `
  }

  if (id === '0911') {
    document.getElementById("gameday").innerHTML = `Sunday, September 11 2022`
    document.getElementById("maxim").innerHTML = `
    <h4>Maxim: No events</h4>
    <p></p>
    `
    document.getElementById("daniel").innerHTML = `
    <h4>Daniel: No events</h4>
    <p></p>
    `
  }

  if (id === '0912') {
    document.getElementById("gameday").innerHTML = `Monday, September 12 2022`
    document.getElementById("maxim").innerHTML = `
    <h4>Maxim: HHS JV2 Game at Dover-Sherborn H.S. </h4>
    <p>Bus Leaves at 3:15 pm from HHS</p>
    <a href="https://goo.gl/maps/gXr2bjG9LQrATPhJ7" target="_blank">
    Holliston High School</a>
    <p><em>White uniform, cleats, running shoes, ball</em></p>
    `
    document.getElementById("daniel").innerHTML = `
    <h4>Daniel: No events</h4>
    <p></p>
    `
  }

  if (id === '0913') {
    document.getElementById("gameday").innerHTML = `Tuesday, September 13 2022`
    document.getElementById("maxim").innerHTML = `
    <h4>Maxim: HHS JV2 Practice (choose one)</h4>
    <p>4:15 pm - 5:30 pm EDT<br>Arrive by 4:00 pm</p>
    <a href="https://goo.gl/maps/gXr2bjG9LQrATPhJ7" target="_blank">
    Holliston High School</a>
    <p><em>Practice uniform, cleats, running shoes, ball</em></p>
    
    <hr>
   
    <h4>Maxim: NEFC Practice (choose one)</h4>
    <p>7:15 pm - 8:30 pm EDT<br>Arrive by 7:00 pm</p>
    <a href="https://goo.gl/maps/8yKvjXpCMw7UCYxB8" target="_blank">
    NEFC Park - Mendon, MA</a>
    <p><em>Gray/Black/Black NEFC Practice Uniform</em></p>
    `
    document.getElementById("daniel").innerHTML = `
    <h4>Daniel: No events</h4>
    <p></p>
    `
  }

  if (id === '0914') {
    document.getElementById("gameday").innerHTML = `Wednesday, September 14 2022`
    document.getElementById("maxim").innerHTML = `
    <h4>Maxim: HHS JV2 Game at Medfield, Wheelock Elementary </h4>
    <p>Bus Leaves at 3:15 pm from HHS</p>
    <a href="https://goo.gl/maps/gXr2bjG9LQrATPhJ7" target="_blank">
    Holliston High School</a>
    <p><em>White uniform, cleats, running shoes, ball</em></p>
        
    <hr>
   
    <h4>Maxim: NEFC Practice (optional)</h4>
    <p>7:30 pm - 9:00 pm EDT<br>Arrive by 7:15 pm</p>
    <a href="https://goo.gl/maps/8yKvjXpCMw7UCYxB8" target="_blank">
    NEFC Park - Mendon, MA</a>
    <p><em>Gray/Black/Black NEFC Practice Uniform</em></p>
    `
    document.getElementById("daniel").innerHTML = `
    <h4>Daniel: HYSA Practice</h4>
    <p>5:30 pm - 6:30 pm EDT<br>Arrive by 5:20 pm</p>
    <a href="https://goo.gl/maps/GwrB5JEbJxrXNJGH7" target="_blank">
    Stoddard Park, Holliston, MA</a>
    <p><em>Practice uniform</em></p>
    `
  }

  if (id === '0915') {
    document.getElementById("gameday").innerHTML = `Thursday, September 15 2022`
    document.getElementById("maxim").innerHTML = `
    <h4>Maxim: HHS JV2 Practice</h4>
    <p>4:15 pm - 5:30 pm EDT<br>Arrive by 4:00 pm</p>
    <a href="https://goo.gl/maps/gXr2bjG9LQrATPhJ7" target="_blank">
    Holliston High School</a>
    <p><em>Practice uniform, cleats, running shoes, ball</em></p>
    `
    document.getElementById("daniel").innerHTML = `
    <h4>Daniel: No events</h4>
    <p></p>
    `
  }
  
  if (id === '0916') {
    document.getElementById("gameday").innerHTML = `Friday, September 16 2022`
    document.getElementById("maxim").innerHTML = `
    <h4>Maxim: No events</h4>
    <p></p>
    `
    document.getElementById("daniel").innerHTML = `
    <h4>Daniel: No events</h4>
    <p></p>
    `
  }

  if (id === '0917') {
    document.getElementById("gameday").innerHTML = `Saturday, September 17 2022`
    document.getElementById("maxim").innerHTML = `
    <h4>Maxim: No events</h4>
    <p></p>
    `
    document.getElementById("daniel").innerHTML = `
    <h4>Daniel: HYSA Game</h4>
    <p>B1/2 - Shaw	B1/2 - Aud</p>
    <p>1:00 pm - 2:00 pm EDT<br>Arrive by 12:45 pm</p>
    <a href="https://goo.gl/maps/m4hoKty47Ubeekzj8" target="_blank">
    Weston Pond, Holliston, MA</a>
    <p><em>White HYSA uniform</em></p>
    `
  }

  if (id === '0918') {
    document.getElementById("gameday").innerHTML = `Sunday, September 18 2022`
    document.getElementById("maxim").innerHTML = `
    <h4>Maxim: No events</h4>
    <p></p>
    `
    document.getElementById("daniel").innerHTML = `
    <h4>Daniel: No events</h4>
    <p></p>
    `
  }

  if (id === '0923') {
    document.getElementById("gameday").innerHTML = `Friday, September 23 2022`
    document.getElementById("maxim").innerHTML = `
    <h4>Maxim: NEFC Technical training</h4>
    <p>7:15 pm - 8:30 pm EDT</p>
    <a href="https://goo.gl/maps/SKoiiUvufEhCoJBXA" target="_blank">
    NEFC Training Center - Northborough, MA</a>
    <p><em>Practice uniform</em></p>
    `
    document.getElementById("daniel").innerHTML = `
    <h4>Daniel: No events</h4>
    <p></p>
    `
  }

  if (id === '1007') {
    document.getElementById("gameday").innerHTML = `Friday, October 7 2022`
    document.getElementById("maxim").innerHTML = `
    <h4>Maxim: NEFC Technical training</h4>
    <p>7:15 pm - 8:30 pm EDT</p>
    <a href="https://goo.gl/maps/SKoiiUvufEhCoJBXA" target="_blank">
    NEFC Training Center - Northborough, MA</a>
    <p><em>Practice uniform</em></p>
    `
    document.getElementById("daniel").innerHTML = `
    <h4>Daniel: No events</h4>
    <p></p>
    `
  }

  if (id === '1021') {
    document.getElementById("gameday").innerHTML = `Friday, October 21 2022`
    document.getElementById("maxim").innerHTML = `
    <h4>Maxim: NEFC Technical training</h4>
    <p>7:15 pm - 8:30 pm EDT</p>
    <a href="https://goo.gl/maps/SKoiiUvufEhCoJBXA" target="_blank">
    NEFC Training Center - Northborough, MA</a>
    <p><em>Practice uniform</em></p>
    `
    document.getElementById("daniel").innerHTML = `
    <h4>Daniel: No events</h4>
    <p></p>
    `
  }

  if (id === '1104') {
    document.getElementById("gameday").innerHTML = `Friday, November 4 2022`
    document.getElementById("maxim").innerHTML = `
    <h4>Maxim: NEFC Technical training</h4>
    <p>7:15 pm - 8:30 pm EDT</p>
    <a href="https://goo.gl/maps/SKoiiUvufEhCoJBXA" target="_blank">
    NEFC Training Center - Northborough, MA</a>
    <p><em>Practice uniform</em></p>
    `
    document.getElementById("daniel").innerHTML = `
    <h4>Daniel: No events</h4>
    <p></p>
    `
  }
}