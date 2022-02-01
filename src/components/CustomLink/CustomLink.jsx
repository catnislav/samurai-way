import React from 'react'
import { Link, useResolvedPath, useMatch } from 'react-router-dom'
// import styles from './CustomLink.module.scss'

const CustomLink = ({ children, to, className, ...props }) => {
  let resolved = useResolvedPath(to)
  let match = useMatch({ path: resolved.pathname, start: true })

  return (
    <Link
      style={{ textDecoration: match ? "underline" : "none" }}
      to={to}
      className={className}
      {...props}
    >
      {children}
    </Link>
  );
}

export default CustomLink