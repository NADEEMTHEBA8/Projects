import { json } from '@remix-run/cloudflare';
import { baseMeta } from '~/utils/meta';

export async function loader() {
  return json({});
}

export function meta() {
  return baseMeta({
    title: 'Projects & Open Source Work',
    description:
      'Explore 15 open-source data utilities, custom Airflow operators, streaming connectors, DuckDB tools, and FinOps scripts created by Nadeem Theba.',
  });
}

export { Projects as default } from './projects';
