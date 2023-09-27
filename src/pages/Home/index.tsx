import tw from "tailwind-styled-components"
import { useState, useEffect } from "react";
import YouTube from 'react-youtube';

// Icons

// Utils
import peso from "../../assets/icons/peso.svg"
import repeats from "../../assets/icons/repeats.svg"
import series from "../../assets/icons/series.svg"

// Components

// Structure
function Home() {
    const data = [
        {
            week: 1,
            days: "MT",
            title: "Barra Negativa",
            series: 3,
            repeats: 5,
            peso: 0,
            videoId: "y1QYw2EN0_k"
        }
    ]

    const [modal, setModal] = useState(false)
    const [videoId, setVideoId] = useState("")
    function handleClick(videoId: string) {
        setModal(!modal)
        setVideoId(videoId)
    }


    return (
        <Wrapper>
            <p className="py-[8px] px-[16] text-white text-[20px] bg-orange1 w-[100px] text-center rounded-md mb-[16px]">Week 1</p>
            <ul className="pb-[20px]">
                {
                    data.map(el => {
                        return (
                            <li className="flex justify-between items-center" onClick={() => handleClick(el.videoId)}>
                                <h2 className="text-white">{el.title}</h2>
                                <section className="flex gap-[22px]">
                                    <div className="flex gap-[8px]">
                                        <img src={series} />
                                        <p className="text-white">{el.series}</p>
                                    </div>
                                    <div className="flex gap-[8px]">
                                        <img src={repeats} />
                                        <p className="text-white">{el.repeats}</p>
                                    </div>
                                    <div className="flex gap-[8px]">
                                        <img src={peso} />
                                        <p className="text-white">{el.peso}</p>
                                    </div>
                                </section>
                            </li>
                        )
                    })
                }
            </ul>
            {
                modal ?
                    <div>
                        <YouTube videoId={videoId} opts={{ height: '200', width: '100%' }} />
                    </div> : ""
            }
        </Wrapper >
    )
}

// Styles
const Wrapper = tw.section`  
    flex
    flex-col 
    flex-grow
    h-screen
    bg-black1
    p-[16px]
`

export default Home;
