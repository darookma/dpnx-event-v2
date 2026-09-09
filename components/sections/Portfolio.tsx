import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import SelectedWorkGrid from "@/components/sections/SelectedWorkGrid";
import { pageTypeB, presentationVisualHeaderAlignClassName } from "@/lib/layout";
import { siteContent } from "@/content/site";

const { title, intro, projects } = siteContent.selectedWork;

/** Structural separation: explanation → carousel */
const portfolioHeaderSpacing = "pb-6";

/** Page 4-only — overrides global Heading h2+p rules; temporary B&W test */
const portfolioHeadingClassName = [
  "[&_h2]:leading-[1.1]",
  "[&_h2]:!text-black",
  "[&_h2+p]:!mt-[3px]",
  "[&_h2+p]:!text-[24px]",
  "[&_h2+p]:leading-snug",
  "[&_h2+p]:tracking-tight",
  "[&_h2+p]:!text-black",
  "[&_h2+p]:font-[650]",
].join(" ");

export default function Portfolio() {
  return (
    <Section id="portfolio" className={`${pageTypeB} max-md:min-h-0`}>
      <Container variant="page">
        <header
          className={`${portfolioHeaderSpacing} ${presentationVisualHeaderAlignClassName} max-w-2xl shrink-0 text-left`}
        >
          <Heading
            title={title}
            description={intro}
            className={portfolioHeadingClassName}
          />
        </header>

        <SelectedWorkGrid projects={projects} />
      </Container>
    </Section>
  );
}
