import tw from "tailwind-styled-components"
import { useState, useEffect } from "react";
import YouTube from 'react-youtube';

// Icons

// Utils
import peso from "../../assets/icons/peso.svg"
import repeats from "../../assets/icons/repeats.svg"
import series from "../../assets/icons/series.svg"
import list from "../../assets/icons/list.svg"
import exec from "../../assets/icons/exec.svg"

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
        },
        {
            week: 1,
            days: "MT",
            title: "Barra Astraliana",
            series: 3,
            repeats: 9,
            peso: 0,
            videoId: "E0MaMqVPSbY"
        },
        {
            week: 1,
            days: "MT",
            title: "Prancha",
            series: 3,
            repeats: 15,
            peso: 0,
            videoId: "hGHZrm3tN2M"
        },
        {
            week: 1,
            days: "MT",
            title: "Elevação Infra",
            series: 3,
            repeats: 5,
            peso: 0,
            videoId: "XyKszHhd2Fw"
        },
        {
            week: 1,
            days: "TF",
            title: "Knee Push Ups",
            series: 3,
            repeats: 5,
            peso: 0,
            videoId: "Ie_oMezvvCo"
        },
        {
            week: 1,
            days: "TF",
            title: "Bench dips",
            series: 3,
            repeats: 7,
            peso: 0,
            videoId: "XXvuYGCxpkk"
        },
        {
            week: 1,
            days: "TF",
            title: "Bulgarian Squat",
            series: 3,
            repeats: 9,
            peso: 0,
            videoId: "r3jzvjt-0l8"
        },
        {
            week: 1,
            days: "TF",
            title: "Hip Thruster",
            series: 3,
            repeats: 15,
            peso: 0,
            videoId: "FJNPGhF1R-Y"
        },
    ]


    const [listMode, setListMode] = useState(true)
    const [IconMode, setIconMode] = useState(exec)
    function handleMode() {
        setIconMode(IconMode === list ? exec : list)
        setListMode(!listMode)
    }

    const [modal, setModal] = useState(false)
    const [videoId, setVideoId] = useState("")
    function handleClick(videoIdFlag: string) {
        videoId.length === 0 ? setModal(!modal) : ""
        setVideoId(videoIdFlag)
    }


    const [count, setCount] = useState(0)
    const [serie, setSerie] = useState(1)
    const [isStart, setIsStart] = useState(false)
    const execTitle = data.map(el => {
        if (el.days === "MT") {
            return el
        }
    })
    function startExec() {
        setIsStart(!isStart)
        handleClick(execTitle[count]?.videoId || "")
    }
    function handleExec() {
        if (serie < 3) {
            setSerie(serie + 1)
            handleClick(execTitle[count]?.videoId || "")
        } else {
            setCount(count + 1)
            handleClick(execTitle[count + 1]?.videoId || "")
            setSerie(1)
        }
        if (count === 3 && serie === 3) {
            setIsStart(false)
            setCount(0)
            setSerie(1)
            setModal(!modal)
        }
    }


    return (
        <Wrapper>
            <section className="flex justify-between items-center mb-[32px]">
                <p className="py-[8px] px-[16] text-white text-[20px] bg-orange1 w-[100px] text-center rounded-md">Week 1</p>
                <img src={IconMode} onClick={handleMode} />
            </section>
            {
                listMode ?
                    <section>
                        <ul className="pb-[20px]">
                            <li className="flex gap-[8px] pb-[16px]">
                                <p className="bg-orange1 text-white rounded-full w-[24px] h-[24px] text-center">1</p>
                                <p className="text-[16px] text-orange1">Monday and Thusday</p>
                            </li>
                            {
                                data.map(el => {
                                    if (el.days === "MT") {
                                        return (
                                            <li className="flex justify-between items-center pb-[10px]" onClick={() => handleClick(el.videoId)}>
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
                                    }
                                })
                            }
                        </ul>
                        <ul className="pb-[40px]">
                            <li className="flex gap-[8px] pb-[12px]">
                                <p className="bg-orange1 text-white rounded-full w-[24px] h-[24px] text-center">2</p>
                                <p className="text-[16px] text-orange1">Tuesday and Friday</p>
                            </li>
                            {
                                data.map(el => {
                                    if (el.days === "TF") {
                                        return (
                                            <li className="flex justify-between items-center pb-[10px]" onClick={() => handleClick(el.videoId)}>
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
                                    }
                                })
                            }
                        </ul>
                    </section> :
                    <section className="mb-[32px]">
                        <ul className="pb-[20px]">
                            <li className="pb-[16px] text-[18px] text-orange1">Today</li>
                            {
                                data.map(el => {
                                    if (el.days === "MT") {
                                        return (
                                            <li className="flex justify-between items-center pb-[10px]" onClick={() => handleClick(el.videoId)}>
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
                                    }
                                })
                            }
                        </ul>
                        {
                            isStart ?
                                <div>
                                    <p className="text-white text-[20px] text-center ">{execTitle[count]?.title}</p>
                                    <p className="text-orange1 text-[20px] text-center mb-[16px]">Série {serie}</p>
                                    <button style={{ margin: "0 auto" }}
                                        onClick={handleExec}
                                        className="bg-orange1 flex justify-center items-center w-[200px] h-[60px] text-white font-medium rounded-lg">Next</button>
                                </div> :
                                <button style={{ margin: "0 auto" }}
                                    onClick={startExec}
                                    className="bg-orange1 flex justify-center items-center w-[200px] h-[60px] text-white font-medium rounded-lg">Start</button>
                        }

                    </section>
            }
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
    h-min-screen
    h-full
    bg-black1
    p-[16px]
`

export default Home;
