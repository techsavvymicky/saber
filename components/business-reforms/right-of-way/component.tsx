import { Button } from "@/components/ui/button";
import { MdxHeader } from "@/components/mdx-header";
import { MdxContainer } from "@/components/mdx-container";
import Markdown from "@/components/business-reforms/right-of-way/index.mdx";

export const Component = () => {
  return (
    <>
      <MdxHeader href="/business-reforms" />
      <MdxContainer
        propTitle="Right of Way Procedure"
        title={
          <>
            Right of Way Permit Application <br />
            Process in Taraba State
          </>
        }
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
