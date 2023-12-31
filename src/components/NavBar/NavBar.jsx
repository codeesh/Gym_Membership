import Link from "../Link/Link";

const NavBar = () => {

    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '*', name: 'Not Found' }
    ];      

    return (
        <nav>
            <ul className="md:flex gap-14 pt-5 pl-5">
            {
                routes.map(route => <Link key={route.id} route={route} />)
            }
            </ul>
        </nav>
    );
};

export default NavBar;
