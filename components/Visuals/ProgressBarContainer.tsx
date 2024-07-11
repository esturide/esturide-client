import * as React from 'react';
import ProgressBar2 from '@/components/Visuals/ProgressBar2'; 
import ProgressBar3 from '@/components/Visuals/ProgressBar3'; 

interface ProgressBarContainerProps {
  type: 'ProgressBar2' | 'ProgressBar3';
}

const ProgressBarContainer: React.FC<ProgressBarContainerProps> = ({ type }) => {
  return (
    <>
      {type === 'ProgressBar2' ? <ProgressBar2 /> : <ProgressBar3 />}
    </>
  );
};

export default ProgressBarContainer;
