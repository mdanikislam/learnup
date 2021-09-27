import React, { useState } from 'react';
import AddMember from '../AddMember/AddMember.js';
import Data from '../Data/Data.js'
import TeamMember from '../TeamMember/TeamMember.js';
import './Main.css'

const Main = () => {
    const [member, setMember] = useState([])
    const handleAddMember = (addMember) => {
        member.find(crnt => {
            console.log(crnt.uniq_id === addMember.uniq_id);
            return crnt.uniq_id === addMember.uniq_id;
        })
        const newMember = [...member, addMember]
        setMember(newMember);
    }
    let total = 0;
    for (const mem of member) {
        total += mem.salary;
        console.log(total);
    }


    return (
        <div className='main'>
            <div className="row">
                <div className="col-md-9">
                    <div className="row">
                        {
                            Data.map(people => <TeamMember
                                key={people.uniq_id}
                                people={people}
                                handleAddMember={handleAddMember}
                            />)
                        }
                    </div>
                </div>
                <div className="col-md-3 mt-5">
                    <div className="team__header">
                        <h5>Out new team member!!!</h5>
                        <p>Team Member added: {member.length}</p>
                        <p>Total Cost: {total}</p>
                    </div>
                    {
                        member.map((mem, i) => <AddMember mem={mem} key={i} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Main;