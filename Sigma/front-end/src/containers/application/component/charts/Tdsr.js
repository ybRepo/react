import React, {PureComponent} from 'react';
import {PieChart, Pie, ResponsiveContainer} from 'recharts';
import {Card, CardBody, Col} from 'reactstrap';
import ChartArcIcon from 'mdi-react/ChartArcIcon';

const data = [{value: 60, fill: '#4ce1b6'},
  {value: 40, fill: '#eeeeee'}];

export default class TDSR extends PureComponent {
  render() {
    return (
      <Col md={3} xl={3} lg={3} sm={12} xs={12}>
        <Card>
          <CardBody className='dashboard__health-chart-card'>
            <div className='card__title'>
              <h5 className='bold-text'>Total Debt Service Ratio</h5>
            </div>
            <div className='dashboard__health-chart'>
              <ResponsiveContainer height={180}>
                <PieChart>
                  <Pie data={data} dataKey='value' cy={85} innerRadius={80} outerRadius={90}/>
                </PieChart>
              </ResponsiveContainer>
              <div className='dashboard__health-chart-info'>
                <ChartArcIcon style={{fill: '#4ce1b6'}}/>
                <p className='dashboard__health-chart-number'>{this.props.val}</p>
                <p className='dashboard__health-chart-units'>TDSR</p>
              </div>
            </div>
            <p className='dashboard__goal'>Target: 40</p>
          </CardBody>
        </Card>
      </Col>
    )
  }
}

