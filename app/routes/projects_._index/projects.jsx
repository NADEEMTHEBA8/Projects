import { Footer } from '~/components/footer';
import { ProjectVault } from '~/components/project-vault';

export function Projects() {
  return (
    <>
      <div style={{ paddingTop: '80px' }}>
        <ProjectVault title="Data Engineering Project Vault & Open Source" showSearch={true} />
      </div>
      <Footer />
    </>
  );
}
