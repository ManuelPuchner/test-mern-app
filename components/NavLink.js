import Link from 'next/link'


function NavLink({children, href}) {
  return (
    <Link href={href}>
      <a className="
        block my-4
        border-b-2
        hover:border-gray-900
        hover:border-opacity-50
        border-transparent
        transition duration-75

        md:mx-1
        md:leading-8
      ">
        { children }
      </a>
    </Link>
  )
}

export default NavLink
