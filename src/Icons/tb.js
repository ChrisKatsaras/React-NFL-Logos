import React from 'react';
import PropTypes from 'prop-types';

const TB = props => {
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
        d="m404.23 79.941s.63 11.512-1.545 22.05c-2.1 10.183-3.257 14.063-3.257 14.063-4.446 2.606-11.644 5.814-22.165 7.564-19.638 3.274-37.458-2-56.914-9.639-19.45-7.636-45.489-15.862-69.647-13.089-23.422 2.691-40.179 12.177-49.091 18.364-8.91 6.181-10.55 7.815-18.187 9.999 0 0 6.003 2.363 9.094 2.363 0 0-1.456 6.009-.911 8.003 0 0 12.728-5.819 14.183-3.091 1.456 2.73-4.547 4.552-8.726 5.637-4.18 1.095-15.097.905-15.097.905s5.12 3.963 6.927 6.715c0 0-9.65 4.202-20.382 2.746 0 0-.356 3.975 8.465 10.483-1.879.672-4.257 1.761-5.73 3.335 0 0 9.243-1.907 15.053 4.562 1.528 1.918 2.028 3.636 1.856 5.804-.316 3.93-1.824 5.43-5.526 7.876-2.117.862-4.369 1.939-6.541 3.268-10.222 6.286-17.697 15.847-22.944 26.766-2.273 4.732-4.091 10.226-5.374 15.215-1.284 5.013-1.757 9.462-2.057 12.243-.301 2.773-.712 11.516-.712 11.516s4.586-6.425 6.736-9.505c2.141-3.068 15.703-20.121 35.456-25.063 6.321-1.606 12.612-2.278 18.626-2.278 14.457-.011 27.37 3.913 35.013 7.654 11.095 5.369 29.32 18.043 53.215 22.005 5.624.928 11.688 1.388 17.974 1.388 6.031 0 12.273-.439 18.509-1.29-3.524 5.259-6.903 10.173-10.116 14.724-3.256-3.1-7.675-3.424-7.675-3.424-5.358-.506-8.043 2.757-8.043 2.757-1.083 1.172-1.896 2.696-2.212 4.492-.379 1.661.072 3.596.384 4.579 1.021 3.246 3.795 4.725 4.873 5.198-7.831 10.433-10.105 22.444-10.105 22.449l-3.574 3.153 1.29 5.225c-1.99 6.408 1.134 11.217 5.187 13.207 4.112 2.023 7.954.85 7.954.85 2.417-.678 4.608-2.202 6.098-4.437.227-.339.428-.684.605-1.028.835-.449 1.551-.955 2.163-1.5 1.129.127 4.019.216 4.019.216 5.925-.049 11.718-1.727 16.136-5.48 3.48-3.112 7.31-8.42 7.444-15.674 0-1.362.25-6.853-4.285-11.639 28.62-42.02 47.202-69.073 59.063-96.6 31.426-72.959 4.619-103.379 4.503-103.639"
        fill="#b1babf"
      />
      <path d="m406.546 92.505c-.316 15.218-4.486 25.819-4.486 25.819-5.958 3.568-14.089 7.376-23.378 8.755-19.403 2.867-28.936-.034-46.906-5.781-17.96-5.747-44.913-18.148-72.575-17.964-27.669.178-47.42 12.19-65.11 25.853.271-.083 4.613-1.439 6.18-1.956 0 0-4.129 4.846-5.386 7.543 0 0 8.232-6.153 19.532-5.497 0 0-3.93.983-5.569 3.441 0 0 4.586-.99 5.403.816.823 1.801-1.962 5.897-7.037 8.188-5.074 2.295-13.267 4.096-18.509 4.424 0 0 5.247 1.64 8.683 4.914 0 0-4.002.572-8.353 2.29-3.624 1.435-10.156 2.295-12.941 1.968 0 0 3.814 3.569 8.355 6.387 13.296 8.249 7.681 20.477 3.401 24.484-2.818.799-32.192 8.793-38.924 56.215 0 0 14.885-20.765 37.424-26.501 22.545-5.737 44.4 0 55.872 5.596 11.472 5.603 29.231 17.893 52.314 21.723 12.695 2.107 27.981 1.723 42.776-1.106-.239.367-11.527 17.159-16.379 23.929 0 0-3.602-4.524-8.478-4.975 0 0-2.045-.411-3.701.451v.006c-1.462.672-2.713 2.112-3.119 4.107-.411 2.023.322 3.591 1.278 4.702.911 1.062 2.057 1.6 2.985 1.85.829.201 1.979.706 2.196 1.801-2.223 3.424-5.27 8.372-7.465 13.152-1.723 3.763-2.547 6.992-3.236 9.166-.65 2.229-1.227 3.102-1.417 3.212l-2.34 2.062s.896 3.619 1.151 4.225c-.568 1.079-.85 2.268-.856 3.441v.066c0 2.458 1.212 4.869 3.413 6.321 1.718 1.184 4.202 1.256 4.202 1.256 2.451 0 4.858-1.212 6.308-3.391.35-.527.619-1.083.812-1.64 1.763-.716 2.846-1.718 3.407-2.54 1.307.301 5.109.417 5.264.417 5.314-.038 10.349-1.562 14.034-4.702 2.962-2.651 6.198-7.187 6.302-13.262 0-1.085.329-6.798-5.157-11.334 4.74-6.853 10.565-15.396 16.691-24.662 11.389-17.259 20.704-32.255 27.792-44.774 7.416-12.729 30.616-47.698 30.566-95.577-.023-13.951-5.019-22.912-5.019-22.912l-.001-.003z" />
      <path
        d="m367.874 132.195c-26.696-.161-55.609-15.18-81.26-20.906-54.056-12.061-80.247 16.164-80.261 16.176.006-.006 8.76-3.191 13.173-.323 4.797 3.119.566 11.161-.979 12.767-4.435 4.619-10.811 8.033-17.854 8.033 0 0 7.454 1.79 9.866 4.007 0 0-6.914.905-10.683 2.212-3.763 1.312-11.133 3.441-12.767 3.441 0 0 19.416 8.876 7.365 27.837 0 0 8.427-1.29 15.447 2.079 0 0-38.465-6.209-51.476 36.244 4.903-4.041 20.304-14.907 44.285-15.025 28.947-.127 41.366 6.531 52.866 13.496 17.53 10.627 30.786 13.773 40.859 15.653 28.943 5.403 58.009-4.331 70.601-10.2 36.558-56.013 40.766-87.647 41.387-110.238-11.811 11.889-31.606 14.801-40.576 14.746"
        fill="#d50a0a"
        stroke="#d50a0a"
        strokeWidth=".43772"
      />
      <path d="m327.463 190.815c-11.845 3.185-23.162 4.102-30.727 4.302l-.362-.267c1.818-.371 3.524-1.106 5.009-2.295 3.763-3.013 7.931-5.302 10.722-7.526 2.801-2.223 5.397-8.933 5.397-8.933 4.696-1.801 7.887-8.177 7.887-8.177s-.74-1.411-.807-3.129c-.072-1.723 2.607-4.63 5.391-9.788 2.785-5.153 3.397-12.211-1.206-19.965-4.579-7.715-17.214-11.688-17.325-11.722-.11-.04-12.584-4.486-20.886-1.095-8.349 3.407-12.118 9.399-13.008 15.191-.888 5.791-.511 9.726-1.6 11.06-1.095 1.329-2.534 2.013-2.534 2.013s-1.295 7.009 1.362 11.266c0 0-1.979 6.921-1.09 10.383.89 3.458 2.829 7.798 4.014 12.468.477 1.89 1.439 3.54 2.701 4.947l-.405-.006c-5.928-4.728-14.438-12.315-22.004-22.047-13.256-17.051-17.575-44.191-17.575-44.191-5.825 15.93-7.293 21.533-2.496 36.64 4.797 15.108 19.265 29.559 19.265 29.559-.35.84.161 2.384.161 2.384s-2.112-.644-8.482-.655c-6.37-.017-5.158.667-7.109.562-1.951-.106-2.507-.912-2.507-.912-.983.49-1.905 1.623-1.905 1.623-.929.1-5.492.623-5.009 5.103.489 4.48 5.17 4.202 5.17 4.202.845.968 2.072 1.379 2.072 1.379s2.763 7.298 10.728 7.643c6.921.299 9.154-3.92 9.622-5.031.178.422.379.856.589 1.295 1.407 2.874 3.564 6.064 6.482 8.955 2.913 2.884 6.603 5.486 11.061 6.988 6.786 2.256 13.618 1.561 18.97-.117 1.985-.623 3.918-1.428 5.721-2.462-.312 1.506-.634 5.869 4.702 9.548 6.558 4.53 13.161.373 13.161.373s1.229.417 2.49.15c0 0 3.568 3.047 6.658-.233 3.085-3.28-.233-6.448-.911-7.088 0 0-.062-1.462-.551-2.445 0 0-.922.305-2.545-.784-1.623-1.095-.244-.905-5.331-4.736-5.092-3.829-7.164-4.596-7.164-4.596s1.339-.922 1.566-1.801c0 0 20.261-2.797 33.2-11.951 12.934-9.16 15.146-14.519 20.104-30.737 0 0-19.816 19.042-40.677 24.656" />
      <path
        d="m287.829 193.844c-11.022-3.695-22.973 1.766-25.6 5.084-.106.136-.206.277-.291.427l-.032.058c.777-.637 1.638-.76 1.638-.76-1.364.631-1.304 1.994-1.071 2.499 1.987 4.862 8.194 12.847 17.535 15.982 9.516 3.192 19.399.61 23.826-2.181.516-.364 1.198-1.284.533-2.54 0 0 .52.531.791 1.381.116-.826-.065-1.997-.524-3.367-1.775-5.28-7.69-13.522-16.81-16.583"
        fill="#ff7900"
        stroke="#ff7900"
        strokeWidth=".43772"
      />
      <path
        d="m300.189 124.766c-12.245-.155-14.754 9.837-14.803 12.451-.038 2.105.1 3.53.034 4.374 1.244-.511 2.444-1.175 3.362-2.057-.212.244-3.67 4.18-7.364 4.597 0 0-.812 3.56-1.802 5.36-.977 1.806-2.892 3.04-2.892 3.04-.184 2.544 1.187 6.23 2.715 6.996 1.524.767 5.596 2.11 7.179 3.915 1.579 1.806 1.625 3.725 1.258 5.086-.117.561-.363 1.226-.558 1.71l.133.032c.333.117.52.347.513.469 0 0-.178.109-.311.315-.128.205-.35.734-.411.88-.223.549-.384.994-.575 1.545l-.011.049c-.176.528.356.712.356.712l.061.021c.428.078.891.174 1.368.274 0 0 .64.117.856-.456.205-.606.384-1.107.611-1.713l.044-.104v-.006l.017-.038s.14-.418.202-.668c.055-.233.299-.634.521-.634.233 0 .549.113.515.585-.034.473-.127.784-.144.839l-.011.066c-.21.744-.64 2.311-.64 2.311-.205.6.453.788.453.788.4.112.997.206 1.42.333l.082.017s.501.164.679.097c.182-.068.299-.347.333-.436.028-.089.695-2.417.767-2.667.051-.189.028-.566-.072-.782.034.004.64.112.979.223.284.1.661.25.85.394-.289.144-.477.623-.494.689l-.014.023-.143.455-.706 2.102c-.034.172-.068.599.432.788l.08.028c.417.155.943.343 1.332.498 0 0 .128.049.291.049.193 0 .432-.072.542-.405.1-.305.33-.983.529-1.6.195-.61.373-1.165.378-1.233.006-.116.143-.336.226-.408.227-.017.395.02.552.097.182.089.393.316.477.4-.123.21-.318.751-.367 1.045-.04.25-.333 1.32-.472 1.82l-.044.141-.011.055-.006.038c-.079.517.421.778.421.778.445.212.871.418 1.261.613l.061.021s.534.172.712-.356l.021-.038c.179-.556.321-1.017.474-1.583l.121-.469.023-.121c.01-.04.088-.316.11-.489l.011-.234.64.268c.14-1.168.64-2.042.64-2.042.112-.267.273-.494.445-.7l-.011.006c.638-1.1 1.8-2.187 3.728-2.587 2.351-.483 6.405.894 8.089 1.206 1.483.271 4.246-1.341 5.824-3.202l.487-.767s-.788-2.139-.481-4.172c.311-2.028 1.806-5.367 1.806-5.367-2.779-2.633-3.099-8.113-3.099-8.113.172 1.111.621 2.224 1.204 3.269.489-.74 1.437-1.747 2.494-3.214.75-1.049 2.118-3.893 2.118-7.371 0-3.956-1.768-8.742-8.208-12.659l-.072-.044-.244-.147c-.829-.5-1.651-.938-2.422-1.31-.356-.172-.702-.326-1.029-.476-.333-.145-.648-.281-.949-.404l-.651-.253-.449-.174c-.494-.184-.908-.316-1.207-.411l-.176-.061c-.611-.195-2.952-.901-5.868-1.507-1.484-.253-2.854-.378-4.12-.394zm-60.496 10.182s-1.769 11.057 6.813 26.777l.614 1.107c.402.652.905 1.529 1.553 2.59 3.109 4.979 7.244 10.33 12.779 15.903.018.017 6.899 6.806 9.832 9.391 1.135-.311 2.327-.566 3.561-.767-4.086-3.38-8.112-7.08-11.793-11.067-18.606-20.156-22.161-38.901-23.357-43.934h-.001zm39.045 33.669c-.597.007-1.302.106-1.737.469 0 0 .504 2.786 1.869 5.234 1.363 2.448 2.988 6.745 3.591 8.48.247.713.729 1.521 1.519 2.331 1.084-.603 3.742-.414 6.635.559 2.769.931 4.931 2.296 5.552 3.403.995-.184 1.783-.515 2.364-.901 1.529-1.021 5.412-3.468 7.981-4.597 2.564-1.13 4.647-3.047 4.647-3.047-.21-.916-1.452-1.692-1.878-1.937-.256.047-1.268.25-1.776.624-.58.428-2.693 3.568-5.457 4.749.261-1.555-.743-2.358-1.001-2.33-.256.03-.46.64-.513.794-.054.157-.587 1.206-.77 1.699-.182.494-.127.532-.127.532-.445-.011-.89-.037-1.329-.072.422-.798.802-1.591 1.158-2.382.257-.661-.448-.802-.448-.802l-.006-.006c-.394-.061-.786-.128-1.18-.202h-.044c-.493-.088-.791.222-.854.411l-.15.373c-.179.436-.374.871-.562 1.308l-.028.073c-.223.551-.035 1.01-.035 1.01-.154-.01-.52.003-1.137-.119-.292-.058-.683-.232-.683-.232.217-.178.35-.515.35-.515h.003l1.001-2.451s.24-.644-.179-.767c-.566-.141-1.13-.298-1.69-.466-.425-.09-.61.261-.657.374l-.289.729-.642 1.837-.003.021c-.133.393-.031.764-.031.764s-.544-.112-.83-.188c-.288-.076-.719-.377-.719-.377.069-.072.152-.267.212-.405.261-.912.507-2.053.726-3.006.016-.134.02-.529-.381-.698-.477-.175-.955-.359-1.423-.552-.417-.131-.599.21-.664.414-.189.863-.412 1.896-.555 2.645-.059.525.179.894.179.894-.22-.055-.668-.249-1.027-.4-.234-.099-.755-.442-.755-.442.267-.024.419-.59.419-.59.298-.614.496-1.149.729-1.731l.03-.08.02-.052c.23-.618-.202-.946-.273-.998-.62-.309-1.317-.676-1.324-.676-.354-.189-.592.064-.666.306-.247.696-.631 1.326-.764 2.091-.062.433-.028.738-.028.738-.846-.402-1.155-1.039-1.155-1.039.201-.241.47-1.094.477-1.892.008-.799.058-1.545-.315-1.809-.374-.265-.995.405-1.316.88-.318.473-.394.75-.394.75v.061c-1.501-2.605-1.292-6.395-1.492-7.09-.208-.692-1.087-1.617-1.087-1.617s-.491-.086-1.09-.08l.004-.003zm82.906 7.259c-.021.041-.707.607-1.812 1.502-.474.391-.993.812-1.581 1.278-6.439 5.085-19.865 14.23-41.733 18.16-5.301.952-10.7 1.474-15.96 1.707.866.895 1.658 1.805 2.379 2.729 0 0 2.3-.167 2.618-.193 3.969-.333 7.937-.816 11.858-1.525 9.7-1.751 17.034-4.23 20.518-5.539.815-.322 1.591-.652 2.352-.983 17.135-7.433 21.255-16.895 21.359-17.137l.001.001zm-113.266 18.499c-1.265.006-2.53.131-3.783.306-1.11.154-2.176.347-3.202.339-.326-.001-.641-.025-.946-.083-.288-.054-.568-.136-.843-.253.011.045.609 2.575 3.951 2.575l.169-.295c.319-.604.947-1.18 1.535-1.522l.017-.011c1.027-.617 2.638-.993 3.657-1.048zm.709.008c-.908.175-1.95.503-2.68.981-.846.549-1.394 1.234-1.682 1.82 2.773-.328 8.029-.26 9.357-.03l.03-.031c.767-1.211 1.902-1.752 2.728-2.026-1.375-.219-2.986-.404-4.372-.527-.689-.062-1.378-.11-2.069-.144-.438-.021-.875-.035-1.313-.044zm28.789 2.518c-.384.465-.746.945-1.086 1.439-.385-.055-.768-.104-1.145-.148l-.113.143c-.325.408-.64.829-.94 1.264l-.287.425c.435.075.877.154 1.32.24-.419.803-.779 1.641-1.063 2.512.688.086 1.375.185 2.06.304.287-.827.626-1.625 1.008-2.399.707.155 1.425.325 2.146.507-.343.754-.659 1.526-.94 2.32.676.148 1.354.309 2.021.487.274-.775.569-1.536.875-2.283.692.198 1.387.409 2.087.631-.268.748-.535 1.505-.796 2.273.661.205 1.316.426 1.968.661.254-.77.5-1.538.737-2.297.693.244 1.374.497 2.046.757-.206.781-.432 1.566-.682 2.352.641.261 1.276.541 1.906.832.254-.808.473-1.62.654-2.431.686.287 1.357.58 2.016.88-.162.854-.373 1.703-.644 2.543.616.319 1.226.654 1.823 1.001.302-.877.524-1.771.674-2.676.405.196.803.397 1.197.596l.021-.452c.024-.522.028-1.042.017-1.559l-.006-.275c-.328-.189-.661-.374-1.001-.561.024-.585.023-1.172-.003-1.759-.563-.321-1.12-.624-1.675-.912-.01.582-.041 1.169-.09 1.754-.618-.306-1.252-.609-1.903-.899.086-.58.16-1.161.216-1.737-.545-.256-1.087-.491-1.631-.717-.102.565-.216 1.135-.339 1.71-.623-.251-1.258-.493-1.906-.723.168-.563.329-1.123.486-1.673-.542-.196-1.089-.378-1.641-.549-.208.534-.414 1.076-.62 1.627-.658-.205-1.312-.394-1.961-.568.25-.535.505-1.062.767-1.577-.568-.145-1.145-.28-1.733-.405-.305.497-.6 1.007-.885 1.528-.698-.158-1.389-.298-2.07-.422.316-.507.651-1 1.001-1.478-.616-.103-1.244-.199-1.886-.281zm33.826 16.605c.491.713 1.082 1.882.966 3.307 1.192.617 5.426 3.731 7.44 5.669.123-.642.1-1.519-.246-2.468-.292-.823-.925-1.71-1.545-2.399l-.24-.179c-.634-.455-1.286-.888-1.944-1.31-.919-.59-1.851-1.158-2.799-1.704-.449-.258-.904-.51-1.357-.764l-.275-.151zm6.724 4.181c.04.034 1.898 1.992 2.304 3.061.244.603.38 1.353.34 2.005-.01.179-.037.34-.069.49l.008.014.347.249c.185.124.378.233.576.336.313.161.64.287.981.37.244.059.515.096.767.096.733 0 1.415-.285 1.994-.719l.028-.02c-.282-.069-.551-.167-.808-.292-.281-.138-.552-.315-.819-.513-.353-.264-1.395-1.245-1.646-1.501l-1.035-1.028c-.419-.414-1.33-1.258-1.757-1.581-.093-.069-1.213-.967-1.213-.967zm33.103 20.827-.217.071c-2.484.778-5.011 1.454-7.567 2.077-.145.219-3.819 5.707-8.095 12.025v.003c-4.274 6.316-9.151 13.462-11.698 17 .123.106 3.557 3.044 3.668 3.133.689-.928 6.032-8.543 11.519-16.406v-.003c2.744-3.931 5.524-7.923 7.777-11.175v-.003c2.252-3.25 3.979-5.758 4.613-6.72v-.003zm-34.943 37.833-.167.249c-1.172 1.823-2.327 3.657-3.427 5.524-1.056 1.79-3.13 5.791-3.208 5.946-.011.083-.515 3.067.04 5.383l.006-.014-.003.02c3.421-7.533 7.272-12.568 7.277-12.572-.702-2.067-.565-4.15-.518-4.534zm-6.892 11.912-.448.929c-3.044 6.658-2.951 11.446-5.935 14.089l.202.042c.801.106 3.824-.011 5.385-7.184v-.006c-.106-.4-.195-.813-.25-1.264-.261-2.073.371-4.915 1.034-6.571v-.003l.011-.032z"
        fill="#fff"
      />
      <path
        d="m282.567 220.936c-6.79-1.229-12.897-5.411-17.256-11.817-2.674-3.93-4.26-8.757-3.194-9.722.469-.424.664-.4.421.054-.401.75-.215 1.785.586 3.254 4.276 7.844 11.927 13.702 20.063 15.361 6.401 1.305 13.964.386 19.431-2.364 1.523-.766 2.106-1.383 2.12-2.242.006-.319.02-.321.196-.016.451.771-.939 2.486-3.141 3.877-2.521 1.593-6.199 2.921-9.804 3.537-2.605.445-7.185.483-9.423.078z"
        fill="#d50a0a"
        stroke="#d50a0a"
        strokeWidth=".353"
      />
      <path d="m283.777 145.627s-2.27 4.158-2.471 6.314c-.205 2.162-.35 4.181 2.005 5.764-.072-.1-.976-1.401.179-2.078l.133-.089.121-.088c.006 0 .263.359.429.527 1.245 1.204 4.472 2.944 6.579 3.05l.049.011s.041.674-1.394 1.629c0 0 2.313.737 4.052-.217 1.744-.956 4.048-5.316 6.982-4.366 2.912 1.017 2.122 5.882 2.934 7.694.784 1.761 2.961 2.567 3.094 2.612-.555-1.618-.121-2.135-.121-2.135l.04.017c1.74 1.189 5.361 1.747 7.084 1.535.229-.027.657-.162.668-.162l.006.006.088.289c.528 1.295-1.121 1.773-1.121 1.773 2.849.155 3.939-1.545 5.085-3.389 1.151-1.84 1.845-6.53 1.845-6.53l-.008-.017s-2.21-.556-4.733-.267c-.239.027-.477.062-.723.102-2.806.511-5.425.936-7.22.33-.589-.195-1.1-.527-1.533-.888l-.021-.021-.332-.301v-.006c-.594-.572-.984-1.111-1.067-1.233l-.035-.044c-1.306.672-6.076-.929-6.682-2.245 0 0-.736.244-1.658.356v.006l-.449.032-.028.006c-.561.028-1.179-.018-1.762-.212-1.795-.6-3.623-2.522-5.556-4.623-.168-.178-.339-.349-.517-.515-1.778-1.694-3.795-2.578-3.924-2.628l.017.021-.034-.021zm14.484 13.524c-.946.062-1.758.609-2.046 1.45-.239.722-.638 1.154-1.155 1.727v.004l-.017.023c-.395.473-.7.652-1.079.897-.367.222-.884.616-1.089 1.271l-.295.877c-.395 1.179.384 2.501 1.734 2.957 0 0-.589-.733-.295-1.61l.011-.04c.189.195.412.361.69.455.867.289 1.782-.114 2.043-.904.044-.128.189-.202.328-.157.14.049.219.193.174.328-.265.784.215 1.661 1.076 1.95.278.089.558.088.819.055l-.014.035c-.294.873-1.204 1.106-1.204 1.106v.006c1.356.45 2.779-.134 3.174-1.317l.295-.877c.233-.645.048-1.275-.103-1.669-.15-.422-.289-.748-.316-1.365v-.01l-.006-.023c-.056-.767-.11-1.346.128-2.069.378-1.128-.316-2.391-1.572-2.896l-.162-.061-.144-.038c-.33-.093-.661-.126-.976-.104zm-29.514 38.861c-1.984.059-3.658.261-4.891.535 2.978.027 6.665.328 10.721 1.051.301-.435.613-.856.938-1.262-2.485-.297-4.782-.381-6.768-.323zm25.995 6.81c.011.515.007 1.035-.017 1.557 3.564 1.814 6.597 3.726 8.931 5.446-1.593-1.896-4.717-4.544-8.914-7.004z" />
      <path
        d="m298.353 124.526c-12.814.055-16.457 9.592-16.996 11.775-.572 2.323-.566 5.267-.7 6.6 0 0 2.463-.349 4.763-1.31.066-.844-.072-2.268-.032-4.373.055-2.885 3.105-14.753 18.924-12.057l-.078-.017c-.517-.106-1.049-.212-1.6-.306-1.528-.216-2.952-.311-4.28-.311zm16.29 3.915c.772.373 1.594.813 2.422 1.313l.246.143.071.045c6.44 3.917 8.208 8.702 8.208 12.657 0 3.479-1.368 6.324-2.118 7.375-1.056 1.467-2.004 2.471-2.494 3.209.89 1.607 2.073 3.041 2.951 4.002.75-1.217 2.46-3.351 3.321-5.512h.003c.949-2.406 4.6-14.991-11.964-22.959l-.645-.273zm-74.952 6.505-.107.318c-.719 2.118-.988 4.429-1.106 6.652-.199 3.76.152 7.543.949 11.221.846 3.908 2.198 7.674 3.855 11.307 1.696 3.719 3.793 7.249 6.128 10.601 2.876 4.129 6.156 7.972 9.713 11.53 1.526 1.526 3.102 3.003 4.719 4.434.198.176 1.816 1.789 1.977 1.713 1.01-.481 2.112-.926 3.284-1.334-16.412-14.313-22.651-29.752-22.651-29.752-8.526-15.672-6.765-26.69-6.765-26.69zm49.796 7.687c-.185.007-.364.028-.538.072 0 .072 3.733 2.294 5.772 4.422 1.944 2.245 5.008 5.056 6.854 5.651 1.834.64 5.966.244 8.877-.371 2.928-.473 7.275.017 7.275-.045-1.795-2.222-7.906-1.588-11.351-1.428-2.985.233-3.879-.209-4.085-.287-.199-.056-1.185-.246-3.435-2.234-2.479-2.069-6.584-5.88-9.369-5.781zm-5.706 2.992s-2.27 4.161-2.471 6.317c-.205 2.16-.35 4.175 2.002 5.76-.079-.112-.969-1.399.182-2.074l.133-.089.121-.096c.023-.023-.4-.755-.428-.81-.666-1.613-.51-3.618-.093-5.234.121-.473.265-.938.449-1.394 0 0 .723-1.562.306-2.189l-.155-.164-.01-.006-.037-.021zm-7.054 6.905s-.145 1.416-.145 2.844c0 .572.018 1.152.079 1.635.034.244.078.467.127.657.439 1.512.489 2.467 3.762 3.906 1.117.489 2.224 1.01 3.284 1.61 1.59.901 3.303 1.964 3.963 3.77l.014.049c.178.456.196 1.022.075 1.49.356-1.358.304-3.256-1.261-5.046-1.584-1.806-5.659-3.15-7.181-3.915-1.528-.768-2.899-4.452-2.717-6.998zm11.158 15.96-.068-.223c-.145-.284-.393-.489-.555-.755l-.017-.023c-.356-.405-.737-.777-1.187-1.083v.017l-.011-.023s-.347 1.207-.885 2.095c-.306.511-.633 1.077-.977 1.857l-.01.032c-.674 1.747.112 3.589.295 3.599.216.017.676-.192 1.549-2.642l.095-.301c.021-.117-.017-.33-.066-.501l.011-.028c.106-.401.617-.367.94-.328l.325.055c.193-.484.441-1.149.558-1.71l.006-.04h-.001zm9.805-15.286s-.955 1.463-1.577 2.279c-.628.822-3.296 3.78-5.306 3.557h-.003s.041.672-1.394 1.627c0 0 2.311.738 4.05-.217 1.745-.956 4.052-5.315 6.988-4.366 2.912 1.018 2.119 5.882 2.931 7.695.782 1.761 2.961 2.57 3.094 2.614-.555-1.617-.119-2.135-.119-2.135h-.006c-1.74-1.039-2.09-5.013-2.095-6.042-.006-1.022.114-2.738.121-2.766-1.306.672-6.08-.928-6.684-2.245zm22.303 4.585-.225.032c-.71.25-1.077 1.933-1.077 1.933-.14.505-.312 1-.518 1.484-.473 1.089-1.128 2.149-1.956 3.012-.623.65-1.305.973-2.066 1.401l.088.289c.528 1.295-1.123 1.773-1.123 1.773 2.847.155 3.941-1.548 5.086-3.393 1.145-1.838 1.84-6.526 1.84-6.526l-.049-.006zm-21.724 1.361c-.947.064-1.761.607-2.049 1.449-.239.722-.638 1.156-1.156 1.728v.006l-.017.023c-.394.472-.698.65-1.075.894-.369.222-.884.617-1.09 1.274l-.298.877c-.394 1.179.385 2.502 1.735 2.957 0 0-.589-.733-.295-1.611l.014-.038c-.39-.405-.579-.962-.4-1.49l.308-.918c.311-.94 1.124-.854 2.074-2.043.511-.59 1.029-1.158 1.334-2.069.246-.734 1.072-1.138 1.889-.932-.33-.093-.661-.126-.976-.106zm1.274.205c.767.337 1.178 1.152.932 1.886-.305.905-.251 1.665-.195 2.448.038 1.516.733 1.94.421 2.879l-.311.919c-.176.532-.666.864-1.227.947l-.011.034c-.297.873-1.206 1.106-1.206 1.106v.006c1.356.45 2.777-.134 3.171-1.319l.295-.877c.233-.644.049-1.271-.102-1.665-.15-.422-.288-.753-.315-1.368v-.011l-.006-.023c-.055-.767-.112-1.346.127-2.067.378-1.132-.319-2.393-1.574-2.896zm-53.033 2.372c.201.366.404.736.616 1.108zm31.802.496-.011.047c-.114.469-1.032 4.276-1.243 6.125-.03.257-.03.456-.042.682.88-.713 2.816-.38 2.816-.38-.018-.134-.024-.319-.021-.541.02-1.449.419-4.456.476-4.878l.008-.049c-.47-.275-1.98-1.007-1.98-1.007zm-1.296 6.854-.016.01.013.055zm-.003.065c-.072 1.461.175 2.344.491 3.327.367 1.145 2.095 6.046 2.52 7.382l.179.618c.459 1.692 1.258 4.982 2.865 6.713 1.823 1.964 3.582 2.848 5.752 3.579l.023.006.02.008c1.084.363 2.114.633 3.198.755 1.086.121 2.231.095 3.55-.138 2.659-.472 5.703-3.202 6.848-4.013 1.148-.809 5.481-3.675 6.464-4.367.983-.695 1.805-1.275 2.813-2.979 1.011-1.71 2.72-5.68 2.72-5.68s-1.639-.323-2.182-.388l-.025.044c-.241.426-2.197 3.876-2.909 4.597l-.058.008c.426.244 1.665 1.022 1.875 1.939 0 0-2.083 1.915-4.647 3.044-2.568 1.13-6.451 3.579-7.982 4.599-.579.387-1.367.719-2.362.902-.621-1.108-2.783-2.475-5.552-3.406-2.895-.973-5.553-1.161-6.638-.558-.789-.809-1.272-1.62-1.519-2.333-.602-1.737-2.227-6.033-3.591-8.48-1.343-2.41-1.84-5.092-1.855-5.179h.001zm44.049-.799c-1.577 1.861-4.336 3.472-5.819 3.2-1.685-.312-5.741-1.689-8.092-1.204-1.933.4-3.092 1.494-3.736 2.599l.023-.016.021-.023c1.3-1.5 3.66-1.439 5.445-1.21 1.394.172 2.777.463 4.144.791 3.485.823 4.1.096 5.356-.849 1.079-.812 1.964-2.06 2.621-3.228l.038-.061zm-15.327 4.664c-1.761-.083-2.744.61-2.744.61s-.501.874-.64 2.04l.81.378c.116.066.305.138.377.256.167.239.213.335.213.335l-.483.076c-.089-.006-.491.138-.491.26-.777 2.489-.539 2.93-.356 3.047.157.099 1.891-.894 2.407-2.694 0-.011.291-1.512.35-2.107.107-.962.505-2.057.555-2.19l-.008.006.008-.017zm55.912 2.868c-.104.243-4.222 9.706-21.357 17.14l-.107.086s-14.241 8.478-35.879 10.027c.692 1.028 1.303 2.047 1.817 3.044 6.732-.377 13.544-1.313 19.983-3.099 4.116-1.142 8.167-2.591 12.032-4.415 3.891-1.837 7.707-4.033 11.062-6.739 2.189-1.766 4.239-3.671 6.12-5.761 2.588-2.875 4.953-6.298 6.23-9.979l.1-.302v-.001zm-101.074 13.729c-.181.051-.306.198-.256.486.048.287.34 1.125-.089 2.41-.429 1.289-1.394 2.121-2.344 2.537-.947.414-2.112 1.356-2.44 2.892-.325 1.536-1.155 3.558-.925 4.893.088.508.59 1.213 1.751 1.163-.792.657-1.542.606-2.15.329-.96 1.772-2.405 2.505-5.035 1.994-2.693-.522-6.103-3.104-6.81-7.462.001-.093 1.299-.086 1.418-.086h.017c-.16-.208-.33-.51-.342-.836-.004-.181.071-.414.188-.664-3.344 0-3.941-2.533-3.952-2.58 0 0-1.06.851-1.106 2.306-.116-.6-.594-1.087-1.23-1.183-.806-.123-1.562.431-1.683 1.238-.121.808.436 1.56 1.241 1.683.806.12 1.56-.432 1.682-1.238l.006-.058c.02.172.051.352.103.538.14.514.333.88.529 1.158.47.665.981.761.981.761l.078-.099c.034-.042.336-.357.374-.332-.337-.219-1.781-1.31-.904-3.698 0 0-.051 2.155 1.731 3.301.196.892 1.597 6.223 6.823 7.882 5.707 1.813 7.904-.908 8.417-1.933.233-.469.816-1.922.816-1.922.496-1.418 1.749-6.932 2.22-7.574.47-.644 1.886-3.226 1.313-5.597 0 0-.117-.39-.422-.309zm-10.628 7.358c-1.826-.006-3.834.059-5.22.223-.144.297-.244.572-.24.781.008.319.161.607.306.822 0 0 5.083.273 8.281 1.149.127-.455.291-1.015.51-1.693.137-.432.323-.794.529-1.12l-.03.03c-.665-.114-2.31-.188-4.137-.192zm61.926 9.806c-.174-.035-.356.099-.356.099-1.891 1.546-2.317 4.459-2.331 5.257-.011.798-2.34 5.95-2.799 7.378-.02.059-.415 1.284-.507 2.026-.141 1.138-.099 4.623 5.545 6.621 5.168 1.83 9.483-1.6 10.179-2.197 1.453.107 2.505-.648 3.017-1.154.234-.23.373-.408.373-.408-.559 1.833-1.721 2.282-2.433 2.383-.232.032-.418.031-.518.021l.032.124c.082.308.066.491.066.491s.168.08.457.099c.409.025 1.067-.073 1.909-.719.143-.113.25-.233.364-.352-.329.695-.073 1.531.611 1.903.71.387 1.597.123 1.981-.587.385-.707.121-1.6-.587-1.982-.524-.285-1.139-.213-1.581.124.429-.709.48-1.433.456-1.889-.003-.078-.052-.431-.058-.433l-.023.011c-.579.435-1.261.72-1.994.72-.251 0-.522-.038-.767-.096l-.003.003c-.342-.083-.669-.209-.981-.37-.198-.103-.388-.212-.573-.336l-.349-.249-.014-.011c-.058.268-.137.503-.25.645-.205.254-.524.388-.772.46l.014.011c.373.298.755.562 1.076.921-3.194 3.049-7.469 3.053-9.935 1.845-2.409-1.182-3.118-2.638-2.813-4.638-.651-.145-1.279-.548-1.514-1.55l.072.049c.555.449 1.46.613 2.021.08.505-.481.898-1.269 1.252-2.118.323-.779.606-1.576.963-2.338.144-.311.246-.648.301-.986.161-.949-.038-1.96-.505-2.799-.503-.904-.774-2.15-.336-3.44.436-1.281 1.171-1.772 1.381-1.971.216-.198.203-.395.089-.546-.048-.061-.106-.092-.162-.104zm.794 10.044s-.11.736-.261 1.169c-.24.675-.443 1.217-.618 1.655 2.838 1.278 5.532 2.869 7.303 4.082.25-.085.539-.222.738-.472.128-.164.219-.443.282-.767-2.015-1.939-6.252-5.051-7.444-5.668zm48.364 18.237c-1.8.755-3.623 1.48-5.497 2.141-5.356 8.423-23.626 35.588-25.22 37.86.979.818 1.862 1.567 2.546 2.19l.11.083c4.674-6.762 24.439-36.545 28.061-42.274zm-49.599 30.945s-.693-.1-.794.438c-.051.329.086.634.582.767.49.128 2.028.284 3.745 1.901s2.33 3.75 2.297 5.552c-.044 1.8.593 4.339 2.777 5.978 2.194 1.639 4.784 4.407 7.057 5.041.138.04.273.061.411.072 1.507.134 2.933-1.224 2.705-1.985.496 1.645.044 2.84-.695 3.695 2.523 2.484 3.745 5.32 2.957 7.87-1.007 3.279-4.667 7.684-11.362 7.595-4.768-.061-7.57-1.389-8.793-2.15l.439-.986c-2.796.674-3.817-3.465-3.862-3.649-1.562 7.174-4.585 7.29-5.385 7.184l-.199-.038s.602 2.344 2.934 3.466c-1.062-.318-2.239.068-2.885 1.045-.788 1.189-.46 2.797.729 3.585 1.195.784 2.796.459 3.591-.736.782-1.189.462-2.793-.733-3.577l-.179-.095c.315.117.638.223 1.017.285 3.112.517 4.134-.986 4.134-.986s-.21-.428-.356-1.028c0 0-3.077 2.169-6.478-1.272.117.04 1.237.428 3.171.11 2.883-.428 3.28-1.333 3.475-1.5l.023-.083c2.494 1.357 5.25 1.988 9.172 2.066 4.4.083 8.613-1.293 11.091-3.455 2.474-2.156 5.401-6.735 4.305-11.569-.922-4.051-6.072-8.002-7.262-8.869-2.544-2.251-9.123-7.39-9.746-8.503-.672-1.211-3.716-5.339-7.885-6.172zm5.671 14.884c-.006.006-3.856 5.041-7.277 12.575.089.373.205.727.354 1.051 1.056 2.251 1.99 2.866 3.856 2.755 0 0 4.362-7.441 7.44-11.42-.634-.528-1.394-1.199-2.304-2.038-1.018-.933-1.663-1.934-2.069-2.923zm7.492 9.233c-1.193 1.562-2.573 3.678-3.684 5.496-.494.806-.938 1.556-1.305 2.174.395.038.799.055 1.211.055 1.293.006 2.633-.202 3.646-.618 1.395-.517 2.965-2.482 2.882-3.828 0-.328-.066-.623-.21-.929-.549-1.149-1.723-1.944-2.54-2.35z"
        fill="#b1babf"
      />
    </svg>
  );
};

TB.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

TB.defaultProps = {
  size: '100'
};

export default TB;