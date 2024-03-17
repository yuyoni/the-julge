import { body2Regular } from "@/styles/fontsStyle";
import styled from "@emotion/styled";

type HeaderProps = {
  headers: string[];
};

export default function TableHeader({ headers }: HeaderProps) {
  return (
    <thead>
      <HeadRow>
        {headers.map((header, index) => (
          <Cell key={index}>{header}</Cell>
        ))}
      </HeadRow>
    </thead>
  );
}

const HeadRow = styled.tr`
  border-bottom: 1px solid var(--The-julge-gray-20);
  border-radius: 10px;
`;

const Cell = styled.th<{ width?: number }>`
  background: var(--The-julge-purple-10);
  padding: 14px 12px;
  text-align: left;
  ${body2Regular}
`;
