interface Image {
  alt: string;
  src: string;
}

interface Link {
  domain: string;
  href: string;
  title: string;
}

interface ImageResult {
  link: Link;
  image: Image;
}

export default ImageResult;
