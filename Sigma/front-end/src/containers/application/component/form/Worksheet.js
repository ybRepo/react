import React, {PureComponent} from 'react';
import {Container, Row, Card, CardBody, Col, Button} from 'reactstrap';
import {Field, reduxForm} from 'redux-form';
import renderSelectField from '../../../../components/form/Select';
import validate from '../form/validate';
import axios from 'axios'
import ModalComponent from '../../../../components/Modal';

const renderField = ({input, placeholder, type, meta: {touched, error}}) => (
  <div className='form__form-group-input-wrap'>
    <input {...input} placeholder={placeholder} type={type}/>
    {touched && error && <span className='form__form-group-error'>{error}</span>}
  </div>
);

class HorizontalForm extends PureComponent {
    state = {
        primaryID: this.props.id,
        showPassword: false,
        paymentAmount: 0,
        title: '',
        decisionMessage: '',
        decisionError: '',
        decisionSuccess: '',
        modal: false,
    };

  calculateLoanAmount = (amount, term, frequency , rate) => {
      let n = term * frequency
      let i = (rate / 100 / frequency)
      let D = (Math.pow((1 + i), n) - 1)
      let X = i * Math.pow((1 + i), n)
      let P = amount / (D / X)

      this.setState({
        paymentAmount: P.toFixed(2)
      })
  }

  submitDecision = (decision, collection, id) => {
      (!decision) ? console.log('Attempted to add decision without selecting value') :
      axios.put(`http://localhost:8080/update/${collection}/${id}`, {
          decision: decision.value,
        })
        .then(() => {
            this.buildModal(decision.value)
        })
        .catch(function (error) {
            console.log(error);
        });
  }

  buildModal = (decision) => {
      let modalColor = 'primary'
      let modalTitle = 'missing title message'
      let modalMessage = 'missing modal message'
      
      switch (decision) {
        case 'Approved':
            modalColor = 'success';
            modalTitle =  'Approved!';
            modalMessage = 'Application was updated to Approved state.'
            break;
        case 'Pending':
            modalColor = 'warning';
            modalTitle = 'Pending';
            modalMessage = 'Application updated to Pending state. '
            break;
        case 'Declined':
            modalColor = 'danger';
            modalTitle =  'Declined';
            modalMessage = 'Application was updated to Declined state.'
            break;
        default: 
        break;

      }

    this.setState({
        modal: true,
        color: modalColor,
        title: modalTitle,
        decisionMessage: modalMessage,

    })
  }

  toggle = () => {
      this.setState({
          modal: !this.state.modal
      });
  }
  
  render() {
    const {handleSubmit} = this.props;
    return (
     <Container>
         <Row>
            <Col md={4} lg={4} xl={4}>
                <Card>
                    <CardBody>
                        <div className='card__title'>
                            <h5 className='bold-text'>Submitted Worksheet</h5>
                            <h5 className='subhead'>Values from source portal</h5>
                        </div>
                        <form className='form form--horizontal' onSubmit={handleSubmit}>
                            <div className='form__form-group'>
                                <label className='form__form-group-label'>Product Type</label>
                                <div className='form__form-group-field'>
                                <Field
                                    name='productTypeSubmitted'
                                    component={renderField}
                                    type='text'
                                    placeholder={this.props.app.ProductType._text}
                                    input={{ disabled: true, }}
                                />
                                </div>
                            </div>
                            <div className='form__form-group'>
                                <label className='form__form-group-label'>Program</label>
                                <div className='form__form-group-field'>
                                <Field
                                    name='programSubmitted'
                                    component={renderField}
                                    type='text'
                                    placeholder={this.props.stats.program}
                                    input={{ disabled: true, }}
                                />
                                </div>
                            </div>
                            <div className='form__form-group'>
                                <label className='form__form-group-label'>Risk Tier</label>
                                <div className='form__form-group-field'>
                                <Field
                                    name='riskTierSubmitted'
                                    component={renderField}
                                    type='text'
                                    placeholder={this.props.stats.riskTier}
                                    input={{ disabled: true, }}
                                />
                                </div>
                            </div>
                            <div className='form__form-group'>
                                <label className='form__form-group-label'>Cash sale price</label>
                                <div className='form__form-group-field'>
                                <Field
                                    name='cashSalePriceSubmitted'
                                    component={renderField}
                                    type='text'
                                    placeholder={this.props.app.Worksheet.CashPrice._text}
                                    input={{ disabled: true, }}
                                />
                                </div>
                            </div>
                            <div className='form__form-group'>
                                <label className='form__form-group-label'>Lender Admin Fee</label>
                                <div className='form__form-group-field'>
                                <Field
                                    name='lenderAdminFeeSubmitted'
                                    component={renderField}
                                    type='text'
                                    placeholder={this.props.app.Worksheet.LenderAdminFee._text}
                                    input={{ disabled: true, }}
                                />
                                </div>
                            </div>
                            <div className='form__form-group'>
                                <label className='form__form-group-label'>Registration Fee</label>
                                <div className='form__form-group-field'>
                                <Field
                                    name='registrationFeeSubmitted'
                                    component={renderField}
                                    type='text'
                                    placeholder={this.props.app.Worksheet.RegistrationFee._text}
                                    input={{ disabled: true, }}
                                />
                                </div>
                            </div>
                            <div className='form__form-group'>
                                <label className='form__form-group-label'>GST Amount</label>
                                <div className='form__form-group-field'>
                                <Field
                                    name='gstAmountSubmitted'
                                    component={renderField}
                                    type='text'
                                    placeholder={this.props.app.Worksheet.GSTAmount._text}
                                    input={{ disabled: true, }}
                                />
                                </div>
                            </div>
                        </form>
                    </CardBody>
                </Card>
            </Col>
            <Col md={4} lg={4} xl={4}>
                <Card>
                    <CardBody>
                    <div className='card__title'>
                        <h5 className='bold-text'>Adjudicator's Worksheet</h5>
                        <h5 className='subhead'>Modify the worksheet to meet credit policies</h5>
                    </div>
                    <form className='form form--horizontal' onSubmit={handleSubmit}>
                        <div className='form__form-group'>
                            <Field
                                name='productType'
                                component={renderField}
                                type='text'
                                placeholder={this.props.app.ProductType._text}
                            />
                        </div>
                        <div className='form__form-group'>
                            <Field
                                name='program'
                                component={renderField}
                                type='text'
                                placeholder={this.props.stats.program}
                            />
                        </div>
                        <div className='form__form-group'>
                            <Field
                                name='riskTier'
                                component={renderField}
                                type='text'
                                placeholder={this.props.stats.riskTier}
                            />
                        </div>
                        <div className='form__form-group'>
                            <Field
                                name='cashSalePrice'
                                component={renderField}
                                type='text'
                                placeholder={this.props.app.Worksheet.CashPrice._text}
                            />
                        </div>
                        <div className='form__form-group'>
                            <Field
                                name='lenderAdminFee'
                                component={renderField}
                                type='text'
                                placeholder={this.props.app.Worksheet.LenderAdminFee._text}
                            />
                        </div>
                        <div className='form__form-group'>
                            <Field
                                name='registrationFee'
                                component={renderField}
                                type='text'
                                placeholder={this.props.app.Worksheet.RegistrationFee._text}
                            />
                        </div>
                        <div className='form__form-group'>
                            <Field
                                name='gstAmount'
                                component={renderField}
                                type='text'
                                placeholder={this.props.app.Worksheet.GSTAmount._text}
                            />
                        </div>
                    </form>
        </CardBody>
                </Card>
            </Col>
            <Col md={4} lg={4} xl={4}>
                <Card>
                    <CardBody>
                    <div className='card__title'>
                        <h5 className='bold-text'>Adjudicator's Decision</h5>
                        <h5 className='subhead'>Review deal structure prior to submitting decision</h5>
                    </div>
                    <form className='form form--horizontal' onSubmit={handleSubmit}>
                    <div className='form__form-group'>
                        <label className='form__form-group-label'>Amount to Finance</label>
                        <div className='form__form-group-field'>
                        <Field
                            ref = 'amountToFinanceApproved'
                            name = 'amountToFinanceApproved'
                            component={renderField}
                            type={this.props.app.Worksheet.Amount._text}
                            placeholder={this.props.app.Worksheet.Amount._text}
                        />
                        </div>
                    </div>
                     <div className='form__form-group'>
                        <label className='form__form-group-label'>Term</label>
                        <div className='form__form-group-field'>
                        <Field
                            ref = 'term'
                            name='term'
                            component={renderSelectField}
                            type='term'
                            placeholder =''
                            options={[
                            {value: '2', label: '24 Months'},
                            {value: '3', label: '36 Months'},
                            {value: '4', label: '48 Months'},
                            {value: '5', label: '60 Months'},
                            {value: '6', label: '72 Months'},
                            ]}
                        />
                        </div>
                    </div>
                    <div className='form__form-group'>
                        <label className='form__form-group-label'>Frequency</label>
                        <div className='form__form-group-field'>
                        <Field
                            ref = 'frequency'
                            name='frequency'
                            component={renderSelectField}
                            type='text'
                            options={[
                            {value: '12', label: 'Monthly payments'},
                            {value: '24', label: 'Bi-Weekly payments'},
                            {value: '52', label: 'Weekly payments'},
                            ]}
                        />
                        </div>
                    </div>
                    <div className='form__form-group'>
                        <label className='form__form-group-label'>Rate - Requested</label>
                        <div className='form__form-group-field'>
                        <Field
                            name='rateR'
                            component={renderField}
                            type='number'
                            value={this.props.app.Worksheet.BuyRate._text}
                            placeholder={this.props.app.Worksheet.BuyRate._text}
                        />
                        </div>
                    </div>
                    <div className='form__form-group'>
                        <label className='form__form-group-label'>Rate - Approved</label>
                        <div className='form__form-group-field'>
                        <Field
                            ref='rateA'
                            name='rateA'
                            component={renderField}
                            type='number'
                            value= {6}
                            placeholder='6.00%'
                        />
                        </div>
                    </div>
                    <div className='form__form-group'>
                        <label className='form__form-group-label'>Payment</label>
                        <div className='form__form-group-field'>
                        <Field
                            name='payment'
                            component={renderField}
                            type='text'
                            placeholder={this.state.paymentAmount}
                            input={{ disabled: true, }}
                        />
                        </div>
                    </div>
                    <div className='form__form-group'>
                        <label className='form__form-group-label'>Decision</label>
                        <div className='form__form-group-field'>
                        <Field
                            ref= 'creditDecision'
                            name='creditDecison'
                            component={renderSelectField}
                            type='text'
                            options={[
                            {value: 'Approved', label: 'Approved'},
                            {value: 'Pending', label: 'Pending'},
                            {value: 'Declined', label: 'Declined'},
                            ]}
                        />
                        </div>
                    </div>
                        <Button className='btn btn-sm btn-primary rounded' color='primary' onClick = {() => this.calculateLoanAmount(this.refs.amountToFinanceApproved.value, this.refs.term.value.value, this.refs.frequency.value.value, this.refs.rateA.value)}
                        type = 'button' > Calculate Payment </Button>
                        <Button className='btn btn-sm btn-primary rounded' color='success' onClick={()=> this.submitDecision(this.refs.creditDecision.value, 'app', this.state.primaryID)} type = 'button'> Submit Decision </Button>
                    </form>
                    </CardBody>
                </Card>
            </Col>
         </Row>
         <ModalComponent toggle={this.toggle} modal={this.state.modal} color={this.state.color} title={this.state.title} message={this.state.decisionMessage}/>
     </Container>
    )
  }
}

export default reduxForm({
  form: 'horizontal_form_validation', // a unique identifier for this form
  validate,
})(HorizontalForm);