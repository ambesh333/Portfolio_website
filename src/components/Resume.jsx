import React from 'react';
import { SectionWrapper } from '../hoc';

const Resume = () => {
  const openGoogleDriveLink = () => {
    window.open('https://drive.google.com/your-google-drive-link', '_blank');
  };

  return (
    <div>
      <button onClick={openGoogleDriveLink}>Open Resume</button>
    </div>
  );
};
export default SectionWrapper(Resume,"")