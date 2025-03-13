import React from "react";
import "./ContestBanner.css"
import { useSurvey } from "../../context/SurveyContext";

export function ContestBanner(){
    const { state } = useSurvey();

    if (state.showResults) return null;

    return (
        <div className="container-banner">
            <section>
                <h1>Congratulations!</h1>
                <p className="banner-text text-shadow">
                    The "Mysterious Sephora Box" contest has started. You have been selected to try new products from well-known brands. 
                    For only 65 MXN, you will receive a box full of products that will soon be available in Sephora stores. 
                    Limit: one box per customer.
                </p>
            </section>
            <img src="img/promoImage.jpg" alt="Sephora promo banner" />
            <section>
                <p className="banner-text padding-mobile">
                    To receive your Sephora Box, complete the form to confirm that you are a real person.
                </p>
                <p className="banner-text no-padding-top">
                    Hurry up, the number of prizes is limited!
                </p>
            </section>
      </div>
    );
}

