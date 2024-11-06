import Moon from "/public/icons/moon.svg";
import Phone from "/public/icons/phone.svg";
import Pen from "/public/icons/pen.svg";
import Question from "/public/icons/question.svg";

function FixedIcons() {
  return (
    <div className="fixed b-3 top-[auto left-1 z-[4]">
      <button className="fixed-container__dark">
        <Moon />
      </button>
      <div className="fixed-container__list">
        <div>
          <a className="fixed-container__hidden-topic" href="/">
            تماس با ما
          </a>
          <a href="/">
            <Phone className="fixed-container__phone" />
          </a>
        </div>
        <div>
          <a className="fixed-container__hidden-topic" href="/">
            سوالات متداول
          </a>
          <a href="/">
            <Question className="fixed-container__question" />
          </a>
        </div>
        <div>
          <a className="fixed-container__hidden-topic" href="/">
            مجله اینترنتی
          </a>
          <a href="/">
            <Pen className="fixed-container__pen" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default FixedIcons;
