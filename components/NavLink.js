import Link from 'next/link'


function NavLink({children, href}) {
  return (
    <Link href={href}>
      <a className="block">
        { children }
      </a>
    </Link>
  )
}

export default NavLink
