import { useState } from 'react'

const Search = ({ product }) => {
	const [search, setNewSearch] = useState('')

	const handleSearchChange = (e) => {
		setNewSearch(e.target.value)
	}

	const filtered = !search
		? product
		: product.filter((data) =>
				data.name.toLowerCase().includes(search.toLowerCase())
		  )

	return (
		<div className='search'>
			<div className='search__filter'>
				<input type='text' value={search} onChange={handleSearchChange} />
			</div>
			{filtered.map((data) => {
				return <p key={data.id}>{data.name}</p>
			})}
		</div>
	)
}

export default Search
