import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Products from './components/Products'

import { AiOutlineSearch } from 'react-icons/ai'
import './styles/styles.scss'

function App() {
	const [productData, setProductData] = useState([{}]) // empty object
	const [searchTerm, setSetSearchTerm] = useState('') // empty string
	const [isLoading, setIsLoading] = useState(true) // wait for frontend and backend to load

	// equal to what is typed in the input
	const handleChange = (event) => {
		setSetSearchTerm(event.target.value)
	}

	useEffect(() => {
		const fetchData = async () => {
			// proxy defined in packages.json, only need '/api'
			const result = await axios('/api') // wait for response from json
			// console.log(result.data)
			setProductData(result.data) // set data to variable
			setIsLoading(false)
		}

		fetchData()
	}, [])

	return isLoading ? (
		// alternative
		// {( typeof productData === 'undefined')} ? (
		//  <p>Loading ...</p>
		// )

		<p>Loading ...</p>
	) : (
		<div className='container'>
			<div className='search'>
				<div className='search__filter'>
					<input
						type='text'
						placeholder='Search Products ...'
						className='prompt'
						onChange={handleChange}
					/>
					<AiOutlineSearch className='search__icon' />
				</div>
			</div>

			<div className='products'>
				{productData &&
					productData
						.filter((data) =>
							// current value includes searchTerm string
							data.name.toLowerCase().includes(searchTerm.toLowerCase())
						)
						.map((data) => {
							return <Products key={data.id} product={data} />
						})}
			</div>
		</div>
	)
}

export default App
