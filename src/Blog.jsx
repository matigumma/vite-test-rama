import { Link } from "react-router-dom";

function Blog() {
    return (
        <div className="flex flex-row gap-8">
            <Link to="/" className="p-2 text-white bg-gray-500 rounded-sm">
                volver a la home
            </Link>
            <Link to="/contacto" className="p-2 text-white bg-gray-500 rounded-sm">
                contacto
            </Link>
        </div>
    )
}

export default Blog;
