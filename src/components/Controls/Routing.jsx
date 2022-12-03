import React from 'react';
import {NavLink} from "react-router-dom";
import './Routing.css'

const Routing = () => {
	return (
		<div className='routes'>
			<ul>
				<li>
					<NavLink data-text='&nbsp;О&nbsp;нас' to='/about'>&nbsp;О&nbsp;нас&nbsp;</NavLink>
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
			</ul>
		</div>
	);
};

export default Routing;
