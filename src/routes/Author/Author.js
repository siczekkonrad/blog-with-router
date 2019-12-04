import React from 'react';
import TextSection from '../../components/Text-Section/Text-Section.component';
import { StyledContactDataList } from './Author.style';

const CONTACT_DATA = {
  title: 'O autorze',
  author: 'Konrad Siczek',
  position: 'Frontend Developer',
  links: [
    {
      url: 'https://www.linkedin.com/in/konradsiczek/',
      linkText: 'LinkedIn'
    },
    {
      url: 'https://github.com/siczekkonrad/',
      linkText: 'Github'
    },
    {
      url: 'https://twitter.com/blacqraven',
      linkText: 'Twitter'
    }
  ]
};

const displayLinks = (linksArray) => {
  return (
    linksArray.map((item, index) => (
      <li key={index}>
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.linkText}
        </a>
      </li>
    ))
  )
}
const Author = () => {
  const { title, author, position, links } = CONTACT_DATA;
  return (
    <div>
      <h1>{title}</h1>
      <h2>{author}</h2>
      <TextSection>
        <span>{position}</span>
      </TextSection>
      <StyledContactDataList>
        {displayLinks(links)}
      </StyledContactDataList>
    </div>
  )
};

export default Author