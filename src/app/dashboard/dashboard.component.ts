import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import Chart from 'chart.js/auto';
import * as Chartist from 'chartist';
import { HttpClient } from '@angular/common/http';
import { MyDataService } from '../mydata.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css', '../../assets/nucleo-svg.css', '../../assets/nucleo-icons.css']
})

export class DashboardComponent implements OnInit, AfterViewInit {
  @ViewChild('completedTasksChart') completedTasksChart!: ElementRef<HTMLCanvasElement>;
  @ViewChild('dailySalesChart') dailySalesChart!: ElementRef<HTMLCanvasElement>;
  @ViewChild('websiteViewsChart') websiteViewsChart!: ElementRef<HTMLCanvasElement>;
  constructor(private http: HttpClient, private myDataService: MyDataService) { }
  chart!: Chart;
  readings: any[] = [];

  /*getReadings(): void {
    this.http.get<any[]>('http://localhost:3200/api/readings').subscribe((data: any[]) => {
      // Take the last element of the array (i.e., the latest reading)
      this.readings = data;
    });
  }
  */
  data: any[] = [];
  ngAfterViewInit() {
    const canvas = this.completedTasksChart.nativeElement;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        new Chart(ctx, {
          type: "line",
          data: {
            labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            datasets: [{
              label: "Mobile apps",
              tension: 0,
              pointRadius: 5,
              pointBackgroundColor: "rgba(255, 255, 255, .8)",
              pointBorderColor: "transparent",
              borderColor: "rgba(255, 255, 255, .8)",
              borderWidth: 4,
              backgroundColor: "transparent",
              fill: true,
              data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
              
        
            }],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false,
              }
            },
            interaction: {
              intersect: false,
              mode: 'index',
            },
            scales: {
              y: {
                grid: {
                  
                  display: true,
                  drawOnChartArea: true,
                  drawTicks: false,
                  
                  color: 'rgba(255, 255, 255, .2)'
                },
                ticks: {
                  display: true,
                  padding: 10,
                  color: '#f8f9fa',
                  font: {
                    size: 14,
                    weight: '300',
                    family: "Roboto",
                    style: 'normal',
                    lineHeight: 2
                  },
                }
              },
              x: {
                grid: {
                  
                  display: false,
                  drawOnChartArea: false,
                  drawTicks: false,
                  
                },
                ticks: {
                  display: true,
                  color: '#f8f9fa',
                  padding: 10,
                  font: {
                    size: 14,
                    weight: '300',
                    family: "Roboto",
                    style: 'normal',
                    lineHeight: 2
                  },
                }
              },
            },
          },
        });
      }
    }


    const secondcanvas = this.websiteViewsChart.nativeElement;
    if (secondcanvas) {
      const ctx = secondcanvas.getContext('2d');
      if (ctx) {
        new Chart(ctx, {
          type: "bar",
          data: {
            labels: ["M", "T", "W", "T", "F", "S", "S"],
            datasets: [{
              label: "Sales",
             
              borderWidth: 0,
              borderRadius: 4,
              borderSkipped: false,
              backgroundColor: "rgba(255, 255, 255, .8)",
              data: [50, 20, 10, 22, 50, 10, 40],
              maxBarThickness: 6
            }, ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false,
              }
            },
            interaction: {
              intersect: false,
              mode: 'index',
            },
            scales: {
              y: {
                grid: {
                  
                  display: true,
                  drawOnChartArea: true,
                  drawTicks: false,
                 
                  color: 'rgba(255, 255, 255, .2)'
                },
                ticks: {
                 
                 
         
                  padding: 10,
                  font: {
                    size: 14,
                    weight: '300',
                    family: "Roboto",
                    style: 'normal',
                    lineHeight: 2
                  },
                  color: "#fff"
                },
              },
              x: {
                grid: {
                  
                  display: true,
                  drawOnChartArea: true,
                  drawTicks: false,
             
                  color: 'rgba(255, 255, 255, .2)'
                },
                ticks: {
                  display: true,
                  color: '#f8f9fa',
                  padding: 10,
                  font: {
                    size: 14,
                    weight: '300',
                    family: "Roboto",
                    style: 'normal',
                    lineHeight: 2
                  },
                }
              },
            },
          },
        });
    
      }
    }

    const thirdcanvas = this.dailySalesChart.nativeElement;
    if (thirdcanvas) {
      const ctx = thirdcanvas.getContext('2d');
      if (ctx) {
        new Chart(ctx, {
          type: "line",
          data: {
            labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            datasets: [{
              label: "Mobile apps",
              tension: 0,
              
              pointRadius: 5,
              pointBackgroundColor: "rgba(255, 255, 255, .8)",
              pointBorderColor: "transparent",
              borderColor: "rgba(255, 255, 255, .8)",
              
              borderWidth: 4,
              backgroundColor: "transparent",
              fill: true,
              data: [50, 40, 300, 320, 500, 350, 200, 230, 500],
              
    
            }],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false,
              }
            },
            interaction: {
              intersect: false,
              mode: 'index',
            },
            scales: {
              y: {
                grid: {
                
                  display: true,
                  drawOnChartArea: true,
                  drawTicks: false,
                  
                  color: 'rgba(255, 255, 255, .2)'
                },
                ticks: {
                  display: true,
                  color: '#f8f9fa',
                  padding: 10,
                  font: {
                    size: 14,
                    weight: '300',
                    family: "Roboto",
                    style: 'normal',
                    lineHeight: 2
                  },
                }
              },
              x: {
                grid: {
             
                  display: false,
                  drawOnChartArea: false,
                  drawTicks: false,
                  
                },
                ticks: {
                  display: true,
                  color: '#f8f9fa',
                  padding: 10,
                  font: {
                    size: 14,
                    weight: '300',
                    family: "Roboto",
                    style: 'normal',
                    lineHeight: 2
                  },
                }
              },
            },
          },
        });
    
      }
    }


  }

ngOnInit() {
  /* this.myDataService.getDataFromCollection().subscribe(
     (data: any[]) => {
       this.data = data;
     },
     (err) => {
       console.error('Error retrieving data', err);
     }
   );
   */
  }
}

