import AdditionalLinkResult from './AdditionalLinkResult';
import Cite from './Cite';

interface SearchResultLink {
  title: string;
  link: string;
  description: string;
  additional_links: AdditionalLinkResult[];
  cite: Cite | null;
  g_review_stars?: string;
}

export default SearchResultLink;
