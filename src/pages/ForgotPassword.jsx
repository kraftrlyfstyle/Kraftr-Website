import { useEffect, useState } from "react";

import * as db from "../db";
import TopBar from "../components/TopBar";
import Footer from "../components/Footer";

import { Link } from "react-router-dom";

const ForgotPassword = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

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
            <div className="flex flex-col w-full items-center justify-between border-b border-black py-7">
                <Link to={"/"} className="text-4xl tracking-widest font-bold">
                    KRAFTR
                </Link>
            </div>
            <div className="h-[75dvh] w-full flex flex-col items-center justify-center bg-[#F4ECE9]">
                <form
                    className="flex flex-col items-center justify-center w-full text"
                >
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
						className="w-3/12 border-[1px] border-black px-6 py-4 bg-[#766261] text-white text-lg transition-all tracking-wider hover:tracking-widest  mt-10  hover:bg-[#7d6a69] text-center font-bold"
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
