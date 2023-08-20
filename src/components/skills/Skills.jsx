import React from 'react';
import "./skills.css";
import Frontend from "./Frontend";
import Uiuxdesign from "./Uiuxdesign";

const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <h2 className="section_title">Compétences</h2>
            <span className="section_subtitle">Mon niveau</span>

            <div className="skills_container container grid">
                <Frontend />
                <Uiuxdesign />
            </div>
        </section>
    )
}

export default Skills