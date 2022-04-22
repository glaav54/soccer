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
    <p>Premier 2008 Boys vs Fellsway Wanderers FC Boys 2008</p>
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
  
  if (id === '0527') {
    document.getElementById("gameday").innerHTML = `Friday, May 27 2022`
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

  if (id === '0528') {
    document.getElementById("gameday").innerHTML = `Saturday, May 28 2022`
    document.getElementById("maxim").innerHTML = `
    <h4>Maxim: Town home game</h4>
    <p>Holliston B7/8 Dufault vs Milford-Hopedale Hawks</p>
    <p>4:00 pm - 5:30 pm EDT<br>Arrive by 3:30 pm</p>
    <a href="https://goo.gl/maps/nVotz7KCnmRRkb2UA" target="_blank">
    Marshall field 2</a>
    <p><em>Red uniform (Bring white)</em></p>
    
    <hr>

    <h4>Maxim: Seacoast Memorial Weekend Tournament</h4>
    <p>TBD</p>
    <a href="https://goo.gl/maps/EKQ8QqN1EFAKZGBfA" target="_blank">
    Epping, NH</a>
    <p><em>TBD</em></p>
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

  
}