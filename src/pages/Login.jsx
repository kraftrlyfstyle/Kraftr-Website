import { useEffect } from "react";
import { login } from "../db";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { MdHome, MdMenu } from "react-icons/md";

const Login = props => {
	useEffect(() => {
		let token = localStorage.getItem("token");
		console.log(token);
		if (!token || token == null || token == "") {
			// TODO don't redirect
			return;
		}
		// window.location.replace("/")
	}, []);

	async function handleForm(e) {
		e.preventDefault();
		let email = e.target.email.value;
		let password = e.target.password.value;

		if (
			email == "" ||
			email == null ||
			email == undefined ||
			password == "" ||
			password == null ||
			password == undefined
		) {
			// TODO Add toast here
			return;
		}

		let res = await login(email, password);
		if (res[0] == false) {
			// TODO Add error toast here
			return;
		}

		localStorage.setItem("token", res[1].token);
		window.location.replace("/");
	}

	return (
		<>
			<div className="flex w-full items-center justify-between border-b border-black py-7">
				<div className="order-first text-lg ml-20">
					<Link to={"/"}></Link>
				</div>

				<div>
					<Link to={"/"} className="text-4xl tracking-widest font-bold">
						KRAFTR
					</Link>
				</div>

				<div className="order-last text-lg mr-16">
					<Link to={"/cart"}>
						<MdMenu size={35} />
					</Link>
				</div>
			</div>
			<div className="h-[75dvh] w-full flex flex-col items-center justify-center bg-[#F4ECE9]">
				<form
					className="flex flex-col items-center justify-center w-full text"
					onSubmit={handleForm}
				>
					<input
						className="w-3/12 border-[1px] outline-none focus:border-[2px] border-black p-3 text-lg transition-all ease-in-out"
						placeholder="email"
						name="email"
						type="email"
					/>
					<input
						className="w-3/12 border-[1px] outline-none focus:border-[2px] border-black p-3 text-lg transition-all ease-in-out my-4"
						name="password"
						placeholder="password"
						type="password"
					/>
					<div className="flex flex-col w-full items-center justify-center">
						<Link
							to={"/forgot-password"}
							className="text-sm text-left text-gray-400 hover:text-black mt-2 transition-all ease-in-out"
						>
							Forgot password?
						</Link>
					</div>
					<button
						className="w-3/12  px-6 py-4 bg-[#766261] text-white text-lg transition-all tracking-wider hover:tracking-widest  mt-10  hover:bg-[#7d6a69] text-center font-bold"
						type="submit"
					>
						LOGIN
					</button>
				</form>
			</div>
			<Footer></Footer>
		</>
	);
};

export default Login;
