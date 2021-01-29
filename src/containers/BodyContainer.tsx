import React from "react";
import styled from "styled-components";
import colors from "../styles/colors";

type BodyContainerProps = {
  className?: string;
};

const Message = styled.h2`
  color: white;
  text-align: center;
  .accent {
    color: ${colors.primary};
  }
`;

const BodyContainer: React.FC<BodyContainerProps> = ({ className }) => {
  return (
    <section className={className}>
      <Message>
        Share your files with a URL, but with more
        <span className="accent"> security.</span>
      </Message>
    </section>
  );
};

export default styled(BodyContainer)`
  margin: auto;
  margin-top: 6rem;
`;
