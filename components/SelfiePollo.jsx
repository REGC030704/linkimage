import React from 'react';

const SelfiePollo = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img
        src="https://scontent-qro1-2.xx.fbcdn.net/v/t39.30808-6/434865786_1548994895958193_5833070523988184092_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=c2u1-Ml8ia4Ab5kTXe2&_nc_ht=scontent-qro1-2.xx&oh=00_AfBzKQZ8SRVkSk0oULDmWd7081ClQ_G8j8obK5fG8wtKjA&oe=662F47DB"
        alt="Selfie"
        className="w-96 h-96 object-cover mb-4" 
        style={{ maxWidth: '100%', maxHeight: '100%' }} 
        
      />
      <p className="text-lg text-center">Selfie chida que me tome xd</p>
    </div>
  );
};

export default SelfiePollo;
