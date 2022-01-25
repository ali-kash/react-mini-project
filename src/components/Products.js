import { HiOutlineLocationMarker } from 'react-icons/hi'

import noImage from '../assets/no-image-icon.png'

const Products = ({ product }) => {
	const isFeatured = product?.featured === true
	const notInStock = product?.inventory === 0
	// console.log(products)

	return (
		<>
			<div
				className={`product__wrapper ${isFeatured ? 'featured' : ''} ${
					notInStock ? 'no-stock' : ''
				}`}
			>
				<div className='product'>
					{isFeatured ? (
						<div className='featured__ribbon'>
							<div className='ribbon'>Featured</div>
						</div>
					) : null}
					<div className='product__content'>
						<div className='product__content-image'>
							{product?.image ? (
								<img src={product.image} alt={product.name} />
							) : (
								<img src={noImage} alt={product.name} />
							)}
						</div>
						<h1 className='product__content-title'>{product.name}</h1>
						<p className='product__content-desc'>{product.price}</p>

						<div className='product__info'>
							{product?.aisle ? (
								<div className='more-info aisle'>
									<HiOutlineLocationMarker />
									<p className='aisle__number'>Aisle: {product?.aisle}</p>
								</div>
							) : (
								<div className='more-info aisle'>
									<HiOutlineLocationMarker />
									<p className='aisle__number'>Aisle: N/A</p>
								</div>
							)}

							{product?.inventory > 0 ? (
								<div className='more-info is-in-stock'>
									<p>Stock: {product.inventory}</p>
								</div>
							) : null}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Products
