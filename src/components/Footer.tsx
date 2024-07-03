import { communityLinks, platformLinks, resourcesLinks } from "../constants"


const Footer = () => {
  return (
    <footer className="mt-20 border-t py-10 border-neutral-300">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
                <h3 className="text-md font-semibold mb-4">Resources</h3>
                <ul className="space-y-2">
                    {resourcesLinks.map((link, i)=>{
                        return <li key={i}>
                            <a className="text-neutral-500 hover:text-black" href={link.href}>{link.text}</a>
                        </li>
                    })}
                </ul>
            </div>
            <div>
                <h3 className="text-md font-semibold mb-4">Platform</h3>
                <ul className="space-y-2">
                    {platformLinks.map((link, i)=>{
                        return <li key={i}>
                            <a className="text-neutral-500 hover:text-black" href={link.href}>{link.text}</a>
                        </li>
                    })}
                </ul>
            </div>
            <div>
                <h3 className="text-md font-semibold mb-4">Community</h3>
                <ul className="space-y-2">
                    {communityLinks.map((link, i)=>{
                        return <li key={i}>
                            <a className="text-neutral-500 hover:text-black" href={link.href}>{link.text}</a>
                        </li>
                    })}
                </ul>
            </div>
            
        </div>
    </footer>
  )
}

export default Footer