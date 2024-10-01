import React from 'react';
import MainContent from '../components/layout/MainContent';
import GoalSelectionContent from '../components/goal/GoalSelectionContent';

const Goals: React.FC = () => {
    return (
        <MainContent>
            <GoalSelectionContent />
        </MainContent>
    );
};

export default Goals;
