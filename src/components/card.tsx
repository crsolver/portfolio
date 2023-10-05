import { Component, For, JSXElement, Show, children, createSignal } from "solid-js";
import Modal from "./modal";
import { Slider, SliderButton, SliderProvider, createSlider } from "solid-slider";
import "solid-slider/slider.css";


const Card: Component<{
    images: [string, ...string[]], 
    title: string,
    tags?: string[],
    children: JSXElement
}> = (props) => {
    const [showInfo, setShowInfo] = createSignal(false);

    return (
        <>
            <button onClick={() => setShowInfo(!showInfo())}
                class="w-[280px] h-[200px] relative m-2 rounded-sm border-2 border-amber-100 cursor-pointer pop group"
            >
                <div class="w-full h-full relative ">
                    <img src={props.images[0]} class="h-full w-full object-cover"></img>
                    <div class="absolute top-0 left-0 w-full h-full flex justify-center items-center transition-all bg-[#0000008a] opacity-0 group-hover:opacity-100">
                        <svg class="h-[80px] " viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#BBB599"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.0007 12C15.0007 13.6569 13.6576 15 12.0007 15C10.3439 15 9.00073 13.6569 9.00073 12C9.00073 10.3431 10.3439 9 12.0007 9C13.6576 9 15.0007 10.3431 15.0007 12Z" stroke="#BBB599" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12.0012 5C7.52354 5 3.73326 7.94288 2.45898 12C3.73324 16.0571 7.52354 19 12.0012 19C16.4788 19 20.2691 16.0571 21.5434 12C20.2691 7.94291 16.4788 5 12.0012 5Z" stroke="#BBB599" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                    </div>
                </div>
            </button>

            <Modal isOpen={showInfo()}>
                <div class="w-full h-full relative">
                    <div class="flex flex-col w-full h-full">
                        <div class="w-full p-2">
                            <h2 class='font-bold text-center text-white text-2xl mb-2'>{props.title}</h2>
                            <button onClick={() => setShowInfo(false)}
                                class="absolute top-0 right-3 text-white opacity-80 text-3xl "
                            >x</button>
                        </div>
                        <div class="flex flex-col w-full h-full items-center overflow-auto">
                            <div class="w-full relative h-fit">
                                <SliderProvider>
                                    <Slider options={{loop: true}}>
                                        <For each={props.images}>
                                            {(img, _) => <img src={img} width={"800px"} class='object-cover'></img>}
                                        </For>
                                    </Slider>
                                    <Show when={props.images.length>1}>
                                            <div class="absolute top-0 left-0 h-full w-40 text-2xl font-bold text-white flex justify-center items-center"><div>{"<"}</div></div>
                                            <div class="absolute top-0 right-0 h-full w-40 text-2xl font-bold text-white flex justify-center items-center"><div>{">"}</div></div>
                                            <SliderButton class="absolute top-0 left-0 h-full w-40 text-2xl font-bold transition-all duration-200 text-white bg-gradient-to-r to-transparent from-[#212630] opacity-0 hover:opacity-100" prev>{"<"}</SliderButton>
                                            <SliderButton class="absolute top-0 right-0 h-full w-40 text-2xl font-bold transition-all duration-200 text-white bg-gradient-to-r from-transparent to-[#212630] opacity-0 hover:opacity-100" next>{">"}</SliderButton>
                                    </Show>
                                </SliderProvider>
                            </div>
                            { props.tags && (
                                <div class="flex w-full justify-start gap-2 p-2">
                                    <For each={props.tags}>
                                        {(tag, i) => <div class=' font-bold rounded-md text-sm min-w-[90px] p-1 bg-amber-100 text-black flex items-center justify-center'>{tag}</div>}
                                    </For>
                                </div>
                            )}
                            <div class='text-white mx-4'>
                                {children(() => props.children)()}
                            </div>
                        </div>
                    </div>
                    
                </div>
            </Modal>

        </>
    )
}

export default Card