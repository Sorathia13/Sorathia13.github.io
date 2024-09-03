import React, {useState} from 'react';
import "./experiences.css";

const Experience = () => {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    };
    return (
        <section className="experiences section">
            <h2 className="section_title">Expériences</h2>
            <span className="section_subtitle">Mon parcours personnel</span>
            <div className="experiences_container container">
                <div className="experiences_tabs">
                    <div className={
                        toggleState === 1 
                        ? "experiences_button button--flex experiences_active" 
                        : "experiences_button button--flex"
                        }
                        onClick={() => toggleTab(1)}
                        >
                        <i className="uil uil-graduation-cap experiences_icon"></i>
                        Diplômes
                    </div>

                    <div className={
                        toggleState === 2 
                        ? "experiences_button button--flex experiences_active" 
                        : "experiences_button button--flex"
                        }
                        onClick={() => toggleTab(2)}
                        >
                        <i className="uil uil-briefcase-alt experiences_icon"></i>
                        Expériences
                    </div>
                </div>

                <div className="experiences_sections">
                    <div className={
                        toggleState === 1
                        ? "experiences_content experiences_content-active"
                        : "experiences_content"
                    }>
                        <div className="experiences_data">
                            <div>
                                <h3 className="experiences_title">BUT MMI</h3>
                                <span className="experiences_subtitle">Université de Gustave Eiffel</span>
                                <div className="experiences_calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2021 - Aujourd'hui
                                </div>
                            </div>

                            <div>
                                <span className="experiences_rounder"></span>
                                <span className="experiences_line"></span>
                            </div>
                        </div>

                        <div className="experiences_data">
                            <div></div>
                            <div>
                                <span className="experiences_rounder"></span>
                                <span className="experiences_line"></span>
                            </div>

                            <div>
                                <h3 className="experiences_title">Baccalauréat général</h3>
                                <span className="experiences_subtitle">Lycée Martin Luther King</span>
                                <div className="experiences_calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2018 - 2021
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={
                        toggleState === 2
                        ? "experiences_content experiences_content-active"
                        : "experiences_content"
                    }>

                        <div className="experiences_data">
                            <div></div>
                            <div>
                                <span className="experiences_rounder"></span>
                                <span className="experiences_line"></span>
                            </div>
                            <div>
                                <h3 className="experiences_title">Développeur Front-end</h3>
                                <span className="experiences_subtitle">ADventori</span>
                                <div className="experiences_calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    Avril - Août 2024    
                                </div>
                            </div>
                        </div>

                        <div className="experiences_data">
                            <div>
                                <h3 className="experiences_title">Développeur Web/ Graphiste</h3>
                                <span className="experiences_subtitle">Autocars Roissy Charles de Gaulle</span>
                                <div className="experiences_calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    Avril - Août 2023    
                                </div>
                            </div>

                            <div>
                                <span className="experiences_rounder"></span>
                                <span className="experiences_line"></span>
                            </div>
                        </div>

                        <div className="experiences_data">
                            <div></div>
                            <div>
                                <span className="experiences_rounder"></span>
                                <span className="experiences_line"></span>
                            </div>
                            <div>
                                <h3 className="experiences_title">Développeur Web</h3>
                                <span className="experiences_subtitle">Laura Traduction</span>
                                <div className="experiences_calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    Juin - Juillet 2022
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience