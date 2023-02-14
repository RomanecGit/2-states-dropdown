function DropdownItem({item}){
    return(
        <li
            className={item.active? "active" : undefined}
            onClick={()=>item.onClick(item.name)}
        >
            <a href="#">{item.name}</a>
        </li>
    )
}

export default  DropdownItem;