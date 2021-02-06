import React from "react";
import styled from "styled-components";
import colors from "../styles/colors";
import { DropFiles } from "../components";

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
      <div className="drop-container">
        <DropFiles />
      </div>
      <a
        className="product-hunt"
        href="https://www.producthunt.com/posts/disposable-url-dispurl?utm_source=badge-review&utm_medium=badge&utm_souce=badge-disposable-url-dispurl#discussion-body"
        target="_blank"
      >
        <img
          src="https://api.producthunt.com/widgets/embed-image/v1/review.svg?post_id=282919&theme=light"
          alt="Disposable URL (DISPURL) - One Time URL for File Transfer | Product Hunt"
          style={{ width: "250px", height: "54px" }}
          width="250"
          height="54"
        />
      </a>
    </section>
  );
};

export default styled(BodyContainer)`
  margin: auto;
  margin-top: 2rem;
  text-align: center;
  ${Message} {
    margin-bottom: 2rem;
  }
  .drop-container {
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .product-hunt {
  }
`;
