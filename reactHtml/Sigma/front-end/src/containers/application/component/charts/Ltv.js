import React, {PureComponent} from 'react';
import {PieChart, Pie, ResponsiveContainer} from 'recharts';
import {Card, CardBody, Col} from 'reactstrap';
import ChartArcIcon from 'mdi-react/ChartArcIcon';



export default class LTV extends PureComponent {
  state = {
    data: []
  }
  componentDidMount() {
    this.setState({
      data: [{
          value: 360,
          fill: '#f6da6e'
        },
        {
          value: 140,
          fill: '#eeeeee'
        }]
    }) 
  }

  render() {
    return (
      <Col md={3} xl={3} lg={3} sm={12} xs={12}>
        <Card>
          <CardBody className='dashboard__health-chart-card'>
            <div className='card__title'>
              <h5 className='bold-text'>Loan to Value Ratio</h5>
            </div>
            <div className='dashboard__health-chart'>
              <ResponsiveContainer height={180}>
                <PieChart>
                  <Pie data={this.state.data} dataKey='value' cy={85} innerRadius={80} outerRadius={90}/>
                </PieChart>
              </ResponsiveContainer>
              <div className='dashboard__health-chart-info'>
                <ChartArcIcon style={{fill: '#f6da6e'}}/>
                <p className='dashboard__health-chart-number'>{this.props.val}</p>
                <p className='dashboard__health-chart-units'>LTV</p>
              </div>
            </div>
            <p className='dashboard__goal'>Target: 120</p>
          </CardBody>
        </Card>
      </Col>
    )
  }
}

