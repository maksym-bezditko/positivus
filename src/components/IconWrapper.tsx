import { PropsWithChildren } from 'react';
import styled from 'styled-components';

type IconWrapperProps = PropsWithChildren<{
  isCursorPointer?: boolean;
}>;

export const IconWrapper = (props: IconWrapperProps) => {
  const { children, isCursorPointer } = props;

  return (
    <StyledIconWrapper $isCursorPointer={isCursorPointer}>
      {children}
    </StyledIconWrapper>
  );
};

const StyledIconWrapper = styled.div<{
  $isCursorPointer?: boolean;
}>`
  cursor: ${(props) => (props.$isCursorPointer ? 'pointer' : 'default')};
`;
