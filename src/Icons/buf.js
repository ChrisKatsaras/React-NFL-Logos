import React from 'react';
import PropTypes from 'prop-types';

const BUF = props => {
  const { size } = props;
  return (
    <svg
      width={size}
      height={size}
      clipRule="evenodd"
      fillRule="evenodd"
      viewBox="0 0 560 400"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m137.976 250.412c25.029-15.978 32.902-33.977 32.902-33.977l-70.878 10.167 30.121-53.492 60.515-5.095s23.544-21.009 59.998-36.073c0 0 3.801-6.629 24.62-18.61 0 0 19.094-11.244 40.839-18.438 0 0 14.738-5.069 19.086-5.324l-1.279-4.686 27.788-2.381.716-2.662s14.505.979 22.824 4.66l1.638-2.182s19.413 8.923 33.861 30.847c0 0 14.014-.78 26.559 5.223 0 0 13.294 5.286 12.694 20.717 0 0-.09 19.689-5.976 39.204 0 0-.903 3.056-1.743 4.877 0 0-1.222 2.486-3.581 5.624 0 0-6.583 6.778-9.136 12.747 0 0-1.383 3.97-4.132 11.184 0 0-2.114 9.92-16.526 10.472 0 0-14.025 17.748-19.874 22.842l-.495-4.311s-9.785 9.065-18.277 14.419l2.868-25.127s.705-4.487-2.144-4.81l-7.33-.176s2.4 15.124-.499 22.116c0 0-1.845 10.977-18.877 16.204 0 0-13.159 4.188-28.216 5.365l-3.236-.513-23.701 9.713 6.928-24.852s-8.881.9-9.646-.214l-26.393 11.315 10.374-29.727 7.108-3.936-2.268-3.082-14.591.131-5.368 4.176c-12.394-3.228-24.444-2.358-24.444-2.358l-61.329 49.776-15.368 33.97-18.352-24.537 5.744-7.514-2.182-1.642-8.319 6.546-12.316 33.171-18.138-25.599 4.664-10.403-1.031-6.374c5.399-3.565 8.893-5.953 11.622-9.02 1.489-1.919 2.309-2.587 4.038-5.815 1.631-3.945 1.691-8.215 3.509-9.568 2.276-1.544 4.015-2.583 4.626-2.973"
        fill="#fff"
      />
      <path
        d="m133.563 178.471-23.45 41.327 302.586-45.095s-10.516-7.997 4.728-20.643l-283.869 24.411"
        fill="#c60c3d"
      />
      <path
        d="m440.719 148.303s-23.626 16.155-15.435 30.09c0 0-8.574 4.75.9 11.434 0 0-14.644 6.591-10.771-11.494l-237.894 35.999s-5.088 21.542-38.826 41.941c0 0-2.474 1.451-2.695 4.158 0 0 .24 3.378-2.83 7.464 0 0-3.805 6.632-12.62 12.271l.63 4.421-4.128 9.472 10.107 14.511 9.144-24.684 18.105-13.905s17.718-27.728 46.856-38.581c0 0 25.708-10.97 63.242-4.758l3.427-3.288 43.455-.96s1.635.375.544 1.26c0 0-8.559 6.584-17.936 7.431l.87 2.673s.255.937-.446 1.162l-9.103 3.614-6.021 16.687 17.081-7.434.956.72s14.865.923 37.231-3.603c0 0 15.514-3.07 19.833-23.162l29.524-1.289s6.153 1.312 5.38 7.022l-2.114 16.74 13.504-12.03.937 3.157s10.231-11.078 12.855-17.418c0 0 11.232.225 14.003-4.315 0 0 1.271-1.275 4.863-11.157 0 0 1.683-6.943 8.623-13.774 0 0 5.372-5.031 8.356-18.24 0 0 3.603-19.143 3.573-22.79 0 0 3.873-18.937-9.103-24.515 0 0-9.643-5.32-27.694-3.843 0 0-3.599-12.563-28.482-29.786l-1.807 2.692s-8.503-5.852-20.541-5.717l-.611 1.672s-7.314-.053-23.271 1.612l1.484 4.417s-32.905 1.525-79.583 32.778l-.851 2.556-5.935 2.794 3.168 1.739s-35.661 12.878-61.614 34.113l241.655-19.852m-83.352 77.148 10.209-.116s2.043 13.475.832 19.484c0 0-2.013 8.934-11.134 12.428 0 0-13.436 5.687-33.584 6.978l-.975-.836-15.274 6.445 5.016-17.763s20.474-1.582 26.659-3.434c0 0 15.874-3.119 18.251-23.184m-125.76 5.269s-36.228-.435-61.038 28.789c0 0-.067 10.602-12.923 17.793l.476 3.348-6.108 8.416 10.839 14.524 12.215-27.065 56.539-45.806"
        fill="#00338d"
      />
    </svg>
  );
};

BUF.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

BUF.defaultProps = {
  size: '100'
};

export default BUF;
