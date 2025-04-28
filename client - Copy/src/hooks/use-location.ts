import { useLocation as useLocationContext } from '@/contexts/LocationContext';

export const useLocation = () => {
  return useLocationContext();
};

export default useLocation;