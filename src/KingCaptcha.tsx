import React from 'react';

export interface KingCaptchaProps {
  label: string;
}

export const KingCaptcha = ({ label }: KingCaptchaProps) => {
  return <div>{label}</div>;
};
