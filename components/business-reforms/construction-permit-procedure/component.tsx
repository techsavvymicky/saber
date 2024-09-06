import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/button";
import { MdxHeader } from "@/components/mdx-header";
import { MdxContainer } from "@/components/mdx-container";
import Markdown from "@/components/business-reforms/construction-permit-procedure/index.mdx";

export const Component = () => {
  return (
    <>
      <MdxHeader href="/business-reforms" />
      <MdxContainer
        propTitle="Construction Permit Procedure & Guideline"
        title={
          <>
            How to Obtain a Construction <br />
            Permit in Taraba State
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
