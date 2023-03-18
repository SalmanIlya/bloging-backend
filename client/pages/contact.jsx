import Link from "next/link"

function Contact() {
    return <div className="bg">
        <h1>Contact page</h1>
        <Link href="/">Home</Link><br />
        <Link href="/about">About</Link>
    </div>
  }
  
  export default Contact