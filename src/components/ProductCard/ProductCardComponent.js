import "./ProductCardComponent.scss";
import React, { useState, useContext } from "react";
import { shoppingCartContext } from "../../context/ShoppingCartContext";

function ProductCard(props) {
	const [isClicked, setIsClicked] = useState(false);

	const cart = useContext(shoppingCartContext);

	return (
		<div
			onMouseEnter={() => {
				setIsClicked(true);
			}}
			onMouseLeave={() => {
				setIsClicked(false);
			}}
			className='col-12 col-md-6 col-lg-4 d-flex mt-3'
		>
			<div className='img-container rounded'>
				<img
					className='img-css rounded'
					alt='an image of product'
					src={props.product.img}
				></img>
				<form
					style={{ opacity: isClicked ? 1 : 0 }}
					className='rounded overlay p-2 d-flex flex-column'
					onSubmit={(e) => {
						e.preventDefault();
					}}
				>
					<div className='text-dark flex-grow-1'></div>
					{isClicked ? (
						<>
							<label className='d-flex justify-content-between text-light-dark fw-bolder fs-3'>
								<div>{props.product.name}</div>
								<div>${props.product.price}</div>
							</label>
							<div className='d-flex border border-2 bg-white rounded'>
								<button
									className='border-0 rounded bg-white p-2 text-light-dark flex-grow-1'
									onClick={() => {
										cart.addToCart(props.product.id);
									}}
								>
									Add to Cart
								</button>
								<div className='d-flex flex-column'>
									<button
										onClick={() => cart.addToCart(props.product.id)}
										className='rm-button-style border-bottom px-2'
									>
										+
									</button>
									<button
										onClick={() => cart.removeFromCart(props.product.id)}
										className='rm-button-style fw-bolder px-2'
									>
										-
									</button>
								</div>
							</div>
						</>
					) : null}
				</form>
			</div>
		</div>
	);
}

export default ProductCard;
