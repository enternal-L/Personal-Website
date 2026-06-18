import React from 'react';
import { FiGithub } from 'react-icons/fi';
import { FaLinkedin } from 'react-icons/fa';
import { FaSquareLetterboxd } from "react-icons/fa6";
import NotesLink from '../components/NotesLink';
import bottomImage from '../assets/images/recursive_think.jpg';
import cheatsheetImg from '../assets/images/cheatsheet.png';

const About = () => {
  return (
    <div className="page-scroll">
      <article className="notes-document">
      <div className="notes-content">
        <p className="notes-date">June 14, 2026 at 10:32 PM</p>

        <h1 className="notes-title">Marvin Jirapongsuwan</h1>

        <p className="notes-body">
          interested in startups, systems, and media, trying to build products with taste
          and velocity. I also enjoy irony.
        </p>

        <p className="notes-body">
          <strong>Now</strong>
          <br />
          Interning at <NotesLink href="https://www.viam.com/">Viam</NotesLink> (series C)
          working on their core fleet app
        </p>

        <div className="notes-body">
          <strong>More</strong>
          <ul className="notes-list">
            <li>
              3 years in usa (lousiana, colorado, texas), 15 years in thailand, returned for
              college (michigan)
            </li>
            <li>poor spice tolerance</li>
            <li>mainly plays <NotesLink href="https://overwatch.blizzard.com/en-us/career/c857ad84b44bd6fcbfa327%7C36ea362bad9895a6bf329ea02c92b892/">overwatch</NotesLink></li>
            <li>16k karma on reddit, started with (shamefully) reposting memes</li>
            <li>affinity for non-racket sports ~ volleyball, basketball</li>
            <li>
              I&apos;ve built more than 20 plastic models ~ my{' '}
              <NotesLink href="">favourites</NotesLink>
            </li>
            <li>
              I love collecting reaction images for the right occasion ~ ones I used on my{' '}
              <NotesLink href={cheatsheetImg} rel={null}>
                exam cheatsheets
              </NotesLink>
            </li>
          </ul>
        </div>

        <div className="notes-footer">
          <div className="notes-footer-text">
            <div className="notes-body">
              <strong>Readings</strong>
              <ul className="notes-list">
                <li>
                  <NotesLink href="https://weebcentral.com/series/01J76XYGGM22WZP7T4TKA4ZFAF/Kagurabachi">Kagurabachi</NotesLink>
                </li>
                <li>
                  <NotesLink href="https://govleaders.org/completed-staff-work.php">How to be a better engineer</NotesLink>
                </li>
                <li>
                  <NotesLink href="">essay 2</NotesLink>
                </li>
              </ul>
            </div>

            <div className="notes-body notes-body-last">
              <div className="notes-contact-row">
                <strong>Find me at</strong>
                <div className="notes-contact">
                  <a
                    href="https://github.com/enternal-L"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="notes-contact-link"
                  >
                    <FiGithub size={22} />
                  </a>
                  ,
                  <a
                    href="https://linkedin.com/in/marvin-jirapongsuwan"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="notes-contact-link"
                  >
                    <FaLinkedin size={22} />
                  </a>,
                  <a
                    href="https://letterboxd.com/marvinJir/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Letterboxd"
                    className="notes-contact-link"
                  >
                    <FaSquareLetterboxd size={22} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="notes-image-slot">
            <img src={bottomImage} alt="" className="notes-image" />
          </div>
        </div>
      </div>
      </article>
    </div>
  );
};

export default About;
