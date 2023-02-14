import {useState} from 'react';
import DropdownList from './DropdownList';

function Dropdown(){
    const [showList, setShowList] = useState(false);
    return(
        <div data-id="wrapper" className={"dropdown-wrapper" + (showList ? " open": "") }>
            <button data-id="toggle" className="btn" onClick={()=>setShowList(!showList)}>
                <span>Account Settings</span>
                <i className="material-icons">public</i>
            </button>
            <DropdownList/>
        </div>
    )
}

export default Dropdown;