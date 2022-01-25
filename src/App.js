import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Products from './components/Products'

import { AiOutlineSearch } from 'react-icons/ai'
import './styles/styles.scss'

function App() {
	const [productData, setProductData] = useState([{}])
	const [searchTerm, setSetSearchTerm] = useState('')
	const [isLoading, setIsLoading] = useState(true)

	const handleChange = (event) => {
		setSetSearchTerm(event.target.value)
	}

	useEffect(() => {
		const fetchData = async () => {
			const result = await axios('/api')
			// console.log(result.data)
			setProductData(result.data)
			setIsLoading(false)
		}

		fetchData()
	}, [])

	return isLoading ? (
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
							data.name.toLowerCase().includes(searchTerm.toLowerCase())
						)
						.map((data, index) => {
							return (
								<Products
									key={data && data.id ? data.id : index}
									product={data}
								/>
							)
						})}
			</div>
		</div>
	)
}

export default App
