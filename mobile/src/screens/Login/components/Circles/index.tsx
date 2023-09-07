import {Defs, LinearGradient, Svg, Stop, Circle, Path, SvgProps} from 'react-native-svg';

export const Circles: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="228" height="238" viewBox="0 0 228 238" fill="none" {...props}>
      <Circle
        cx="21.5278"
        cy="31.5277"
        r="146"
        transform="rotate(142.246 21.5278 31.5277)"
        stroke="url(#paint0_linear_413_102)"
        stroke-opacity="0.2"
      />
      <Path
        d="M-84.3866 113.547C-129.683 55.054 -118.751 -29.2705 -59.9627 -74.7961C-1.17396 -120.322 83.2031 -109.804 128.5 -51.3108C173.796 7.18218 162.865 91.5067 104.076 137.032C45.2871 182.558 -39.09 172.04 -84.3866 113.547Z"
        stroke="url(#paint1_linear_413_102)"
        stroke-opacity="0.2"
      />
      <Path
        d="M-73.8084 105.355C-114.581 52.7047 -104.718 -23.2164 -51.771 -64.2181C1.17585 -105.22 77.1494 -95.7699 117.922 -43.1192C158.694 9.53146 148.831 85.4525 95.8844 126.454C42.9375 167.456 -33.036 158.006 -73.8084 105.355Z"
        stroke="url(#paint2_linear_413_102)"
        stroke-opacity="0.2"
      />
      <Path
        d="M-63.2304 97.1638C-99.4785 50.3555 -90.6846 -17.1622 -43.5796 -53.64C3.52546 -90.1179 71.0955 -81.7359 107.344 -34.9276C143.592 11.8807 134.798 79.3983 87.6927 115.876C40.5877 152.354 -26.9824 143.972 -63.2304 97.1638Z"
        stroke="url(#paint3_linear_413_102)"
        stroke-opacity="0.2"
      />
      <Path
        d="M-52.6522 88.9722C-84.376 48.0063 -76.6511 -11.108 -35.3879 -43.062C5.87539 -75.0159 65.0419 -67.7019 96.7656 -26.736C128.489 14.2298 120.764 73.3441 79.5012 105.298C38.238 137.252 -20.9285 129.938 -52.6522 88.9722Z"
        stroke="url(#paint4_linear_413_102)"
        stroke-opacity="0.2"
      />
      <Path
        d="M-42.0743 80.7806C-69.2736 45.6573 -62.618 -5.05365 -27.1964 -32.4839C8.22518 -59.9141 58.9881 -53.6678 86.1874 -18.5445C113.387 16.5789 106.731 67.2898 71.3095 94.72C35.8879 122.15 -14.875 115.904 -42.0743 80.7806Z"
        stroke="url(#paint5_linear_413_102)"
        stroke-opacity="0.2"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_413_102"
          x1="21.5278"
          y1="-114.972"
          x2="21.5278"
          y2="178.028"
          gradientUnits="userSpaceOnUse">
          <Stop stop-color="#393F4B" />
          <Stop offset="0.640625" stop-color="#393F4B" stop-opacity="0" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_413_102"
          x1="104.382"
          y1="137.428"
          x2="-60.2689"
          y2="-75.1915"
          gradientUnits="userSpaceOnUse">
          <Stop stop-color="#393F4B" />
          <Stop offset="0.640625" stop-color="#393F4B" stop-opacity="0" />
        </LinearGradient>
        <LinearGradient
          id="paint2_linear_413_102"
          x1="96.1905"
          y1="126.85"
          x2="-52.0772"
          y2="-64.6134"
          gradientUnits="userSpaceOnUse">
          <Stop stop-color="#393F4B" />
          <Stop offset="0.640625" stop-color="#393F4B" stop-opacity="0" />
        </LinearGradient>
        <LinearGradient
          id="paint3_linear_413_102"
          x1="87.9988"
          y1="116.271"
          x2="-43.8857"
          y2="-54.0353"
          gradientUnits="userSpaceOnUse">
          <Stop stop-color="#393F4B" />
          <Stop offset="0.640625" stop-color="#393F4B" stop-opacity="0" />
        </LinearGradient>
        <LinearGradient
          id="paint4_linear_413_102"
          x1="79.8074"
          y1="105.693"
          x2="-35.694"
          y2="-43.4573"
          gradientUnits="userSpaceOnUse">
          <Stop stop-color="#393F4B" />
          <Stop offset="0.640625" stop-color="#393F4B" stop-opacity="0" />
        </LinearGradient>
        <LinearGradient
          id="paint5_linear_413_102"
          x1="71.6157"
          y1="95.1154"
          x2="-27.5025"
          y2="-32.8792"
          gradientUnits="userSpaceOnUse">
          <Stop stop-color="#393F4B" />
          <Stop offset="0.640625" stop-color="#393F4B" stop-opacity="0" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};
