import React from 'react';

const Main = () => {
    return (
        <main>
            <div className="grid grid-cols-1 px-[6vh] mt-10 mb-16 md:grid-cols-2 lg:grid-cols-3 gap-16">
                <div className="relative shadow-lg rounded-3xl overflow-hidden shadow-lg shadow-[#FF5C8D]/50 ">
                    <a href="https://www.instagram.com/userrnamebxnk/" target="_blank">
                        <img src="/src/assets/bank.jpg" alt="random" className="object-cover object-center" />
                        <p className="absolute top-4 left-6 text-[#FF5C8D] text-xl font-semibold">Bank</p>
                    </a>
                </div>
                <div className="relative shadow-lg rounded-3xl overflow-hidden shadow-lg shadow-[#FF5C8D]/50 ">
                    <a href="https://www.instagram.com/amn_n04" target="_blank">
                        <img src="/src/assets/god.jpg" alt="random" className="object-cover object-center" />
                        <p className="absolute top-4 left-6 text-[#FF5C8D] text-xl font-semibold">God</p>
                    </a>
                </div>
                <div className="relative shadow-lg rounded-3xl overflow-hidden shadow-lg shadow-[#FF5C8D]/50 ">
                    <a href="https://www.instagram.com/jxegyy/" target="_blank">
                        <img src="/src/assets/joe.jpg" alt="random" className="object-cover object-center" />
                        <p className="absolute top-4 left-6 text-[#FF5C8D] text-xl font-semibold">Joe</p>
                    </a>
                </div>
                <div className="relative shadow-lg rounded-3xl overflow-hidden shadow-lg shadow-[#FF5C8D]/50 ">
                    <a href="https://www.instagram.com/mansithawut" target="_blank">
                        <img src="/src/assets/man.jpg" alt="random" className="object-cover object-center" />
                        <p className="absolute top-4 left-6 text-[#FF5C8D] text-xl font-semibold">Man</p>
                    </a>
                </div>
                <div className="relative shadow-lg rounded-3xl overflow-hidden shadow-lg shadow-[#FF5C8D]/50 ">
                    <a href="https://www.instagram.com/_47px/" target="_blank">
                        <img src="/src/assets/ploy.jpg" alt="random" className="object-cover object-center" />
                        <p className="absolute top-4 left-6 text-[#FF5C8D] text-xl font-semibold">Pimploy</p>
                    </a>
                </div>
                <div className="relative shadow-lg rounded-3xl overflow-hidden shadow-lg shadow-[#FF5C8D]/50 ">
                    <a href="https://www.instagram.com/sxaxh_luv" target="_blank">
                        <img src="/src/assets/smash.jpg" alt="random" className="object-cover object-center" />
                        <p className="absolute top-4 left-6 text-[#FF5C8D] text-xl font-semibold">Smash</p>
                    </a>
                </div>
            </div>
        </main>
    );
};

export default Main;