import React from 'react'
import { storiesOf } from '@storybook/react'
import { Transfer } from './Transfer'


const propsCountries = {
	country1: 'Россия',
	country2: 'Англия',
	timeFrom: "10:00",
	buttonDisabled: true,
	checkboxTermsChecked: true,
}

const propsFullfilled = {
	timeTo: "15:00",
	buttonDisabled: false,
	commentText: 'Какой-то текст от пользователя',
	currency1: 'RUB',
	amount1: 2000,
	tipCurrency1: 'Текст подсказки к полю',
	
	currency2: 'GBP',
	amount2: 23.38,
	tipCurrency2: 'Текст подсказки к полю',
}

const propsTransfering = {
	buttonLoading: true,
	checkboxTermsDisabled: true,
	allFieldsDisabled: true,
}


storiesOf('ui/pages', module)
	.add('Transfer/3.1 Countries', () => <Transfer {...propsCountries} />)
	.add('Transfer/3.4 Fullfilled', () => <Transfer {...propsCountries} {...propsFullfilled} />)
	.add('Transfer/3.5 Transfering', () => <Transfer {...propsCountries} {...propsFullfilled} {...propsTransfering} />)
