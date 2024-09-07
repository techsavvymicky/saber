import { Button } from "@/components/ui/button";
import { MdxHeader } from "@/components/mdx-header";
import { MdxContainer } from "@/components/mdx-container";
import Markdown from "@/components/business-reforms/trade-fees-schedule/index.mdx";

export const Component = () => {
  return (
    <>
      <MdxHeader href="/business-reforms" />
      <MdxContainer
        propTitle="Trade Fees Schedule"
        title={
          <>
            Schedule of Trade Related Fees <br />
            & Levies on Inter-State Movement <br />
            Of Goods
          </>
        }
        button={
          <>
            <Button variant={"outline"}>Download Stats Data</Button>
          </>
        }
      >
        <Markdown />
      </MdxContainer>
    </>
  );
};
