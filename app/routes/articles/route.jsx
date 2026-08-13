import { json } from '@remix-run/cloudflare';
import { Outlet, useLoaderData } from '@remix-run/react';
import { MDXProvider } from '@mdx-js/react';
import { Post, postMarkdown } from '~/layouts/post';
import { baseMeta } from '~/utils/meta';
import config from '~/config.json';
import { formatTimecode, readingTime } from '~/utils/timecode';

export async function loader({ request }) {
  const url = new URL(request.url);
  const pathSegments = url.pathname.split('/').filter(Boolean);
  const slug = pathSegments[pathSegments.length - 1];

  if (!slug || slug === 'articles') {
    return json({
      ogImage: `${config.url}/social-image.png`,
      frontmatter: { title: 'Articles', abstract: 'Technical articles and data engineering deep dives.' },
      timecode: '00:00:00:00',
    });
  }

  try {
    const module = await import(`../articles.${slug}.mdx`);
    const text = await import(`../articles.${slug}.mdx?raw`);
    const readTime = readingTime(text.default);
    const ogImage = `${config.url}/static/${slug}-og.jpg`;

    return json({
      ogImage,
      frontmatter: module.frontmatter,
      timecode: formatTimecode(readTime),
    });
  } catch (err) {
    return json({
      ogImage: `${config.url}/social-image.png`,
      frontmatter: { title: 'Articles', abstract: 'Technical articles and data engineering deep dives.' },
      timecode: '00:00:00:00',
    });
  }
}

export function meta({ data }) {
  const { title, abstract } = data.frontmatter;
  return baseMeta({ title, description: abstract, prefix: '', ogImage: data.ogImage });
}

export default function Articles() {
  const { frontmatter, timecode } = useLoaderData();

  return (
    <MDXProvider components={postMarkdown}>
      <Post {...frontmatter} timecode={timecode}>
        <Outlet />
      </Post>
    </MDXProvider>
  );
}
