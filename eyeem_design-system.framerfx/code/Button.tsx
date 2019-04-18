import * as React from 'react';
import { PropertyControls, ControlType } from 'framer';
import styled from 'styled-components';

// Types
type Props = {
  text?: string;
  fluid?: boolean;
  disabled?: boolean;
  kind?: 'default' | 'outline' | 'clear';
};

// Style
const StyledButton = styled.button``;

// Component
export const Button: React.FC<Props> = ({
  text,
  fluid,
  disabled,
  children,
  kind
}) => <div />;
