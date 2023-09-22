import { Motion } from "@motionone/solid";
import { Component, JSXElement, children, onCleanup } from "solid-js";
import { Portal, effect } from "solid-js/web";


const Modal: Component<{children: JSXElement}> = (props) => {
    document.getElementsByTagName("body")[0].style.overflow= "hidden"

    onCleanup(() => {
        document.getElementsByTagName("body")[0].style.overflow = "auto"
    })

    return (
        <Portal mount={document.getElementById("portal")!}>
            <div class="relative top-0 left-0 w-screen h-screen z-10">
                <div class="absolute w-full h-full backdrop-blur-sm"></div>
                <div class="absolute w-full h-full flex justify-center">
                    <Motion.div 
                        class=" w-full max-w-[900px] h-full p-10 z-20"
                        animate={{
                            opacity: [0, 1]
                        }}
                    >
                        <Motion.div 
                            class="w-full h-full bg-custom rounded-md shadow-lg shadow-black"
                            animate={{
                                scale: [0.5, 1]
                            }}
                            transition={{
                                duration: 0.1,
                            }}
                        >
                            {children(() => props.children)()}
                        </Motion.div>
                    </Motion.div>
               </div>
           </div>
        </Portal>
    )
}

export default Modal