import { useEffect, useState } from "react";

import * as db from "../db";
import TopBar from "../components/TopBar";
import Footer from "../components/Footer";
import { AnimatePresence, useInView, inView, motion } from "framer-motion";

import { IoLogoInstagram, IoLogoLinkedin } from "react-icons/io5";
import { MdMenu } from "react-icons/md";

import { Link } from "react-router-dom";

const ForgotPassword = () => {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [menuBar, setMenuBar] = useState(false);

	async function getDataLocal() {
		let [success, responseOrError] = await db.getData();
		setLoading(false);

		if (!success) {
			setError(true);
			return;
		}

		setData(responseOrError.data);
		return;
	}

	useEffect(() => {
		getDataLocal();
	}, []);

	return (
		<>
			<AnimatePresence>
				{menuBar && (
					<motion.section
						initial={{ x: 400 }}
						animate={{ x: 0 }}
						exit={{ x: 400 }}
						transition={{ type: "tween" }}
						className="h-screen bg-white w-48 flex flex-col justify-between fixed right-0 z-50 bg-clip-padding backdrop-filter backdrop-blur-sm text-black items-start pl-8 text bg-opacity-70"
						onMouseLeave={() => {
							setMenuBar(false);
						}}
					>
						<div className="flex flex-col"></div>
						<div className="flex flex-col ">
							<Link to={"/"} className="mb-4 hover:text-[#766261] transition-all">
								Home
							</Link>
							<Link
								to={"/login"}
								className="mb-4 transition-all hover:text-[#766261]"
							>
								Login
							</Link>
							<Link
								to={"/products"}
								className="mb-4 hover:text-[#766261] transition-all"
							>
								Shop
							</Link>
							<button className="mb-4 hover:text-[#766261] transition-all text-left">
								About
							</button>
							<button className="mb-4 hover:text-[#766261] transition-all">
								Contact Us
							</button>
						</div>
						<div className="flex flex-row mb-6 items-center">
							<IoLogoInstagram
								className="mr-2.5 hover:text-[#766261] transition-all cursor-pointer"
								size={20}
							/>
							<IoLogoLinkedin
								size={20}
								className="hover:text-[#766261] transition-all cursor-pointer"
							/>
						</div>
					</motion.section>
				)}
			</AnimatePresence>

			<div className="flex w-full items-center justify-between border-b border-black py-7 bg-[#F4ECE9]">
				<div className="order-first text-lg ml-20">
					<Link to={"/"}></Link>
				</div>

				<div>
					<Link to={"/"} className="text-4xl tracking-widest font-bold">
						KRAFTR
					</Link>
				</div>

				<div className="order-last text-lg mr-16">
					<button
						onClick={() => {
							setMenuBar(true);
						}}
					>
						<MdMenu size={28} />
					</button>
				</div>
			</div>
			<div className="h-[75dvh] w-full flex flex-col items-center justify-center bg-[#F4ECE9]">
				<form className="flex flex-col items-center justify-center w-full text">
					<input
						className="w-3/12 border-[1px] outline-none focus:border-[2px] border-black p-3 text-lg transition-all ease-in-out"
						placeholder="new password"
						name="newpassone"
						type="password"
					/>
					<input
						className="w-3/12 border-[1px] outline-none focus:border-[2px] border-black p-3 my-4 text-lg transition-all ease-in-out"
						name="newpasstwo"
						placeholder="re-type new password"
						type="password"
					/>

					<button
						className="w-3/12 border-[1px] border-black px-6 py-4 bg-[#766261] text-white text-lg transition-all tracking-wider hover:tracking-widest  mt-10  hover:bg-[#7d6a69] text-center"
						type="submit"
					>
						RESET
					</button>
				</form>
			</div>

			<Footer></Footer>
		</>
	);
};

export default ForgotPassword;
