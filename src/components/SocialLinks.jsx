import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import Link from 'next/link'

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-orange-500 dark:fill-zinc-400 dark:group-hover:fill-orange-500" />
    </Link>
  )
}

export default function SocialLinks(){
    return (
        <>
        <div className="mt-6 flex gap-6">
            
            <SocialLink
              href="https://www.linkedin.com/in/onticinc/"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
              target="_blank"
            />
            <SocialLink
              href="https://github.com/onticinc"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
              target="_blank"
            />
            <SocialLink
              href="https://www.instagram.com/djontic/"
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            />
          </div>
        </>
    )
}