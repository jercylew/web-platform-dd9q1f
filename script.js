console.log('hello!');

window.addEventListener('load', function (event) {
  console.log(document.getElementsByClassName('dropdown-btn').length);
  var dropdown = document.getElementsByClassName('dropdown-btn');
  var i;

  for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener('click', function () {
      console.log('clicked!');
      this.classList.toggle('active');
      var dropdownContent = this.nextElementSibling;
      if (dropdownContent.style.display === 'block') {
        dropdownContent.style.display = 'none';
      } else {
        dropdownContent.style.display = 'block';
      }
    });
  }

  //charts
  // Initialize the echarts instance based on the prepared dom
  var myChart1 = echarts.init(document.getElementById('chart1'));
  var myChart2 = echarts.init(document.getElementById('chart2'));
  var myChart3 = echarts.init(document.getElementById('chart3'));
  var myChart4 = echarts.init(document.getElementById('chart4'));

  // Specify the configuration items and data for the chart
  // var option = {
  //   title: {
  //     text: '今日访问量',
  //   },
  //   tooltip: {},
  //   legend: {
  //     data: ['sales'],
  //   },
  //   xAxis: {
  //     data: ['Shirts', 'Cardigans', 'Chiffons', 'Pants', 'Heels', 'Socks'],
  //   },
  //   yAxis: {},
  //   series: [
  //     {
  //       name: 'sales',
  //       type: 'bar',
  //       data: [5, 20, 36, 10, 10, 20],
  //     },
  //   ],
  // };

  var option1 = {
    title: {
      text: '今日I分时新增用户',
      subtext: '2021-10-28 ~ 2021-10-280',
    },
    xAxis: {
      type: 'category',
      data: [
        '10-28 0:00',
        '10-28 5:00',
        '10-28 10:00',
        '10-28 15:00',
        '10-28 20:00',
        '10-28 03:00',
        '10-28 0:08',
      ],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'line',
      },
    ],
  };

  var option2 = {
    title: {
      text: '今日I分时老用户活跃',
      subtext: '2021-10-28 ~ 2021-10-280',
    },
    xAxis: {
      type: 'category',
      data: [
        '10-28 0:00',
        '10-28 5:00',
        '10-28 10:00',
        '10-28 15:00',
        '10-28 20:00',
        '10-28 03:00',
        '10-28 0:08',
      ],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'line',
      },
    ],
  };

  var option3 = {
    title: {
      text: '今日I分时活跃用户',
      subtext: '2021-10-28 ~ 2021-10-280',
    },
    xAxis: {
      type: 'category',
      data: [
        '10-28 0:00',
        '10-28 5:00',
        '10-28 10:00',
        '10-28 15:00',
        '10-28 20:00',
        '10-28 03:00',
        '10-28 0:08',
      ],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [50, 230, 224, 218, 135, 147, 260, 326],
        type: 'line',
      },
    ],
  };

  var option4 = {
    title: {
      text: '今日I分时访问次数',
      subtext: '2021-10-28 ~ 2021-10-280',
    },
    xAxis: {
      type: 'category',
      data: [
        '10-28 0:00',
        '10-28 5:00',
        '10-28 10:00',
        '10-28 15:00',
        '10-28 20:00',
        '10-28 03:00',
        '10-28 0:08',
      ],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'line',
      },
    ],
  };

  // Display the chart using the configuration items and data just specified.
  myChart1.setOption(option1);
  myChart2.setOption(option2);
  myChart3.setOption(option3);
  myChart4.setOption(option4);
});
