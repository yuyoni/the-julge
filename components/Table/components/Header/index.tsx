import { body2Regular } from "@/styles/fontsStyle";
import styled from "@emotion/styled";

type HeaderProps = {
  headers: string[];
};

export default function TableHeader({ headers }: HeaderProps) {
  console.log(headers);
  return (
    <thead>
      <HeadRow>
        {headers.map((header) => (
          <Cell>{header}</Cell>
        ))}
      </HeadRow>
    </thead>
  );
}

const Cell = styled.th<{ width?: number }>`
  padding: 14px 12px;
  text-align: left;
  ${body2Regular}
`;

const HeadRow = styled.tr`
  border-bottom: 1px solid var(--The-julge-gray-20);
  border-radius: 10px;
  background-color: var(--The-julge-purple-10);
`;
