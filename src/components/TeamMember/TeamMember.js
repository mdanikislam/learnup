import React from 'react';
import './TeamMember.css'

const TeamMember = (props) => {
    const { member_name, age, designation, salary, experience, img } = props.people;
    const cardStyle = {
        color: "#000",
    }
    return (
        <div className='col-md-4 mt-5'>
            <div className="member__card">
                <div className="member__img">
                    <img src={img} alt="..." />
                </div>
                <div className="member__details">
                    <h4 className='member__name'>{member_name}</h4>
                    <p className='member__age'><b>Age: </b>{age}</p>
                    <p className='member__designation'><b>Current Designation: </b>{designation}</p>
                    <p className='member__salary'><b>Current Salary: </b>{salary}</p>
                    <p className='member__experience'><b>{experience}</b> years of experience</p>
                    <button
                        onClick={() => props.handleAddMember(props.people)}
                        className="add__member btn"><i class="fas fa-user-plus"></i> Add member</button>
                </div>
            </div>
        </div>
    );
};

export default TeamMember;