"use client";

import Image from "next/image";

export default function Main() {
    return (
        <div>
            {/* About */}
            <div className="line-Main"></div>
            <div className="flex gap-20 flex-col md:flex-col lg:flex-col xl:flex-row px-10" id="about">
                <div>
                    <Image src="/car+window+tinting+(2)-640w.jpg" className="rounded-image-Main-About" width={600} height={600} alt="WindowTint"></Image>
                </div>
                <div className="flex flex-col gap-20">
                    <h1 className="gradient-text text-3xl">ABOUT</h1>
                    <span className="text-[#fff] text-xl">The best quality and most reasonable prices in this shop.</span>
                </div>
            </div>
            {/* Percentage */}
            <div id="PERCENTAGE">
                <div className="line-Main"  ></div>
                <div className="flex flex-col justify-center items-center">                
                    <div className="flex flex-col gap-20">
                        <h1 className="gradient-text text-3xl">PERCENTAGE</h1>
                    </div>
                    <div className="p-3 justify-center border-1  w-[90%] sm:w-[40%] border-[#ffffff1a] flex gap-5 rounded-2xl mx-15 my-23 sm:m-23 txt-dis"> 
                        <div className="bg-[#000] h-20 text-[#eee] p-1">5%</div>
                        <div className="bg-[#000000a1] h-20 text-[#eee] p-1">15%</div>
                        <div className="bg-[#00000075] h-20 text-[#eee] p-1">20%</div>
                        <div className="bg-[#00000042] h-20 text-[#eee] p-1">25%</div>
                        <div className="bg-[#0000002c] h-20 text-[#eee] p-1">32%</div>
                    </div>
                </div>
            </div>
            {/* Price */}
            <div id="price">
                <div className="line-Main" ></div>
                <h1 className="gradient-text text-3xl text-center">PRICE</h1>
                <div className="flex items-center justify-center gap-5 flex-col sm:flex-row  my-20">
                    <article className="w-[80%] sm:w-[30%] gap-3 p-5 rounded-3xl flex flex-col justify-center items-center radial-article">
                        <div className="p-3 bg-[#eee1] rounded-[100%]">
                            <Image className="rounded-[100%]" src="/carImage/Saipa_111.jpg" width={200} height={200} alt="Saipa"></Image>
                        </div>
                        <div className="gradient-text">
                            Saipa 111
                        </div>
                        <div className="w-[30%] h-[1px] bg-[#8176AF]"></div>
                        <div className="text-[#8176AF] font-bold">850.000</div>
                    </article>
                    <article className="w-[80%] sm:w-[30%] gap-3 p-5 rounded-3xl flex flex-col justify-center items-center radial-article">
                        <div className="p-3 bg-[#eee1] rounded-[100%]">
                            <Image className="rounded-[100%]" src="/carImage/Peugeot_Pars_01_2024-05-07.jpg" width={200} height={200} alt="Peugeot"></Image>
                        </div>
                        <div className="gradient-text">
                            Peugeot 
                        </div>
                        <div className="w-[30%] h-[1px] bg-[#8176AF] "></div>
                        <div className="text-[#8176AF] font-bold">900.000</div>
                    </article>
                    <article className="w-[80%] sm:w-[30%] gap-3 p-5 rounded-3xl flex flex-col justify-center items-center radial-article">
                        <div className="p-3 my-5 bg-[#eee1] rounded-[50%]">
                            <Image className="rounded-[50%]" src="/carImage/2001-2003_Peugeot_206_(T1)_GTi_3-door_hatchback_01.jpg" width={200} height={200} alt="Saipa"></Image>
                        </div>
                        <div className="gradient-text">
                            Peugeot 206
                        </div>
                        <div className="w-[30%] h-[1px] bg-[#8176AF] "></div>
                        <div className="text-[#8176AF] font-bold">950.000</div>
                    </article>
                </div>
            </div>
        </div>
    )
}