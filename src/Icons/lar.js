import React from 'react';
import PropTypes from 'prop-types';

const LAR = props => {
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
        d="m416.955 150.929c-4.098-12.014-13.467-28.967-34.535-41.393-10.532-6.217-24.305-9.534-38.471-9.538-3.695 0-7.419.224-11.11.694-20.74 2.604-38.697 12.425-50.449 27.709-.782 1.019-1.519 2.08-2.228 3.158-65.313 10.295-116.792 52.649-119.074 54.524l-21.861 18.146 28.32 2.274c42.232 3.406 72.075 18.171 89.666 29.931 19.27 12.884 28.513 25.109 28.531 25.129l3.598 4.904 3.75 5.119 9.478-8.134c1.019-.872 1.969-1.835 2.852-2.863l.778.644c1.157.932 1.995 1.626 3.071 2.821.156.419.243.87.248 1.407-.035 2.08-.143 2.074-.709 3.474l-.283.659c-.315.765-.807 1.75-1.209 2.541l-.515.989-.156.289h.006l-2.858 5.211 38.034 21.373.682-.191c.031-.002 2.995-.828 3.659-1.022.6-.143 6.649-1.7 6.676-1.708 8.175-2.039 13.382-3.359 16.725-4.937l3.13-1.522 1.8-2.98c.491-.828 10.621-17.931 15.755-41.888 1.841-1.669 6.361-5.784 6.361-5.784l.483-.443.213-2.269.213-2.193c.185-2.03.276-4.074.276-6.111 0-3.3-.25-6.713-.72-10.167 11.523-6.776 16.669-16.394 19.746-24.016 2.645-6.513 3.947-13.786 3.947-21.312 0-7.425-1.272-15.099-3.819-22.527"
        fill="#fff"
      />
      <path
        d="m386.99 117.596c-2.122-1.55-4.328-3.056-6.706-4.458l.006-.002h-.006c-2.315-1.363-4.839-2.585-7.525-3.665-3.291-1.32-6.841-2.395-10.56-3.239-5.76-1.307-11.927-2.041-18.286-2.046-20.766 0-43.443 7.563-58.218 26.772-.378.489-.694 1.019-1.052 1.519-.68.95-1.374 1.887-1.991 2.878-.659.128-1.167.219-1.476.267-6.032.943-11.943 2.165-17.71 3.606-55.738 13.929-97.68 48.399-99.721 50.071l-13.949 11.586h.002l9.036.73 9.039.73c83.635 6.719 120.989 56.435 121.198 56.713l2.722 3.697 1.995 2.719 6.049-5.195.285-.269c1.933-1.722 3.439-3.643 4.595-5.574l.002-.002c.719.643 1.507 1.345 2.374 2.108 1.902 1.65 3.204 2.493 4.895 4.291.283.304.576.632.891 1.002.432.846.62 1.756.717 2.674.035.32.1.633.102.952v.004l-.006.133c-.019 1.128-.091 1.924-.211 2.563-.217 1.111-.587 1.783-1.107 3.061-.732 1.754-2.128 4.308-2.128 4.313l-.809 1.47 32.928 18.499 2.767-.763 3.332-.852 3.332-.856c7.725-1.935 12.954-3.239 15.962-4.672l1.546-.743.457-.222 1.146-1.906.202-.35c1.22-2.113 7.219-12.884 11.941-28.315 1.261-4.117 2.432-8.56 3.395-13.266l1.139-1.037c.969-.885 2.085-1.902 3.037-2.767l1.976-1.793.482-.446.287-2.839c.083-.969.081-1.909.122-2.861s.122-1.919.122-2.861c0-3.354-.263-6.643-.706-9.801-.122-.883-.254-1.758-.402-2.619 11.88-6.004 17.157-15.175 20.44-23.335.27-.669.474-1.385.717-2.074 1.874-5.367 2.909-11.36 2.909-17.708.002-7.449-1.391-15.355-4.321-23.131-4.497-11.917-12.688-23.507-25.257-32.693"
        fill="#024"
      />
      <path
        d="m378.564 116.077-.002-.007c-8.865-5.241-21.375-8.484-34.641-8.473-17.492 0-36.195 5.565-49.949 19.127-1.963 1.937-3.83 4.037-5.573 6.31-.8 1.043-1.546 2.133-2.267 3.245-.322.494-.648.983-.952 1.489l-.389.635-.367.076-.37.074-.848.163c-.613.12-1.146.219-1.493.274-25.061 3.893-48.116 12.756-66.965 22.14-28.692 14.282-47.606 29.774-48.81 30.789l-7.528 6.245 9.736.785c55.69 4.484 91.263 27.715 109.325 43.41l.085.072c1.015.883 1.956 1.732 2.861 2.559 7.513 6.9 11.24 11.823 11.403 12.049l2.541 3.458 3.261-2.796c2.332-2.006 3.947-4.38 5.106-6.73l.498-1.011.496-1.017 1.683 1.522c1.122 1.028 2.404 2.158 3.943 3.511 1.969 1.733 3.765 2.832 6.267 5.8l.113.137.081.146c.241.446.444.902.611 1.357.496 1.367.685 2.756.685 4.045v.002c.033 3.171-.633 4.878-1.298 6.415l-.287.65c-.433 1.046-1.026 2.228-1.493 3.15l28.789 16.164 1.439-.396 6.712-1.72c6.724-1.661 11.61-2.937 14.301-4.002.382-.15.722-.298 1.015-.444l1.085-.511.622-1.028c.1-.167.887-1.506 2.058-3.778 1.289-2.491 3.046-6.132 4.924-10.686 2.934-7.091 6.139-16.368 8.249-26.931l.107-.546.413-.374 1.263-1.157c1.608-1.47 3.845-3.5 4.824-4.385l.143-1.524c.161-1.817.246-3.619.246-5.404l-.019-.661c-.046-4.278-.524-8.475-1.28-12.401l-.239-1.296 1.189-.561c7.273-3.454 11.899-7.999 15.155-12.879l.106-.148.33-.522c1.789-2.804 3.158-5.7 4.326-8.563 2.037-5.015 3.171-10.871 3.321-17.105.011-.472.059-.924.059-1.398v-.002c-.007-19.668-10.038-42.84-34.602-57.339"
        fill="#fff"
      />
      <path
        d="m385.397 125.207c-6.267-5.011-13.097-8.319-19.766-10.436l-.081-.028-.535-.156c-18.02-5.539-34.569-2.683-34.719-2.658l.096-.006.317-.03c2.739-.217 18.627-1.141 34.537 5.434 3.056 1.261 6.186 2.958 9.26 4.998 7.897 5.252 15.356 12.943 20.033 22.375 1.815 3.669 3.235 7.586 4.061 11.736.181.904.322 1.782.461 2.658.548 3.497.787 6.782.787 9.812v.007l-.006.943c-.18 11.627-3.684 19.446-4.86 21.898-.363.757-.863 1.6-1.43 2.465-1.902 2.906-4.684 6.119-6.723 7.602-.546.398-1.08.737-1.602 1.028-1.061.594-2.061.965-2.958 1.15l-.02.007c-.446.091-.869.131-1.259.131-.3 0-.582-.026-.844-.076h-.007c-.269-.046-.52-.126-.754-.222-1.472-.683-1.974-2.45-5.36-7.199-.889-1.25-1.863-2.471-2.724-3.502-1.317-1.576-2.356-2.691-2.356-2.691.281-.256.532-.507.789-.776h.002l.061-.063.069-.067.08-.089.169-.174c.311-.332.596-.709.88-1.098.333-.448.626-.946.915-1.45.432-.759.83-1.559 1.161-2.437l.054-.169c.089-.235.157-.483.237-.726.08-.239.169-.476.237-.726 2.463-8.775.261-21.831-9.091-31.535-1.076-1.113-2.219-2.193-3.487-3.206-3.272-2.621-6.608-4.639-9.951-6.123-10.032-4.447-20.127-4.074-28.718-.633-19.273 7.736-30.933 30.933-17.164 49.897 6.663 9.197 17.512 9.788 24.248 4.626 6.317-4.841 10.551-19.647-4.984-27.578 11.703-.991 25.742 12.025 21.311 29.487-.296 1.163-.674 2.345-1.139 3.548-.548 1.398-1.187 2.719-1.909 3.935-.348.7-.735 1.402-1.145 2.104-.341.582-.694 1.161-1.078 1.743-12.562 18.909-49.925 17.718-63.574-12.503-7.737-17.134-5.856-31.041-2.637-40.039 1.463-4.091 3.204-7.167 4.443-9.075.482-1.339 1.02-2.667 1.589-3.972-56.918 12.304-93.765 46.725-93.811 46.768 52.266 10.852 82.67 35.265 97.396 50.768 7.697 8.104 11.11 13.766 11.123 13.792 2.954-2.533 4.552-5.943 5.456-8.747-4.489-7.345-3.73-14.319-3.289-16.675.102-.544.187-.843.187-.843 1.207 6.089 3.434 10.564 5.654 13.756.589.835 2.524 2.826 4.104 4.385.948.939 1.769 1.72 2.091 2.008l.404.243.013.119c3.993 3.545 8.736 7.521 9.575 9.038 1.337 2.406 1.826 4.915 1.856 7.228.013.928-.043 1.82-.15 2.663-.474 3.787-1.883 6.552-1.891 6.565l24.105 13.201c5.374-1.517 17.957-4.263 21.427-5.926 0 0 .378-.628 1.017-1.809.689-1.27 1.695-3.211 2.856-5.669 3.513-7.425 8.541-19.792 11.251-34.502l.002-.002 6.315-5.743c.081-.843.135-1.685.17-2.528v-.02l.02-.841c.026-.53.031-1.07.031-1.606v-.03l-.007-1.052c-.011-.461-.03-.922-.052-1.383-.019-.391-.028-.794-.054-1.176-.015-.348-.054-.691-.076-1.032-.143-1.82-.357-3.613-.628-5.35l-.03-.207c-.106-.663-.224-1.322-.348-1.972-.254-1.332-.519-2.641-.822-3.906v-.004c.519-.126 1.035-.269 1.557-.45 1.257-.424 2.517-.98 3.774-1.678 4.521-2.508 8.919-6.795 12.338-12.479 6.887-11.462 9.769-28.631 1.511-48.57-4.526-10.938-10.893-18.803-17.992-24.481"
        fill="#024"
      />
      <path
        d="m360.632 192.987v.009c.015.018 9.514 11.903 11.945 27.587.519 3.34.726 6.841.445 10.447l-2.519 2.339-1.304 1.209c.044 3.623-.074 9.388-1.63 16.231-.845 3.675-2.075 7.647-3.972 11.812-2.03-3.675-4.948-6.891-8.09-9.559-3.468-2.964-7.217-5.246-10.315-6.731-1.823-.865-3.423-1.46-4.624-1.746-1.971 1.119-5.306 2.979-8.64 5.291-2.534 1.734-5.054 3.72-6.98 5.854.385.534.86 1.526 1.26 2.519.385.978.711 1.941.785 2.416.267 1.452.415 2.801.459 4.061.163 3.601-.43 6.417-1.082 8.61.015 0 3.349 1.867 5.824 3.201 1.482.815 2.653 1.438 2.608 1.349.193-.682.311-1.289.43-1.912.8-3.987.193-6.847-.919-9.262-.771-1.689-1.764-3.171-2.653-4.728.504-.311 1.171-.697 1.912-1.126 2.623-1.512 6.313-3.512 8.27-4.327 2.519 3.498 3.824 9.248 1.111 17.458-.608 1.838-1.438 3.72-2.104 5.261-.222.519-.445.993-.608 1.438l.104.074c.504.341 3.216 1.778 3.186 1.675h.015c2.238-.445 4.357-1.467 6.121-2.905 1.63-1.349 2.934-3.053 3.675-5.054.459-1.245.267-2.193.104-3.157-.207.267-.474.622-.756.963s-.608.682-.948.919c-1.111-2.579-1.126-4.609.282-6.15.726-.8 1.526-1.082 2.505-1.126.4-.015.756.059 1.111.178.904.311 1.601 1.008 1.927 1.808.296.741.445 1.467.504 2.193.341 4.505-3.334 8.61-3.334 8.61s4.771-.207 6.134-.889c.815-1.645 2.134-4.402 3.646-7.899 3.69-8.536 8.551-21.637 10.3-34.857l4.387-3.933c.03-1.432-.015-2.835-.119-4.206-1.645-20.548-18.451-33.944-18.451-33.944zm.37 26.506v.003c0 .001.044.824 0 1.935-.044.904-.148 1.996-.415 3.022-2.281 1.215-3.852 3.629-3.852 6.414 0 4.001 3.244 7.243 7.245 7.243 0 0 .267-.622.548-1.689h-.015c-.83 0-1.601-.242-2.267-.631-1.349-.784-2.253-2.22-2.253-3.887 0-1.666.904-3.097 2.253-3.881.667-.391 1.438-.631 2.267-.631l.015.003.222.016c-.267-1.251-.682-2.562-1.289-3.895-.608-1.328-1.408-2.678-2.46-4.021zm4.239 12.843-.104.095c-.133.12-.4.339-.756.522-.37.178-.845.317-1.393.265-.356-.033-.756-.151-1.171-.399.593 1.438 2.149 1.78 3.053 1.409l.148-.35c.296-.83.222-1.543.222-1.543zm-55.559 16.517.015.119zm29.936 13.59s-2.801.207-3.008 1.186c1.867 1.689 1.675 6.432 1.689 9.737 0 .474.015.904.03 1.304.178-.667 3.275-5.187 1.289-12.226z"
        fill="#fff"
      />
    </svg>
  );
};

LAR.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

LAR.defaultProps = {
  size: '100'
};

export default LAR;
