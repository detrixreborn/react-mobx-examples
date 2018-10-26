import React , { Component } from 'react';
import {observer,  inject} from 'mobx-react';


import * as d3 from 'd3';

@inject('chartStore') @observer
class Chart extends React.Component {

    render() {
        return Chart.renderChart()
    };

    static renderChart = () => <div className="graph">Detrix D3</div>
}
