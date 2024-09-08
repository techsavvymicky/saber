import { Button } from "@/components/ui/button";
import { MdxHeader } from "@/components/mdx-header";
import { MdxContainer } from "@/components/mdx-container";
import Markdown from "@/components/business-reforms/grm-procedure/index.mdx";

export const Component = () => {
  return (
    <>
      <MdxHeader href="/business-reforms" />
      <MdxContainer
        propTitle="GRM Procedure"
        title={
          <>
            Process and Procedure for
            <br />
            Grieviance and Redress Mechanism
          </>
        }
        button={
          <>
            <Button variant={"outline"}>Download Procedure</Button>
          </>
        }
      >
        <Markdown />
      </MdxContainer>
    </>
  );
};
