import React from 'react';
import { useState } from 'react';

const WorkItems = ({item}) => {
    const [toggleState, setToggleState] = useState(0);
    const toggleTab = (index) => {
        setToggleState(index);
    };
    return (
        <div>
            <div className="work_card" key={item.id}>
                <img src={item.image} alt="" className='work_img' />
                <h3 className="work_title">{item.title}</h3>
                <a className="work_button" onClick={() => toggleTab(1)}>
                    Voir plus <i className="bx bx-right-arrow-alt work_button-icon"></i>
                </a>
            </div>
            <div className={toggleState === 1 ? "work_modal modal-active" : "work_modal" }>
                <div className="work_modal-content">
                    <i onClick={() => toggleTab(0)} className='uil uil-times work_modal-close'></i>
                    <img src={item.image} alt="" className='work_modal-img' />
                    <div className='work_modal-info'>
                        <h3 className="work_modal-title">{item.title}</h3>
                        <p className="work_modal-description">{item.description}</p>
                        <p className='work_modal-skills'>Compétences utilisées : {item.skills}</p>
                        <a href={item.link} className="work_modal-link">Consulter le projet
                        <i class="uil uil-external-link-alt"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkItems