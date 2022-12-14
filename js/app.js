console.log(window.location,'fewefw');
 let full_href = window.location.href.split('/');
 let href = full_href[full_href.length - 1];
console.log(href);

let value_text = '';

if(href == 'main.html' ||  href == 'forapplicants.html'){
  value_text = 'Demand for nursing staff';
} else {
  value_text = 'Bedarf an Pflegepersonal';
};

let vertical_value = '';

if(href == 'main.html' ||  href == 'forapplicants.html'){
  vertical_value = 'Number of missing nursing staff in thousands';
} else {
  vertical_value = 'Anzahl von fehlendem Pflegepersonal in Tausenden';
};

window.onscroll = () => {
    if (window.scrollY > 20) {
        navbar.classList.add('navbar-scroll');
    } else {
        navbar.classList.remove('navbar-scroll');
    }
};

if (href) {
  
} else {
  console.log(3);
};

function toggleMenu(){
    const menuToggle = document.querySelector('.menuToggle');
    menuToggle.classList.toggle('active');
    
    const navigation = document.querySelector('.navbar-nav');
    navigation.classList.toggle('active');
}
// ApexCharts

var options = {
  series: [{
  name: " ",
  data: [{
    x: '2015',
    y: 343
  }, {
    x: '2020',
    y: 376
  }, {
    x: '2025',
    y: 419
  }, {
    x: '2030',
    y: 461
  }, {
    x: '2035',
    y: 493
  }]
}],
  chart: {
  type: 'bar',
  height: 480,
},
xaxis: {
  type: 'category',
  group: {
    style: {
      fontSize: '16px',
      fontWeight: 700,
      fontFamily: 'Montserrat',
      colors:['#000']
    },
    groups: [
      { title: '2015 ~ 2025', cols: 3 },
      { title: '2030 ~ 2035', cols: 2 },
    ]
  }
},
yaxis: {
  title: {
    text: vertical_value,
  },
},

title: {
  text: value_text,
  style: {
    colors: ['#F44336'],
    fontFamily: 'Montserrat',
    fontWeight: 400,
    fontSize: '18px',
  },
}
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();



//#region - start of - number counter animation
const counterAnim = (qSelector, start = 0, end, duration = 1000) => {
  const target = document.querySelector(qSelector);
  let startTimestamp = null;
  const step = (timestamp) => {
   if (!startTimestamp) startTimestamp = timestamp;
   const progress = Math.min((timestamp - startTimestamp) / duration, 1);
   target.innerText = Math.floor(progress * (end - start) + start);
   if (progress < 1) {
    window.requestAnimationFrame(step);
   }
  };
  window.requestAnimationFrame(step);
 };
 //#endregion - end of - number counter animation
 
 document.addEventListener("DOMContentLoaded", () => {
  counterAnim("#count1", 10, 300, 1000);
  counterAnim("#count2", 5000, 250, 1500);
  counterAnim("#count3", -1000, -150, 2000);
  counterAnim("#count4", 500, -100, 2500);
 });
 