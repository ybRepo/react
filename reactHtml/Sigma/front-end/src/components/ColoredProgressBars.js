import React, {PureComponent} from 'react';
import {Card, Col, Progress} from 'reactstrap';

const pStyle = {
  textTransform: 'uppercase',
}

export default class ColoredProgressBars extends PureComponent {
  getColor = () => {
    const val = 'progress-wrap progress-wrap--'
    let valColor = '';

    let ltvColor = '';
      ltvColor = (this.props.type === 'ltv' && this.props.val >= 150) ? 'pink' : 'green';
      ltvColor = (this.props.type === 'ltv' && this.props.val >= 140  && this.props.val < 150) ? 'yellow' : 'pink';
      ltvColor = (this.props.type === 'ltv' && this.props.val < 140) ? 'green' : 'pink';

    let tdsrColor = '';
      tdsrColor = (this.props.type === 'Tdsr' && this.props.val >= 40) ? 'pink' : 'green';
      tdsrColor = (this.props.type === 'Tdsr' && this.props.val >= 30  && this.props.val < 40) ? 'yellow' : 'pink';
      tdsrColor = (this.props.type === 'Tdsr' && this.props.val < 30) ? 'green' : 'pink';

    let ptiColor = '';
      ptiColor = (this.props.type === 'pti' && this.props.val >= 6) ? 'pink' : 'green';
      ptiColor = (this.props.type === 'pti' && this.props.val >= 4 && this.props.val < 6) ? 'yellow' : 'pink';
      ptiColor = (this.props.type === 'pti' && this.props.val < 4 ) ? 'green' : 'pink';


    switch (this.props.type) {
      case 'ltv':
        valColor = val + ltvColor;
        break;
      case 'tdsr':
        valColor = val + tdsrColor;
        break;
      case 'pti':
        valColor = val + ptiColor;
        break;
      default:
        console.log("Invalid status submitted or app did not have a prior status")
    }

    
    return valColor
  }
  
  render() {
    return (
      <Col md={12} lg={3}>
        <Card>
            <div className ={this.getColor()} > 
              <div style={pStyle}>{this.props.type}
              <Progress value={this.props.val} max={this.props.max}/>
              </div>
            </div>
        </Card>
      </Col>
    )
  }
}