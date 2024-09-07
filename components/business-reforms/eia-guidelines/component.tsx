import { Button } from "@/components/ui/button";
import { MdxHeader } from "@/components/mdx-header";
import { MdxContainer } from "@/components/mdx-container";
import Markdown from "@/components/business-reforms/eia-guidelines/index.mdx";

export const Component = () => {
  return (
    <>
      <MdxHeader href="/business-reforms" />
      <MdxContainer
        propTitle="EIA Process"
        title={<>EIA Process in Taraba State</>}
        button={
          <>
            <Button variant={"outline"}>Download Guidelines</Button>
          </>
        }
      >
        <Markdown />
      </MdxContainer>
    </>
  );
};
