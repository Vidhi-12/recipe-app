import React from "react";
import { Link } from "react-router-dom";

export default function CreateRecipe(){

    return(
        <>
        <section className="main-container-create">
            <div className="container-create">
                <div className="form-div-create">
                    <h1>Create a Recipe</h1>

                    <div className="horizontal-line"></div>

                    <div className="heading">
                        <p>Share a recipe with the club by completing the</p>
                        <p>form below</p>
                        </div>

                    <div className="form-container-create">
                        <form>
                            <div className="form-fields">
                            <label for="title">Recipe Title </label><br/>
                            <input type="text"
                            className="input-text"
                            name="title"/>
                            </div>
                            
                            <div className="form-fields">
                            <label for="author">Author</label><br/>
                            <input type="text"
                            className="input-text"
                            name="author"/>
                            </div>
                            
                            <div className="form-fields">
                            <label for="imageLink">Please upload your image or paste url link</label><br/>
                            <input type="text"
                            className="input-text"
                            name="imageLink"/>
                            </div>

                            <p>A brief, one line description of the recipe</p>

                            <div className="form-fields">
                            <label for="ingredients">Ingredients</label><br/>
                            <input type="text" 
                            className="textarea-field"
                            name="ingredients"/>
                            </div>

                            <div className="form-fields">
                            <label for="descriptions">Recipe Decriptions</label><br/>
                            <input type="text"
                            className="textarea-field"
                            name="descriptions"/>
                            </div>

                            <div className="recipe">
                            <button type="submit" className="recipe-btn"> Create Recipe</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}