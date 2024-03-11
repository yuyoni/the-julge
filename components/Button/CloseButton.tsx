import Image from "next/image";

interface CloseButtonProps {
  src: string;
  alt: string;
  handleClick?: () => void;
}

export default function CloseButton({
  src,
  alt,
  handleClick,
}: CloseButtonProps) {
  return (
    <button onClick={handleClick}>
      <Image src={src} alt={alt} />
    </button>
  );
}
