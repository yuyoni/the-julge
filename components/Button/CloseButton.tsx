import styled from "@emotion/styled";

interface CloseButtonProps {
  size?: number;
  color?: string;
  handleClick?: () => void;
}

export default function CloseButton({
  size,
  color,
  handleClick,
}: CloseButtonProps) {
  return (
    <Wrapper onClick={handleClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size || "24"}
        height={size || "24"}
        viewBox="0 0 24 25"
        fill="none"
      >
        <g clipPath="url(#clip0_5233_18552)">
          <path
            d="M18.2997 6.21022C17.9097 5.82022 17.2797 5.82022 16.8897 6.21022L11.9997 11.0902L7.10973 6.20021C6.71973 5.81021 6.08973 5.81021 5.69973 6.20021C5.30973 6.59021 5.30973 7.22022 5.69973 7.61022L10.5897 12.5002L5.69973 17.3902C5.30973 17.7802 5.30973 18.4102 5.69973 18.8002C6.08973 19.1902 6.71973 19.1902 7.10973 18.8002L11.9997 13.9102L16.8897 18.8002C17.2797 19.1902 17.9097 19.1902 18.2997 18.8002C18.6897 18.4102 18.6897 17.7802 18.2997 17.3902L13.4097 12.5002L18.2997 7.61022C18.6797 7.23022 18.6797 6.59022 18.2997 6.21022Z"
            fill={color || "#111322"}
          />
        </g>
        <defs>
          <clipPath id="clip0_5233_18552">
            <rect
              width="24"
              height="24"
              fill="white"
              transform="translate(0 0.5)"
            />
          </clipPath>
        </defs>
      </svg>
    </Wrapper>
  );
}

const Wrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
`;
