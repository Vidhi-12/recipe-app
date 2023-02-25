import React from "react";
import Card from "../components/Card";
import CreateRecipeBtn from "../components/CreateRecipeBtn";
import Nav from "../components/Nav";
import Search from "../components/Search";

export default function Landing(){

    return(
        <>
            <section className="main-container-landing">
                <div className="container-landing">
                    <Nav/>
                    <div className="main-landing">
                        <Search/>
                        <CreateRecipeBtn/>
                    </div>
                    <div>
                        <Card />
                    </div>
                </div>
            </section>
        </>
    )
}