import React from "react";
import {
  EmailContainer,
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
            <EmailContainer>
              <label>Email Address</label>
              <input type="email" placeholder="" />
              <button>Subscribe to monthly newsletter</button>
            </EmailContainer>
          </SubscribeParentContainer>
        </SubscribeContainer>
        <ImageContainer>
          <img src={signUpDesktop} alt="" />
        </ImageContainer>
      </LandingContainer>
    </LandingSection>
  );
};
