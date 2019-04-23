import React from 'react';
import TextSection from '../../components/Text-Section/Text-Section.component';
import { StyledContactDataList } from './Author.style';

const Author = () => (
  <div>
    <h1>O autorze</h1>
    <TextSection>
      <h2>Konrad Siczek</h2>
      <span>Frontend Developer</span>
      <StyledContactDataList>
        <li>
          <a
            href="https://www.linkedin.com/in/konradsiczek/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://github.com/siczekkonrad/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/blacqraven"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </li>
      </StyledContactDataList>
    </TextSection>
  </div>
);

export default Author