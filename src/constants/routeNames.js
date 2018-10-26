import * as route from './pathnames';

const MAIN = 'Main';
const MUSIC = 'Music';
const DASHBOARD= 'Dashboard';
const DYNAMIC_CHART = 'Chart';

export const routeNames = [
    MAIN,
    MUSIC,
    DASHBOARD,
    DYNAMIC_CHART
];

export const routeMap = {
    [MAIN]: route.lobby,
    [MUSIC]: route.browse,
    [DASHBOARD]: route.dashboard,
    [DYNAMIC_CHART]: route.chart,
};
