import { Motion, Presence } from "@motionone/solid";
import { Component, JSXElement, Show, children, createEffect, onCleanup } from "solid-js";
import { Portal, effect } from "solid-js/web";


const Modal: Component<{children: JSXElement, isOpen: boolean}> = (props) => {
    createEffect(()=>{
        document.getElementsByTagName("body")[0]
            .style.overflow = props.isOpen?"hidden":"auto"
    })

    return (
        <Portal mount={document.getElementById("portal")!}>
            <Presence exitBeforeEnter>
                <Show when={props.isOpen}>
                    <Motion.div class="relative top-0 left-0 w-screen h-screen z-10"
                        initial={{ opacity: 0, transform: "translateY(150px)" }}
                        animate={{ opacity: 1,  transform: "translateY(0px)" }}
                        exit={{ opacity: 0, transform: "translateY(150px)" }}
                        transition={{ duration: 0.16, easing: "ease" }}                        
                    >
                        <div class="absolute w-full h-full flex justify-center">
                            <div class=" w-full max-w-[900px] h-full p-10 z-20">
                                <Motion.div 
                                    class="w-full h-full bg-custom rounded-md shadow-lg shadow-black"
                                >
                                    {children(() => props.children)()}
                                </Motion.div>
                            </div>
                        </div>
                    </Motion.div>
                </Show>
            </Presence>
        </Portal>
    )
}

export default Modal