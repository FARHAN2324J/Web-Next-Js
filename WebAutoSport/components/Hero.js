"use client";
import  { useState } from 'react';
import Image from "next/image";

export default function Hero() {

    
    return (
        <>
            <div className="flex justify-between  flex-col md:flex-col lg:flex-col xl:flex-row  gap-5 px-10 py-5 mt-25 items-center">
            <div className="bg-[#0000003d] sm:w-[25%] w-[100%] md:w-[45%]  lg:w-[35%] xl:w-[25%]  p-2 rounded-Image-Hero">
                    <Image src="/original.jpg" className="m-auto rounded-Image-Hero" width={600} height={600} alt="WindowCar"></Image>
                </div>
                <div className="text-md text-[#fff] Window-Style-Hero">
                    <span className="gradient-text sm:text-3xl text-lg">Beauty</span> And <span className="gradient-text sm:text-3xl text-lg">A Layer To Protect Against The Sun</span> Rays With Window Tint
                </div>
                
            </div>
            <div className="flex w-[90%]  gap-5 flex-col md:flex-col lg:flex-row xl:flex-row  my-20 m-auto justify-between p-8 bg-Hero-Dis">
                <div className="flex items-center gap-2">
                    <div>
                        <svg width="50" height="50" viewBox="0 0 42 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M21 0.833344C32.2758 0.833344 41.4166 9.9742 41.4166 21.25C41.4166 24.6593 40.5834 27.8717 39.1039 30.6983L21 62.0833L3.31538 31.4595C1.57498 28.4542 0.583313 24.9693 0.583313 21.25C0.583313 9.9742 9.72416 0.833344 21 0.833344ZM21 6.66668C12.9458 6.66668 6.41665 13.1959 6.41665 21.25C6.41665 23.566 6.95093 25.7882 7.96198 27.7943L8.45197 28.6893L21 50.4167L33.6366 28.5362C34.9071 26.3423 35.5833 23.8555 35.5833 21.25C35.5833 13.1959 29.0541 6.66668 21 6.66668ZM21 12.5C25.8325 12.5 29.75 16.4175 29.75 21.25C29.75 26.0825 25.8325 30 21 30C16.1675 30 12.25 26.0825 12.25 21.25C12.25 16.4175 16.1675 12.5 21 12.5ZM21 18.3333C19.3891 18.3333 18.0833 19.6392 18.0833 21.25C18.0833 22.8608 19.3891 24.1667 21 24.1667C22.6108 24.1667 23.9166 22.8608 23.9166 21.25C23.9166 19.6392 22.6108 18.3333 21 18.3333Z" fill="#C0B7E8"/>
                        </svg>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[#fff] text-xl">Location</span>
                        <span className="text-[#8f8f92]">Iran, Khorasan Razavi, Khaf, Street Vahdat 5</span>
                    </div>
                </div>
                <div className="w-[1px]  bg-[#C0B7E8]"></div>
                <div className="flex items-center gap-2">
                    <div>
                    <svg width="50" height="50" viewBox="0 0 59 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M35.6458 15.9792C37.458 16.3327 39.2569 17.1319 40.5625 18.4375C41.8681 19.7431 42.6673 21.542 43.0208 23.3542M36.875 7.375C40.64 7.79326 44.028 9.61471 46.7083 12.2917C49.3887 14.9686 51.202 18.3605 51.625 22.125M51.6237 40.5051V47.1666C51.634 49.7131 49.3443 51.8395 46.7734 51.6077C24.5835 51.625 7.37515 34.2568 7.39252 12.2159C7.16097 9.65866 9.27686 7.37761 11.8201 7.37522H18.4948C19.5746 7.36461 20.6214 7.74621 21.4401 8.4489C23.7676 10.4467 25.2648 17.2274 24.6887 19.923C24.239 22.0276 22.1175 23.4999 20.6752 24.9394C23.8425 30.4985 28.4545 35.1014 34.0247 38.2624C35.467 36.823 36.9423 34.7057 39.051 34.2568C41.7561 33.6811 48.5805 35.1803 50.5702 37.5241C51.2758 38.3552 51.6507 39.4161 51.6237 40.5051Z" stroke="#C0B7E8" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[#fff] text-xl">Call</span>
                        <span className="text-[#8f8f92]">+98 915 832 3044</span>
                    </div>
                </div>
                <div className="w-[1px]  bg-[#C0B7E8]"></div>
                <div className="flex items-center gap-2">
                    <div>
                        <svg width="50" height="50" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.91825 14.3349C9.40836 13.8448 10.0854 13.5417 10.8333 13.5417H54.1667C54.9146 13.5417 55.5916 13.8448 56.0817 14.3349M8.91825 14.3349C8.42814 14.825 8.125 15.5021 8.125 16.25V48.75C8.125 50.2458 9.33756 51.4583 10.8333 51.4583H54.1667C55.6624 51.4583 56.875 50.2458 56.875 48.75V16.25C56.875 15.5021 56.5719 14.825 56.0817 14.3349M8.91825 14.3349L28.6698 34.0864C30.7852 36.2017 34.2148 36.2017 36.3302 34.0864L56.0817 14.3349" stroke="#C0B7E8" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[#fff] text-xl">Email</span>
                        <span className="text-[#8f8f92]">farhanfadayi@gamil.com</span>
                    </div>
                </div>
            </div>
             
        </>
    )
}

















// "use client";
// import { useState } from 'react';
// import Image from "next/image";


// export default function Hero() {
//     const Items = [{
//         dis: [{
//             Id1: 'Location',
//             Id2: 'Call',
//             Id3: 'Email',
//         }],

//         location: 'Iran, Khorasan Razavi, Khaf, Street Vahdat 5', 
//         svgS : [{
//             svg1: '<svg width="50" height="50" viewBox="0 0 42 63" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M21 0.833344C32.2758 0.833344 41.4166 9.9742 41.4166 21.25C41.4166 24.6593 40.5834 27.8717 39.1039 30.6983L21 62.0833L3.31538 31.4595C1.57498 28.4542 0.583313 24.9693 0.583313 21.25C0.583313 9.9742 9.72416 0.833344 21 0.833344ZM21 6.66668C12.9458 6.66668 6.41665 13.1959 6.41665 21.25C6.41665 23.566 6.95093 25.7882 7.96198 27.7943L8.45197 28.6893L21 50.4167L33.6366 28.5362C34.9071 26.3423 35.5833 23.8555 35.5833 21.25C35.5833 13.1959 29.0541 6.66668 21 6.66668ZM21 12.5C25.8325 12.5 29.75 16.4175 29.75 21.25C29.75 26.0825 25.8325 30 21 30C16.1675 30 12.25 26.0825 12.25 21.25C12.25 16.4175 16.1675 12.5 21 12.5ZM21 18.3333C19.3891 18.3333 18.0833 19.6392 18.0833 21.25C18.0833 22.8608 19.3891 24.1667 21 24.1667C22.6108 24.1667 23.9166 22.8608 23.9166 21.25C23.9166 19.6392 22.6108 18.3333 21 18.3333Z" fill="#C0B7E8"/></svg>',
//             svg2: '<svg width="50" height="50" viewBox="0 0 59 59" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M35.6458 15.9792C37.458 16.3327 39.2569 17.1319 40.5625 18.4375C41.8681 19.7431 42.6673 21.542 43.0208 23.3542M36.875 7.375C40.64 7.79326 44.028 9.61471 46.7083 12.2917C49.3887 14.9686 51.202 18.3605 51.625 22.125M51.6237 40.5051V47.1666C51.634 49.7131 49.3443 51.8395 46.7734 51.6077C24.5835 51.625 7.37515 34.2568 7.39252 12.2159C7.16097 9.65866 9.27686 7.37761 11.8201 7.37522H18.4948C19.5746 7.36461 20.6214 7.74621 21.4401 8.4489C23.7676 10.4467 25.2648 17.2274 24.6887 19.923C24.239 22.0276 22.1175 23.4999 20.6752 24.9394C23.8425 30.4985 28.4545 35.1014 34.0247 38.2624C35.467 36.823 36.9423 34.7057 39.051 34.2568C41.7561 33.6811 48.5805 35.1803 50.5702 37.5241C51.2758 38.3552 51.6507 39.4161 51.6237 40.5051Z" stroke="#C0B7E8" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
//             svg3: '<svg width="50" height="50" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.91825 14.3349C9.40836 13.8448 10.0854 13.5417 10.8333 13.5417H54.1667C54.9146 13.5417 55.5916 13.8448 56.0817 14.3349M8.91825 14.3349C8.42814 14.825 8.125 15.5021 8.125 16.25V48.75C8.125 50.2458 9.33756 51.4583 10.8333 51.4583H54.1667C55.6624 51.4583 56.875 50.2458 56.875 48.75V16.25C56.875 15.5021 56.5719 14.825 56.0817 14.3349M8.91825 14.3349L28.6698 34.0864C30.7852 36.2017 34.2148 36.2017 36.3302 34.0864L56.0817 14.3349" stroke="#C0B7E8" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
//         }]
// }];



//     const [currentIndex, setCurrentIndex] = useState(0);
//     const [animation, setAnimation] = useState('');

//     const nextLocation = () => {
//         setAnimation('slide-out-left');
//         setTimeout(() => {
//             setCurrentIndex((prevIndex) => (prevIndex + 1) % Items.length);
//             setAnimation('slide-in-right');
//         }, 500);
//     };

//     const prevLocation = () => {
//         setAnimation('slide-out-right');
//         setTimeout(() => {
//             setCurrentIndex((prevIndex) => (prevIndex - 1 + Items.length) % Items.length);
//             setAnimation('slide-in-left');
//         }, 500);
//     };

//     return (
//         <>
//             <div className="flex justify-between flex-col md:flex-col lg:flex-col xl:flex-row gap-5 px-10 py-5 items-center">
//                 <div className="bg-[#0000003d] sm:w-[25%] w-[100%] md:w-[45%] lg:w-[35%] xl:w-[25%] p-2 rounded-Image-Hero">
//                     <Image src="/original.jpg" className="m-auto rounded-Image-Hero" width={600} height={600} alt="WindowCar"></Image>
//                 </div>
//                 <div className="text-xl text-[#fff] Window-Style-Hero">
//                     <span className="gradient-text sm:text-3xl text-lg">Beauty</span> And <span className="gradient-text sm:text-3xl text-lg">A Layer To Protect Against The Sun</span> Rays With Window Tint
//                 </div>
//             </div>
//             <div className="flex w-[90%] my-20 m-auto justify-between p-8 bg-Hero-Dis">
//                 <button onClick={prevLocation} className="p-2 text-[#fff] text-xl">
//                     &lt;
//                 </button>
//                 <div className={`flex items-center gap-2 transition-all duration-500 transform ${animation}`} key={currentIndex} onAnimationEnd={() => setAnimation('')}>
//                     <div>
                        
//                     </div>
//                     <div className="flex flex-col">
//                         <span className="text-[#fff] text-xl">Location</span>
//                         <span className="text-[#8f8f92]">{Items[currentIndex]}</span>
//                     </div>
//                 </div>
//                 <button onClick={nextLocation} className="p-2 text-[#fff] text-xl">
//                     &gt;
//                 </button>
//             </div>
//         </>
//     );
    

// }