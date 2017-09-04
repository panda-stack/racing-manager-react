import React, { PureComponent } from 'react'

import AccountAddCreditCardForm from 'containers/Account/AddCreditCard'

import AccountCreditCard from 'components/account/AccountCreditCard'

class AccountPaymentMethods extends PureComponent {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className='account-payment-methods'>
        <div className='account-payment-methods__container'>
          <div className='col-lg-6 col-md-8 col-sm-10 col-xs-12'>
            <h2 className='uppercase'>
              payment methods
            </h2>
            <div className='account-payment-methods__section'>
              <h4 className='capitalize'>
                outgoing
              </h4>
            </div>

            <div className='account-payment-methods__section'>
              <p className='small'>
                Here you are able to check, update and add your TRM personal information for a more tailored experience.
              </p>
            </div>

            <div className='account-payment-methods__section'>
              <AccountAddCreditCardForm />
            </div>

            <div className='account-payment-methods__section'>
              <h4 className='capitalize'>
                incoming
              </h4>
            </div>

            <div className='account-payment-methods__section'>
              <p className='small'>
                Here you are able to check, update and add your TRM personal information for a more tailored experience.
              </p>
            </div>

            <div className='account-payment-methods__section'>
              <div className='row'>
                <div className='col-sm-12 col-xs-12'>
                  <AccountCreditCard
                    cardType='visa debit'
                    holderName='N DE ROZARIEUX'
                    horseCount={1}
                    cardNumber={'4658 **** **** ****'}
                    expiry='12/20'
                    postCode='BN21 2PP' />
                </div>

                <div className='col-sm-12 col-xs-12'>
                  <AccountCreditCard
                    cardType='visa credit'
                    holderName='N DE ROZARIEUX'
                    horseCount={2}
                    cardNumber={'5046 **** **** ****'}
                    expiry='10/19'
                    postCode='SE13 3SS' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AccountPaymentMethods
