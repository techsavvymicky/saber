import { Button } from "@/components/ui/button";
import { MdxHeader } from "@/components/mdx-header";
import { MdxContainer } from "@/components/mdx-container";
import Markdown from "@/components/business-reforms/c-of-o-procedure/index.mdx";

export const Component = () => {
  return (
    <>
      <MdxHeader href="/business-reforms" />
      <MdxContainer
        propTitle="C of O Procedure & Guideline"
        title={
          <>
            How to Obtain a Certificate of Occupancy <br />
            (C of O) in Taraba State
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
