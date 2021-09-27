import React from 'react';
import './AddMember.css';

const AddMember = (props) => {
    const { member_name, age, designation, salary, experience, img } = props.mem;
    console.log(member_name, designation, age);
    return (
        <div className='team__card'>
            <img className="team__img" src={img} alt="" />
            <div className="team__details">
                <h5>{member_name}</h5>
                <p>{designation}</p>
                <small>{experience} years of experience</small>
            </div>
        </div>
    );
};

export default AddMember;