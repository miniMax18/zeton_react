import React from 'react';
import { AwardObject } from './types';


const AwardsList = ({ awards }: { awards: AwardObject[] }) => {
  return (
    <div>
      <ul>
        {awards?.map((award) => (
          <li key={award.id}>
            {award.name} <span>{award.value} pkt</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AwardsList;
