import './App.css';
import Layout from "./Layout/Layout";
import MainContent from "./Layout/Main/MainContent";
import {Route, Routes} from "react-router";
import Guarantees from "./pages/Guarantees/Guarantees";
import Prices from "./pages/Prices/Prices";
import Reviews from "./pages/Reviews/Reviews";
import Contacts from "./pages/Сontacts/Contacts";
import {Link, NavLink} from "react-router-dom";

const links = [
    {id: 1, title: 'Онас', path: '/about', text: '&nbsp;Онас'},
    {id: 2, title: 'Гарантии', path: '/guarantees', text: '&nbsp;Гарантии'},
    {id: 3, title: 'Цены', path: '/prices', text: '&nbsp;Цены'},
    {id: 4, title: 'Отызы', path: '/reviews', text: '&nbsp;Отзывы'},
    {id: 5, title: 'Контакты', path: '/contacts', text: '&nbsp;Контакты'},
]

const routes = [
    {id: '1', path: '/about', element: <MainContent/>},
    {id: '2', path: '/guarantees', element: <Guarantees/>},
    {id: '3', path: '/prices', element: <Prices/>},
    {id: '4', path: '/reviews', element: <Reviews/>},
    {id: '5', path: '/contacts', element: <Contacts/>},
]

const App = () => (
    <Layout>
        <div className='routes'>
            <ul>
                <li>
                    <NavLink data-text='&nbsp;Онас' to='/about'>&nbsp;Онас&nbsp;</NavLink>
                </li>
                <li>
                    <NavLink data-text='&nbsp;Гарантии' to='/guarantees'>&nbsp;Гарантии&nbsp;</NavLink>
                </li>
                <li>
                    <NavLink data-text='&nbsp;Цены' to='/prices'>&nbsp;Цены&nbsp;</NavLink>
                </li>
                <li>
                    <NavLink data-text='&nbsp;Отызы' to='/reviews'>&nbsp;Отызы&nbsp;</NavLink>
                </li>
                <li>
                    <NavLink data-text='&nbsp;Контакты' to='/contacts'>&nbsp;Контакты&nbsp;</NavLink>
                </li>
                {/*{links.map(link => <li key={link.id}><Link data-text='&nbsp;Контакты' to={link.path}>&nbsp;{link.title}&nbsp;</Link></li>)}*/}
            </ul>
        </div>
        <Routes>
            {routes.map(route => {
                return (
                    <>
                        <Route path={route.path} element={route.element}/>
                    </>
                )
            })}
        </Routes>
    </Layout>
)

export default App;
