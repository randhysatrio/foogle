import SearchResultLink from './SearchResultLink';
import ImageResult from './ImageResults';

interface Result {
  results: SearchResultLink[];
  total: number;
  answers: string[];
  image_results: ImageResult[] | [];
  ts: number;
  device_region: string;
  device_type: string;
}

export default Result;
