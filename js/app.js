// Navbar
const navbar = document.querySelector('.navbar');
window.onscroll = () => {
    if (window.scrollY > 20) {
        navbar.classList.add('navbar-scroll');
    } else {
        navbar.classList.remove('navbar-scroll');
    }
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
  name: "sales",
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
  // width: 1500
},
xaxis: {
  type: 'category',
  // labels: {
  //   formatter: function(val) {
  //     return "Q" + dayjs(val).quarter()
  //   }
  // },
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

title: {
  text: 'Bedarf Pflegekräften',
  style: {
    colors: ['#F44336'],
    fontFamily: 'Montserrat',
    fontWeight: 400,
    fontSize: '18px',
  },
}
// tooltip: {
//   x: {
//     formatter: function(val) {
//       return "Q" + dayjs(val).quarter() + " " + dayjs(val).format("YYYY")
//     }  
//   }
// },
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();