import React from 'react';
import PropTypes from 'prop-types';

const ATL = props => {
  const { size } = props;
  return (
    <svg
      width={size}
      height={size}
      preserveAspectRatio="xMidYMid slice"
      clipRule="evenodd"
      fillRule="evenodd"
      viewBox="0 0 560 400"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m398.255 126.847c-36.369-22.958-119.67-40.516-181.813-54.961l-71.441 76.789 61.323-1.311c-30.534 49.332-24.312 165.335 52.904 180.748-3.975-7.62-10.878-21.619-1.931-38.95 6.373-12.325 41.8-80.093 41.8-80.093h8.48c11.483 0 15.263 4.318 10.169 10.405 30.612-.391 49.41-11.965 57.844-24.333-6.421-11.748-26.85-25.582-35.131-31.187h42.831c12.281 0 15.05 5.146 12.158 10.748 20.045-3.94 30.292-30.509 2.798-47.865"
        fill="#a5acaf"
      />
      <path
        d="m393.353 129.191c-49.533-27.782-172.184-46.3-172.184-46.3l-52.54 56.279h54.474c-40.22 53.142-31.306 160.418 27.839 182.719-4.196-9.975-6.32-21.553 1.24-36.283 8.533-16.611 22.114-44.536 41.57-81.818h15.876c13.176 0 17.389 5.572 15.603 9.871 10.835 0 30.646-1.062 45.021-18.509-11.975-16.73-51.572-36.237-51.572-36.237h67.929c9.983 0 14.97 3.549 13.592 9.563 17.354-8.473 12.842-28.246-6.847-39.287"
        fill="#fff"
      />
      <path d="m217.705 90.742 4.785 6.086-30.586 32.926 107.571 8.226-.6 1.194h-72.251l5.596 5.279c-4.569 6.427-8.459 13.372-11.72 20.639l60.414-12.344c-.327.48-.654.969-.973 1.459l-71.975 23.988 6.328 3.582c-2.977 9.879-4.904 20.111-5.828 30.348l61.154-37.117c-.182.56-.361 1.123-.527 1.687l-67.438 53.211 6.22 1.56c.348 11.539 1.967 22.787 4.779 33.226l54.896-64.709c.091.516.19 1.034.306 1.546l-54.372 79.789 5.117.35c6.304 14.18 15.257 25.814 26.661 33.043-4.401-9.789-2.998-21.541 2.109-32.007 4.425-9.059 62.068-123.84 62.068-123.84l-9.624-5.157h89.566c9.17 0 14.251 3.852 14.15 9.026 5.668-4.785 6.933-19.274-12.236-29.794-41.662-22.865-173.599-42.198-173.599-42.198l.011.001zm95.252 70.003 1.252 3.713c-2.956 5.779-13.545 26.762-17.213 34.103h27.478c.374 4.867 5.208 8.996 10.226 10.095-2.973-3.973-1.792-7.914.423-10.095h12.978c3.606 0 2.495 4.33-3.372 8.834 9.181-2.097 16.037-6.275 20.521-12.239-8.512-12.992-52.293-34.412-52.293-34.412z" />
      <path
        d="m396.035 141.181 1.149 5.087c-7.839 1.473-21.708 2.647-25.628 2.965l-.593 1.181h20.647c8.19 0 11.64 3.885 12.368 6.117 1.073-3.055.083-11.249-7.943-15.35zm-22.962-10.055c4.579 1.526 14.881 7.276 18.784 11.773h-7.403c-2.92-4.801-11.379-11.773-11.379-11.773"
        fill="#fff"
      />
      <path
        d="m228.657 107.606-8.733 9.458 142.764 19.755.772-1.529c-29.186-8.505-86.702-20.252-134.79-27.684h-.011zm47.993 38.565-38.765.88c-1.941 2.659-3.741 5.424-5.417 8.282l43.039-7.688c.377-.495.76-.989 1.144-1.474zm-13.694 22.715-42.347 15.215c-.941 3.491-1.739 7.034-2.397 10.602l43.998-24.026c.237-.595.486-1.194.745-1.789l.001-.001zm47.011 19.034-3.165 6.126h33.612l.732-1.472-31.175-4.657zm-52.846 9.171-40.939 34.8c.276 3.858.711 7.669 1.286 11.405l39.72-44.317c-.031-.634-.053-1.265-.067-1.896v.007zm7.234 27.56-35.73 53.874c1.874 3.55 3.949 6.871 6.203 9.919l30.365-62.245c-.287-.512-.567-1.033-.838-1.549z"
        fill="#a71930"
      />
    </svg>
  );
};

ATL.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ATL.defaultProps = {
  size: '100'
};

export default ATL;
