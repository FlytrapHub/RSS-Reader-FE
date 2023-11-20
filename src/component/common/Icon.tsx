import GitHubMark from "../../assets/github-mark-white.svg?react";
import React from 'react';

export const icons = {
  github_mark: GitHubMark,
};

type IconProps = {
  name: keyof typeof icons;
  size?: "S" | "M" | "L" | "XL";
};

export const Icon: React.FC<IconProps> = function ({
  name,
  size = "S",
  ...props
}: IconProps) {
    
  const IconComponent = icons[name];
  if (!IconComponent) return null;

  const iconSize =
    size === "S"
      ? "16px"
      : size === "M"
      ? "20px"
      : size === "L"
      ? "24px"
      : "40px";

  return (<IconComponent width={iconSize} height={iconSize} viewBox={`0 0 98 96`} {...props} />);
};
