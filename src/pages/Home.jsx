import { useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

import { MdShoppingBag, MdMenu } from "react-icons/md";
import landingPageVideo from "../assets/videos/landing-page-video.mp4";
import shoe1 from "../assets/images/1.png";
import shoe2 from "../assets/images/2.png";
import shoe3 from "../assets/images/3.png";
import shoe4 from "../assets/images/4.png";
import shoe5 from "../assets/images/5.png";

import arrow from "../assets/images/Arrow.png";
import bag1 from "../assets/images/bag-1.png";

import { IoLogoInstagram, IoLogoLinkedin } from "react-icons/io5";

function Home() {
	const [menuBar, setMenuBar] = useState(false);
	const videoRef = useRef();
	const inView = useInView(videoRef, { amount: 0.5 });

	return (
		<>
			<AnimatePresence>
				{inView && (
					<motion.section
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						className="m-4 mx-8 p-4 px-8 flex justify-between items-center bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-5 text-[#ffffff] fixed left-4 right-4 z-50"
					>
						<div id="Left" className="">
							<Link to={"/products"}>
								<MdShoppingBag size={28} />
							</Link>
						</div>

						<div id="Center">
							<Link to={"/"} className="text-4xl tracking-widest font-bold">
								KRAFTR
							</Link>
						</div>

						<div id="Right" className="">
							<button
								onClick={() => {
									setMenuBar(true);
								}}
							>
								<MdMenu size={28} />
							</button>
						</div>
					</motion.section>
				)}
			</AnimatePresence>

			<AnimatePresence>
				{menuBar && (
					<motion.section
						initial={{ x: 400 }}
						animate={{ x: 0 }}
						exit={{ x: 400 }}
						transition={{ type: "tween" }}
						className="h-screen bg-white w-48 flex flex-col justify-between fixed right-0 z-50 bg-clip-padding backdrop-filter backdrop-blur-sm text-[#bbbbbb] bg-opacity-20 items-start pl-8 text"
						onMouseLeave={() => {
							setMenuBar(false);
						}}
					>
						<div className="flex flex-col"></div>
						<div className="flex flex-col">
							<Link to={"/login"} className="mb-4 hover:text-gray-200 transition-all">
								Login
							</Link>
							<Link
								to={"/products"}
								className="mb-4 hover:text-gray-200 transition-all"
							>
								Shop
							</Link>
							<button className="mb-4 hover:text-gray-200 transition-all text-left">
								About
							</button>
							<button className="mb-4 hover:text-gray-200 transition-all">
								Contact Us
							</button>
						</div>
						<div className="flex flex-row mb-6 items-center">
							<IoLogoInstagram
								className="mr-2.5 hover:text-gray-200 transition-all cursor-pointer"
								size={20}
							/>
							<IoLogoLinkedin
								size={20}
								className="hover:text-gray-200 transition-all cursor-pointer"
							/>
						</div>
					</motion.section>
				)}
			</AnimatePresence>

			<section id="Video" className="h-full bg-black px-36 pt-12">
				<video
					ref={videoRef}
					src={landingPageVideo}
					autoPlay={true}
					muted
					loop
					className=""
				></video>
			</section>

			<motion.section
				id="Bag-1"
				className="h-screen w-full bg-[#DAD5D1] grid grid-cols-4 grid-rows-6 border-b-[1px] border-black"
			>
				<div className="col-span-2 border-r-[1px] border-b-[1px] border-black"></div>
				<div className="col-span-1 border-r-[1px] border-b-[1px] border-black"></div>
				<div id="Shop" className="col-span-[.5] border-b-[1px] border-black">
					<div className="flex flex-row w-3/4 h-full m-auto items-center justify-center">
						<MdShoppingBag size={32} className="mr-8" />
						<MdMenu size={32} />
					</div>
				</div>
				<div
					id="Bag Name"
					className="col-span-2 row-span-4 border-r-[1px] border-b-[1px] border-black flex flex-col items-center justify-center text"
				>
					<div className="w-3/4">
						<h2 className="font-bold text text-4xl tracking-wider mb-4 ">
							DenimCraft Carryall
						</h2>
						<p className="text mb-12 leading-[1.2 rem]">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
							veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
							commodo consequat.
						</p>
						<Link to={"/products"}>
							<button className="border-[1px] border-black px-8 py-4 hover:bg-[#766261] hover:text-white text-2xl transition-all w-full tracking-wider hover:tracking-widest">
								VIEW MORE
							</button>
						</Link>
					</div>
				</div>
				<div className="col-span-1 row-span-5 border-r-[1px] border-black flex items-center justify-center pr-12">
					<img src={bag1} alt="" className="" />
				</div>
				<div className="col-span-[.5] col-span-1 row-span-5 border-black  pr-12">
					<div className="relative h-full w-full flex items-center justify-center">
						<button className="absolute left-[-12%] top-[35%] rounded-[9999px] border-[1px] border-black bg-[#A3B5C1] py-8 px-5">
							<img src={arrow} alt="" className="w-7" />
						</button>
						<img src={bag1} alt="" className="" />
					</div>
				</div>
				<div
					id="Social Media Icons"
					className="col-span-2 row-span-1 border-r-[1px] border-black"
				>
					<div className="w-3/4 h-full flex flex-row items-center m-auto">
						<IoLogoInstagram
							className="mr-2.5 transition-all cursor-pointer"
							size={30}
						/>
						<IoLogoLinkedin size={30} className="cursor-pointer transition-all" />
					</div>
				</div>
			</motion.section>

			<div className="bg-[#DAD5D1] py-12">
				<motion.section
					id="Hero"
					className="mb-8 h-56 rounded-xl flex flex-col items-center justify-center text "
					initial={{ y: -80, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					viewport={{ amount: 0.1 }}
					transition={{ type: "tween", duration: 0.5 }}
				>
					<div className="text-7xl mb-6">We Craft Fashion </div>
					<div className="text-2xl">with a handcrafted touch</div>
				</motion.section>

				<motion.section
					id="Shoes Gallery"
					className="w-full m-auto mt-12 h-96 rounded-xl flex flex-row items-center justify-center"
					initial={{ scale: 0.8, opacity: 0 }}
					whileInView={{ scale: 1, opacity: 1 }}
					viewport={{ amount: 0.1 }}
					transition={{ duration: 0.5 }}
				>
					{[
						{ id: 1, image: shoe1, backgroundPosX: "10%" },
						{ id: 2, image: shoe2, backgroundPosX: "35%" },
						{ id: 3, image: shoe3, backgroundPosX: "50%" },
						{ id: 4, image: shoe4, backgroundPosX: "75%" },
						{ id: 5, image: shoe5, backgroundPosX: "100%" },
					].map(item => {
						return (
							<motion.div
								key={item.id}
								className="w-24 rounded-xl mx-[0.6rem] h-96 shadow-md"
								initial={{ scale: 0.9, width: "6rem" }}
								whileHover={{ scale: 1, width: "36rem", backgroundSize: "cover" }}
								transition={{ duration: 0.5, ease: "easeInOut" }}
								style={{
									backgroundImage: `url(${item.image})`,
									backgroundSize: "cover",
									backgroundPositionX: `${item.backgroundPosX}`,
								}}
							/>
						);
					})}
				</motion.section>
			</div>

			<Footer></Footer>
		</>
	);
}

export default Home;
