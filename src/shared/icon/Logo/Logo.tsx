type PropTypes = {
  height?: number;
};
export const Logo = ({ height = 50 }: PropTypes) => {
  const magnification = height / 50;

  return (
    <svg
      width={(magnification * 175).toString()}
      height={(magnification * 50).toString()}
      viewBox="0 0 175 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M76.9529 23.4186C76.7927 23.4186 76.658 23.364 76.5487 23.2547C76.4394 23.1454 76.3848 23.0106 76.3848 22.8505V12.2281C76.3848 12.0679 76.4394 11.9332 76.5487 11.8239C76.658 11.7146 76.7927 11.66 76.9529 11.66H79.5703C79.7305 11.66 79.8652 11.7146 79.9745 11.8239C80.0838 11.9332 80.1385 12.0679 80.1385 12.2281V13.0931C80.5267 12.622 81.0369 12.2276 81.6691 11.9101C82.3013 11.5926 83.048 11.4338 83.9092 11.4338C84.7741 11.4338 85.5425 11.6303 86.2143 12.0232C86.886 12.4161 87.4151 12.9908 87.8014 13.7474C88.1877 14.504 88.3808 15.4354 88.3808 16.5415V22.8505C88.3808 23.0106 88.3262 23.1454 88.2169 23.2547C88.1076 23.364 87.9729 23.4186 87.8127 23.4186H84.9691C84.809 23.4186 84.6742 23.364 84.5649 23.2547C84.4556 23.1454 84.401 23.0106 84.401 22.8505V16.6828C84.401 15.9762 84.2295 15.4283 83.8866 15.0392C83.5436 14.65 83.0471 14.4555 82.3969 14.4555C81.7694 14.4555 81.2715 14.65 80.9031 15.0392C80.5347 15.4283 80.3505 15.9762 80.3505 16.6828V22.8505C80.3505 23.0106 80.2958 23.1454 80.1865 23.2547C80.0772 23.364 79.9425 23.4186 79.7823 23.4186H76.9529Z"
        fill="#DC0203"
      />
      <path
        d="M105.6 27.7716C105.44 27.7716 105.305 27.7169 105.196 27.6076C105.086 27.4983 105.032 27.3636 105.032 27.2034V12.2846C105.032 12.1245 105.086 11.9897 105.196 11.8804C105.305 11.7711 105.44 11.7165 105.6 11.7165H108.147C108.307 11.7165 108.441 11.7711 108.551 11.8804C108.66 11.9897 108.715 12.1245 108.715 12.2846V13.1072C109.073 12.6417 109.538 12.2559 110.111 11.9497C110.684 11.6435 111.391 11.4904 112.231 11.4904C112.979 11.4904 113.64 11.6072 114.215 11.8409C114.79 12.0745 115.282 12.417 115.692 12.8683C116.102 13.3196 116.421 13.8713 116.649 14.5233C116.877 15.1753 117.008 15.9225 117.042 16.7648C117.057 17.0569 117.064 17.3339 117.064 17.5958C117.064 17.8577 117.057 18.1395 117.042 18.441C117.017 19.2456 116.891 19.9716 116.663 20.6189C116.435 21.2661 116.116 21.8178 115.706 22.2738C115.296 22.7298 114.802 23.0818 114.222 23.3296C113.643 23.5774 112.979 23.7013 112.231 23.7013C111.485 23.7013 110.837 23.5703 110.288 23.3084C109.738 23.0464 109.285 22.6714 108.927 22.1834V27.2034C108.927 27.3636 108.872 27.4983 108.763 27.6076C108.653 27.7169 108.519 27.7716 108.359 27.7716H105.6ZM111.007 20.6796C111.52 20.6796 111.919 20.5732 112.206 20.3602C112.492 20.1473 112.699 19.8609 112.826 19.5009C112.953 19.141 113.032 18.7406 113.062 18.2996C113.096 17.8304 113.096 17.3612 113.062 16.892C113.032 16.451 112.953 16.0506 112.826 15.6907C112.699 15.3308 112.492 15.0443 112.206 14.8314C111.919 14.6185 111.52 14.512 111.007 14.512C110.515 14.512 110.119 14.6213 109.817 14.8399C109.516 15.0585 109.297 15.3435 109.161 15.6949C109.026 16.0464 108.947 16.4228 108.927 16.8241C108.912 17.1162 108.904 17.3984 108.904 17.6707C108.904 17.943 108.912 18.2299 108.927 18.5314C108.942 18.9083 109.025 19.2588 109.175 19.5829C109.326 19.907 109.551 20.1708 109.851 20.3743C110.151 20.5779 110.536 20.6796 111.007 20.6796Z"
        fill="#DC0203"
      />
      <path
        d="M120.526 23.4751C120.366 23.4751 120.231 23.4205 120.122 23.3112C120.013 23.2019 119.958 23.0671 119.958 22.907V7.98819C119.958 7.82802 120.013 7.69328 120.122 7.58399C120.231 7.47469 120.366 7.42004 120.526 7.42004H123.144C123.304 7.42004 123.439 7.47469 123.548 7.58399C123.657 7.69328 123.712 7.82802 123.712 7.98819V15.5691L126.847 12.1009C126.945 12.001 127.045 11.912 127.148 11.8338C127.25 11.7556 127.405 11.7165 127.613 11.7165H130.629C130.774 11.7165 130.895 11.765 130.992 11.862C131.089 11.9591 131.137 12.0802 131.137 12.2253C131.137 12.2856 131.123 12.3525 131.095 12.4259C131.067 12.4994 131.021 12.5597 130.956 12.6068L126.875 16.9909L131.522 22.613C131.633 22.7374 131.689 22.8551 131.689 22.9663C131.689 23.1114 131.64 23.2325 131.543 23.3295C131.446 23.4266 131.325 23.4751 131.18 23.4751H128.076C127.85 23.4751 127.686 23.4327 127.583 23.3479C127.48 23.2631 127.38 23.1774 127.282 23.0907L123.712 18.7971V22.907C123.712 23.0671 123.657 23.2019 123.548 23.3112C123.439 23.4205 123.304 23.4751 123.144 23.4751H120.526Z"
        fill="#DC0203"
      />
      <path
        d="M134.174 23.4751C134.013 23.4751 133.879 23.4205 133.769 23.3112C133.66 23.2019 133.605 23.0672 133.605 22.907V12.2846C133.605 12.1245 133.66 11.9897 133.769 11.8804C133.879 11.7711 134.013 11.7165 134.174 11.7165H136.848C137.008 11.7165 137.142 11.7711 137.252 11.8804C137.361 11.9897 137.416 12.1245 137.416 12.2846V22.907C137.416 23.0672 137.361 23.2019 137.252 23.3112C137.142 23.4205 137.008 23.4751 136.848 23.4751H134.174ZM134.151 10.0318C133.991 10.0318 133.856 9.97718 133.747 9.86789C133.637 9.75859 133.583 9.62386 133.583 9.46368V7.43136C133.583 7.27119 133.637 7.13504 133.747 7.02292C133.856 6.9108 133.991 6.85474 134.151 6.85474H136.862C137.022 6.85474 137.158 6.9108 137.27 7.02292C137.382 7.13504 137.438 7.27119 137.438 7.43136V9.46368C137.438 9.62386 137.382 9.75859 137.27 9.86789C137.158 9.97718 137.022 10.0318 136.862 10.0318H134.151Z"
        fill="#DC0203"
      />
      <path
        d="M140.898 23.4751C140.737 23.4751 140.603 23.4205 140.493 23.3112C140.384 23.2019 140.329 23.0672 140.329 22.907V12.2846C140.329 12.1245 140.384 11.9897 140.493 11.8804C140.603 11.7711 140.737 11.7165 140.898 11.7165H143.515C143.675 11.7165 143.81 11.7711 143.919 11.8804C144.029 11.9897 144.083 12.1245 144.083 12.2846V13.1496C144.471 12.6785 144.982 12.2842 145.614 11.9666C146.246 11.6491 146.993 11.4904 147.854 11.4904C148.719 11.4904 149.487 11.6868 150.159 12.0797C150.831 12.4726 151.36 13.0473 151.746 13.8039C152.132 14.5605 152.326 15.4919 152.326 16.598V22.907C152.326 23.0672 152.271 23.2019 152.162 23.3112C152.052 23.4205 151.918 23.4751 151.757 23.4751H148.914C148.754 23.4751 148.619 23.4205 148.51 23.3112C148.4 23.2019 148.346 23.0672 148.346 22.907V16.7393C148.346 16.0327 148.174 15.4848 147.831 15.0957C147.488 14.7066 146.992 14.512 146.342 14.512C145.714 14.512 145.216 14.7066 144.848 15.0957C144.479 15.4848 144.295 16.0327 144.295 16.7393V22.907C144.295 23.0672 144.241 23.2019 144.131 23.3112C144.022 23.4205 143.887 23.4751 143.727 23.4751H140.898Z"
        fill="#DC0203"
      />
      <path
        d="M82.3997 43.2017C81.2879 43.2017 80.3014 42.9992 79.4402 42.594C78.579 42.1889 77.8974 41.5991 77.3952 40.8246C76.893 40.0501 76.6174 39.1135 76.5684 38.0149C76.5533 37.7794 76.5458 37.4779 76.5458 37.1104C76.5458 36.743 76.5533 36.4368 76.5684 36.1918C76.6174 35.0875 76.8906 34.1472 77.3881 33.3708C77.8856 32.5945 78.5673 32.0037 79.4331 31.5986C80.299 31.1934 81.2879 30.9908 82.3997 30.9908C83.4436 30.9908 84.3359 31.1378 85.0764 31.4318C85.817 31.7258 86.4205 32.0923 86.8869 32.5313C87.3533 32.9704 87.7009 33.4198 87.9299 33.8796C88.1588 34.3394 88.2809 34.7399 88.2959 35.0809C88.311 35.2411 88.2587 35.3758 88.1391 35.4851C88.0194 35.5944 87.8823 35.6491 87.7278 35.6491H84.8531C84.693 35.6491 84.5695 35.6104 84.4829 35.5332C84.3962 35.4559 84.3151 35.341 84.2398 35.1883C84.0551 34.7342 83.8243 34.4058 83.5473 34.2033C83.2702 34.0007 82.9113 33.8994 82.4703 33.8994C81.8692 33.8994 81.4052 34.0968 81.0782 34.4916C80.7513 34.8864 80.5746 35.4908 80.5482 36.3048C80.5275 36.9079 80.5275 37.4402 80.5482 37.9019C80.584 38.7348 80.7631 39.3416 81.0853 39.7222C81.4075 40.1028 81.8692 40.2932 82.4703 40.2932C82.9395 40.2932 83.3079 40.1919 83.5755 39.9893C83.8431 39.7867 84.0645 39.4584 84.2398 39.0042C84.3057 38.8516 84.3844 38.7367 84.4758 38.6594C84.5672 38.5821 84.693 38.5435 84.8531 38.5435H87.7278C87.8823 38.5435 88.0194 38.5982 88.1391 38.7075C88.2587 38.8167 88.311 38.9515 88.2959 39.1117C88.2809 39.3585 88.206 39.6548 88.0712 40.0006C87.9365 40.3464 87.7259 40.7059 87.4395 41.079C87.153 41.4521 86.7818 41.7993 86.3258 42.1206C85.8698 42.4419 85.3162 42.7024 84.6652 42.9021C84.0141 43.1019 83.2589 43.2017 82.3997 43.2017Z"
        fill="#DC0203"
      />
      <path
        d="M95.8995 43.2017C94.6256 43.2017 93.5548 42.9992 92.687 42.594C91.8193 42.1889 91.1555 41.6038 90.6957 40.8387C90.2359 40.0736 89.9768 39.1663 89.9184 38.1167C89.9033 37.8152 89.8958 37.4727 89.8958 37.0892C89.8958 36.7058 89.9033 36.368 89.9184 36.0759C89.9768 35.0112 90.2477 34.1001 90.731 33.3426C91.2144 32.585 91.8899 32.0037 92.7577 31.5986C93.6255 31.1934 94.6727 30.9908 95.8995 30.9908C97.1262 30.9908 98.1735 31.1934 99.0412 31.5986C99.909 32.0037 100.585 32.585 101.068 33.3426C101.551 34.1001 101.822 35.0112 101.881 36.0759C101.905 36.368 101.917 36.7058 101.917 37.0892C101.917 37.4727 101.905 37.8152 101.881 38.1167C101.822 39.1663 101.563 40.0736 101.103 40.8387C100.643 41.6038 99.9797 42.1889 99.1119 42.594C98.2441 42.9992 97.1733 43.2017 95.8995 43.2017ZM95.8995 40.4486C96.5684 40.4486 97.0603 40.2437 97.375 39.8339C97.6897 39.424 97.8649 38.8139 97.9007 38.0036C97.9158 37.7775 97.9233 37.4751 97.9233 37.0963C97.9233 36.7175 97.9158 36.4151 97.9007 36.189C97.8649 35.3919 97.6897 34.7851 97.375 34.3686C97.0603 33.9522 96.5684 33.7439 95.8995 33.7439C95.2399 33.7439 94.7505 33.9522 94.4311 34.3686C94.1117 34.7851 93.934 35.3919 93.8982 36.189C93.8832 36.4151 93.8756 36.7175 93.8756 37.0963C93.8756 37.4751 93.8832 37.7775 93.8982 38.0036C93.934 38.8139 94.1117 39.424 94.4311 39.8339C94.7505 40.2437 95.2399 40.4486 95.8995 40.4486Z"
        fill="#DC0203"
      />
      <path
        d="M104.693 42.9756C104.533 42.9756 104.398 42.921 104.289 42.8117C104.18 42.7024 104.125 42.5676 104.125 42.4075V31.7851C104.125 31.6249 104.18 31.4902 104.289 31.3809C104.398 31.2716 104.533 31.217 104.693 31.217H107.31C107.471 31.217 107.605 31.2716 107.715 31.3809C107.824 31.4902 107.879 31.6249 107.879 31.7851V32.6501C108.267 32.179 108.777 31.7846 109.409 31.4671C110.041 31.1496 110.788 30.9908 111.649 30.9908C112.514 30.9908 113.283 31.1873 113.954 31.5802C114.626 31.9731 115.155 32.5478 115.542 33.3044C115.928 34.061 116.121 34.9924 116.121 36.0985V42.4075C116.121 42.5676 116.066 42.7024 115.957 42.8117C115.848 42.921 115.713 42.9756 115.553 42.9756H112.709C112.549 42.9756 112.414 42.921 112.305 42.8117C112.196 42.7024 112.141 42.5676 112.141 42.4075V36.2398C112.141 35.5332 111.97 34.9853 111.627 34.5962C111.284 34.207 110.787 34.0125 110.137 34.0125C109.51 34.0125 109.012 34.207 108.643 34.5962C108.275 34.9853 108.091 35.5332 108.091 36.2398V42.4075C108.091 42.5676 108.036 42.7024 107.927 42.8117C107.817 42.921 107.683 42.9756 107.522 42.9756H104.693Z"
        fill="#DC0203"
      />
      <path
        d="M124.564 42.9756C123.592 42.9756 122.755 42.8216 122.053 42.5135C121.351 42.2054 120.813 41.7225 120.439 41.0648C120.065 40.4072 119.878 39.5592 119.878 38.5209V34.1821H118.1C117.939 34.1821 117.805 34.1274 117.695 34.0181C117.586 33.9088 117.531 33.7741 117.531 33.6139V31.7851C117.531 31.6249 117.586 31.4902 117.695 31.3809C117.805 31.2716 117.939 31.217 118.1 31.217H119.878V27.4887C119.878 27.3285 119.932 27.1938 120.041 27.0845C120.151 26.9752 120.285 26.9205 120.446 26.9205H123.063C123.223 26.9205 123.358 26.9752 123.467 27.0845C123.577 27.1938 123.631 27.3285 123.631 27.4887V31.217H126.463C126.624 31.217 126.758 31.2716 126.868 31.3809C126.977 31.4902 127.032 31.6249 127.032 31.7851V33.6139C127.032 33.7741 126.977 33.9088 126.868 34.0181C126.758 34.1274 126.624 34.1821 126.463 34.1821H123.631V38.2043C123.631 38.7206 123.73 39.1272 123.928 39.424C124.126 39.7208 124.456 39.8692 124.917 39.8692H126.661C126.822 39.8692 126.956 39.9238 127.066 40.0331C127.175 40.1424 127.229 40.2771 127.229 40.4373V42.4075C127.229 42.5676 127.175 42.7024 127.066 42.8117C126.956 42.921 126.822 42.9756 126.661 42.9756H124.564Z"
        fill="#DC0203"
      />
      <path
        d="M129.66 42.9757C129.5 42.9757 129.365 42.921 129.256 42.8117C129.147 42.7024 129.092 42.5677 129.092 42.4075V31.7937C129.092 31.6335 129.147 31.4973 129.256 31.3852C129.365 31.2731 129.5 31.217 129.66 31.217H132.269C132.429 31.217 132.566 31.2731 132.678 31.3852C132.79 31.4973 132.846 31.6335 132.846 31.7937V32.6784C133.249 32.2167 133.733 31.8577 134.297 31.6015C134.862 31.3452 135.497 31.217 136.204 31.217H137.196C137.356 31.217 137.491 31.2717 137.6 31.381C137.71 31.4903 137.764 31.625 137.764 31.7852V34.1086C137.764 34.2688 137.71 34.4036 137.6 34.5129C137.491 34.6221 137.356 34.6768 137.196 34.6768H135.008C134.386 34.6768 133.906 34.8464 133.567 35.1856C133.228 35.5248 133.058 36.0053 133.058 36.6271V42.4075C133.058 42.5677 133.002 42.7024 132.89 42.8117C132.778 42.921 132.641 42.9757 132.481 42.9757H129.66Z"
        fill="#DC0203"
      />
      <path
        d="M142.702 43.2017C141.894 43.2017 141.168 43.0463 140.524 42.7354C139.881 42.4244 139.373 42.0047 139.001 41.4761C138.629 40.9475 138.443 40.3525 138.443 39.6911C138.443 38.6189 138.878 37.7714 139.75 37.1486C140.621 36.5258 141.777 36.1004 143.217 35.8724L146.055 35.4456V35.1346C146.055 34.59 145.942 34.175 145.715 33.8895C145.489 33.604 145.077 33.4613 144.477 33.4613C144.051 33.4613 143.708 33.5451 143.447 33.7129C143.186 33.8806 142.975 34.1048 142.812 34.3856C142.681 34.574 142.495 34.6682 142.256 34.6682H139.717C139.555 34.6682 139.43 34.6216 139.34 34.5283C139.251 34.4351 139.21 34.3159 139.22 34.1708C139.229 33.9126 139.334 33.604 139.535 33.2451C139.736 32.8861 140.047 32.5356 140.468 32.1936C140.889 31.8515 141.432 31.5656 142.096 31.3357C142.76 31.1058 143.563 30.9908 144.506 30.9908C145.48 30.9908 146.314 31.1044 147.007 31.3314C147.701 31.5585 148.264 31.8737 148.696 32.2769C149.129 32.6802 149.448 33.1603 149.654 33.7171C149.861 34.2739 149.964 34.8774 149.964 35.5275V42.4075C149.964 42.5676 149.909 42.7024 149.8 42.8117C149.691 42.921 149.556 42.9756 149.396 42.9756H146.778C146.618 42.9756 146.483 42.921 146.374 42.8117C146.265 42.7024 146.21 42.5676 146.21 42.4075V41.6132C146.01 41.9034 145.747 42.1677 145.42 42.4061C145.093 42.6444 144.705 42.8366 144.255 42.9827C143.806 43.1287 143.288 43.2017 142.702 43.2017ZM143.762 40.6182C144.211 40.6182 144.611 40.524 144.962 40.3356C145.314 40.1471 145.591 39.8532 145.793 39.4537C145.996 39.0542 146.097 38.5539 146.097 37.9528V37.6503L144.169 37.9867C143.461 38.1054 142.945 38.2882 142.623 38.535C142.301 38.7819 142.14 39.073 142.14 39.4084C142.14 39.661 142.215 39.8772 142.364 40.0572C142.514 40.2371 142.713 40.3756 142.959 40.4727C143.206 40.5697 143.474 40.6182 143.762 40.6182Z"
        fill="#DC0203"
      />
      <path
        d="M157.921 43.2017C156.809 43.2017 155.822 42.9992 154.961 42.594C154.1 42.1889 153.418 41.5991 152.916 40.8246C152.414 40.0501 152.138 39.1135 152.089 38.0149C152.074 37.7794 152.067 37.4779 152.067 37.1104C152.067 36.743 152.074 36.4368 152.089 36.1918C152.138 35.0875 152.412 34.1472 152.909 33.3708C153.407 32.5945 154.088 32.0037 154.954 31.5986C155.82 31.1934 156.809 30.9908 157.921 30.9908C158.965 30.9908 159.857 31.1378 160.597 31.4318C161.338 31.7258 161.941 32.0923 162.408 32.5313C162.874 32.9704 163.222 33.4198 163.451 33.8796C163.68 34.3394 163.802 34.7399 163.817 35.0809C163.832 35.2411 163.78 35.3758 163.66 35.4851C163.54 35.5944 163.403 35.6491 163.249 35.6491H160.374C160.214 35.6491 160.091 35.6104 160.004 35.5332C159.917 35.4559 159.836 35.341 159.761 35.1883C159.576 34.7342 159.345 34.4058 159.068 34.2033C158.791 34.0007 158.432 33.8994 157.991 33.8994C157.39 33.8994 156.926 34.0968 156.599 34.4916C156.272 34.8864 156.096 35.4908 156.069 36.3048C156.049 36.9079 156.049 37.4402 156.069 37.9019C156.105 38.7348 156.284 39.3416 156.606 39.7222C156.929 40.1028 157.39 40.2932 157.991 40.2932C158.461 40.2932 158.829 40.1919 159.097 39.9893C159.364 39.7867 159.586 39.4584 159.761 39.0042C159.827 38.8516 159.905 38.7367 159.997 38.6594C160.088 38.5821 160.214 38.5435 160.374 38.5435H163.249C163.403 38.5435 163.54 38.5982 163.66 38.7075C163.78 38.8167 163.832 38.9515 163.817 39.1117C163.802 39.3585 163.727 39.6548 163.592 40.0006C163.457 40.3464 163.247 40.7059 162.96 41.079C162.674 41.4521 162.303 41.7993 161.847 42.1206C161.391 42.4419 160.837 42.7024 160.186 42.9021C159.535 43.1019 158.78 43.2017 157.921 43.2017Z"
        fill="#DC0203"
      />
      <path
        d="M171.876 42.9756C170.903 42.9756 170.066 42.8216 169.364 42.5135C168.662 42.2054 168.124 41.7225 167.75 41.0648C167.376 40.4072 167.189 39.5592 167.189 38.5209V34.1821H165.411C165.251 34.1821 165.116 34.1274 165.007 34.0181C164.898 33.9088 164.843 33.7741 164.843 33.6139V31.7851C164.843 31.6249 164.898 31.4902 165.007 31.3809C165.116 31.2716 165.251 31.217 165.411 31.217H167.189V27.4887C167.189 27.3285 167.244 27.1938 167.353 27.0845C167.462 26.9752 167.597 26.9205 167.757 26.9205H170.375C170.535 26.9205 170.67 26.9752 170.779 27.0845C170.888 27.1938 170.943 27.3285 170.943 27.4887V31.217H173.775C173.935 31.217 174.07 31.2716 174.179 31.3809C174.289 31.4902 174.343 31.6249 174.343 31.7851V33.6139C174.343 33.7741 174.289 33.9088 174.179 34.0181C174.07 34.1274 173.935 34.1821 173.775 34.1821H170.943V38.2043C170.943 38.7206 171.042 39.1272 171.24 39.424C171.437 39.7208 171.767 39.8692 172.229 39.8692H173.973C174.133 39.8692 174.268 39.9238 174.377 40.0331C174.486 40.1424 174.541 40.2771 174.541 40.4373V42.4075C174.541 42.5676 174.486 42.7024 174.377 42.8117C174.268 42.921 174.133 42.9756 173.973 42.9756H171.876Z"
        fill="#DC0203"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25.5896 4.44773L38.9576 17.8158C41.0986 19.9568 41.0986 23.4281 38.9576 25.5691L25.5896 38.9372C23.4485 41.0782 19.9772 41.0782 17.8362 38.9372L4.46816 25.5691C2.32713 23.4281 2.32713 19.9568 4.46816 17.8158L17.8362 4.44773C19.9772 2.30669 23.4485 2.30669 25.5896 4.44773Z"
        fill="white"
      />
      <path
        d="M41.9648 18.2147C43.8855 20.1354 43.8855 23.2495 41.9648 25.1703L25.1906 41.9445C23.2699 43.8652 20.1558 43.8652 18.2351 41.9445L1.46091 25.1703C-0.459808 23.2495 -0.459808 20.1354 1.46091 18.2147L18.2351 1.44054C20.1558 -0.480179 23.2699 -0.480179 25.1906 1.44054L41.9648 18.2147ZM39.3565 20.8231L22.5823 4.04886C22.1021 3.56868 21.3236 3.56868 20.8434 4.04886L4.06923 20.8231C3.58905 21.3032 3.58905 22.0818 4.06923 22.5619L20.8434 39.3361C21.3236 39.8163 22.1021 39.8163 22.5823 39.3361L39.3565 22.5619C39.8367 22.0818 39.8367 21.3032 39.3565 20.8231Z"
        fill="#DC0203"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M36.3365 4.44773L49.7045 17.8158C51.8455 19.9568 51.8455 23.4281 49.7045 25.5691L36.3365 38.9372C34.1954 41.0782 30.7241 41.0782 28.5831 38.9372L15.2151 25.5691C13.074 23.4281 13.074 19.9568 15.2151 17.8158L28.5831 4.44773C30.7241 2.30669 34.1954 2.30669 36.3365 4.44773Z"
        fill="white"
      />
      <path
        d="M52.7117 18.2147C54.6325 20.1354 54.6325 23.2495 52.7117 25.1703L35.9375 41.9445C34.0168 43.8652 30.9027 43.8652 28.982 41.9445L12.2078 25.1703C10.2871 23.2495 10.2871 20.1354 12.2078 18.2147L28.982 1.44054C30.9027 -0.480179 34.0168 -0.480179 35.9375 1.44054L52.7117 18.2147ZM50.1034 20.8231L33.3292 4.04886C32.849 3.56868 32.0705 3.56868 31.5903 4.04886L14.8161 20.8231C14.336 21.3032 14.336 22.0818 14.8161 22.5619L31.5903 39.3361C32.0705 39.8163 32.849 39.8163 33.3292 39.3361L50.1034 22.5619C50.5836 22.0818 50.5836 21.3032 50.1034 20.8231Z"
        fill="#DC0203"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M46.7109 4.44773L60.079 17.8158C62.22 19.9568 62.22 23.4281 60.079 25.5691L46.7109 38.9372C44.5699 41.0782 41.0986 41.0782 38.9576 38.9372L25.5895 25.5691C23.4485 23.4281 23.4485 19.9568 25.5895 17.8158L38.9576 4.44773C41.0986 2.30669 44.5699 2.30669 46.7109 4.44773Z"
        fill="white"
      />
      <path
        d="M63.0862 18.2147C65.0069 20.1354 65.0069 23.2495 63.0862 25.1703L46.312 41.9445C44.3913 43.8652 41.2772 43.8652 39.3565 41.9445L22.5823 25.1703C20.6616 23.2495 20.6616 20.1354 22.5823 18.2147L39.3565 1.44054C41.2772 -0.480179 44.3913 -0.480179 46.312 1.44054L63.0862 18.2147ZM60.4779 20.8231L43.7037 4.04886C43.2235 3.56868 42.445 3.56868 41.9648 4.04886L25.1906 20.8231C24.7104 21.3032 24.7104 22.0818 25.1906 22.5619L41.9648 39.3361C42.445 39.8163 43.2235 39.8163 43.7037 39.3361L60.4779 22.5619C60.9581 22.0818 60.9581 21.3032 60.4779 20.8231Z"
        fill="#DC0203"
      />
      <path
        d="M53.3984 30.4951H13.9831C10.9552 30.4951 8.50063 32.9497 8.50063 35.9776V42.6731C8.50063 45.701 10.9552 48.1556 13.9831 48.1556H53.3984C56.4263 48.1556 58.8809 45.701 58.8809 42.6731V35.9776C58.8809 32.9497 56.4263 30.4951 53.3984 30.4951Z"
        fill="white"
      />
      <path
        d="M55.807 28.6508C58.5233 28.6508 60.7253 30.8528 60.7253 33.5691V45.0816C60.7253 47.7979 58.5233 49.9999 55.807 49.9999H11.5746C8.85826 49.9999 6.65627 47.7979 6.65627 45.0816V33.5691C6.65627 30.8528 8.85826 28.6508 11.5746 28.6508H55.807ZM55.807 32.3395H11.5746C10.8955 32.3395 10.345 32.89 10.345 33.5691V45.0816C10.345 45.7607 10.8955 46.3112 11.5746 46.3112H55.807C56.486 46.3112 57.0365 45.7607 57.0365 45.0816V33.5691C57.0365 32.89 56.486 32.3395 55.807 32.3395Z"
        fill="#DC0203"
      />
      <path
        d="M94.8764 23.4187C94.068 23.4187 93.342 23.2632 92.6985 22.9523C92.055 22.6413 91.5471 22.2216 91.175 21.693C90.8028 21.1645 90.6167 20.5695 90.6167 19.908C90.6167 18.8358 91.0525 17.9883 91.924 17.3655C92.7955 16.7427 93.9511 16.3173 95.3908 16.0893L98.2287 15.6625V15.3516C98.2287 14.807 98.1157 14.3919 97.8895 14.1064C97.6634 13.821 97.2507 13.6782 96.6515 13.6782C96.2256 13.6782 95.8822 13.7621 95.6212 13.9298C95.3602 14.0975 95.1487 14.3217 94.9866 14.6025C94.8547 14.7909 94.6691 14.8852 94.4298 14.8852H91.8915C91.7294 14.8852 91.6037 14.8385 91.5141 14.7452C91.4246 14.652 91.3846 14.5328 91.394 14.3877C91.4034 14.1295 91.5085 13.821 91.7092 13.462C91.9099 13.103 92.2208 12.7525 92.642 12.4105C93.0631 12.0685 93.6058 11.7825 94.2701 11.5526C94.9343 11.3227 95.7375 11.2078 96.6797 11.2078C97.654 11.2078 98.4878 11.3213 99.1813 11.5484C99.8747 11.7754 100.438 12.0906 100.87 12.4939C101.303 12.8971 101.622 13.3772 101.828 13.934C102.035 14.4909 102.138 15.0943 102.138 15.7445V22.6244C102.138 22.7846 102.083 22.9193 101.974 23.0286C101.865 23.1379 101.73 23.1925 101.57 23.1925H98.9523C98.7922 23.1925 98.6574 23.1379 98.5481 23.0286C98.4388 22.9193 98.3842 22.7846 98.3842 22.6244V21.8301C98.1844 22.1203 97.9211 22.3846 97.5941 22.623C97.2672 22.8614 96.879 23.0536 96.4296 23.1996C95.9802 23.3456 95.4624 23.4187 94.8764 23.4187ZM95.9364 20.8352C96.3848 20.8352 96.7848 20.7409 97.1362 20.5525C97.4877 20.3641 97.7647 20.0701 97.9673 19.6706C98.1698 19.2711 98.2711 18.7708 98.2711 18.1697V17.8672L96.3434 18.2036C95.6348 18.3223 95.1195 18.5051 94.7972 18.7519C94.475 18.9988 94.3139 19.2899 94.3139 19.6254C94.3139 19.8779 94.3888 20.0941 94.5386 20.2741C94.6884 20.454 94.8867 20.5925 95.1336 20.6896C95.3805 20.7866 95.648 20.8352 95.9364 20.8352Z"
        fill="#DC0203"
      />
    </svg>
  );
};