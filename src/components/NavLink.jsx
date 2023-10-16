import { Link ,useLocation} from "react-router-dom";

const NavLink = ({to,navLabel}) => {
    const {pathname} = useLocation()
    return <Link className={pathname===to ? 'active':undefined} to={to}>{navLabel}</Link>;
}

export default NavLink;
