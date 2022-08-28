import React from "react";
import image from "../header-image.jpg";

export default function Home(){
    return (
        <main>
            <img src={image} alt="Empty Lake" className="absolute object-cover w-full h-[90vh]"/>
            <section className="relative flex justify-center pt-12 lg:pt-64 px-8">
                <h1 className="text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name">Hello. I'm Emanuel.</h1>
            </section>
        </main>
    )
}