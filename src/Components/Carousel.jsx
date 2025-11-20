import { useState } from "react";
import courseData from "../Data/courseData";
import CourseSection from "./CourseSection";
import "../Styles/CourseSection.css";

function Carousel() {
  const categories = [
    { key: "AI", label: "Artificial Intelligence (AI)" },
    { key: "Python", label: "Python" },
    { key: "Excel", label: "Microsoft Excel" },
    { key: "AgenticAI", label: "AI Agents & Agentic AI" },
    { key: "Marketing", label: "Digital Marketing" },
    { key: "AWS", label: "Amazon AWS" },
  ];

  const [activeCategory, setActiveCategory] = useState("AI");

  return (
    <div className="carousel-wrapper">

      <h2 className="main-title">Skills to transform your career and life</h2>
      <p className="subtitle">
        From critical skills to technical topics, Udemy supports your professional development.
      </p>

      <div className="tabs">
        {categories.map((cat) => (
          <span
            key={cat.key}
            className={cat.key === activeCategory ? "active" : ""}
            onClick={() => setActiveCategory(cat.key)}
          >
            {cat.label}
          </span>
        ))}
      </div>

      <CourseSection courses={courseData[activeCategory]} category={activeCategory} />

    </div>
  );
}

export default Carousel;
