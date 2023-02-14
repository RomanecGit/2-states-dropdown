import {useState} from 'react';
import DropdownItem from './DropdownItem';

function DropdownList() {
    const [curItem, setCurItem] = useState("Profile Information");
    const items = [
        "Profile Information",
        "Change Password",
        "Become PRO",
        "Help",
        "Log Out",
    ];
    return (
        <ul data-id="dropdown" className="dropdown">
            {items.map((item, i) =>
                <DropdownItem key={i}
                    item = {{
                        "name": item,
                        "active": (curItem === item),
                        "onClick": ((item) => setCurItem(item))
                    }}
                />
            )}
        </ul>
    )
}

export default DropdownList;