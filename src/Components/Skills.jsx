import "../App.css";

export const Skills = () => {
  return (
    <div className="bodyAreaPage">
      <div>
        <div className="bodyAreaPageSkillsTitle">Skills</div>
      </div>

      <div>
        <div className="bodyAreaPageMainText">
          <div className="bodyAreaPageMainInitial">M</div>
          <div className="bodyAreaPageMainInnerBody">
            y coding skills broadly fall into three categories. There are
            technologies I've had most of my experience with through full-time
            education, those I've picked up as part of my working career and
            those I've learned through self-study as a hobbyist.
          </div>
        </div>

        <div className="bodyAreaPageMainText2">
          <div className="bodyAreaPageMainInnerBody2">
            {" "}
            <p>
              My most recent study was with the 12-week Code Nation boot camp
              where we focussed on modern JavaScript web development using the
              MERN stack; MongoDB, Express, React and Node. Together this made
              up a full-stack course which culminated in my team building a
              full-stack MERN web app using MongoDB for the back end, including
              user registration, and React for the front end. We hosted this on
              Netlify at{" "}
              <a href="https://view-finder.netlify.app/">
                https://view-finder.netlify.app/
              </a>
              .
            </p>
            <p>
              Previously in my career I've worked for an insurer using Visual
              Basic for Applications to reassemble and reconcile large volumes
              of accounting data, and built Excel tools for the Co-Operative
              Group's project management team.
            </p>
            <p>
              As a hobbyist I began programming with Python and later moved on
              to C++. My most recent project was a clock and system monitor for
              an LCD screen on my home PC.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
