const foodChart = echarts.init(document.getElementById('foodChart'));

         let foodOptions = {
             title: {
                 text: 'Meat consumption Australia'
            },            
            legend: {

                orient: 'vertical',
                 right: 10,
                 top: 'center'
             },
             dataset: {
                 source: [
                    ['product','2019', '2020', '2021'],
                    ['Red Meat', 89.5, 93.7, 75.2],
                    ['White Meat', 73.4, 55.1, 84.2],
                   ['Seafood', 65.2, 82.5, 12.4],
                ]
            },
             xAxis: { type: 'category' },
            yAxis: {},
            series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]  
        };  
       foodChart.setOption(foodOptions); 
       
