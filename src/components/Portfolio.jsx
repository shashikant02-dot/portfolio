import React from "react";
import "./Protfolio.css";
import image1 from "../assets/image1.png";
import image11 from "../assets/image11.png";

const Portfolio = () => {
  return (
    <div id="portfolio">
      <h2 className="heading">Project Developed</h2>
      <div className="line"></div>

      <div className="project-container">
        <div className="projects">
<a
  href="https://tool-hub-vmam.vercel.app/"
  target="_blank"
  rel="noopener noreferrer"
>
  <img src={image1} alt="ToolHub Online Utility Tools Platform" />
</a>
          <div className="card">
            <h3>ToolHub – Online Utility Tools Platform</h3>

            <p>
              Developed a utility platform providing tools like Image to Code,
              Image to Excel, PDF Merger, PDF Splitter, JPG to PDF, Image
              Converter, Image Compressor, Excel to JSON, CSV to JSON, and
              Invoice Generator.
            </p>

            <b className="bold">Tech Stack:</b> Next.js, React.js, JavaScript,
            Tailwind CSS, Git
          </div>
        </div>

        <div className="projects">
          {/* Image Click Link */}
          <a
            href="https://chhinahomes.com.au/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={image11}
              alt="Chhina Homes Real Estate Website"
            />
          </a>

          <div className="card">
            <h3>Chhina Homes – Real Estate / Home Builder Website</h3>

            <p>
              Designed responsive pages, sections, and layouts using Elementor
              page builder. Integrated and configured WordPress plugins for
              forms, SEO, performance, and website functionality.
            </p>

            <b className="bold">Tech Stack:</b> WordPress, Elementor, Astra
            Theme, HTML, CSS, Plugins.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;