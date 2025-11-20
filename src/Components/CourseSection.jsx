function CourseSection({ courses, category }) {
  return (
    <div className="courses-grid">
      {courses.map((course) => (
        <div className="course-card" key={course.id}>
          <img src={course.image} alt={course.title} className="card-img" />

          <h3 className="course-title">{course.title}</h3>
          <p className="instructor">{course.instructor}</p>

          <div className="course-meta">
            <span className={`badge ${course.badge.toLowerCase()}`}>{course.badge}</span>
            <span className="rating">⭐ {course.rating}</span>
            <span className="count">{course.ratingCount}</span>
          </div>

          <div className="prices">
            <span className="price">{course.price}</span>
            <span className="old-price">{course.oldPrice}</span>
          </div>
        </div>
      ))}

      <button className="show-all-btn">
        Show all {category} courses →
      </button>
    </div>
  );
}

export default CourseSection;
