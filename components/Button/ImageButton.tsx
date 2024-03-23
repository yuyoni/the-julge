import styled from "@emotion/styled";

interface ImageButtonProps {
  src: string;
  alt: string;
  width?: number;
  handleClick?: () => void;
}

export default function ImageButton({
  src,
  alt,
  handleClick,
  width,
}: ImageButtonProps) {
  return (
    <Button width={width} onClick={handleClick}>
      <img src={src} alt={alt} />
    </Button>
  );
}

const Button = styled.button<{ width: number | undefined }>`
  img {
    width: ${({ width }) => `${width}px`};
  }
`;
