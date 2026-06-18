import React, { useEffect, useRef, useState } from 'react';
import { FaRegFile } from 'react-icons/fa6';
import ExperienceLink from '../components/ExperienceLink';
import viamLogo from '../assets/companies/viam.svg';
import nutanixLogo from '../assets/companies/nutanix.png';
import umichLogo from '../assets/companies/umich_logo.png';
import umdbiLogo from '../assets/companies/umdbi.png';
import jocLogo from '../assets/companies/joc_logo.png';

const LOGO_SLOT_SIZE = 60;

const experienceContent = {
  sections: [
    {
      label: 'outside michigan',
      expandedLabel: 'outside michigan, ann arbor',
      roles: [
        {
          company: 'Viam',
          role: 'Software Engineer Intern',
          dates: 'Summer 2026',
          link: 'https://www.viam.com/',
          summary: 'Worked on core fleet app',
          logo: viamLogo,
          logoSize: 60,
          logoAdaptive: true,
          expanded: {
            company: 'Viam',
            role: 'Software Engineer Intern',
            dates: 'May - Aug 2026',
            link: 'https://www.viam.com/',
            location: 'New York, NY',
            paragraph: (
              <>
                Added deprecation feature for garbage collection and redesigned liveness pubsub
                system for over 1000 robots
              </>
            ),
          },
        },
        {
          company: 'Nutanix',
          role: 'Member of Technical Staff (Intern)',
          dates: 'Summer 2025',
          link: 'https://www.nutanix.com/',
          summary: 'Implemented async I/O into core file server',
          logo: nutanixLogo,
          logoSize: 60,
          expanded: {
            company: 'Nutanix',
            role: 'Member of Technical Staff (Intern)',
            dates: 'May - Aug 2025',
            link: 'https://www.nutanix.com/',
            location: 'San Jose, CA',
            paragraph: (
              <>
                Implemented async I/O into core{' '}
                <a
                  href="https://github.com/nfs-ganesha/nfs-ganesha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="experience-inline-link"
                >
                  Ganesha NFS
                </a>{' '}
                file server using <a
                  href="https://man7.org/linux/man-pages/man7/io_uring.7.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="experience-inline-link"
                >
                  io_uring
                </a>{' '}
                
                to reduce
                context switching latency & thread pooling issues
              </>
            ),
          },
        },
      ],
    },
    {
      label: 'inside michigan',
      expandedLabel: 'inside michigan, ann arbor',
      roles: [
        {
          company: 'NERS',
          role: 'Software Developer',
          dates: '2025 - 2026',
          link: 'https://ners.engin.umich.edu',
          summary: 'Helped setup their radiation pipeline',
          logo: umichLogo,
          logoSize: 42,
          expanded: {
            company: 'NERS',
            role: 'Software Developer',
            dates: 'Oct 2025 – May 2026',
            link: 'https://ners.engin.umich.edu',
            location: 'Ann Arbor, MI',
            paragraph: (
              <>
                Built radiation data pipeline from the ground up, automatically moving radiation data from
                hardware sensors to database
              </>
            ),
          },
        },
        {
          company: 'UMDBI Lab',
          role: 'Undergraduate Research Assistant',
          dates: '2024 - 2025',
          link: 'https://sites.google.com/umich.edu/umdbi/home',
          summary: 'Wrote BCI software',
          logo: umdbiLogo,
          logoSize: 60,
          expanded: {
            company: 'UMDBI Lab',
            role: 'Undergraduate Research Assistant',
            dates: 'Oct 2024 – May 2025',
            link: 'https://sites.google.com/umich.edu/umdbi/home',
            location: 'Ann Arbor, MI',
            paragraph: (
              <>
                Worked on keyboard module and refactored decision-making algorithm
              </>
            ),
          },
        },
        {
          company: 'Joy of Coding',
          role: 'Instructional Aide',
          dates: 'Summer 2025',
          link: 'https://joyofcoding.eecs.umich.edu/',
          summary: 'Taught introductory programming',
          logo: jocLogo,
          logoSize: 60,
          expanded: {
            company: 'Joy of Coding',
            role: 'Instructional Aide',
            dates: 'May - Aug 2025',
            link: 'https://joyofcoding.eecs.umich.edu/',
            location: 'Remote',
            paragraph: (
              <>
                Taught python to primary-highschool students, covering fundamentals & data
                visualization
              </>
            ),
          },
        },
      ],
    },
  ],
};

const RoleLogo = ({ role }) => {
  const logo = role.logo;
  const logoSize = Math.min(role.logoSize ?? 44, LOGO_SLOT_SIZE);

  const logoInner = !logo ? (
    <div className="experience-role-logo experience-role-logo-empty">
      <span>{role.company.charAt(0)}</span>
    </div>
  ) : (
    <div
      className={`experience-role-logo${role.logoAdaptive ? ' company-logo-adaptive' : ''}`}
      style={{ width: logoSize, height: logoSize }}
    >
      <img src={logo} alt={`${role.company} logo`} />
    </div>
  );

  const logoContent = role.link ? (
    <a
      href={role.link}
      target="_blank"
      rel="noopener noreferrer"
      className="experience-role-logo-link"
      aria-label={role.company}
    >
      {logoInner}
    </a>
  ) : (
    logoInner
  );

  return (
    <div
      className="experience-role-logo-slot"
      style={{ width: LOGO_SLOT_SIZE, height: LOGO_SLOT_SIZE }}
    >
      {logoContent}
    </div>
  );
};

const RoleText = ({ role }) => (
  <div className="experience-role-text">
    <p className="experience-role-line">
      <span className="experience-role-company">
        {role.link ? (
          <ExperienceLink href={role.link}>{role.company}</ExperienceLink>
        ) : (
          role.company
        )}
      </span>
      <span className="experience-role-sep">·</span>
      <span className="experience-role-position">{role.role}</span>
    </p>

    <p className="experience-role-detail">
      <span>{role.dates}</span>
      {role.summary && (
        <>
          <span className="experience-role-sep">·</span>
          <span>{role.summary}</span>
        </>
      )}
    </p>
  </div>
);

const ExpandedRoleText = ({ expanded }) => (
  <div className="experience-role-text">
    <p className="experience-role-line">
      <span className="experience-role-company">
        {expanded.link ? (
          <ExperienceLink href={expanded.link}>{expanded.company}</ExperienceLink>
        ) : (
          expanded.company
        )}
      </span>
      <span className="experience-role-sep">·</span>
      <span className="experience-role-position">{expanded.role}</span>
    </p>

    <p className="experience-role-detail">
      <span>{expanded.dates}</span>
      {expanded.location && (
        <>
          <span className="experience-role-sep">·</span>
          <span>{expanded.location}</span>
        </>
      )}
    </p>

    <p className="experience-role-paragraph">{expanded.paragraph || '\u00A0'}</p>
  </div>
);

const ExperienceCard = ({ role, showMore }) => {
  if (showMore && !role.expanded) return null;

  return (
    <article className="experience-role">
      <RoleLogo role={role} />
      {showMore ? <ExpandedRoleText expanded={role.expanded} /> : <RoleText role={role} />}
    </article>
  );
};

const SectionDivider = ({ label }) => (
  <div className="experience-section-divider">
    <span className="experience-section-divider-line" />
    <span className="experience-section-divider-label">{label}</span>
    <span className="experience-section-divider-line" />
  </div>
);

const Experience = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="page-scroll">
      <article className="experience-document">
      <div className="experience-toolbar-chrome">
        <header className="experience-toolbar">
          <label className="experience-more-toggle">
            <input
              type="checkbox"
              checked={showMore}
              onChange={(event) => setShowMore(event.target.checked)}
            />
            <span className="experience-checkbox" />
            <span>more</span>
          </label>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="experience-resume-link"
          >
            <FaRegFile size={14} />
            resume
          </a>
        </header>
      </div>

      <div className="experience-body">
        {experienceContent.sections.map((section) => (
          <section key={section.label} className="experience-section">
            <SectionDivider
              label={showMore ? (section.expandedLabel ?? section.label) : section.label}
            />

            <div className="experience-role-list">
              {section.roles.map((role) => (
                <ExperienceCard
                  key={`${role.company}-${role.dates}`}
                  role={role}
                  showMore={showMore}
                />
              ))}
            </div>
          </section>
        ))}

        {showMore && (
          <section className="experience-section">
            <SectionDivider label="before michigan" />
            <div className="experience-before-text">
              <p>Worked on route optimization at an ice cream distribution center</p>
              <p>Co-founded a game studio with friends, pushed out games in unity and roblox</p>
            </div>
          </section>
        )}
      </div>
      </article>
    </div>
  );
};

export default Experience;
