import { useSelector } from 'react-redux';
import HobbyList from '../components/Home/HobbyList'
HomePage.propTypes = {};

export function HomePage(props) {
    // hobby reducer
    // const initialState = {
    // list: [],
    // activeId: null,
    // }
    // we want to get list
    const hobbyList = useSelector(state => state.hobby.list);

    return (<div>
        <h3>Redux</h3>
        <HobbyList hobbyList={hobbyList}></HobbyList>
    </div>);
}