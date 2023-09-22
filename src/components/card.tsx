import { Component, JSXElement, Show, children, createSignal } from "solid-js";
import code from '../assets/game.gif'
import Modal from "./modal";


const Card: Component<{background: string, children: JSXElement}> = (props) => {
    const [showInfo, setShowInfo] = createSignal(false);

    return (
        <>
            <button onClick={() => setShowInfo(!showInfo())}
                class="w-[280px] h-[200px] relative m-2 rounded-sm border-2 border-amber-100 cursor-pointer pop">
                <img src={props.background} class=" h-full w-full object-cover"></img>
            </button>
            <Show when={showInfo()}>
                <Modal>
                    <div class="w-full h-full relative">
                        <button onClick={() => setShowInfo(false)}
                            class="absolute top-0 right-3 text-white opacity-30"
                        >x</button>
                        <div class="flex flex-col w-full h-full items-center pt-4 p-2 overflow-auto">
                            {children(() => props.children)()}
                        </div>
                    </div>
                </Modal>
            </Show>
        </>
    )
}

export default Card