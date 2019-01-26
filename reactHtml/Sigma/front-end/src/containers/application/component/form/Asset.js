import React, {PureComponent} from 'react';
import {Container, Row, Card, CardBody, Col} from 'reactstrap';
import {Field, reduxForm} from 'redux-form';
import validate from './validate';
import axios from 'axios'
import {
    loadProgressBar
} from 'axios-progress-bar'

const renderField = ({input, placeholder, type, meta: {touched, error}}) => (
  <div className='form__form-group-input-wrap'>
    <input {...input} placeholder={placeholder} type={type}/>
    {touched && error && <span className='form__form-group-error'>{error}</span>}
  </div>
);

class HorizontalForm extends PureComponent {
    state = {
        id: this.props.id,
        howPassword: false,
        dataVersion:'',
        vehicle: '',
        isCbbLoading: true,
    };

    componentDidMount(){
        this.getAppCbb(this.state.id)
    }

    getAppCbb = (id) => {
         axios.get(`http://localhost:8080/app/cbb/${id}`)
            .then(response => {
                let data = response.data
                this.setState({
                    dataVersion: data.cbb.response.dataVersion,
                    vehicle: data.cbb.response.vehicles.vehicle,
                    isCbbLoading: false
                })
            })
            .catch(error => {
                console.log(error)
            })
    }

    showPassword = (e)  => {
    e.preventDefault();
    this.setState({
      showPassword: !this.state.showPassword
    })
    }
  
    render() {
    // console.log('Asset data received', this.state.dataVersion, this.state.vehicle)
    const {handleSubmit} = this.props;

    return this.state.isCbbLoading  ? <div>{loadProgressBar()}</div> : (
     <Container>
         <Row>
            <Col md={6} lg={6} xl={6}>
                <Card>
                    <CardBody>
                        <div className='card__title'>
                        <h5 className='bold-text'>Asset Valuation</h5>
                        <h5 className='subhead'>Black Book Valuation - Last updated {this.state.dataVersion._text}</h5>
                        </div>
                        <form className='form form--horizontal' onSubmit={handleSubmit}>
                        <div className='form__form-group'>
                            <label className='form__form-group-label'>Asset Class</label>
                            <div className='form__form-group-field' disabled>
                            <Field
                                name='assetClass'
                                component={renderField}
                                type='text'
                                placeholder={this.state.vehicle.carOrTruck._text}
                                input={{ disabled: true, }}
                            />
                            </div>
                        </div>
                        <div className='form__form-group'>
                            <label className='form__form-group-label'>Condition</label>
                            <div className='form__form-group-field' disabled>
                            <Field
                                name='vin'
                                component={renderField}
                                type='text'
                                placeholder='used'
                                input={{ disabled: true, }}
                            />
                            </div>
                        </div>
                        <div className='form__form-group'>
                            <label className='form__form-group-label'>VIN</label>
                            <div className='form__form-group-field' disabled>
                            <Field
                                name='vin'
                                component={renderField}
                                type='text'
                                placeholder={this.state.vehicle.vins.vin[0].vinNumber._text}
                                input={{ disabled: true, }}
                            />
                            </div>
                        </div>
                        <div className='form__form-group'>
                            <label className='form__form-group-label'>Year</label>
                            <div className='form__form-group-field'>
                            <Field
                                name='year'
                                component={renderField}
                                type='text'
                                placeholder={this.state.vehicle.year._text}
                                input={{ disabled: true, }}
                            />
                            </div>
                        </div>
                        <div className='form__form-group'>
                            <label className='form__form-group-label'>Make</label>
                            <div className='form__form-group-field'>
                            <Field
                                name='make'
                                component={renderField}
                                type='text'
                                placeholder={this.state.vehicle.manufacturer._text}
                                input={{ disabled: true, }}
                            />
                            </div>
                        </div>
                        <div className='form__form-group'>
                            <label className='form__form-group-label'>Model</label>
                            <div className='form__form-group-field'>
                            <Field
                                name='model'
                                component={renderField}
                                type='text'
                                placeholder={this.state.vehicle.model._text}
                                input={{ disabled: true, }}

                            />
                            </div>
                        </div>
                        <div className='form__form-group'>
                            <label className='form__form-group-label'>Trim</label>
                            <div className='form__form-group-field'>
                            <Field
                                name='trim'
                                component={renderField}
                                type='text'
                                placeholder = {this.state.vehicle.trim._text}
                                input={{ disabled: true, }}
                            />
                            </div>
                        </div>
                        <div className='form__form-group'>
                            <label className='form__form-group-label'>Usage</label>
                            <div className='form__form-group-field' disabled>
                            <Field
                                name='usage'
                                component={renderField}
                                type='text'
                                placeholder='12,000 KM'
                                input={{ disabled: true, }}
                            />
                            </div>
                        </div>
                        <div className='form__form-group'>
                            <label className='form__form-group-label'>Value</label>
                            <div className='form__form-group-field' disabled>
                            <Field
                                name='value'
                                component={renderField}
                                type='amount'
                                placeholder={this.state.vehicle.values.wholesalePrices.basePrice.averagePrice._text}
                                input={{ disabled: true, }}
                            />
                            </div>
                        </div>
                        </form>
                    </CardBody>
                </Card>
            </Col>
         </Row>
     </Container>
    )
  }
}

export default reduxForm({
  form: 'horizontal_form_validation', // a unique identifier for this form
  validate,
})(HorizontalForm);
