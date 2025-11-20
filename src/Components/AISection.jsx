import "../Styles/AISection.css";
import aiCareer from "../assets/ai-career.webp";



function AISection() {
  return (
    <div className="ai-section-wrapper">

      <div className="ai-section-container">

        <div className="ai-left">
          <h1>Reimagine your career in the AI era</h1>
          <p className="subtext">
            Future-proof your skills with Personal Plan. Get access to a variety
            of fresh content from real-world experts.
          </p>

          <ul className="ai-features">
            <li><span className="icon">✦</span> <strong>Learn</strong> AI and more</li>
            <li><span className="icon">🏆</span> <strong>Prep</strong> for a certification</li>
            <li><span className="icon">📝</span> <strong>Practice</strong> with AI coaching</li>
            <li><span className="icon">💡</span> <strong>Advance</strong> your career</li>
          </ul>

          <button className="learn-btn">Learn more</button>
          <p className="price-text">Starting at E£204.00/month</p>
        </div>

        <div className="ai-right">
          <div className="card-image">
            <img src={aiCareer} alt="AI visual" />
          </div>
        </div>

      </div>
    </div>
  );
}

export default AISection;
