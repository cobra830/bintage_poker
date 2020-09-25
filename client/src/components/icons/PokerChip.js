import React from 'react';
import theme from '../../styles/theme';
import PropTypes from 'prop-types';

const PokerChip = ({ width, height }) => {
  return (
    <>
      <svg
        width={width}
        height={height}
        viewBox="0 0 38 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0)">
          <path
            d="M38 19C38 29.5018 29.5018 38 19 38C8.49815 38 -3.05176e-05 29.5018 -3.05176e-05 19C-3.05176e-05 8.49818 8.49815 0 19 0C29.5018 0 38 8.49818 38 19ZM20.7272 5.28545C24.4063 5.75182 27.7572 7.68636 30.0027 10.64L33.0082 8.91273C31.5888 6.91155 29.7595 5.23568 27.6419 3.99671C25.5244 2.75774 23.1672 1.98409 20.7272 1.72727V5.28545ZM4.99179 8.91273L7.99724 10.64C9.11069 9.17669 10.5043 7.94963 12.0967 7.03033C13.6892 6.11103 15.4487 5.51788 17.2727 5.28545V1.72727C14.8328 1.98409 12.4756 2.75774 10.358 3.99671C8.24043 5.23568 6.41109 6.91155 4.99179 8.91273ZM3.26452 26.0818L6.2527 24.3545C5.54295 22.6586 5.17745 20.8385 5.17745 19C5.17745 17.1615 5.54295 15.3414 6.2527 13.6455L3.26452 11.9182C2.24872 14.1409 1.72299 16.5562 1.72299 19C1.72299 21.4438 2.24872 23.8591 3.26452 26.0818ZM17.2727 32.7145C15.4487 32.4821 13.6892 31.889 12.0967 30.9697C10.5043 30.0504 9.11069 28.8233 7.99724 27.36L4.99179 29.0873C6.41109 31.0885 8.24043 32.7643 10.358 34.0033C12.4756 35.2423 14.8328 36.0159 17.2727 36.2727V32.7145ZM33.0082 29.0873L30.0027 27.36C28.8893 28.8233 27.4957 30.0504 25.9032 30.9697C24.3108 31.889 22.5513 32.4821 20.7272 32.7145V36.1691C25.65 35.6682 30.1236 33.0945 33.0082 29.0873ZM34.7354 26.0818C36.7909 21.5909 36.7909 16.4091 34.7354 11.9182L31.7472 13.6455C32.457 15.3414 32.8225 17.1615 32.8225 19C32.8225 20.8385 32.457 22.6586 31.7472 24.3545L34.7354 26.0818ZM24.1818 19L19 10.3636L13.8182 19L19 27.6364L24.1818 19Z"
            fill={theme.colors.primaryCta}
          />
        </g>
        <defs>
          <clipPath id="clip0">
            <rect width="38" height="38" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </>
  );
};

PokerChip.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
};

PokerChip.defaultProps = {
  width: '40',
  height: '40',
};

export default PokerChip;
