import React, { useState } from "react";
import {
  EmailContainerForm,
  ImageContainer,
  LandingContainer,
  LandingSection,
  ParagraphContainer,
  SubscribeContainer,
  SubscribeParentContainer,
  TextContainer,
} from "./components";

import signUpDesktop from "../../assets/sign-up-desktop.svg";
import iconList from "../../assets/icon-list.svg";

export const Landing = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  function onChangeGetEmail(e) {
    setEmail(e.target.value);
    console.log(email);
  }

  function onSubmitForm(e) {
    e.preventDefault();

    if (email === "") {
      setError("Please complete email field!");
    } else if (email.includes("@") === false || email.includes(".") === false) {
      setError(`Looks like your e-mail address is incomplete. Please check again!`);
    }
  }

  return (
    <LandingSection>
      <LandingContainer>
        <SubscribeContainer>
          <SubscribeParentContainer>
            <TextContainer>
              <h2>Stay updated!</h2>
              <span>Join 60.000+ product managers receiving monthly updates on:</span>
              <ParagraphContainer>
                <img src={iconList} alt="" />
                <p>Product discovery and bulding what matters</p>
              </ParagraphContainer>
              <ParagraphContainer>
                <img src={iconList} alt="" />
                <p>Measuring to ensure updates are a success</p>
              </ParagraphContainer>
              <ParagraphContainer>
                <img src={iconList} alt="" />
                <p>And much more!</p>
              </ParagraphContainer>
            </TextContainer>
            <EmailContainerForm onSubmit={onSubmitForm}>
              <label>Email Address</label>
              <input onChange={onChangeGetEmail} type="text" placeholder="" />
              <p style={{ color: "red", margin: "10px 0" }}>{error}</p>
              <button>Subscribe to monthly newsletter</button>
            </EmailContainerForm>
          </SubscribeParentContainer>
        </SubscribeContainer>
        <ImageContainer>
          <img src={signUpDesktop} alt="" />
        </ImageContainer>
      </LandingContainer>
    </LandingSection>
  );
};
