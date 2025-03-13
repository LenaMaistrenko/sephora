import React from "react";
import PropTypes from "prop-types";
import "./NavItem.css";

export function NavItem({
    link,
    icon,
    title,
    subTitle,
    responsive
}) {
    return (
        <li className={[
            'nav-item',
            'no-wrap',
            'no-select',
            responsive && 'responsive-item-hidden'
        ].filter(Boolean).join(' ')}>
            <a href={link}>
                {icon &&  <img src={icon} title={title} alt={title}/>}
                {
                    (title || subTitle) &&
                    <div>
                        <span>{title}</span>
                        <span>{subTitle}</span>
                    </div>
                }
            </a>
        </li>
    );
}

NavItem.propTypes = {
    link: PropTypes.string,
    icon: PropTypes.string,
    title: PropTypes.string,
    subTitle: PropTypes.string,
    responsive: PropTypes.bool
};
