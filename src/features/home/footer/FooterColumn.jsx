// components/footer/FooterColumn.js
import styled from "styled-components";

const ColumnWrapper = styled.div`
  min-width: 20%;
`;

const Title = styled.h3`
  font-size: 1.8rem;
  color: #fff;
  margin-bottom: 2rem;
`;

const LinksList = styled.ul`
  list-style: none;
  padding: 0;
`;

const LinkText = styled.a`
  color: #999;
  display: block;
  margin-bottom: 2.4rem;
  transition: 0.4s;

  &:hover {
    color: #e0a872;
  }
`;

function FooterColumn({ title, links }) {
  return (
    <ColumnWrapper>
      <Title>{title}</Title>
      <LinksList>
        {links.map((text) => (
          <li key={text}>
            <LinkText href="#">{text}</LinkText>
          </li>
        ))}
      </LinksList>
    </ColumnWrapper>
  );
}

export default FooterColumn;
