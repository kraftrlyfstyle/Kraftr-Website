/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import { MdShoppingCart, MdMenu } from "react-icons/md";
import { Link } from "react-router-dom";

import * as db from "../db";

const Product = () => {
	let params = useParams();
	const [shoe, setShoe] = useState({});
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	async function getShoeInfoLocal() {
		let [success, responseOrError] = await db.getShoesById(params.id);
		setLoading(false);

		if (!success) {
			setError(true);
			return;
		}

		setShoe(responseOrError.shoe);
		return;
	}

	useEffect(() => {
		getShoeInfoLocal();
	}, []);

	return (
		<>
			<div className="flex flex-row bg-[#af9e97]">
				<div className="flex basis-1/3 justify-center items-center h-full">
					{/*<img className="rounded-md" src={"http://127.0.0.1:8000" + shoe.cover_image} alt="" /> test with bag image first*/}
					<img src="https://i.postimg.cc/QC03nyjd/bag-2.png" className="h-full w-full" />
				</div>

				<div className="flex basis-2/3  bg-[#F4ECE9] px-11 py-7 flex-col">
					<div className="flex w-full justify-between flex-row mb-16">
            <div>
						<Link
							to={"/"}
							className="text-4xl tracking-widest font-bold mt-5 mx-10 mb-10 order-first"
						>
							KRAFTR
						</Link>
            </div>
            <div>
              <button className="order-last">
                <MdMenu size={28}/>
              </button>
            </div>
					</div>
					<div className="flex flex-col">
						<div className="flex mt-10 flex-col items-center">
							<div className="flex mx-20">
								<p className="text text-5xl font-semibold text-center">
									Kraftr {shoe.name}
								</p>
							</div>
							<div>
								<p className="text text-3xl pt-5 text-left">₹{shoe.price}</p>
							</div>
							<div className="flex justify-center items-center">
								<p className="text pt-10 w-6/12 text-center text-[#756a65]">
									{shoe.description}
								</p>
							</div>
							<div className="flex justify-center items-center my-14 mb-10">
								<button className="w-80 border-[1px] border-black px-6 py-4 hover:bg-[#766261] hover:text-white text-lg transition-all tracking-wider hover:tracking-widest text ">
									ADD TO CART
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>

			<Footer></Footer>
		</>
	);
};

export default Product;
