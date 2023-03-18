import Link from "next/link"

function About() {
    return <div className="bg">
        <h1>home page</h1>
        <Link href="/">Home</Link><br />
        <Link href="/contact">Contact</Link>
    </div>
  }
  
  export default About