import { useEffect, useRef } from 'react';

const useUpdateEffect = (func: () => void, deps: any[]) => {
  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) func();
    else didMount.current = true;
  }, deps);
};

export default useUpdateEffect;
