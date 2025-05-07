// components/footer/NewsletterSignup.js
import styled from "styled-components";
import ButtonUi from "../../../ui/Button";

import { Input } from "../../../styles/StyledComponents";

const NewsletterWrapper = styled.div`
  min-width: 50%;
  background-color: rgb(17, 17, 17);
  padding: 3.2rem;
`;

const Title = styled.h3`
  font-size: 1.8rem;
  color: #fff;
  margin-bottom: 2rem;
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
`;

const Checkbox = styled.input`
  margin-right: 0.5rem;
`;

const CheckboxLabel = styled.label`
  font-size: 1.2rem;
  color: #999;
`;

function NewsletterSignup() {
  return (
    <NewsletterWrapper>
      <Title>Sign up Newsletter</Title>


      <Input type="email" placeholder="Enter Your Email" />



      <ButtonUi className="black-button" text="SUBMIT" />
      <CheckboxContainer>
        <Checkbox type="checkbox" id="terms" />
        <CheckboxLabel htmlFor="terms">
          I agree to all terms and policies
        </CheckboxLabel>
      </CheckboxContainer>
    </NewsletterWrapper>
  );
}

export default NewsletterSignup;
