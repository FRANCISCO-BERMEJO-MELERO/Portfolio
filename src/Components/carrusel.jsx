

"use client";

import { Carousel } from "flowbite-react";
import CardModal from './card-modal';


export function Component() {
  return (
    <div className="w-[50%] z-0">
      <Carousel slide={false} >
        
          <CardModal titulo='App Luna' texto='' explicacion='' img='' ></CardModal>
          <CardModal titulo='App Luna' texto='' explicacion='' img='' ></CardModal>
          <CardModal titulo='App Luna' texto='' explicacion='' img='' ></CardModal>
      </Carousel>
    </div>
  );
}
