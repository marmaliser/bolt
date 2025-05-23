import { h } from '@bolt/core/renderers';

export const SalesAutomation = ({ bgColor, fgColor, size, ...otherProps }) => {
  return (
    <svg data-name="Layer 1" {...otherProps} viewBox="0 0 32 31.8">
      <path
        fill={bgColor}
        fill-rule="evenodd"
        d="M30 2H2v3.9h28zm0-2a1.68 1.68 0 011.4.6A2.51 2.51 0 0132 2v3.9a1.68 1.68 0 01-.6 1.4 2.25 2.25 0 01-1.4.6H2a1.68 1.68 0 01-1.4-.6A2.25 2.25 0 010 5.9V2A2 2 0 01.6.6 1.82 1.82 0 012 0zm-4 14H6v3.9h20zm0-2a1.68 1.68 0 011.4.6A2.51 2.51 0 0128 14v3.9a1.68 1.68 0 01-.6 1.4 2.51 2.51 0 01-1.4.6H6a1.68 1.68 0 01-1.4-.6 2.25 2.25 0 01-.6-1.4V14a2 2 0 01.6-1.4A1.82 1.82 0 016 12zm-4 13.9H10v3.9h12zm0-2a1.68 1.68 0 011.4.6 2.51 2.51 0 01.6 1.4v3.9a2.05 2.05 0 01-2 2H10a1.68 1.68 0 01-1.4-.6 2.23 2.23 0 01-.6-1.3V26a1.68 1.68 0 01.6-1.4A2.51 2.51 0 0110 24h12z"
      />
    </svg>
  );
};
