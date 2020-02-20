import React from 'react';
import PropTypes from 'prop-types';

const IND = props => {
  const { size } = props;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 560 400"
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
    >
      <path
        d="M280.002 334.998c-26.006.115-45.943-7.309-55.488-12.345-18.695-9.814-34.103-22.807-47.363-40.842-19.064-25.852-22.751-46.667-24.273-58.004-.89-5.902-1.95-20.089.041-32.815 2.251-18.364 6.428-27.511 9.413-36.462 2.319-6.364 9.81-21.679 14.249-28.702 3.78-5.505 10.673-15.648 13.485-19.23.773-1.125-.228-.592-.649-.582-1.035.252-1.563.316-2.363.252-.592 0-1.788-.2-2.449-.397-3.715-.791-9.017-4.904-8.354-12.068-.135-1.59 1.59-15.244 2.917-19.489 1.722-5.963 5.303-8.748 11.67-9.281 3.179 0 16.566-.267 22.653.682 12.18 1.213 21.097 4.755 26.399 15.496 4.241 9.413 2.787 24.131-3.044 35.399-1.992 3.844-5.975 11.006-9.421 15.645-3.179 4.639-4.507 7.032-7.289 12.2-2.787 5.434-12.068 25.72-15.247 38.977-6.053 24.741-2.652 38.981 9.014 58.341 8.621 12.859 18.699 22.145 26.517 26.387 12.866 8.084 30.43 10.341 39.581 10.341 9.146 0 26.715-2.258 39.576-10.341 7.818-4.241 17.899-13.527 26.512-26.387 11.674-19.36 15.068-33.599 9.019-58.341-3.179-13.257-12.464-33.544-15.247-38.977-2.782-5.168-4.109-7.561-7.294-12.2-3.445-4.639-7.421-11.801-9.411-15.645-5.836-11.268-7.29-25.988-3.046-35.399 5.298-10.74 14.221-14.283 26.399-15.496 6.08-.949 19.475-.682 22.654-.682 6.367.533 9.944 3.318 11.669 9.281 1.328 4.245 3.049 17.899 2.917 19.489.661 7.162-4.642 11.276-8.358 12.068-.656.198-1.853.397-2.452.397-.791.064-1.324 0-2.359-.252-.424-.012-1.417-.543-.653.582 2.812 3.582 9.712 13.725 13.488 19.23 4.444 7.023 11.933 22.338 14.258 28.702 2.98 8.951 7.155 18.098 9.411 36.462 1.989 12.727.927 26.913.034 32.815-1.522 11.336-5.205 32.152-24.273 58.004-13.26 18.034-28.665 31.029-47.362 40.842-9.545 5.036-29.48 12.225-55.486 12.345"
        fill="#fff"
      />
      <path
        d="M279.85 309.444c1.725 0 3.12-1.395 3.12-3.115 0-1.725-1.395-3.124-3.12-3.124-1.722 0-3.12 1.399-3.12 3.124 0 1.722 1.399 3.115 3.12 3.115zm-83.051-39.508c1.722 0 3.12-1.395 3.12-3.12s-1.399-3.124-3.12-3.124c-1.725 0-3.12 1.399-3.12 3.124s1.395 3.12 3.12 3.12zm-18.562-72.123c1.725 0 3.12-1.399 3.12-3.118 0-1.73-1.395-3.125-3.12-3.125-1.722 0-3.12 1.395-3.12 3.125 0 1.72 1.399 3.118 3.12 3.118zm36.596-84.856c1.722 0 3.12-1.395 3.12-3.12s-1.399-3.12-3.12-3.12c-1.728 0-3.124 1.395-3.124 3.12s1.395 3.12 3.124 3.12zm151.503 153.861c0-1.725-1.399-3.124-3.12-3.124-1.722 0-3.12 1.399-3.12 3.124s1.399 3.12 3.12 3.12c1.722 0 3.12-1.395 3.12-3.12zm18.565-72.123c0-1.728-1.399-3.124-3.124-3.124s-3.124 1.395-3.124 3.124c0 1.722 1.399 3.12 3.124 3.12s3.124-1.399 3.124-3.12zm-36.591-84.856c0-1.725-1.404-3.12-3.125-3.12-1.725 0-3.12 1.395-3.12 3.12s1.395 3.12 3.12 3.12c1.722 0 3.125-1.395 3.125-3.12zm-126.453 204.07c-16.974-10.072-32.351-22.8-47.201-47.298-6.629-12.097-22.012-37.817-14.429-82.63 8.752-40.971 26.361-61.655 36.434-75.842 4.774-6.893-.129-10.872-3.976-9.413-3.225 1.223-5.437 1.3-5.437 1.3-5.699-.771-4.901-4.48-3.844-14.163l1.328-7.953c1.189-7.027 4.373-6.896 12.727-6.734 13.26.262 15.641.37 22.807 1.695 9.548 2.122 22.007 11.669 12.195 37.919-6.097 14.055-12.46 18.824-19.36 33.412-7.421 16.177-25.45 52.505-13.255 83.53 16.71 41.631 49.056 56.48 79.816 57.013 30.762-.401 66.296-18.565 80.508-57.013 12.195-31.027-5.834-67.353-13.26-83.53-6.891-14.586-13.255-19.357-19.357-33.412-9.81-26.25 2.655-35.796 12.198-37.919 7.159-1.324 9.545-1.432 22.805-1.695 8.351-.162 11.537-.293 12.726 6.734l1.333 7.953c1.06 9.682 1.852 13.392-3.847 14.163 0 0-2.217-.078-5.439-1.3-3.839-1.459-8.752 2.52-3.978 9.413 10.076 14.185 27.685 34.871 36.434 75.842 7.59 44.813-7.796 70.534-14.425 82.63-14.846 24.498-30.226 37.225-47.201 47.298-23.228 16.181-66.715 15.247-58.359 14.723 8.748.663-31.954 1.722-57.941-14.723"
        fill="#002c5f"
      />
    </svg>
  );
};

IND.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IND.defaultProps = {
  size: '100'
};

export default IND;
