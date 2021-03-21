import React, { Component } from 'react';
import {Doughnut} from 'react-chartjs-2';


export class ChartJs extends Component {

    data = {
        labels: ["2013", "2014", "2014", "2015", "2016", "2017"],
        datasets: [{
          label: '# of Votes',
          data: [10, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1,
          fill: false
        }]
    };

    options = {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          },
          gridLines: {
            color: "rgba(204, 204, 204,0.1)"
          }
        }],
        xAxes: [{
          gridLines: {
            color: "rgba(204, 204, 204,0.1)"
          }
        }]
      },
      legend: {
        display: false
      },
      elements: {
        point: {
          radius: 0
        }
      }
    }


    doughnutPieData = {
        datasets: [{
          data: [30, 40, 30],
          backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 206, 86, 0.5)',
            'rgba(75, 192, 192, 0.5)',
            'rgba(153, 102, 255, 0.5)',
            'rgba(255, 159, 64, 0.5)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
        }],
    
        // These labels appear in the legend and in the tooltips when hovering different arcs
        // labels: [
        //   'Pink',
        //   'Blue',
        //   'Yellow',
        // ]
        labels : this.props.labels
    };

    doughnutPieOptions = {
        responsive: true,
        animation: {
          animateScale: true,
          animateRotate: true
        }
    };


      
    render() {
      console.log(this.props.labels)
        return (
            <div>
                {/* <div className="page-header">
                    <h3 className="page-title">
                        Chart-js
                    </h3>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Charts</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Chart-js</li>
                        </ol>
                    </nav>
                </div> */}
                
                <div className="row">
                    <div className="col-md-6 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Colleges by States</h4>
                                <Doughnut data={this.doughnutPieData} options={this.doughnutPieOptions} />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Colleges by Courses</h4>
                                <Doughnut data={this.doughnutPieData} options={this.doughnutPieOptions} />
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default ChartJs
