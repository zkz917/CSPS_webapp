function pause(){
    var vid = document.getElementById("Video2");


    
    setTimeout(function () {
      vid.play();
    }, 3 * 1000);
   }


    </script>>

    <script src="https://code.highcharts.com/highcharts.js"></script>
<script src="https://code.highcharts.com/modules/exporting.js"></script>


<script type="text/javascript">

$(function () {
    $(document).ready(function () {
        Highcharts.setOptions({
            global: {
                useUTC: false
            }
        });

        var $container = $('#container'),

        chart = $container.highcharts();

    $('<button>+</button>').insertBefore($container).click(function () {
        chartWidth *= 1.1;
        chartHeight *= 1.1;
        chart.setSize(chartWidth, chartHeight);
    });
    $('<button>-</button>').insertBefore($container).click(function () {
        chartWidth *= 0.9;
        chartHeight *= 0.9;
        chart.setSize(chartWidth, chartHeight);
    });
    $('<button>1:1</button>').insertBefore($container).click(function () {
        chartWidth = origChartWidth;
        chartHeight = origChartHeight;
        chart.setSize(origChartWidth, origChartHeight);
    });



        $('#container').highcharts({
            
            
            
            chart: {
                type: 'spline',
                animation: Highcharts.svg, // don't animate in old IE
                marginRight: 10,
                width: 600,
                height: 300,
                events: {
                    load: function () {
                    var d = [1,1,2,2,1,2,1,2,1,3,4,6,8,2,2,30,41,18,15,16,11,12,13,14,15,16,20], i;
                    
                    var t = (new Date()).getTime()

                        // set up the updating of the chart each second
                        var series = this.series[0];
                        
                        setInterval(function () {
                         var flag=true;
                         
                        
                         var x = (new Date()).getTime(), // current time
                                y = Math.round((x-t)/1000);
                                if (y > 19) flag=false;
                       
                            series.addPoint([x, d[y]], flag, flag);
                        
                        
                           
                        }, 1000);
                        
                    }
                }
            },
            title: {
                text: 'Player #22 '
            },
            xAxis: {

                type: 'datetime',
                tickPixelInterval: 150
            },
            yAxis: {
                title: {
                    text: 'Impact data (G-Force)'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
                formatter: function () {
                    return '<b>' + this.series.name + '</b><br/>' +
                        Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
                        Highcharts.numberFormat(this.y, 2);
                }
            },
            legend: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
             plotOptions: {
            series: {
                cursor: 'pointer',
                point: {
                    events: {

                        click: function () {
                            var vid = document.getElementById("Video1");

                            var vid2 = document.getElementById("Video2");

                            var yvalue = this.y;

                            if(yvalue > 40){
                            	vid.currentTime= 16;
                            	vid.play();
                            	
                            	vid2.play();
                            	

                            }



                            if(yvalue > 29){
                            	vid.currentTime= 15;
                            	vid.play();
                            	
                            	vid2.play();
                            	

                            }

                            if(yvalue < 3){
                            	vid.currentTime= 14;
                            	vid.play();
                            	
                            	

                            }
                            if(yvalue < 2){
                            	vid.currentTime= 1;
                            	vid.play();
                            	
                            	

                            }




                            



                            // alert('Category: ' + this.category + ', value: ' + this.y);



                             //alert('The impact is 45G ');
                             
                            //vid.load();
                            //vid.play();
    
                            

                        }
                    }
                }
            }
        },
            series: [{
                name: 'Sensor data',
                data: (function () {
                    // generate an array of random data
                    var data = [],
                        time = (new Date()).getTime(),
                        i;

                    for (i = -20; i <= 0; i += 1) {
                        data.push({
                            x: time + i * 1000,
                            y: 0
                        });
                    }
                    return data;
                }())
            }]
        });
    });
});