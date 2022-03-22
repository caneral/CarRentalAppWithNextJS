import '../styles/styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import store from '../store/index';
import { Provider } from 'react-redux';

export default function MyApp({ Component, pageProps }) {
    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    );
  }