import Image from "next/image";

interface ImageButtonProps {
  src: string;
  alt: string;
  handleClick?: () => void;
}

export default function ImageButton({
  src,
  alt,
  handleClick,
}: ImageButtonProps) {
  return (
    <button onClick={handleClick}>
      <Image src={src} alt={alt} />
    </button>
  );
}
