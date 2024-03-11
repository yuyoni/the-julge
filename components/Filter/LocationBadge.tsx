import closeIcon from "@/public/images/purple_close_icon.svg";
import styled from "@emotion/styled";
import Image from "next/image";

export default function LocationBadge({
  text,
  handleClick,
}: {
  text: string;
  handleClick: (location: string) => void;
}) {
  const toggleLocation = () => {
    handleClick(text);
  };

  return (
    <Wrapper onClick={toggleLocation}>
      <span>{text}</span>
      <Image src={closeIcon} alt="exit" style={{ cursor: "pointer" }} />
    </Wrapper>
  );
}

const Wrapper = styled.button`
  display: flex;
  height: 30px;
  padding: 6px 10px;
  justify-content: space-between;
  align-items: center;
  gap: 4px;
  font-size: 14px;

  border-radius: 20px;
  background: var(--The-julge-purple-10, #e9dcf4);
  color: var(--The-jungle-purple-40, #905cb9);
`;
