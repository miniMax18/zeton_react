import React, { useState, useEffect } from 'react';
import ReturnButton from '../../atoms/Buttons/ReturnButton';
import {
  Subheading,
  StyledHeader,
  StyledHeading,
} from '../../atoms/Heading/Heading';
import ActionsTemplate from '../../templates/ActionsTemplate';
import { StyledContainer } from '../../atoms/Sections/Containers';
import CustomSelect from '../../modules/CustomSelect/CustomSelect';
import { dataa as datamock } from '../../../mockyClient';

type AwardsBarPropTypes = {
  points: any;
  handlePanel: any;
  panel: any;
};

type DataMockTypes = {
  id: number;
  name: string;
  value: number;
  student: number;
};

const AwardsBar = ({
  points,
  handlePanel,
  panel,
}: AwardsBarPropTypes): JSX.Element => {
  const [activePanel, setActivePanel] = useState<any>(panel);

  useEffect(() => {
    setActivePanel(panel);
  }, [panel]);

  return (
    <ActionsTemplate action={activePanel === 'awards' ? 'true' : 'false'}>
      <StyledHeader>
        <ReturnButton onClick={() => handlePanel('none')} />
        <StyledHeading>Przyznaj nagrodę</StyledHeading>
      </StyledHeader>
      <StyledContainer>
        <Subheading>Wykorzystane punkty</Subheading>
        <CustomSelect
          title="Wybierz nagrodę"
          data={datamock}
          btnTitle="Przyznaj nagrodę"
        />
      </StyledContainer>
    </ActionsTemplate>
  );
};

export default AwardsBar;
