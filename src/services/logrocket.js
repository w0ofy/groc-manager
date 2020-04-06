import LogRocket from 'logrocket';

const initLogrocket = () => LogRocket.init(process.env.REACT_APP_LOGROCKET_ID);

export default initLogrocket;
