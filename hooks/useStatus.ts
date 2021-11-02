import React from 'react';

function useStatus() {
  const [status, setStatus] = React.useState<'none' | 'minor' | 'major' | 'critical'>('none');
  
  return {
    status,
    setStatus
  }
}

export default useStatus;