import styled from "styled-components";

export const HexagonLeft = styled.div`
  position: absolute;
  height: 360px;
  width: 360px;
  bottom: -135px;
  left: -1px;
  background-image: ${() =>
    `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none'%3e%3cpath stroke='%23B3E2FF' d='M233.127 12.9861c23.293 2.2429 43.62 16.7421 53.324 38.036l51.335 112.6439c9.704 21.294 7.311 46.147-6.278 65.198l-71.885 100.78c-13.589 19.051-36.309 29.405-59.602 27.162L76.8008 344.941c-23.2932-2.243-43.6204-16.742-53.3246-38.036l-51.3348-112.644c-9.7042-21.294-7.311-46.147 6.2779-65.198L50.3044 28.2838C63.8934 9.23272 86.6137-1.12153 109.907 1.12135l123.22 11.86475Z'/%3e%3c/svg%3e")`};

  @media screen and (max-width: 480px) {
    display: none;
  }
`;

export const HexagonRight = styled.div`
  position: absolute;
  height: 360px;
  width: 360px;
  bottom: -170px;
  right: -30px;
  background-image: ${() =>
    `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none'%3e%3cpath stroke='%23D9FFF5' d='M299.322 50.2387c18.238 6.8189 31.453 22.8496 34.666 42.0536l21.71 129.7307c3.214 19.204-4.062 38.664-19.086 51.049l-101.496 83.666c-15.024 12.386-35.515 15.814-53.752 8.996L58.1584 319.669c-18.2379-6.819-31.4526-22.85-34.6663-42.053L1.78259 147.884c-3.21365-19.203 4.062-38.663 19.08631-51.0482L122.365 13.1693C137.389.78426 157.879-2.64465 176.117 4.17423L299.322 50.2387Z'/%3e%3c/svg%3e")`};

  @media screen and (max-width: 480px) {
    top: 5px;
    rotate: -60deg;
  }
`;

export const Triangle = styled.div`
  position: absolute;
  height: 360px;
  width: 360px;
  bottom: -255px;
  right: calc(50% - 180px);
  background-image: ${() =>
    `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none'%3e%3cpath stroke='%23B4FFEC' d='M14.9886 108.754C-12.3921 80.6395 4.1988 33.3323 43.1417 28.478L256.579 1.87275c34.991-4.36173 62.369 29.57985 50.699 62.85505l-63.37 180.6932c-11.67 33.275-54.25 42.683-78.852 17.421L14.9886 108.754Z'/%3e%3c/svg%3e")`};

@media screen and (max-width: 480px) {
    bottom: calc(50% - 180px);
    right: -150px;
  }
`;

export const Circle = styled.div`
  position: absolute;
  height: 360px;
  width: 360px;
  bottom: -140px;
  right: -190px;
  background-image: ${() =>
    `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none'%3e%3ccircle cx='136.865' cy='136' r='135.5' stroke='%23DEDAFF'/%3e%3c/svg%3e")`};
`;

export const Bars = styled.div`
  position: absolute;
  height: 360px;
  width: 360px;
  bottom: -262px;
  right: -238px;
  background-image: ${() =>
    `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none'%3e%3cpath stroke='%231565D8' stroke-opacity='.2' stroke-width='2' d='M120.834 98.4698h-13.242V9.04063l13.242-7.3427V98.4698Zm-35.2421.0484H72.3496V23.1384l13.2423-6.2131v81.5929Zm-35.2422-.0698H37.1074V35.366l13.2423-5.2246v68.307Zm-35.2421.0852H1.86523V45.9955l13.24237-4.3773v56.9154Z'/%3e%3c/svg%3e")`};
`;
