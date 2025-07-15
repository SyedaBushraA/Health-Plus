import React from "react";
import InformationCard from "./InformationCard";
import {
  faHeartPulse,
  faTruckMedical,
  faTooth,
  faSyringe,
  faBaby,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import "../Styles/Info.css";

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>What We Do</span>
        </h3>
        <p className="info-description">
          We bring healthcare to your convenience, offering a comprehensive
          range of on-demand medical services tailored to your needs. Our
          platform allows you to connect with experienced online doctors who
          provide expert medical advice, issue online prescriptions, and offer
          quick refills whenever you require them.
        </p>
      </div>

      <div className="info-cards-content">
        <InformationCard
          title="Emergency Care"
          description="Our Emergency Care service is designed to be your reliable support in critical situations. Our team of healthcare professionals is available 24/7 to provide prompt and efficient care."
          icon={faTruckMedical}
        />

        <InformationCard
          title="Heart Disease"
          description="Our cardiologists use cutting-edge diagnostics and treatment plans to help manage and prevent heart-related conditions. We’re committed to your cardiovascular health."
          icon={faHeartPulse}
        />

        <InformationCard
          title="Dental Care"
          description="Our Dental Care services include cleanings, checkups, and cosmetic procedures. We ensure your smile stays bright and healthy."
          icon={faTooth}
        />

        <InformationCard
          title="Diabetes Management"
          description="Comprehensive diabetes care including diagnosis, lifestyle counseling, medication management, and continuous glucose monitoring to help you stay in control."
          icon={faSyringe}
        />

        <InformationCard
          title="Pediatric Services"
          description="From newborns to teenagers, our pediatricians offer compassionate care tailored to your child's growth, development, and overall well-being."
          icon={faBaby}
        />

        <InformationCard
          title="Eye Care"
          description="Routine eye exams, vision correction, and advanced treatments for glaucoma, cataracts, and other ocular conditions—all under expert care."
          icon={faEye}
        />
      </div>
    </div>
  );
}

export default Info;
