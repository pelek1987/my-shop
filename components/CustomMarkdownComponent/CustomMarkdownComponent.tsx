import Link from "next/link";
// import ReactMarkdown from "react-markdown";
import {MDXRemote} from "next-mdx-remote";
import {MarkdownResult} from "../../types/utils";

const CustomMarkdownComponent = ({children}: { children: MarkdownResult }) => {
    return (
        <MDXRemote
            {...children}
            components={{
                a: ({href, ...props}) => {
                    if (!href) {
                        return <a {...props} />
                    }
                    if(href.startsWith(process.env.APP_URL as string)) {
                        return <Link href={href}><a {...props} /></Link>
                    }
                    const [protocol,] = href.split('://');

                    return ['http', 'https'].includes(protocol) ? <a href={href} rel='noopener noreferrer' {...props}></a> : <Link href={href}><a {...props} /></Link>
                }
            }}
        />
    )
}

export default CustomMarkdownComponent;