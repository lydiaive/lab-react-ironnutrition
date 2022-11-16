import { Divider} from 'antd';
import img from '../logo.svg'


function Default() {

    return (
        <>
            <Divider>Ooops! There is no more Comtent to show!</Divider>
            <img src={img} alt="default"></img>
        </>
    );
}

export default Default;