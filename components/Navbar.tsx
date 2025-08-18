import { checkUser } from "@/lib/checkUser"

const Navbar = () => {
  const user = checkUser();
  return (
    <div>
      <h1>Nav Bar</h1>
    </div>
  )
}

export default Navbar
