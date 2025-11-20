import "../Styles/TrustedCompanies.css";
import trustedCompanies from "../Data/trustedCompanies";


function TrustedCompanies() {
  return (
    <section className="trusted-companies">
      <h2>Trusted by over 17,000 companies and millions of learners around the world</h2>

      <div className="trusted-logos">
        {trustedCompanies.map((company) => (
          <img
            key={company.id}
            src={company.image}
            alt={company.name}
            className="trusted-logo"
          />
        ))}
      </div>
    </section>
  );
}

export default TrustedCompanies;

