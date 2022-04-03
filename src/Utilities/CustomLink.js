import {
    Link,
    useMatch,
    useResolvedPath,
} from "react-router-dom";
import './CustomLink.css';

function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div className="nav-links">
            <Link
                style={{ color: match ? "#bd2f1c" : "black" }}
                to={to}
                {...props}
            >
                {children}
            </Link>
        </div>
    );
}

export default CustomLink;