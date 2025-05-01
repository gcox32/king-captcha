import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { KingCaptcha } from './KingCaptcha';

test('renders label text', () => {
  render(<KingCaptcha label="Hello" />);
  expect(screen.getByText('Hello')).toBeInTheDocument();
});
