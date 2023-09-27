import { Component, JSXElement, Show, children, createSignal } from "solid-js";
import code from '../assets/game.gif'
import Modal from "./modal";
import { Motion, Presence } from "@motionone/solid";


const Card: Component<{
    background: string, 
    title: string,
    text: string,
}> = (props) => {
    const [showInfo, setShowInfo] = createSignal(false);

    return (
        <>
            <button onClick={() => setShowInfo(!showInfo())}
                class="w-[280px] h-[200px] relative m-2 rounded-sm border-2 border-amber-100 cursor-pointer pop group"
            >
                <div class="w-full h-full relative ">
                    <img src={props.background} class="h-full w-full object-cover"></img>
                    <div class="absolute top-0 left-0 w-full h-full flex justify-center items-center transition-all bg-[#0000008a] opacity-0 group-hover:opacity-100">
                        <svg class="h-[80px] " viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#BBB599"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.0007 12C15.0007 13.6569 13.6576 15 12.0007 15C10.3439 15 9.00073 13.6569 9.00073 12C9.00073 10.3431 10.3439 9 12.0007 9C13.6576 9 15.0007 10.3431 15.0007 12Z" stroke="#BBB599" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12.0012 5C7.52354 5 3.73326 7.94288 2.45898 12C3.73324 16.0571 7.52354 19 12.0012 19C16.4788 19 20.2691 16.0571 21.5434 12C20.2691 7.94291 16.4788 5 12.0012 5Z" stroke="#BBB599" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                    </div>
                </div>
            </button>

            <Modal isOpen={showInfo()}>
                <div class="w-full h-full relative">
                    <button onClick={() => setShowInfo(false)}
                        class="absolute top-0 right-3 text-white opacity-80 text-3xl "
                    >x</button>
                    <div class="flex flex-col w-full h-full items-center pt-4 p-2 overflow-auto">
                        <h2 class='font-bold text-white text-2xl'>{props.title}</h2>
                        
                            <img src={props.background} width={"800px"} class='my-4 object-cover'></img>
                        <div class='text-white mx-4'>
                            <p class='opacity-70 mb-2'>{props.text}</p>
                        </div>
                    </div>
                </div>
            </Modal>

        </>
    )
}

export default Card