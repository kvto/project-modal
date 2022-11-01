//funcion tradicional
import React, {Suspense, lazy} from "react";
import {createRoot} from "react-dom/client";


export function openModal(){
const Modal = lazy(()=> import("./modalSettings"));
const modalDiv = document.createElement("div");
modalDiv.id="modal";
document.body.appendChild(modalDiv);

const root = createRoot(modalDiv);
root.render(
<Suspense fallback={<div>Loading...</div>}>
<Modal root={root} title="Modal de configuraciones" />    
</Suspense>
)
}

export function openModalAccount(){
    const Modal = lazy(()=> import("./modalAccount"));
    const modalDiv = document.createElement("div");
    modalDiv.id="modal";
    document.body.appendChild(modalDiv);
    
    const root = createRoot(modalDiv);
    root.render(
    <Suspense fallback={<div>Loading...</div>}>
    <Modal root={root} title="Modal de cuenta" />    
    </Suspense>
    )
    }